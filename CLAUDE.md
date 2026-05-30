# CLAUDE.md

> Read this file at the start of every session before touching any code.

---

## Project Identity

This is the personal portfolio of a **senior software engineer** with a background in **product engineering** — someone who has lived on both sides of the product/engineering divide and builds with users in mind. The site reflects that dual fluency: opinionated about craft, obsessive about experience, precise in execution.

This is not a resume dump. It is a professional statement — the kind of work that looks like it came out of an experienced design agency: fluid, considered, and intentional in every detail.

---

## Commands

```bash
npm start      # dev server (--openssl-legacy-provider flag required for Node 17+)
npm run build  # production build
npm test       # run tests in watch mode
```

No linter configured beyond CRA's built-in ESLint.

---

## Stack

- **Framework**: React (Create React App), single-page, no routing
- **Styling**: `styled-components` v5 — all component styles live in colocated `styled.js` files
- **Animations**: `framer-motion` v4 — entry animations via the `Section` wrapper; CSS-only custom cursor
- **Theme tokens**: `src/constants/theme.js`
- **Global styles**: `src/index.css` — section backgrounds, scroll behavior, custom cursor, scrollbar
- **Shared animations**: `src/constants/animations.js`
- **Package manager**: npm

---

## Architecture

Single-page app. One long scroll. Three `<section>` elements — `#home`, `#about`, `#contact` — defined in `src/App.js`.

### Scroll & Navigation
- `scroll-snap-type: y proximity` on `html`; `scroll-snap-align: start` on every section
- `overflow-x: clip` (not `hidden`) on `html` and `#container` — **intentional**. Using `overflow-x: hidden` would create a new scroll container and break `position: sticky`. Do not change this.
- `Navigation` tracks active section via `getBoundingClientRect().top <= 80` in a scroll listener
- Scroll-progress bar width is written directly to a DOM ref — no state re-render on every scroll frame

### Sticky Split-Panel Layout
Both `About` and `Contact` use the same two-column pattern from `src/components/About/styled.js`:
- `LeftPanel` — `position: sticky; top: 90px`, fixed-width 280px
- `RightPanel` / `ContactRight` — `flex: 1`, natural scroll

`Contact` imports its layout primitives (`Container`, `LeftPanel`, etc.) directly from `../About/styled` — this is intentional deduplication. Do not recreate them.

### Data
All content lives in `src/constants/`:
- `about.js` — about section copy and details
- `contact.js` — contact links and handles
- `home.js` — hero content
- `work.js` — project entries

**Editing copy means editing those files, not the components.**

### Motion
- `Section` wrapper (`src/components/section.js`) uses framer-motion with `threshold: 0.2` and `triggerOnce: true`
- For very tall sections, the fade-in fires once ~25% of content fills the viewport — expected behavior
- Custom cursor is CSS-only via `.cursor` class; `--x`/`--y` CSS variables set in `src/components/Cursor/index.js`

---

## Visual Identity & Design System

The site uses a bold, high-contrast tricolor accent system on a white background. Every color has a specific role — do not reassign them.

| Token | Hex | Role |
|---|---|---|
| Blue | `#005cef` | Headings, links, active nav states |
| Yellow | `#ffdd18` | Nav background, section labels, accents |
| Red | `#ff1f25` | Custom cursor, scroll progress bar |
| White | `#ffffff` | Page background |

### Design Principles

The goal is work that looks like it came from an experienced design agency — fluid, professional, and considered. Specifically:

- **Confidence over decoration.** Every visual decision must be intentional, not ornamental. If a detail doesn't earn its place, remove it.
- **Typography carries the weight.** Strong hierarchy, distinctive pairings, generous and deliberate spacing. Font choices should feel curated, not defaulted to.
- **Motion is earned.** Framer-motion transitions and micro-interactions should feel like polish, not performance. Use `triggerOnce` and keep animations snappy.
- **The tricolor system is the identity.** Blue/yellow/red is the brand. Reinforce it — don't dilute it with additional accent colors.
- **White background, not dark.** The existing site is light. Work within that. High contrast via the accent colors, not by switching to a dark theme.
- **Agency-grade layout quality.** Spacing, alignment, and proportion should be deliberate. Sections should breathe. Nothing should feel cramped or accidental.

### What This Should Feel Like
A senior creative technologist's portfolio — not a developer template. Think: Instrument, Fantasy, Ueno (RIP), or similar — studios where engineering and design are indistinguishable. The product engineering background is the differentiator: frame decisions in terms of user value and business impact, not just technical implementation.

---

## Project Structure

```
src/
├── App.js                  # Root — three sections, no routing
├── index.css               # Global styles, scroll behavior, cursor, scrollbar
├── constants/
│   ├── theme.js            # Design tokens (colors, typography, spacing)
│   ├── animations.js       # Shared keyframe definitions
│   ├── about.js            # About section content
│   ├── contact.js          # Contact section content
│   ├── home.js             # Hero section content
│   └── work.js             # Project entries
└── components/
    ├── section.js          # Framer-motion Section wrapper (shared)
    ├── Cursor/             # CSS custom cursor
    ├── Navigation/         # Sticky nav + scroll progress bar
    ├── Home/               # Hero section
    ├── About/
    │   └── styled.js       # Layout primitives (also imported by Contact)
    ├── Contact/
    ├── SideDrawer/         # Not rendered — but styled.js is still imported by Navigation for mobile menu. Do not delete.
    └── Work/               # Dormant — component exists but is not rendered in App.js
```

---

## Component & Code Conventions

- All component styles in colocated `styled.js` files using `styled-components` v5
- Theme tokens from `src/constants/theme.js` — use them, don't hardcode hex values
- Shared animations from `src/constants/animations.js` — add new keyframes there, not inline
- Semantic HTML throughout — accessibility is not optional
- All animations must respect `prefers-reduced-motion`
- All images require `alt` text
- Do not mix styling approaches — everything goes through styled-components
- Do not add inline styles unless there is no other option
- Keep component logic and presentation separated

---

## Performance & Correctness

- **Do not change `overflow-x: clip` to `overflow-x: hidden`** — this breaks sticky positioning
- Scroll listener writes directly to a DOM ref for the progress bar — do not refactor to state without understanding the performance tradeoff
- `Section` threshold of `0.2` with `triggerOnce: true` is deliberate — do not adjust without testing on very tall sections
- Image optimization: compress and size-hint anything added to `public/`
- Font loading: use `font-display: swap` for any new web fonts

---

## Content Principles

- Write in first person. Direct. Human.
- Lead with outcomes and impact — not tools, frameworks, or job titles.
- The product engineering background is a differentiator. Surface it: how did thinking about users and business context shape the engineering decisions?
- Keep copy tight. Respect the reader's attention.
- Never use: "passionate about", "results-driven", "rockstar", "ninja", "10x", or any phrase that appears on 10,000 other portfolios.
- Copy lives in `src/constants/` — editing it never requires touching component files.
- Before editing copy or text ask the user first for confirmation. Tasks for updating text should only update text.

---

## What to Avoid

- Introducing new accent colors outside the blue/yellow/red system
- Switching to a dark theme — this is a light site
- Adding routing (this is intentionally single-page)
- Duplicating layout primitives that already exist in `About/styled.js`
- Skill bars, technology logo grids, or anything that substitutes visual noise for demonstrated expertise
- Auto-playing media
- Refactoring the scroll progress bar to use React state (performance regression)
- Generic font choices — Inter, Roboto, Arial, system-ui are not appropriate here

---

## Working with Claude Code

1. **Read this file first. Every session.**
2. Respect the tricolor system — blue/yellow/red are the identity, not suggestions.
3. Before adding a dependency, check if it's already solved by styled-components, framer-motion, or vanilla CSS.
4. Copy changes go in `src/constants/` — not in component files.
5. Do not touch the `overflow-x: clip` or scroll listener architecture without flagging it first.
6. When proposing visual changes, default to agency-grade quality: precise spacing, strong typography, intentional motion.
7. Flag any conflict with the design system and propose a solution — don't silently default to something generic.

---

*Last updated: May 2026 — portfolio revamp in progress.*