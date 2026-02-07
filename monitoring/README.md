# 监控观测

> 本分类收录 Kubernetes 监控、指标采集、可视化和告警相关技术文档

---

## 📚 技术列表

### Metrics Server
Kubernetes 集群资源指标采集器,为 HPA 提供 CPU/内存指标。

**适用场景**: HPA 基础指标源、kubectl top 命令支持

---

### Prometheus
云原生监控系统和时序数据库,CNCF 毕业项目。

**适用场景**: Kubernetes 集群监控、应用指标采集、告警管理

---

### Grafana
开源数据可视化平台,支持多种数据源。

**适用场景**: 监控数据可视化、仪表盘创建、告警通知

---

### VictoriaMetrics
高性能时序数据库,Prometheus 的高效替代方案。

**适用场景**: 大规模监控数据存储、降低存储成本

---

## 🔗 相关技术

- [自动扩缩容 - HPA](../autoscaling/) - 依赖 Metrics Server
- [自动扩缩容 - KEDA](../autoscaling/) - 支持 Prometheus 作为指标源
- [网络 - Istio](../networking/) - Service Mesh 可观测性
