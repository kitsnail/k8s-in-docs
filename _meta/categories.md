# Kubernetes 生态技术分类体系

本文件定义了项目的分类结构,用于组织和索引技术文档。

---

## 分类定义

### autoscaling (自动扩缩容)
**描述**: Pod 水平/垂直扩缩容技术  
**包含技术**: HPA, KEDA, WVA  
**适用场景**: 动态负载管理、成本优化、SLO 保障

---

### cluster-management (集群管理)
**描述**: Kubernetes 集群部署和管理工具  
**包含技术**: Kubespray, Kamaji, vCluster  
**适用场景**: 集群生命周期管理、多租户隔离

---

### storage (存储方案)
**描述**: 持久化存储、分布式文件系统  
**包含技术**: etcd, Ceph, JuiceFS, GPFS  
**适用场景**: 数据持久化、高可用存储

---

### monitoring (监控观测)
**描述**: 指标采集、可视化、告警  
**包含技术**: Metrics Server, Prometheus, Grafana, VictoriaMetrics  
**适用场景**: 系统可观测性、性能分析、故障定位

---

### networking (网络方案)
**描述**: CNI、Service Mesh、Ingress  
**包含技术**: Cilium, Istio, Ingress NGINX, MetalLB  
**适用场景**: 容器网络、流量管理、服务通信

---

### registry (镜像仓库)
**描述**: 容器镜像存储和分发  
**包含技术**: Harbor, Spegel, Registry  
**适用场景**: 镜像管理、安全扫描、分发加速

---

### security (安全加固)
**描述**: 证书管理、准入控制、安全扫描  
**包含技术**: cert-manager  
**适用场景**: TLS 证书管理、安全合规

---

### hardware (硬件管理)
**描述**: GPU、NPU、节点特性发现  
**包含技术**: NFD, GPU Operator  
**适用场景**: 异构计算、硬件资源管理

---

### ai-ml (AI/ML 平台)
**描述**: 机器学习平台和推理服务  
**包含技术**: llm-d  
**适用场景**: AI 模型训练、推理服务部署

---

## 跨分类技术栈

某些技术组合形成完整解决方案,参见 [stacks/](../stacks/) 目录:

- **监控栈**: Prometheus + Grafana + VictoriaMetrics
- **AI 推理平台**: llm-d + WVA + GPU Operator + JuiceFS
- **服务网格栈**: Istio + Cilium + cert-manager

---

## 新增分类规范

新增分类时应遵循以下原则:

1. **互斥性**: 分类之间边界清晰,技术归属唯一
2. **完备性**: 覆盖 Kubernetes 生态主要技术领域
3. **可扩展性**: 每个分类可容纳 5-10 个技术
4. **语义化**: 分类名称符合行业术语习惯

**新增步骤**:
1. 在本文件添加分类定义
2. 创建 `<category>/README.md` 分类说明
3. 更新根目录 `README.md`
