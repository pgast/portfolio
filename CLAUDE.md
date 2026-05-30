# CLAUDE.md

> Read this file at the start of every session before touching any code.
> This is a living document — expect visual refinements over multiple iterations.

---

## Project Identity

This is the personal portfolio of a **senior software engineer** with a background in **product engineering** — someone who has lived on both sides of the product/engineering divide and builds with users in mind. The site reflects that dual fluency: opinionated about craft, obsessive about experience, precise in execution.

This is not a resume dump. It is a professional statement — the kind of work that looks like it came out of an experienced design agency: fluid, considered, and intentional in every detail.

A senior creative technologist's portfolio — not a developer template. Think: Instrument, Fantasy, Ueno (RIP) — studios where engineering and design are indistinguishable. The product engineering background is the differentiator: frame decisions in terms of user value and business impact, not just technical implementation.

---

## Design Direction — The Brief

The visual identity is a synthesis of two sources that share the same underlying discipline:

**Luis Barragán** — spatial logic, volumetry, color as architecture. Sections are walls. Scrolling is moving through a courtyard. Hard cuts between color fields. Warm concrete as the reading surface. The terracotta accent as afternoon light beside a painted wall.

**Japanese poster design** — color temperature, graphic confidence, wayfinding precision. Signal blue as the hero field. Flat color, no gradients. Type as structure. Index numbers. Everything legible, nothing arbitrary.

Both sources use color the same way: not to decorate, but to define space. That is the governing principle of this site.

> **The one-line brief:** Barragán's spatial logic. Japan's color temperature.

---

## Commands

```bash
npm start      # dev server (--openssl-legacy-provider required for Node 17+)
npm run build  # production build
npm test       # run tests in watch mode
```

No linter configured beyond CRA's built-in ESLint.

---

## Stack

- **Framework**: React (Create React App), single-page, no routing
- **Styling**: `styled-components` v5 — all component styles in colocated `styled.js` files
- **Animations**: `framer-motion` v4 — entry animations via `Section` wrapper; CSS-only cursor
- **Theme tokens**: `src/constants/theme.js`
- **Global styles**: `src/index.css` — section backgrounds, scroll behavior, cursor, scrollbar
- **Shared animations**: `src/constants/animations.js`
- **Package manager**: npm

---

## Architecture

Single-page app. One long scroll. Sections defined in `src/App.js`. No routing — intentional, do not change. New sections are added as additional `<section>` elements in `App.js`.

### Scroll & Navigation
- `scroll-snap-type: y proximity` on `html`; `scroll-snap-align: start` on every section
- `overflow-x: clip` on `html` and `#container` — **do not change to `overflow-x: hidden`**. It would create a new scroll container and break `position: sticky`.
- Navigation tracks active section via `getBoundingClientRect().top <= 80` in a scroll listener
- Scroll-progress bar written directly to a DOM ref — do not refactor to `useState`

### Navigation Component
Fixed at top. Behavior:
- Transparent over hero, transitions to `#0035A0` (deep blue) on scroll
- Thin `0.5px` bottom border appears on scroll
- Left: monogram/logotype in Bebas Neue
- Right: section links in IBM Plex Mono, uppercase, 0.18em tracking. Active state: `#FFFFFF`
- Terracotta dot (`#D95B2A`) after the monogram — the one warm mark in the nav

### Sticky Split-Panel Layout
Both `About` and `Contact` use the same pattern from `src/components/About/styled.js`:
- `LeftPanel` — `position: sticky; top: 90px`, fixed-width 280px
- `RightPanel` / `ContactRight` — `flex: 1`, natural scroll

`Contact` imports layout primitives directly from `../About/styled` — intentional deduplication. Do not recreate them.

### Data
All content in `src/constants/` — `about.js`, `contact.js`, `home.js`, `work.js`. Edit copy there, never in components.

### Motion
- `Section` wrapper uses framer-motion `threshold: 0.2`, `triggerOnce: true` — do not adjust
- Custom cursor CSS-only via `.cursor` class; `--x`/`--y` set in `src/components/Cursor/index.js`
- All animations must respect `prefers-reduced-motion`

---

## Visual Identity & Design System

### Color System

Five colors. Nothing else. Do not introduce additional colors under any circumstances — if something feels like it needs a sixth color, the layout or typography needs adjustment instead.

| Name | Hex | Role |
|---|---|---|
| **Signal Blue** | `#0047BB` | Hero wall, section titles on light bg, active nav, CTA borders, links |
| **Terracotta** | `#D95B2A` | The one warm accent. Index numbers, availability stamp, one word per headline, nav monogram dot |
| **Concreto** | `#F0EDE6` | Page ground. Warm off-white — Barragán's concrete in afternoon light. Never use pure white as a background |
| **White** | `#FFFFFF` | Cards, panels, inner surfaces only |
| **Tierra** | `#141210` | All body text, borders, near-black with warm undertone |

**Supporting tones (derived, not additional colors):**
- `#0035A0` — deep blue for nav scrolled state and hero shadow panel (a darker shade of Signal Blue)
- `#DDD6CA` — border color on light sections (a darker shade of Concreto)
- `#9A8A78` — secondary text, labels, muted mono (a darker shade of Concreto)
- `#6B5A48` — tertiary text, descriptions (between Concreto and Tierra)

**Color as spatial structure — Barragán's rule:**
Each section owns one color field. Scrolling through the page is moving through a courtyard.

| Section | Ground color | Notes |
|---|---|---|
| Hero | `#0047BB` Signal Blue | Full bleed. Deep blue shadow panel on right (30% width, `#0035A0`) |
| Work | `#F0EDE6` Concreto | Light reading surface. Blue section titles, terracotta index numbers |
| About | `#F0EDE6` Concreto | Same ground. Sticky left panel. |
| Contact | `#F0EDE6` Concreto | Inherits from About layout |

Hard cuts between sections — no gradient transitions, no fades, no scroll-triggered color blending. The cut is the design.

---

### Typography System

Three typefaces. Each has a strictly defined domain — do not interchange them.

| Typeface | Source | Domain | Notes |
|---|---|---|---|
| **Bebas Neue** | Google Fonts | Display, H1, section titles, nav logotype | All caps, condensed. Barragán's volumetric geometry in type. Signal Blue on section titles, Terracotta on the final/emphasis word in hero headlines |
| **DM Sans** | Google Fonts | Body copy, project descriptions, about text, sub-headings | Weight 300–400. Light — the quiet concrete surface between color walls. Never bold in body context |
| **IBM Plex Mono** | Google Fonts | Index numbers, nav links, labels, tags, metadata, timestamps | Weight 300. Uppercase, letter-spacing 0.18–0.22em. Japan's wayfinding precision |

**Load in `index.html`:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&family=IBM+Plex+Mono:wght@300;400&display=swap" rel="stylesheet">
```

**Update `src/constants/theme.js`:**
```js
fonts: {
  display: "'Bebas Neue', Impact, sans-serif",
  body:    "'DM Sans', system-ui, sans-serif",
  mono:    "'IBM Plex Mono', 'Courier New', monospace",
},
```

**Type scale:**
- Hero H1: Bebas Neue, `clamp(48px, 8vw, 72px)`, line-height 0.93, letter-spacing 0.02em
- Section title: Bebas Neue, 32–40px, Signal Blue
- Sub-heading / project title: Bebas Neue, 20–24px, Tierra
- Body: DM Sans 300, 16px, line-height 1.7, Tierra
- Index / label: IBM Plex Mono 300, 9–11px, uppercase, letter-spacing 0.2em, `#9A8A78`
- CTA / nav links: IBM Plex Mono 300, 9px, uppercase, letter-spacing 0.18em

---

## Section Map

All sections in `App.js`. Single-page, no routing. Add new sections by inserting `<section>` elements.

| # | ID | Ground | Status | Notes |
|---|---|---|---|---|
| 01 | `#home` | Signal Blue | **Redesign** | Blue hero wall with deep blue shadow panel right. Bebas H1 with terracotta accent word. IBM Plex Mono index tag. Concreto sub-band with CTA. White band with descriptor + availability stamp. |
| 02 | `#work` | Concreto | **New** | 3–4 selected projects. Sticky left label panel (reuse `About/styled` pattern). Terracotta index numbers. Project titles in Bebas. Descriptions in DM Sans 300. |
| 03 | `#about` | Concreto | **Expand** | Keep sticky split-panel. Update typography and tone. Product-engineer narrative. |
| 04 | `#contact` | Concreto | **Refine** | Inherits from `About/styled`. Visual language update only. |
| 05 | `#writing` | TBD | **Future** | Optional. Insert between Work and About when ready. |

---

## Hero Section Spec

```
[Nav: transparent on load → #0035A0 on scroll]
[Logo: "YN." — Bebas Neue, terracotta dot]          [Work · About · Contact — IBM Plex Mono, inactive rgba(255,255,255,0.25)]

— BLUE WALL (#0047BB) — deep blue shadow panel right (28% width, #0035A0) —

[IBM Plex Mono 9px, rgba(255,255,255,0.28), tracking .22em]
01 — Senior Software Engineer

[Bebas Neue, clamp(48px,8vw,72px), white, line-height .93]
MAKING COMPLEX
THINGS SIMPLE.
              ↑ "SIMPLE." in Terracotta #D95B2A

— CONCRETO BAND (#F0EDE6) —
[IBM Plex Mono 9px, #9A8A78]                    [IBM Plex Mono 9px, Signal Blue, border .5px Signal Blue]
01 — Senior Software Engineer                    View work →

— WHITE BAND (#FFFFFF) —
[DM Sans 300, 12px, #6B5A48, max-width 300px]   [IBM Plex Mono 9px, Terracotta, border .5px Terracotta]
Product engineer turned software                 Available
engineer — building systems as
considered as they are correct.
```

---

## Progressive Revamp Order

Do not rewrite everything at once. Each step is independently shippable.

1. **Fonts** — load Bebas Neue, DM Sans, IBM Plex Mono in `index.html`
2. **Theme tokens** — update `theme.js` with new color values and font families
3. **Global styles** — update `index.css` with new background colors, scrollbar, cursor using new palette
4. **Navigation** — transparent/scrolled behavior, Terracotta dot, IBM Plex Mono links, deep blue scrolled bg
5. **Hero** — full blue wall, shadow panel, Bebas H1, three-band layout (blue / concreto / white)
6. **Work section** — new section, new component, insert in `App.js` between Home and About
7. **About** — typography update, copy refinement, keep layout structure
8. **Contact** — visual language only, keep structure

---

## Component & Code Conventions

- All styles in colocated `styled.js` via styled-components v5
- Theme tokens from `theme.js` — never hardcode hex values
- Shared animations from `animations.js` — add keyframes there
- Semantic HTML — accessibility is not optional
- All images need descriptive `alt` text
- No inline styles unless absolutely necessary
- No mixed styling approaches — everything through styled-components
- Keep logic and presentation separated

---

## Performance & Correctness

- **Do not change `overflow-x: clip`** — breaks sticky positioning
- **Do not refactor scroll progress bar to `useState`** — performance regression
- `Section` framer-motion threshold `0.2`, `triggerOnce: true` — do not adjust without testing on tall sections
- Font loading: `font-display: swap`, `<link rel="preconnect">` for Google Fonts
- Images: compress and size-hint anything in `public/`
- Target: LCP < 2.5s mobile, CLS < 0.1

---

## Content Principles

- First person. Direct. Human. Not a LinkedIn summary.
- Lead with outcomes and impact — not tools or job titles.
- Surface the product engineering background: how did thinking about users shape engineering decisions?
- Keep copy tight. Respect the reader's attention.
- Never use: "passionate about", "results-driven", "rockstar", "ninja", "10x", or any phrase on 10,000 other portfolios.
- Copy lives in `src/constants/` — never in component files.

---

## What to Avoid

- Any color outside the five defined (Signal Blue, Terracotta, Concreto, White, Tierra)
- Gradient transitions between sections — hard cuts only
- Terracotta used as a background field — it is an accent mark, not a wall color
- Routing — this is intentionally single-page
- Duplicating layout primitives already in `About/styled.js`
- Skill bars, technology logo grids, anything substituting visual noise for demonstrated expertise
- Auto-playing media
- Refactoring the scroll progress bar to `useState`
- Generic font substitutions — the three typefaces are the system

---

## Reference Library

Study these before proposing any visual decision. They are the source material, not suggestions.

### Architecture & Space
- **Luis Barragán — Casa Barragán, Mexico City** — The primary reference. Magenta staircase, yellow library, pink courtyard wall. Color as spatial declaration. `barragan-foundation.org`
- **Luis Barragán — Casa Gilardi, Mexico City** — His last commission. Hot pink corridor, water inside the house. Monumental color at domestic scale. Study the relationship between the pink and terracotta walls.
- **Luis Barragán — San Cristóbal Stables** — The fuchsia-magenta wall beside the water. The shadow and light relationship. How one color field reads differently depending on what's beside it.
- **Tadao Ando** — The Japanese Barragán. Concrete, one material, light as the second element. Same discipline from a different culture. `tadao-ando.com`
- **SANAA (Sejima + Nishizawa)** — Transparency, composed restraint. Warmth from proportion, not ornament.

### Graphic Design & Posters
- **Ikko Tanaka** — Primary colors as flat fields. Type as image. The Japanese poster master — exactly the discipline this site uses. Search: "Ikko Tanaka Nihon Buyo poster".
- **Yusaku Kamekura** — Japanese graphic design using pure primaries and geometry. Clean signal colors with strong typographic hierarchy.
- **Otl Aicher — 1972 Munich Olympics** — Primary colors as a system. Grid as identity. Every element placed with reason. The European parallel to the Japanese poster tradition.
- **Jan Tschichold — Die Neue Typographie** — The grid and typographic clarity underlying both references.

### Retail & Campaign
- **Uniqlo campaign work** — Signal blue and warm accents in a serious, global professional identity. Study their in-store and outdoor campaigns, not the website.
- **Muji seasonal posters** — Flat color, restrained palette, type-led. How primary colors become sophisticated through restraint.

### Digital & Studio
- **Anagrama (Monterrey, MX)** — `anagrama.com` — Mexican studio at international standard. Warm structural palette. No regional clichés. Closest digital reference to the target aesthetic.
- **Order (New York)** — `order.design` — Editorial typography, generous whitespace, dark-to-light section rhythm.
- **Basement Studio** — `basement.studio` — Dark base, warm type, confident. South American studio with global credibility.
- **Linear.app** — How a dark, precise product interface can feel warm and human simultaneously. Study the section transitions and type hierarchy.

### Typography References
- **Bebas Neue in use** — Search Behance/Dribbble for "Bebas Neue editorial" — study how it's used at large scale without becoming aggressive.
- **IBM Plex Mono** — `ibm.com/plex` — Study IBM's own usage. The mono voice should feel like a technical annotation, not a code block.

### Books to Reference
- *Luis Barragán: The Quiet Revolution* — Federica Zanco (ed.) — The definitive monograph. Color photography of all major works.
- *Graphic Design in Japan* (annual) — JAGDA — Understanding how Japanese designers use primary colors with discipline.
- *The Elements of Typographic Style* — Robert Bringhurst — For any typographic decision that feels uncertain.

---

## Working with Claude Code

1. **Read this file first. Every session.**
2. Before any visual decision, ask: does this serve the spatial logic (Barragán) or the color precision (Japan)?
3. The five colors are the system. If something feels like it needs a sixth, the layout needs adjustment.
4. Terracotta is a stamp, not a field. One use per section maximum.
5. Sections are walls. Hard cuts. No fades between sections.
6. Copy changes go in `src/constants/` — never in component files.
7. Do not touch `overflow-x: clip` or the scroll progress DOM ref without flagging it first.
8. When uncertain about a visual decision — consult the reference library above before defaulting to something generic.
9. This is a living document. Visual refinements are expected across multiple iterations. Propose changes to this file when the design evolves.

---

*Last updated: May 2026 — progressive revamp in progress. Visual direction locked, implementation ongoing.*