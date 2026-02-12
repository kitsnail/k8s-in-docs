# Resilient Networking - UCCL/NIXL 弹性网络层

> **核心价值**: 主机端拥塞控制,在网络压力下保持 2.4x 弹性优势  
> **技术栈**: NIXL + UCCL + RDMA/TCP-X  
> **关键指标**: 拥塞场景延迟增长 7.1% (vs UCX 17.1%)

---

##

### P/D 分离的传输需求

```python
# Llama-3.1-70B, 10k token 传输
kv_size = 10000 * 2.56 MB = 25.6 GB

# 100 Gbps 网络理论传输时间
transfer_time = 25.6 GB / (100 Gbps / 8) = 2.05 秒

# 实际传输时间 (网络拥塞+协议开销)
real_time = 2.05s * 1.5 = 3.1 秒  # ❌ 用户不可接受
```

**问题**: 高延迟直接影响 TTFT,降低用户体验

---

## 💨 认知过渡：从表象到机制

类比"物流专线":
- ❌ 硬件卸载 (UCX): 快递公司固定路线,遇拥堵无法调整
- ✅ 主机端控制 (UCCL): 智能调度系统,实时避开拥堵路段

---

## 机制层：机制闭环 — 如何运作 — 如何运作

### 流分割与自适应窗口

```python
class UCCLTransport:
    def send_kv_blocks(self, data, dest):
        # 1. 流分割 (1MB 块)
        chunks = split(data, 1MB)
        
        # 2. 动态拥塞窗口
        for chunk in chunks:
            while self.window_full():
                wait_and_adjust()
            
            rdma_write(chunk, dest)
            self.update_window()  # 根据 RTT 调整
```

---

## 实战层：实战闭环 — 如何驾驭

### RDMA 验证

```bash
# 检查 IB 设备
ibv_devices

# 检查端口状态
ibv_devinfo mlx5_0 | grep state
# 期望输出: PORT_ACTIVE

# 带宽测试
ib_write_bw -d mlx5_0
```

### 故障排查

| 症状 | 根因 | 解决方案 |
|------|------|---------|
| 传输超时 | RDMA 未启用 | 检查 NIC 驱动 |
| 延迟抖动大 | 网络拥塞 | 启用 UCCL |
| 吞吐低 | MTU 配置小 | 设置 MTU=9000 |

---

## 📚 参考资料

- [NIXL GitHub](https://github.com/ai-dynamo/nixl)
- [UCCL Backend PR](https://github.com/ai-dynamo/nixl/pull/895)
- [llm-d v0.5 Networking](https://llm-d.ai/blog/llm-d-v0.5-sustaining-performance-at-scale#resilient-networking-nixl---uccl-backend)
