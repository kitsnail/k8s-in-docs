# 网络方案

> 本分类收录 Kubernetes 网络插件、Service Mesh、Ingress 相关技术文档

---

## 📚 技术列表

### Cilium
基于 eBPF 的 CNI 插件,提供网络、安全和可观测性能力。

**适用场景**: 高性能网络、网络策略、Service Mesh

---

### Istio
服务网格平台,提供流量管理、安全和可观测性。

**适用场景**: 微服务治理、灰度发布、服务间加密

---

### Ingress NGINX
基于 NGINX 的 Kubernetes Ingress 控制器。

**适用场景**: HTTP/HTTPS 流量入口、SSL 终止、路径路由

---

### MetalLB
裸金属 Kubernetes 集群的负载均衡器实现。

**适用场景**: 私有云、边缘计算、LoadBalancer Service 支持

---

## 🔗 相关技术

- [监控 - Prometheus](../monitoring/) - 网络指标采集
- [安全 - cert-manager](../security/) - Ingress TLS 证书管理
