# 技术栈组合方案

> 本目录收录跨技术的组合方案和最佳实践,帮助您快速构建完整的技术栈

---

## 📚 技术栈列表

### [监控观测栈](./monitoring-stack.md)
Prometheus + Grafana + VictoriaMetrics + Metrics Server

**适用场景**: 生产级 Kubernetes 集群监控、告警和可视化

---

### [AI 推理平台](./ai-inference-platform.md)
llm-d + WVA + GPU Operator + JuiceFS + Prometheus

**适用场景**: 大模型推理服务部署、自动扩缩容和成本优化

---

### [服务网格方案](./service-mesh-stack.md)
Istio + Cilium + cert-manager + Prometheus

**适用场景**: 微服务治理、流量管理、安全通信

---

### [存储方案对比](./storage-comparison.md)
Ceph vs JuiceFS vs GPFS

**适用场景**: 根据业务需求选择合适的存储方案

---

## 🎯 如何使用

每个技术栈文档包含:
- **架构图** - 组件关系和数据流
- **部署指南** - 分步部署说明
- **配置示例** - 生产级配置模板
- **最佳实践** - 避坑指南和调优建议
- **故障排查** - 常见问题及解决方案

---

## 🤝 贡献指南

欢迎提交新的技术栈组合方案!

**提交要求**:
1. 至少包含 3 个相关技术
2. 提供完整的部署示例
3. 说明适用场景和收益
4. 包含架构图(Mermaid 格式)
