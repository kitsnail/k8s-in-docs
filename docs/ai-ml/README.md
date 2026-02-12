# AI/ML 平台

> 本控制平面收录 Kubernetes 上的 AI 和机器学习平台相关技术文档。

---

## 🚀 核心平台：llm-d

**llm-d** 是 Kubernetes 原生的分布式大模型推理控制平面。它通过智能调度、分层缓存、P/D 分离等核心能力，将推理引擎（如 vLLM、TGI）与云原生基础设施深度整合。

- **[平台概览 (Overview)](./llm-d/)**：理解核心概念、架构全景及三条 Well-Lit Paths 选型。

### 🧩 核心组件 (Components)

| 组件名称 | 核心价值 | 文档链接 |
| :--- | :--- | :--- |
| **Inference Gateway** | 智能路由与调度，实现请求特征感知的 Filter-Score-Select 算法。 | [详情](./llm-d/components/inference-gateway.md) |
| **ModelService** | 声明式推理服务管理，通过 BaseConfig 分层管理平台标准与模型配置。 | [详情](./llm-d/components/modelservice.md) |
| **KV Cache Management** | GPU/CPU/文件系统三级缓存管理，突破显存瓶颈。 | [详情](./llm-d/components/kv-cache.md) |
| **LMCache** | KV Cache 加速层，实现跨实例共享与多级存储优化。 | [详情](./llm-d/components/lmcache/) |
| **Autoscaler (WVA)** | 饱和度感知弹性伸缩，避免 SLO 违约。 | [详情](./llm-d/components/autoscaler.md) |
| **Networking** | 基于 NIXL/UCCL 的高性能 KV 传输网络。 | [详情](./llm-d/components/networking.md) |
| **P/D Disaggregation** | Prefill 与 Decode 阶段级解耦架构。 | [详情](./llm-d/components/pd-disaggregation.md) |

---

## 🔗 相关技术 (Cross-References)

- **[硬件管理](../hardware/)**：NVIDIA GPU Operator 与资源调度。
- **[弹性伸缩](../autoscaling/)**：WVA、HPA 与 KEDA 的综合应用。
- **[存储加速](../storage/)**：JuiceFS 与数据缓存策略。
- **[观测监控](../monitoring/)**：推理服务 SLI/SLO 指标体系。
