# Kubernetes 生态技术文档库

> **定位**: 面向 SRE/DevOps 的 Kubernetes 生态技术深度解析文档集  
> **特色**: 螺旋式递进架构 + 单一类比贯穿 + 生产实战场景

---

## 📚 项目简介

本项目收录 Kubernetes 生态系统相关技术的深度解析文档,采用**三层螺旋递进式**架构编写,帮助读者从概念理解到机制掌握,再到生产实战的完整认知升级。

### 文档特色

- **🌀 螺旋式递进**: 概念层 → 机制层 → 实战层
- **🎯 单一类比贯穿**: 每个主题使用唯一类比降低认知负担
- **⚙️ 实战导向**: 基于真实生产场景
- **🔗 知识闭环**: 每层设置验收标准

---

## 📖 按分类浏览

### [自动扩缩容](./autoscaling/)
- [HPA](./autoscaling/hpa/) - Horizontal Pod Autoscaler
- [KEDA](./autoscaling/keda/) - Event-Driven Autoscaling
- [WVA](./autoscaling/wva/) - Workload Variant Autoscaler

### [集群管理](./cluster-management/)
- Kubespray - 生产级集群部署
- Kamaji - 多租户控制平面
- vCluster - 虚拟集群

### [存储方案](./storage/)
- etcd - 分布式键值存储
- Ceph - 统一存储系统
- JuiceFS - 云原生文件系统
- GPFS - IBM Spectrum Scale

### [监控观测](./monitoring/)
- Metrics Server - 资源指标采集
- Prometheus - 监控系统
- Grafana - 数据可视化
- VictoriaMetrics - 时序数据库

### [网络方案](./networking/)
- Cilium - eBPF CNI
- Istio - Service Mesh
- Ingress NGINX - Ingress 控制器
- MetalLB - 裸金属负载均衡

### [镜像仓库](./registry/)
- Harbor - 企业级镜像仓库
- Spegel - P2P 镜像分发
- Registry - Docker Registry

### [安全加固](./security/)
- cert-manager - 证书管理

### [硬件管理](./hardware/)
- NFD - Node Feature Discovery
- GPU Operator - NVIDIA GPU 管理

### [AI/ML 平台](./ai-ml/)
- llm-d - 大模型推理平台

---

## 🎯 按技术栈浏览

### [监控观测栈](./stacks/monitoring-stack.md)
Prometheus + Grafana + VictoriaMetrics + Metrics Server

**适用场景**: 生产级集群监控和可视化

### [AI 推理平台](./stacks/ai-inference-platform.md)
llm-d + WVA + GPU Operator + JuiceFS + Prometheus

**适用场景**: 大模型推理服务部署和成本优化

---

## 🔍 快速导航

- [**技术索引**](./_meta/index.md) - 按字母顺序查找技术
- [**分类体系**](./_meta/categories.md) - 了解分类定义
- [**标签体系**](./_meta/tags.md) - 按场景、难度、云环境检索

---

## 🤝 贡献指南

欢迎提交 PR 贡献新的技术文档或改进现有内容。

### 文档结构规范

本项目采用 **SRE Tech Sharing** 三层螺旋架构:

- **螺旋 1 (概念层)**: 回答"是什么"、"为什么"
- **螺旋 2 (机制层)**: 揭示底层原理和算法
- **螺旋 3 (实战层)**: 提供配置、部署、排障指南

### 新增技术文档

1. 在对应分类目录创建技术目录(如 `storage/ceph/`)
2. 创建 `index.md` 主文档
3. 更新分类的 `README.md`
4. 更新根目录 `README.md`

### 提交规范

```bash
feat: 新增 XXX 技术文档
fix: 修正 XXX 错误
docs: 补充 XXX 示例
```

---

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议。
