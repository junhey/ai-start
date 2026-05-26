# AI Start 课程详细大纲

> 讲师备注与每节课的章节级展开。

---

## 通用设计

- **每课时长**：30-45 分钟
- **章节数**：12-14 页大字报式幻灯片
- **结构模板**：封面 → 灵魂拷问 → 概念铺陈 → 原理图示 → 代码/案例 → 金句 → 总结/预告

---

## 01 · AI 全景图

| 页 | 标题 | 要点 |
|---|---|---|
| 1 | 封面 | "70 年，一夜之间" |
| 2 | 你在哪？ | 程序员视角的 AI 浪潮位置 |
| 3 | 三圈套娃 | AI ⊃ ML ⊃ DL；GenAI 的位置 |
| 4 | 70 年简史 | 1956→2012→2017→2022→2024 关键节点 |
| 5 | GPT 时刻 | 2022.11.30 ChatGPT 发布意味着什么 |
| 6 | 现状版图 | OpenAI / Anthropic / Google / Meta / 国产军团 |
| 7 | 闭源 vs 开源 | 模型能力曲线对比 |
| 8 | 模型尺寸 | 7B / 70B / 400B / MoE 各自的位置 |
| 9 | 评测榜单 | MMLU / GPQA / SWE-bench |
| 10 | 行业渗透 | 编程、客服、设计、医疗、法律 |
| 11 | 金句 | "未来已来，只是分布不均" |
| 12 | 下一站 | 进入 LLM 内部看看 |

---

## 02 · LLM 原理速通

| 页 | 标题 | 要点 |
|---|---|---|
| 1 | 封面 | "LLM 只做一件事：预测下一个词" |
| 2 | 灵魂拷问 | 为什么"预测下一个词"能产生智能？ |
| 3 | Token 是什么 | 不是字、不是词，是 BPE 子词单元 |
| 4 | Tokenizer 演示 | "我爱 AI" → [tokens] |
| 5 | 词嵌入 | 每个 token → 高维向量 |
| 6 | 上下文窗口 | 8K / 32K / 128K / 1M |
| 7 | 自回归生成 | 一个 token 一个 token 吐 |
| 8 | 三段式训练 | Pretrain → SFT → RLHF |
| 9 | Pretrain | 海量文本，预测下一个词 |
| 10 | SFT | 指令 + 答案对，学会"对话" |
| 11 | RLHF / DPO | 让模型符合人类偏好 |
| 12 | 幻觉为什么会发生 | 概率采样 + 知识截断 |
| 13 | 温度 / Top-p | 控制创造力 vs 确定性 |
| 14 | 总结 | 下一课：Transformer 架构 |

---

## 03 · Transformer 架构

| 页 | 标题 | 要点 |
|---|---|---|
| 1 | 封面 | "Attention is All You Need" |
| 2 | 2017 论文背景 | Google Brain 8 人小队 |
| 3 | RNN 的痛 | 顺序计算、长依赖丢失 |
| 4 | 注意力直觉 | "看哪里"的能力 |
| 5 | Self-Attention | Q × K^T / √d × V |
| 6 | 公式拆解 | 一步步算给你看 |
| 7 | 多头注意力 | 多个观察视角 |
| 8 | 位置编码 | 没有顺序信息怎么办 |
| 9 | Encoder vs Decoder | 原始 Transformer 双塔结构 |
| 10 | Decoder-only 胜出 | 为什么 GPT 系列只用 Decoder |
| 11 | 参数量分布 | 70B 模型的参数都在哪 |
| 12 | 总结 | 下一课：Prompt 工程 |

---

## 04 · Prompt 工程

| 页 | 标题 | 要点 |
|---|---|---|
| 1 | 封面 | "好的 Prompt = 半个产品" |
| 2 | 基本原则 | 角色 + 任务 + 上下文 + 输出格式 |
| 3 | Zero-shot | 零样本能力的边界 |
| 4 | Few-shot | 少样本为什么有效 |
| 5 | Chain-of-Thought | "Let's think step by step" |
| 6 | ReAct | Reasoning + Acting 循环 |
| 7 | Self-consistency | 多次采样投票 |
| 8 | 结构化输出 | JSON Schema / Tool Use |
| 9 | 系统提示词 | System / User / Assistant 三角色 |
| 10 | Prompt 注入 | 攻击案例与防御 |
| 11 | 模板设计 | 可维护的 Prompt 工程 |
| 12 | 评测 | 怎么知道 Prompt 真的好 |
| 13 | 工具 | LangChain Hub / Promptfoo |
| 14 | 总结 | 下一课：RAG |

---

## 05 · RAG 检索增强

| 页 | 标题 | 要点 |
|---|---|---|
| 1 | 封面 | "把外部知识塞进去" |
| 2 | 为什么要 RAG | 知识截断、私有数据、可溯源 |
| 3 | RAG 流程 | 索引 → 检索 → 增强 → 生成 |
| 4 | Embedding | 文本 → 向量 |
| 5 | 向量相似度 | 余弦 / 点积 / 欧氏 |
| 6 | 向量数据库 | Chroma / Milvus / Pinecone |
| 7 | Chunking 策略 | 固定 / 语义 / 滑窗 |
| 8 | 检索粒度 | 句子 / 段落 / 文档 |
| 9 | Hybrid Search | BM25 + 向量 |
| 10 | Re-rank | Cross-encoder 二次排序 |
| 11 | 上下文压缩 | 长上下文怎么塞 |
| 12 | RAG 评估 | RAGAS / 召回率 / 答案准确率 |
| 13 | 进阶 | GraphRAG / Self-RAG |
| 14 | 总结 | 下一课：Agent |

---

## 06 · Agent 智能体

| 页 | 标题 | 要点 |
|---|---|---|
| 1 | 封面 | "让 LLM 自己干活" |
| 2 | Agent 是什么 | LLM + 记忆 + 工具 + 规划 |
| 3 | ReAct 循环 | Thought → Action → Observation |
| 4 | Tool Use | Function Calling 协议 |
| 5 | 工具设计 | 输入 schema、错误处理 |
| 6 | 记忆 | 短期 / 长期 / 向量化记忆 |
| 7 | 规划 | Plan-Execute / Tree of Thoughts |
| 8 | 多 Agent 协作 | 角色分工、辩论、流水线 |
| 9 | MCP 协议 | 统一工具接口标准 |
| 10 | 框架对比 | LangGraph / AutoGen / CrewAI |
| 11 | Agent OS 雏形 | Devin / Manus 启示 |
| 12 | 失败模式 | 死循环、幻觉决策、成本失控 |
| 13 | 实战案例 | 浏览器 Agent、编码 Agent |
| 14 | 总结 | 下一课：微调 |

---

## 07 · 微调与训练

| 页 | 标题 | 要点 |
|---|---|---|
| 1 | 封面 | "什么时候该微调？" |
| 2 | 决策树 | Prompt < RAG < 微调 < 预训练 |
| 3 | 全参数微调 | 成本与效果 |
| 4 | LoRA | 低秩适配的核心思想 |
| 5 | QLoRA | 4-bit 量化 + LoRA |
| 6 | PEFT 全家桶 | Adapter / Prefix / Prompt Tuning |
| 7 | 指令微调 | 数据格式与质量 |
| 8 | DPO | 比 RLHF 更简单的偏好对齐 |
| 9 | 算力估算 | 7B 微调要多少卡多少时 |
| 10 | 数据质量 | "Less is More" |
| 11 | 工具链 | Axolotl / LLaMA-Factory / Unsloth |
| 12 | 总结 | 下一课：多模态 |

---

## 08 · 多模态 AI

| 页 | 标题 | 要点 |
|---|---|---|
| 1 | 封面 | "AI 长出眼睛和耳朵" |
| 2 | CLIP | 图文对齐的奠基工作 |
| 3 | 扩散模型 | 噪声→图像的反向过程 |
| 4 | Stable Diffusion | 开源王者 |
| 5 | ControlNet | 精确控制构图 |
| 6 | DALL-E / Midjourney | 闭源标杆 |
| 7 | 视频生成 | Sora / Kling / Veo |
| 8 | 多模态 LLM | GPT-4V / Gemini / Claude 3.5 |
| 9 | 视觉理解 | OCR / 图表理解 / VQA |
| 10 | 语音 | Whisper / TTS / 实时对话 |
| 11 | 3D 生成 | Gaussian Splatting / Tripo |
| 12 | 总结 | 下一课：AI Coding |

---

## 09 · AI Coding 实战

| 页 | 标题 | 要点 |
|---|---|---|
| 1 | 封面 | "程序员的形态正在改变" |
| 2 | 三代工具 | Copilot → Cursor → Claude Code |
| 3 | 上下文工程 | 让 AI 读懂你的代码库 |
| 4 | Agent 编程 | 自主规划 + 执行 + 修复 |
| 5 | 工具对比 | Cursor / Windsurf / Claude Code / CodeBuddy |
| 6 | Prompt for Code | 怎么让 AI 写靠谱代码 |
| 7 | 代码 Review | AI 当 Reviewer |
| 8 | 测试驱动 | 让 AI 先写测试 |
| 9 | 重构与迁移 | AI 大显身手的场景 |
| 10 | 失败模式 | 幻觉 API、过度修改、循环 |
| 11 | 团队规范 | AI 时代的代码守则 |
| 12 | 总结 | 下一课：伦理与未来 |

---

## 10 · 伦理、风险与未来

| 页 | 标题 | 要点 |
|---|---|---|
| 1 | 封面 | "这次不一样" |
| 2 | 对齐问题 | Alignment 究竟难在哪 |
| 3 | 偏见 | 训练数据 → 模型偏见 |
| 4 | 版权 | 训练数据合法性争议 |
| 5 | 隐私 | 提示词与数据泄漏 |
| 6 | 失业 | 哪些工种最危险 |
| 7 | 深度伪造 | 信息真实性危机 |
| 8 | AGI 路线图 | OpenAI L1-L5 / DeepMind 分级 |
| 9 | 开源 vs 闭源 | 安全与普惠的张力 |
| 10 | 监管 | EU AI Act / 中国生成式 AI 办法 |
| 11 | 从业者建议 | 怎么持续在这场浪潮里 |
| 12 | 金句收尾 | "拥抱变化是唯一的护城河" |

---

## 后续可扩展主题

- 11 · AI 应用架构（Workflow / 接口设计 / 监控）
- 12 · 模型部署（vLLM / SGLang / 量化 / 推理优化）
- 13 · 评测（基准、人工评估、A/B 测试）
- 14 · 安全（越狱、红队测试、Guardrails）
- 15 · 商业化（产品形态、定价、护城河）
