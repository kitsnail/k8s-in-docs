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

### [自动扩缩容](autoscaling/)
基于资源指标或事件驱动的 Kubernetes 弹性伸缩方案。

- **[HPA](autoscaling/hpa/)** - Kubernetes 原生水平 Pod 扩缩容
  - 类比: 超市收银柜台的智能开闭台管理
  - 适用: 计算密集型工作负载,基于 CPU/内存指标

- **[KEDA](autoscaling/keda/)** - 事件驱动弹性伸缩
  - 类比: 餐厅的点单小票机(基于队列深度驱动)
  - 适用: 支持 60+ 事件源,可缩容到 0

- **[WVA](autoscaling/wva/)** - AI 推理服务饱和度感知扩缩容
  - 类比: 搬家公司的智能调度(根据物品大小动态调配车辆)
  - 适用: AI 推理场景,基于 KV Cache 和队列深度

### [AI/ML 平台](ai-ml/)
Kubernetes 上的大模型推理控制平面及相关组件。

#### 🚀 核心平台：[llm-d](ai-ml/llm-d/)
Kubernetes 原生的分布式大模型推理控制平面,通过智能调度、分层缓存、P/D 分离等能力实现 SOTA 性能。

#### 🧩 核心组件

| 组件 | 文档 | 核心价值 |
|------|------|----------|
| **Inference Gateway** | [组件文档](ai-ml/llm-d/components/inference-gateway.md) | 智能路由与调度,请求特征感知的 Filter-Score-Select 算法 |
| **ModelService** | [组件文档](ai-ml/llm-d/components/modelservice.md) | 声明式推理服务管理,BaseConfig 分层配置 |
| **KV Cache Management** | [组件文档](ai-ml/llm-d/components/kv-cache.md) | GPU/CPU/文件系统三级缓存管理 |
| **LMCache** | [完整文档](ai-ml/llm-d/components/lmcache/) | KV Cache 加速层,跨实例共享与多级存储优化 |
| **Autoscaler (WVA)** | [组件文档](ai-ml/llm-d/components/autoscaler.md) | 饱和度感知弹性伸缩 |
| **Networking** | [组件文档](ai-ml/llm-d/components/networking.md) | 基于 NIXL/UCCL 的高性能 KV 传输 |
| **P/D Disaggregation** | [组件文档](ai-ml/llm-d/components/pd-disaggregation.md) | Prefill 与 Decode 阶段解耦架构 |

### [集群管理](cluster-management/)
Kubernetes 集群部署、管理和多租户解决方案。

- **Kubespray** - 生产级集群部署(Ansible 自动化)
- **Kamaji** - 多租户控制平面管理
- **vCluster** - 虚拟 Kubernetes 集群

### [存储方案](storage/)
持久化存储与分布式文件系统解决方案。

- **etcd** - Kubernetes 控制平面数据存储
- **Ceph** - 统一存储系统(对象/块/文件)
- **JuiceFS** - 云原生分布式文件系统
- **GPFS** - IBM Spectrum Scale 高性能并行文件系统

### [监控观测](monitoring/)
集群监控、指标采集、可视化和告警体系。

- **Metrics Server** - HPA 指标数据源
- **Prometheus** - 云原生监控时序数据库
- **Grafana** - 数据可视化平台
- **VictoriaMetrics** - 高性能 Prometheus 替代方案

### [网络方案](networking/)
CNI 插件、Service Mesh 和 Ingress 控制器。

- **Cilium** - eBPF 高性能 CNI
- **Istio** - 服务网格平台
- **Ingress NGINX** - Ingress 控制器
- **MetalLB** - 裸金属负载均衡器

### [镜像仓库](registry/)
容器镜像存储、分发和加速方案。

- **Harbor** - 企业级镜像仓库(安全扫描/签名)
- **Spegel** - P2P 镜像分发加速
- **Registry** - Docker 官方镜像仓库

### [安全加固](security/)
Kubernetes 安全相关技术。

- **cert-manager** - TLS 证书自动化管理

### [硬件管理](hardware/)
GPU 等硬件资源管理方案。

- **NFD** - Node Feature Discovery 节点特性发现
- **GPU Operator** - NVIDIA GPU 资源管理

---

## 🎯 按技术栈浏览

跨技术组合方案,帮助快速构建完整技术栈。

### [监控观测栈](stacks/monitoring-stack.md)
**组件**: Prometheus + Grafana + VictoriaMetrics + Metrics Server

**适用场景**: 生产级 Kubernetes 集群监控、告警和可视化

---

### [AI 推理平台](stacks/ai-inference-platform.md)
**组件**: llm-d + WVA + GPU Operator + JuiceFS + Prometheus

**适用场景**: 大模型推理服务部署、自动扩缩容和成本优化

---

## 🔍 快速导航

- [**技术索引**](_meta/index.md) - 按字母顺序查找技术
- [**分类体系**](_meta/categories.md) - 了解分类定义
- [**标签体系**](_meta/tags.md) - 按场景、难度、云环境检索

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
4. 更新根目录 `index.md`

### 提交规范

```bash
feat: 新增 XXX 技术文档
fix: 修正 XXX 错误
docs: 补充 XXX 示例
```

---

## 📄 许可证

本项目采用 [MIT License](../LICENSE) 开源协议。
