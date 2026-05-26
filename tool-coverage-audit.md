# AI START 课程工具覆盖度审计报告

## 一、工具覆盖矩阵

深度等级：◯ 提了名字 | ◑ 给了用法说明 | ● 给了代码示例

### Prompt 工程领域

| 工具 | L04 | L11 | 深度 | 备注 |
|------|-----|-----|------|------|
| Promptfoo | ◯ | ◯ | 提名 | 仅列名为"评测工具"，无用法 |
| LangSmith | ◯ | ◯ | 提名 | 与 Promptfoo 并列 |
| PromptLayer | ◯ | — | 提名 | 一笔带过 |
| DSPy | — | — | **缺失** | 2024 主流 Prompt 编程框架，完全未提 |
| LangChain Hub | — | — | **缺失** | 仅在 notes 中一闪 |

### RAG 领域

| 工具 | L05 | 深度 | 备注 |
|------|-----|------|------|
| Chroma | ◑ | 用法 | 有选型建议 |
| pgvector | ◑ | 用法 | 有选型建议 |
| Milvus/Zilliz | ◑ | 用法 | 有选型建议 |
| Pinecone | ◯ | 提名 | SaaS 标杆 |
| Qdrant | ◯ | 提名 | Rust 实现 |
| BGE-Reranker | ◑ | 用法 | 讲了 Re-rank 场景 |
| Cohere Rerank | ◯ | 提名 | 仅并列 |
| RAGAS | ◑ | 用法 | 自动化评估 |
| LangChain | — | **缺失** | RAG 课竟无 LangChain 代码 |
| LlamaIndex | — | **缺失** | 在 L06 才提到，RAG 课未涉及 |
| OpenAI Embeddings | ◯ | 提名 | text-embedding-3 仅提 |

### Agent 领域

| 工具 | L06 | 深度 | 备注 |
|------|-----|------|------|
| LangGraph | ◑ | 用法 | "状态机驱动，控制力强" |
| CrewAI | ◯ | 提名 | "多 Agent 协作首选" |
| AutoGen | ◯ | 提名 | 与 CrewAI 并列 |
| OpenAI Swarm | ◯ | 提名 | "极简" |
| MCP | ◑ | 用法 | 有概念解释，无代码 |
| OpenAI Agents SDK | — | **缺失** | 2025 年 3 月发布的新框架 |
| Claude Code (Agent) | ◯ | 提名 | 在实战场景中提到 |
| Smol Agents | ◯ | 提名 | HuggingFace |

### 微调领域

| 工具 | L07 | 深度 | 备注 |
|------|-----|------|------|
| LLaMA-Factory | ◑ | 用法 | "中文社区主流，零代码" |
| Axolotl | ◯ | 提名 | "YAML 驱动" |
| Unsloth | ◯ | 提名 | "速度快 2-5×" |
| HuggingFace TRL | ◯ | 提名 | "官方 SFT/DPO 库" |
| PEFT 库 | ◑ | 用法 | LoRA 公式有数学推导 |

### 部署/观测领域

| 工具 | L11 | 深度 | 备注 |
|------|-----|------|------|
| Langfuse | ◑ | 用法 | "追溯"工具 |
| LangSmith | ◯ | 提名 | 并列 |
| Phoenix | ◯ | 提名 | 并列 |
| vLLM | — | **缺失** | 2024-2025 部署标配，完全未提 |
| Helicone | — | **缺失** | 代理网关/观测 |
| Ollama | — | **缺失** | 本地推理第一入口 |
| litellm | — | **缺失** | 多模型统一网关 |

### AI Coding 领域

| 工具 | L09 | 深度 | 备注 |
|------|-----|------|------|
| Cursor | ◑ | 用法 | IDE 类代表 |
| Claude Code | ◑ | 用法 | CLI Agent 代表 |
| CodeBuddy | ◑ | 用法 | CLI Agent 代表 |
| Aider | ◯ | 提名 | CLI Agent |
| Windsurf | ◯ | 提名 | IDE 类 |
| Continue | ◯ | 提名 | IDE 类 |
| Cline | — | **缺失** | VS Code Agent 插件，社区活跃 |
| GitHub Copilot | ◑ | 用法 | Gen 1 代表 |

### Harness 工程领域

| 工具 | L11 | 深度 | 备注 |
|------|-----|------|------|
| Guardrails AI | ◯ | 提名 | "验证"类 |
| Pydantic | ◯ | 提名 | "验证"类 |
| Temporal | ◯ | 提名 | "编排"类 |
| Restate | ◯ | 提名 | "编排"类 |
| JSON Schema | ◑ | 用法 | L06 有代码示例 |
| OpenAI Evals | ◯ | 提名 | "评测"类 |

---

## 二、关键发现

### 深度分布统计
- **给了代码示例 ●**：仅 2 个（tiktoken L02、Function Calling JSON L06）
- **给了用法说明 ◑**：约 18 个
- **仅提了名字 ◯**：约 35 个
- **完全缺失**：约 12 个主流工具

### 最大问题：**代码示例严重不足**
全 11 节课提到 50+ 工具，但**仅 2 个有可运行代码片段**。对于面向开发者的课程，这是最大的短板。

---

## 三、TOP 10 应补充的工具实战内容

| # | 课程 | 工具 | 建议补充的代码片段概要 |
|---|------|------|----------------------|
| 1 | L05 | **LangChain RAG** | 最小 RAG pipeline：加载文档 → 切块 → Chroma 存储 → 检索 → 生成答案（~20 行 Python） |
| 2 | L06 | **OpenAI Agents SDK** | 定义 2 个 Agent + handoff + tool，展示 2025 年官方 Agent 范式（~25 行） |
| 3 | L04 | **Promptfoo 评测** | promptfoo.yaml 配置 + 3 个测试用例 + 运行命令，展示 Prompt 回归测试流程 |
| 4 | L07 | **Unsloth 微调** | 用 Unsloth 对 Llama-3 做 QLoRA SFT：加载 → 配置 LoRA → 训练 → 推理（~30 行） |
| 5 | L11 | **Guardrails AI** | 定义输出 Schema + Guard 校验 + 失败重试，展示输出护栏实战（~15 行） |
| 6 | L06 | **MCP Server** | 最小 MCP server（Python/TS）：定义一个 tool + 一个 resource，可被 Claude Code 调用 |
| 7 | L05 | **pgvector** | Docker 启动 Postgres + pgvector 扩展 + 向量存取查询 SQL（~10 行 SQL + Python） |
| 8 | L11 | **Langfuse 追溯** | 在 LangChain/OpenAI 调用中集成 Langfuse trace，查看调用链（~10 行） |
| 9 | L04 | **DSPy** | 用 DSPy 定义一个签名 + 优化 Prompt，对比手写 Prompt 效果（~15 行） |
| 10 | L09 | **Claude Code / CodeBuddy** | 展示 CLAUDE.md 配置文件 + 一个完整 session 的交互流程 + 约定文件最佳实践 |

---

## 四、2025 生态缺失工具清单（按优先级）

| 优先级 | 工具 | 应放入课程 | 理由 |
|--------|------|-----------|------|
| P0 | vLLM | L07/L11 | 2025 开源推理部署事实标准 |
| P0 | DSPy | L04 | Prompt 编程范式转变，斯坦福出品 |
| P0 | OpenAI Agents SDK | L06 | 2025.3 发布，官方 Agent 框架 |
| P1 | Ollama | L07 | 本地模型运行第一入口 |
| P1 | litellm | L11 | 多模型统一调用网关 |
| P1 | Cline | L09 | VS Code AI Agent 插件，开源活跃 |
| P1 | A2A Protocol | L06 | Google 2025 推出的 Agent 间通信协议 |
| P2 | Instructor | L04/L11 | 结构化输出最佳实践库 |
| P2 | Weights & Biases | L07 | 训练实验追踪 |
| P2 | Modal/RunPod | L07 | 无服务器 GPU 云，微调首选 |
