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

**Luis Barragán** — spatial logic, volumetry, color as architecture. Sections are walls. Scrolling is moving through a courtyard. Hard cuts between color fields. No gradients, no transitions — the cut is the design.

**Osaka billboard design** — electric color, graphic confidence, no apology. The blue of a Shinjuku sign at 9pm. Type at a scale that makes decisions before the words do. Signal red as the eye-stopper. Maximum contrast everywhere.

Both sources use color the same way: not to decorate, but to declare.

> **The one-line brief:** Barragán's spatial logic. Osaka's electric palette. Billboard type scale.

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
- `overflow-x: clip` on `html` and `#container` — **do not change to `overflow-x: hidden`**. It creates a new scroll container and breaks `position: sticky`.
- Navigation tracks active section via `getBoundingClientRect().top <= 80` in a scroll listener
- Scroll-progress bar written directly to a DOM ref — **do not refactor to `useState`**

### Navigation Component
Fixed at top. Behavior:
- Transparent over hero section
- Solid `#0026CC` (Deep Blue) once user scrolls past hero
- `0.5px` bottom border appears on scroll: `rgba(255,255,255,0.1)`
- Left: monogram/logotype in Bebas Neue, white. Red dot (`#FF3D2E`) after the monogram
- Right: section links in IBM Plex Mono, 9px, uppercase, 0.18em tracking, `rgba(255,255,255,0.3)`. Active: `#FFFFFF`
- Scroll progress bar: `#FF3D2E` Signal Red

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

Five colors. No additions. If something feels like it needs a sixth color, the layout or typography needs adjustment instead.

| Name | Hex | Role |
|---|---|---|
| **Electric Blue** | `#0038FF` | Hero wall, section titles on light/dark bg, active states, links. The identity color — full saturation, no grey in it. |
| **Signal Red** | `#FF3D2E` | The eye-stopper. One use per section maximum: final word in hero headline, index numbers on dark sections, availability mark, nav dot, scroll bar. |
| **Void** | `#0A0A0A` | Work section ground. Near-black — the night behind the Osaka ad. |
| **White** | `#FFFFFF` | About / Contact section ground. Cards, panels. Maximum contrast. |
| **Deep Blue** | `#0026CC` | Hero shadow panel (right side diagonal). Nav scrolled state. Depth within the blue wall. |

**Supporting tones (derived, not additional colors):**
- `#E0E0E0` — borders and dividers on white sections
- `#1E1E1E` — dividers on Void sections
- `#222` — borders on Void section cards
- `rgba(255,255,255,0.3)` — muted text and secondary labels on blue/dark sections
- `rgba(255,255,255,0.1)` — subtle borders on blue/dark sections
- `#555` — secondary text on white sections
- `#999` — muted/tertiary text and mono labels on white sections

**Color as spatial structure — Barragán's rule:**
Each section is a wall. Scrolling is moving through a courtyard. Hard cuts only — no gradient transitions, no fades, no scroll-triggered color blending between sections.

| Section | Ground | Type color | Accent |
|---|---|---|---|
| Hero | `#0038FF` Electric Blue | `#FFFFFF` white | `#FF3D2E` on final headline word |
| Work | `#0A0A0A` Void | `#FFFFFF` white, `#0038FF` blue on titles | `#FF3D2E` on index numbers |
| About | `#FFFFFF` White | `#0A0A0A` black, `#0038FF` blue on section title | `#FF3D2E` on availability |
| Contact | `#FFFFFF` White | `#0A0A0A` black, `#0038FF` blue on section title | `#FF3D2E` sparingly |

---

### Typography System

Three typefaces. Strictly defined domains — do not interchange them.

| Typeface | Source | Domain |
|---|---|---|
| **Bebas Neue** | Google Fonts | Display, H1, section titles, project titles, nav logotype. All caps, condensed. Billboard scale — no apology for size. |
| **DM Sans** | Google Fonts | Body copy, project descriptions, about text, sub-headings. Weight 300–400. The quiet surface between loud type. |
| **IBM Plex Mono** | Google Fonts | Index numbers, nav links, labels, tags, metadata. Weight 300. Uppercase, 0.18–0.22em tracking. The annotation layer. |

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

**Type scale — push sizes. Japanese billboards don't shrink their type:**
- Hero H1: Bebas Neue, `clamp(64px, 10vw, 96px)`, line-height 0.9, letter-spacing 0.01em
- Section title: Bebas Neue, `clamp(40px, 6vw, 64px)`, line-height 0.92
- Project title: Bebas Neue, 24–32px
- Sub-heading: Bebas Neue, 20–24px
- Body: DM Sans 300, 16px, line-height 1.7
- Index / label: IBM Plex Mono 300, 9–11px, uppercase, letter-spacing 0.2–0.22em
- Nav links: IBM Plex Mono 300, 9px, uppercase, letter-spacing 0.18em
- CTA: IBM Plex Mono 300, 9px, uppercase, letter-spacing 0.18em, border 0.5px

**Color in type:**
- Electric Blue on key words in headlines when on white/light sections
- Signal Red on the final word or punctuation word in the hero headline only
- Signal Red on index numbers when on Void (dark) sections
- Never use Signal Red on more than one typographic element per section

---

## Section Map

All sections in `App.js`. Single-page, no routing. Add new sections by inserting `<section>` elements.

| # | ID | Ground | Status | Notes |
|---|---|---|---|---|
| 01 | `#home` | Electric Blue | **Redesign** | Full blue wall. Deep blue diagonal shadow panel right. Large Bebas H1 — "SIMPLE." in Signal Red. IBM Plex Mono index tag. Concreto sub-band with CTA. |
| 02 | `#work` | Void | **New** | Near-black wall. Large Bebas section title in white + blue. Signal Red index numbers. Project list with arrow navigation. Sticky left label. |
| 03 | `#about` | White | **Expand** | Keep sticky split-panel layout from `About/styled`. Update typography and copy. Blue section title, black body. |
| 04 | `#contact` | White | **Refine** | Inherits from `About/styled`. Visual language update only. |
| 05 | `#writing` | TBD | **Future** | Optional. Insert between Work and About when ready. |

---

## Hero Section Spec

```
[Nav: transparent → #0026CC on scroll]
[Logo: "YN." Bebas Neue white, red dot]          [Work · About · Contact — IBM Plex Mono, rgba(255,255,255,0.3)]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HERO WALL — #0038FF                    │  SHADOW — #0026CC
                                       │  (diagonal cut, ~28% width)
[IBM Plex Mono 9px, rgba(255,255,255,0.28), tracking .22em]
01 — Senior Software Engineer · São Paulo

[Bebas Neue, clamp(64px,10vw,96px), #FFFFFF, line-height .9]
MAKING COMPLEX
THINGS SIMPLE.
       ↑ "SIMPLE." in Signal Red #FF3D2E

[border-top rgba(255,255,255,0.1), padding-top 1.2rem]
[IBM Plex Mono 9px, rgba(255,255,255,0.3)]       [IBM Plex Mono 9px, #FFFFFF, border .5px rgba(255,255,255,0.4)]
01 — Senior Software Engineer · SP               View work →
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

The diagonal shadow panel is a CSS triangle via `clip-path` or a `::after` pseudo-element — not a separate div. Creates the volumetric depth without additional markup.

---

## Work Section Spec

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VOID WALL — #0A0A0A

[IBM Plex Mono 9px, #444, tracking .22em]
02 — Selected work

[Bebas Neue, 48–64px, white / blue on key word]
WORK THAT MATTERS.

[Project list — border-bottom #1E1E1E]
[#FF3D2E mono 9px]  [Bebas Neue 24px #FFFFFF]  [→ #333]
01                  Project Title               →
02                  Project Title               →
03                  Project Title               →
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Progressive Revamp Order

Do not rewrite everything at once. Each step is independently shippable.

1. **Fonts** — load Bebas Neue, DM Sans, IBM Plex Mono in `index.html`
2. **Theme tokens** — update `theme.js` with new color values and font families
3. **Global styles** — update `index.css`: page bg to `#F7F7F7`, scrollbar, cursor in Signal Red
4. **Navigation** — transparent/scrolled states, red dot on monogram, IBM Plex Mono links
5. **Hero** — full blue wall, diagonal shadow panel, large Bebas H1, Signal Red on final word
6. **Work section** — new component, Void ground, insert in `App.js` after Home
7. **About** — type scale update, copy refinement, keep layout structure
8. **Contact** — visual language only, keep structure

---

## Component & Code Conventions

- All styles in colocated `styled.js` via styled-components v5
- Theme tokens from `theme.js` — never hardcode hex values inline
- Shared animations from `animations.js` — add new keyframes there
- Semantic HTML — accessibility is not optional
- All images need descriptive `alt` text
- No inline styles unless absolutely necessary
- No mixed styling approaches — everything through styled-components
- Keep logic and presentation separated

---

## Performance & Correctness

- **Do not change `overflow-x: clip`** — breaks sticky positioning
- **Do not refactor scroll progress bar to `useState`** — performance regression on every scroll frame
- `Section` framer-motion `threshold: 0.2`, `triggerOnce: true` — do not adjust without testing tall sections
- Font loading: `font-display: swap` and `<link rel="preconnect">` for Google Fonts
- Images: compress and provide explicit dimensions for anything in `public/`
- Target: LCP < 2.5s mobile, CLS < 0.1

---

## Content Principles

- First person. Direct. Human. Not a LinkedIn summary.
- Lead with outcomes and impact — not tools or job titles.
- Surface the product engineering background: how did thinking about users shape engineering decisions?
- Keep copy tight. Respect the reader's attention.
- Never use: "passionate about", "results-driven", "rockstar", "ninja", "10x".
- Copy lives in `src/constants/` — never in component files.

---

## What to Avoid

- Any color outside the defined five (Electric Blue, Signal Red, Void, White, Deep Blue)
- Gradient transitions between sections — hard cuts only, always
- Signal Red used more than once per section — it loses its power
- Signal Red as a background field — it is a mark, not a wall
- Routing — this is intentionally single-page
- Duplicating layout primitives already in `About/styled.js`
- Shrinking the type scale — hero H1 must stay at `clamp(64px,10vw,96px)` minimum
- Skill bars, technology logo grids, anything substituting visual noise for expertise
- Auto-playing media
- Generic font substitutions — the three typefaces are the system
- Softening the blue — `#0047BB` and similar corporate blues are not substitutes for `#0038FF`

---

## Reference Library

Study these before proposing any visual decision. They are the source material, not mood board suggestions.

### Architecture & Space (Barragán)
- **Casa Luis Barragán, Mexico City** — The primary spatial reference. Sections as walls. Color as structure, not finish. `barragan-foundation.org`
- **Casa Gilardi, Mexico City** — Hot pink corridor, water inside the house. Monumental color at domestic scale. Study how one color field reads against the next.
- **San Cristóbal Stables** — The relationship between the shadow and light on adjacent color walls. How depth is created without gradients.
- **Tadao Ando** — The Japanese Barragán. Concrete, one material, light as the second element. Same spatial discipline from a different culture.

### Billboard & Poster Design (Osaka)
- **Ikko Tanaka** — Japanese poster master. Primary colors as flat fields at large scale. Search: "Ikko Tanaka Nihon Buyo poster", "Ikko Tanaka graphic design".
- **Yusaku Kamekura** — Pure primaries and geometry. Signal colors with strong typographic hierarchy. 1964 Tokyo Olympics poster.
- **Osaka Dotonbori signage** — The actual reference. Study the scale, the color saturation, the contrast. Not the neon chaos — the composed department store window and the flat-color transit ads.
- **Otl Aicher — 1972 Munich Olympics** — Primary colors as a system with grid discipline. The European parallel to Japanese poster design.
- **Uniqlo campaign work** — How electric blue and signal red translate into a global professional identity. Study outdoor and in-store campaigns specifically.
- **Muji seasonal posters** — Flat color, restrained use, type-led. Restraint as the thing that makes the color land harder.

### Digital & Studio References
- **Anagrama (Monterrey, MX)** — `anagrama.com` — Mexican studio at international standard. The closest digital reference to the target aesthetic.
- **Basement Studio** — `basement.studio` — Dark sections, bold type, warm confidence. South American studio with global credibility.
- **Order (New York)** — `order.design` — Editorial type scale, section rhythm, professional restraint.
- **Linear.app** — How a dark, precise product can feel bold and human simultaneously. Study section transitions and type hierarchy.
- **Stripe Press** — How a primary-color system works at full saturation in a serious professional digital context.

### Typography References
- **Bebas Neue in use** — Search Behance/Dribbble "Bebas Neue editorial" and "Bebas Neue billboard". Study at 80px+ — at that scale it becomes architecture, not type.
- **IBM Plex family** — `ibm.com/plex` — IBM's own usage guidelines. The mono voice is annotation, not decoration.
- **Japanese wayfinding (JR East, Tokyo Metro)** — How IBM Plex Mono should feel: precise, functional, trusted.

### Books
- *Luis Barragán: The Quiet Revolution* — Federica Zanco (ed.) — The definitive monograph. Color photography of all major works.
- *Graphic Design in Japan* — JAGDA annual — How Japanese designers use primary colors with discipline.
- *The Elements of Typographic Style* — Robert Bringhurst — For any typographic decision that feels uncertain.
- *Helvetica and the New York City Subway System* — Paul Shaw — On wayfinding type used at scale. Applicable to the IBM Plex Mono usage.

---

## Working with Claude Code

1. **Read this file first. Every session.**
2. Before any visual decision: does this serve the spatial logic (Barragán) or the billboard energy (Osaka)?
3. The five colors are the system. A sixth color means the layout needs adjustment.
4. Signal Red appears once per section. That's the rule.
5. Type sizes are non-negotiable — hero H1 at `clamp(64px,10vw,96px)` minimum. Do not soften.
6. Sections are walls. Hard cuts. No fades.
7. Copy changes go in `src/constants/` — never in component files.
8. Do not touch `overflow-x: clip` or the scroll progress DOM ref without flagging it first.
9. When uncertain about any visual decision — consult the reference library before defaulting to something generic.
10. This is a living document. When the design evolves, propose updates to this file so the next session starts from the right place.

---

*Last updated: May 2026 — visual direction locked. Implementation in progress.*