# AI Start ⚡

[English](README.md)

> 给技术开发者的 AI 大字报式 HTML PPT 课程。

## 这是什么

11 节课，从 AI 全景到 AGI 未来 + Harness 工程，原理 + 实战 + 伦理 + 落地全覆盖。  
基于 Reveal.js，纯静态 HTML，**双击 `index.html` 直接看**。

## 课程目录

| #  | 课程 | 主题色 | 入口 |
|----|------|--------|------|
| 01 | **AI 全景图** | 🔴 红黑 | [打开](lessons/01-ai-overview/index.html) |
| 02 | **LLM 原理速通** | 🔵 青蓝 | [打开](lessons/02-llm-principles/index.html) |
| 03 | **Transformer 架构** | 🟡 黄紫 | [打开](lessons/03-transformer/index.html) |
| 04 | **Prompt 工程** | 🟢 荧光绿 | [打开](lessons/04-prompt-engineering/index.html) |
| 05 | **RAG 检索增强** | 🟠 橘米 | [打开](lessons/05-rag/index.html) |
| 06 | **Agent 智能体** | 🟣 紫白 | [打开](lessons/06-agent/index.html) |
| 07 | **微调与训练** | 🌸 粉黑 | [打开](lessons/07-fine-tuning/index.html) |
| 08 | **多模态 AI** | 🌈 渐变 | [打开](lessons/08-multimodal/index.html) |
| 09 | **AI Coding 实战** | 💚 终端绿 | [打开](lessons/09-ai-coding/index.html) |
| 10 | **伦理、风险与未来** | ⚫ 灰红 | [打开](lessons/10-ethics-future/index.html) |
| 11 | **Harness 工程** | 🟨 黄黑 | [打开](lessons/11-harness-engineering/index.html) |

## 快速开始

```bash
# 双击门户页
open index.html

# 或本地起服务器（推荐，避免 CDN 跨域）
python3 -m http.server 8000
# 浏览器访问 http://localhost:8000
```

## 操作

| 按键 | 功能 |
|------|------|
| `→` / `Space` | 下一页 |
| `←` | 上一页 |
| `↑` / `↓` | 同标题下的子章节 |
| `Esc` | 总览模式 |
| `S` | **演讲者视图（含备注稿、计时器、下一页预览）** |
| `F` | 全屏 |
| `B` / `.` | 黑屏（暂停演讲时的应急按键） |

## 演讲者备注

每节课内嵌完整 **演讲备注稿**（`<aside class="notes">…</aside>`），讲师不用另外背稿。

```bash
# ⚠️ 演讲者视图依赖 popup window，必须用本地服务器（不能 file:// 双击）
python3 -m http.server 8000
# 浏览器访问 http://localhost:8000，进入任意课程后按 S
```

演讲者视图布局：

```
┌─────────────────────┬─────────────────────┐
│   当前幻灯片         │   下一页预览         │
│                     │                     │
├─────────────────────┴─────────────────────┤
│   计时器 + 时钟                            │
├───────────────────────────────────────────┤
│   备注稿（这就是讲师要照着说的话）          │
└───────────────────────────────────────────┘
```

> 如果浏览器拦了弹窗，第一次按 `S` 时允许该站点弹窗即可。

## 风格

- **大字报**：单页一个核心信息，字号超大，强对比配色
- **每课独立主题色**：视觉记忆点
- **代码 + 图示**：Mermaid + SVG + 高亮代码块

## 技术栈

- [Reveal.js 5](https://revealjs.com/) — HTML 演示框架（CDN 引入，免构建）
- 共享主题：`assets/css/poster-theme.css`
- 字体：Inter / 思源黑体 / JetBrains Mono

## 目录结构

```
ai-start/
├── index.html              # 课程门户
├── assets/                 # 共享资源
│   ├── css/poster-theme.css
│   ├── js/common.js
│   └── img/
├── lessons/                # 11 节课
│   ├── 01-ai-overview/index.html
│   ├── ...
│   └── 11-harness-engineering/index.html
└── docs/
    └── COURSE_OUTLINE.md   # 详细大纲
```

## License

MIT
