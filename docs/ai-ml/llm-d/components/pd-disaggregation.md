# Prefill/Decode Disaggregation - P/D 分离架构

> **核心价值**: 通过计算与内存解耦,实现超大模型的专业化部署  
> **技术栈**: vLLM + NIXL/UCCL + RDMA  
> **关键指标**: TTFT 稳定 <500ms, 吞吐 20-40k tok/s (120B+ 模型)

---

##

### 两阶段的本质差异

| 维度 | Prefill (预处理) | Decode (生成) |
|------|-----------------|--------------|
| **输入** | 完整 Prompt (1k-32k tokens) | 单个 Token |
| **计算** | 大矩阵乘法 (GEMM) | 小向量操作 |
| **瓶颈** | **计算密集** (FLOPs) | **内存带宽密集** (Bandwidth) |
| **GPU 利用率** | 90%+ | 30-50% |
| **最优配置** | 低 TP,多副本 | 高 TP,少副本 |

### 传统统一部署的问题

```yaml
# 同一 Pod 处理两阶段
deployment:
  tensorParallel: 4  # 折中配置
  replicas: 2
```

**矛盾**:
- Prefill 时: TP=4 算力浪费 (只需 TP=1)
- Decode 时: 副本=2 带宽不足 (需要 TP=8)

---

## 💨 认知过渡：从表象到机制

类比汽车制造:
- **预处理车间 (Prefill)**: 冲压钢板 → 计算密集,需要强力设备
- **精加工产线 (Decode)**: 逐个零件组装 → 带宽密集,需要流水线

**错误方案**: 用同一条产线处理冲压和组装 → 效率低下  
**llm-d 方案**: 专业分工,中间通过"物流专线"(NIXL) 传输 KV Cache

---

## 机制层：机制闭环 — 如何运作 — 如何运作

### KV Cache 跨节点传输流程

```mermaid
sequenceDiagram
    participant P as Prefill Pod
    participant PN as Prefill NIC
    participant Net as RDMA 网络
    participant DN as Decode NIC
    participant D as Decode Pod
    
    P->>P: 1. Prefill 计算<br/>生成 KV Cache (4 GB)
    P->>PN: 2. GPU→Host 拷贝<br/>(PCIe)
    PN->>Net: 3. RDMA Write<br/>(零拷贝)
    Net->>DN: 4. 网络传输<br/>(UCCL 拥塞控制)
    DN->>D: 5. Host→GPU 拷贝
    D->>D: 6. Decode 生成 Token
```

### UCCL 主机端优势

**对比 UCX (硬件卸载)**:
- UCX: 359ms → 拥塞后 424ms (+18%)
- UCCL: 359ms → 拥塞后 384ms (+7%)
- **弹性优势**: 2.4x

---

## 实战层：实战闭环 — 如何驾驭

### 部署拓扑示例

```yaml
# DeepSeek-R1 (671B MoE)
prefill:
  replicas: 8
  tensorParallel: 1
  expertParallel: 16

decode:
  replicas: 1
  tensorParallel: 4
  expertParallel: 16
```

### 比例调优决策表

| ISL/OSL 比例 | Prefill:Decode | 网络带宽需求 |
|-------------|---------------|-------------|
| 10:1 (10k/1k) | 8:1 | 高 (需 RDMA) |
| 5:1 (5k/1k) | 4:1 | 中 |
| 1:1 (1k/1k) | 2:1 | 低 |

---

## 📚 参考资料

- [P/D Disaggregation Northstar Design](https://docs.google.com/document/d/1FNN5snmipaTxEA1FGEeSH7Z_kEqskouKD1XYhVyTHr8/edit)
- [P/D Disaggregation Guide](https://llm-d.ai/docs/guide/Installation/pd-disaggregation)
