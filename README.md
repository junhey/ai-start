# AI Start

[中文](README.zh-CN.md)

> An AI course for developers, presented as large-type HTML slides.

## What this is

Eleven lessons, from the AI landscape to AGI, harness engineering, how the systems work, practice, ethics, and shipping. Built with Reveal.js as static HTML. **Open `index.html` to start.**

## Lessons

| #  | Lesson | Palette | Open |
|----|------|--------|------|
| 01 | **The AI landscape** | Red / black | [Open](lessons/01-ai-overview/index.html) |
| 02 | **How LLMs work** | Cyan / blue | [Open](lessons/02-llm-principles/index.html) |
| 03 | **The Transformer** | Yellow / purple | [Open](lessons/03-transformer/index.html) |
| 04 | **Prompt engineering** | Green | [Open](lessons/04-prompt-engineering/index.html) |
| 05 | **Retrieval-augmented generation** | Orange | [Open](lessons/05-rag/index.html) |
| 06 | **Agents** | Purple / white | [Open](lessons/06-agent/index.html) |
| 07 | **Fine-tuning and training** | Pink / black | [Open](lessons/07-fine-tuning/index.html) |
| 08 | **Multimodal AI** | Gradient | [Open](lessons/08-multimodal/index.html) |
| 09 | **AI coding in practice** | Terminal green | [Open](lessons/09-ai-coding/index.html) |
| 10 | **Ethics, risk, and what comes next** | Gray / red | [Open](lessons/10-ethics-future/index.html) |
| 11 | **Harness engineering** | Yellow / black | [Open](lessons/11-harness-engineering/index.html) |

## Quick start

```bash
# Open the portal
open index.html

# Or serve it locally (preferred; avoids CDN cross-origin issues)
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Keys

| Key | Action |
|------|------|
| `→` / `Space` | Next slide |
| `←` | Previous slide |
| `↑` / `↓` | Sub-slides under the same heading |
| `Esc` | Overview |
| `S` | **Speaker view (notes, timer, next-slide preview)** |
| `F` | Full screen |
| `B` / `.` | Blackout |

## Speaker notes

Each lesson includes a full script in `<aside class="notes">…</aside>`. The speaker does not need a separate document.

```bash
# Speaker view opens a popup, so it needs a local server (not a file:// open)
python3 -m http.server 8000
# Visit http://localhost:8000, open any lesson, then press S
```

Speaker view layout:

```
┌─────────────────────┬─────────────────────┐
│   Current slide     │   Next slide        │
│                     │                     │
├─────────────────────┴─────────────────────┤
│   Timer and clock                         │
├───────────────────────────────────────────┤
│   Notes (the script to speak from)        │
└───────────────────────────────────────────┘
```

> If the browser blocks the popup, allow popups for this site the first time you press `S`.

## Style

- **Large type:** one idea per slide, oversized type, high-contrast color
- **One palette per lesson:** a visual anchor
- **Code and diagrams:** Mermaid, SVG, and highlighted code

## Stack

- [Reveal.js 5](https://revealjs.com/) — HTML presentations, loaded from a CDN, no build step
- Shared theme: `assets/css/poster-theme.css`
- Fonts: Inter, Source Han Sans, JetBrains Mono

## Layout

```
ai-start/
├── index.html              # Course portal
├── assets/                 # Shared assets
│   ├── css/poster-theme.css
│   ├── js/common.js
│   └── img/
├── lessons/                # 11 lessons
│   ├── 01-ai-overview/index.html
│   ├── ...
│   └── 11-harness-engineering/index.html
└── docs/
    └── COURSE_OUTLINE.md   # Detailed outline
```

## License

MIT
