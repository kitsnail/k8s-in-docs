# 自动扩缩容技术

> 本分类收录 Kubernetes 自动扩缩容相关技术文档

---

## 📚 技术列表

### [HPA (Horizontal Pod Autoscaler)](./hpa/)
**类比**: 超市收银柜台的智能开闭台管理

基于 CPU/内存等资源指标的 Kubernetes 原生水平扩缩容方案,适用于计算密集型工作负载。

**核心特性**:
- ✅ Kubernetes 原生支持
- ✅ 基于资源利用率(CPU/内存)
- ✅ 简单易用,学习曲线低

---

### [KEDA (Kubernetes Event-Driven Autoscaling)](./keda/)
**类比**: 餐厅的点单小票机(基于队列深度驱动)

基于事件源的自动扩缩容增强层,支持 60+ 外部指标源(Redis、Kafka、Prometheus 等)。

**核心特性**:
- ✅ 支持 60+ 事件源
- ✅ 缩容到 0 节省成本
- ✅ 非侵入式增强 HPA

---

### [WVA (Workload Variant Autoscaler)](./wva/)
**类比**: 搬家公司的智能调度(根据物品大小动态调配车辆)

专为 AI 推理服务设计的饱和度感知扩缩容方案,基于 KV Cache 和请求队列深度。

**核心特性**:
- 🎯 饱和度感知(KV Cache + 队列长度)
- 💰 多变体成本优化
- ⚡ SLO 保障(TTFT/ITL)

---

## 🔗 相关技术

- [监控 - Metrics Server](../monitoring/) - HPA 的指标数据源
- [监控 - Prometheus](../monitoring/) - KEDA/WVA 的指标采集
- [AI/ML - llm-d](../ai-ml/) - WVA 的推理平台集成

---

## 📖 技术选型指南

| 场景 | 推荐方案 | 理由 |
|------|---------|------|
| **通用 Web 服务** | HPA | 简单可靠,基于 CPU/内存即可 |
| **消息队列驱动** | KEDA | 原生支持队列指标 |
| **AI 推理服务** | WVA + KEDA | 专为推理优化,支持成本控制 |
| **批处理任务** | KEDA | 支持缩容到 0 |
