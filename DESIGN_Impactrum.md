---
version: beta-5
name: Impactrum
description: Design system for Impactrum — a Korea-based premium LED display manufacturer and integrator. Pages read as a curated showroom: white canvas plus two distinct off-white page surfaces (warm and cool) carry section rhythm, and a separate adaptive card tint system gives sub-areas within each section their own quiet presence. Wanted Sans Variable carries every type role; hierarchy is built from size and letter-spacing, never from weight piling or saturation. Black is reserved for typography, primary CTAs, ribbon-badges, and the wordmark — never as a backdrop. The five-color accent palette (orange, pink, violet, emerald, blue) lives as point emphasis only: line-icon strokes, eyebrow text, footer column dots, pastel pill chips, inline link emphasis. Two locked accent mappings — footer columns (Products→orange, Solutions→pink, Company→violet, Resources→emerald) and product-type pills (Indoor→orange, Outdoor→pink, Transparent→violet, Custom→emerald) — anchor the system; outside those patterns, accent choice is free. The action layer (buttons, ribbons, primary CTAs) is strictly monochrome.

## Overview

The system rests on four pillars:

1. **Three page backgrounds carry section rhythm.** Canvas (#ffffff), warm (#fbfaf6), cool (#f5f6f9). These three are intentionally close to white — they whisper rather than shout. The deliberate-but-quiet difference is what was missing in earlier revisions.
2. **Cards adapt their tint to the page bg they sit on.** A "brown card" on canvas is `#faf5ef`; the same brown card on a cool page becomes `#f4eee6`. The card stays recognizable but adjusts its lightness so it neither disappears into nor floats above the page. This is the central new rule in beta-5.
3. **Hierarchy from size, not weight.** Display 72px and h1 48px do the heavy lifting; weight progression is `500 → 600 → 700`, capped at 700.
4. **Korean-first typography.** Wanted Sans Variable steps in 100-unit increments. Body weight is 500. `subpixel-antialiased` (never `antialiased`).

**Key characteristics:**

- All borders 1px. Emphasis is by color shift, not thickness.
- Card radius caps at 16px.
- No shadows on standard components. Depth comes from page-vs-card tone shift and hairline borders.
- 120px between major bands on desktop (80px mobile).

## Surface System (the central decision)

### Two layers

**Layer 1 · Page background.** Full-width section bleeds. Three tones, all very pale, intentionally chosen so adjacency is just barely noticeable — the page never asks for attention.

**Layer 2 · Card tint.** Bounded card-sized areas, sitting on top of a page bg. Two tint families (brown / gray), each with three context-specific values depending on which page bg the card sits on.

### Page backgrounds (Layer 1)

| Token | Hex | When to use |
|---|---|---|
| `--canvas` | `#ffffff` | Default. Hero, prose-heavy sections, anywhere the content itself is the focus. |
| `--surface-warm` | `#fbfaf6` | Featured products, customer stories, brand pages — sections that want warmth. |
| `--surface-cool` | `#f5f6f9` | Spec tables, technical features, comparison grids — sections that want structure. |

### Card tints (Layer 2)

A card's tint depends on the page bg underneath it. Same card name, different hex:

| Page bg | Brown card | Gray card |
|---|---|---|
| Canvas `#ffffff` | `#faf5ef` | `#f2f4f7` |
| Warm `#fbfaf6` | `#f7eee2` | `#e7ebf1` |
| Cool `#f5f6f9` | `#f4eee6` | `#e8ecf3` |

The pattern: the lighter the page, the lighter the card. On canvas, cards are barely-there light tints. On warm or cool pages, cards step one notch deeper so they don't get swallowed by the page tone.

White cards (`#ffffff`) are also valid on any page bg, paired with hairline borders.

### Why card tints are adaptive

In earlier revisions, a single `--tint-warm` value was used everywhere. On canvas it looked right, but on a cool page the warm card floated as a beige patch detached from the page. On a warm page the same value collapsed into the bg and disappeared. The fix is to define card tints per page context: same conceptual card, different lightness depending on its page bg, so the card always sits one quiet step away from the page underneath.

### Token naming

Cards are addressed by name (`.card-brown`, `.card-gray`) and the correct hex is selected by the page bg class wrapping them (`.bg-canvas`, `.bg-warm`, `.bg-cool`). Designers and developers don't write hex; they choose page bg + card type, and the system picks the right tint.

```css
.bg-canvas .card-brown { background: #faf5ef; }
.bg-warm   .card-brown { background: #f7eee2; }
.bg-cool   .card-brown { background: #f4eee6; }
.bg-canvas .card-gray  { background: #f2f4f7; }
.bg-warm   .card-gray  { background: #e7ebf1; }
.bg-cool   .card-gray  { background: #e8ecf3; }
```

### What was removed

- `--surface-soft` (#f6f4f0). The earlier single warm-ish surface that doubled as footer bg and section bg. Split into the new page-bg trio (canvas/warm/cool) and the adaptive card tints.
- Color-block sections (orange/pink/violet/emerald/blue light tints). Retired earlier — they pulled the page toward children's-brochure territory.
- The adjacency rule ("two same-tone sections never touch"). The new page bgs are pale enough that two adjacent same-tone sections look like one continuous section, which is fine. Rhythm comes from intentional tone changes when wanted, not from a forbidden adjacency.

## Colors

### Tier 1 · Monochrome chrome (the action layer)

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#111111` | Primary CTA, h1/h2 headlines, body emphasis, wordmark, ribbon-badges |
| `--ink-2` | `#2a2a2a` | Primary CTA hover |
| `--ink-pressed` | `#1a1a1a` | Primary CTA pressed |
| `--ink-body` | `#374151` | Body text on canvas |
| `--ink-mute` | `#6b7280` | Captions, secondary labels |
| `--ink-soft` | `#898989` | Meta info, deemphasized |
| `--ink-disabled` | `#a1a1a1` | Disabled primary text |
| `--ink-disabled-2` | `#c4c4c4` | Disabled secondary text |

### Tier 2 · Page backgrounds & card tints

(See Surface System above for the full tables.)

```css
/* page backgrounds */
--canvas:       #ffffff;
--surface-warm: #fbfaf6;
--surface-cool: #f5f6f9;

/* card tints — applied via .bg-* .card-* combinations */
/* on canvas */  brown #faf5ef · gray #f2f4f7
/* on warm   */  brown #f7eee2 · gray #e7ebf1
/* on cool   */  brown #f4eee6 · gray #e8ecf3
```

### Tier 3 · Hairlines

| Token | Hex | Use |
|---|---|---|
| `--line` | `#e5e7eb` | Default card and divider hairline |
| `--line-strong` | `#d4d4d4` | White-button border, input border |
| `--line-soft` | `#f0f0ec` | Subtle dividers within cards |

### Tier 4 · Five-color accent palette (point use only)

| Token | Hex | Default zone |
|---|---|---|
| `--accent-orange` | `#fb923c` | Indoor LED (locked) |
| `--accent-pink` | `#ec4899` | Outdoor LED (locked) |
| `--accent-violet` | `#8b5cf6` | Transparent LED (locked) |
| `--accent-emerald` | `#34d399` | Custom LED (locked) |
| `--accent-blue` | `#3b82f6` | Free use, status, time |

**Accents are point use:** line-icon strokes, eyebrow text, footer column dots, pastel pill chips, inline link emphasis. Never as page backgrounds or card backgrounds — surface variety is the page bg + card tint job, not the accent job.

### Pastel pill chips

For category tags and status pills. Work on any page bg.

| Token | BG | Text |
|---|---|---|
| `--pill-orange-bg` / `--pill-orange-ink` | `#fff3e5` / `#c2410c` | Indoor (locked) |
| `--pill-pink-bg` / `--pill-pink-ink` | `#fde8f1` / `#9d174d` | Outdoor (locked) |
| `--pill-violet-bg` / `--pill-violet-ink` | `#efe7fe` / `#5b21b6` | Transparent (locked) |
| `--pill-emerald-bg` / `--pill-emerald-ink` | `#e2f7ee` / `#047857` | Custom (locked) |
| `--pill-blue-bg` / `--pill-blue-ink` | `#e4ecff` / `#1d4ed8` | Free use, status |

### Status (semantic)

| Token | BG | Ink | Meaning |
|---|---|---|---|
| `--status-ok` | `#e2f7ee` | `#047857` | Confirmed, in stock, completed |
| `--status-warn` | `#fff3e5` | `#c2410c` | Lead time long, attention |
| `--status-error` | `#fde8f1` | `#9d174d` | Out of stock, error |

## Typography

### Font family

```css
--font: "Wanted Sans Variable", "Wanted Sans", -apple-system, BlinkMacSystemFont,
        "Apple SD Gothic Neo", "Pretendard", "Malgun Gothic", sans-serif;
```

CDN load:

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/complete/WantedSansVariable.min.css">
```

### Weight axis (100-unit stepped)

Wanted Sans operates in 100-unit increments despite "Variable" in the name. Intermediate values render identically to the nearest 100. Do not use intermediate values.

| Weight | Role |
|---|---|
| `300` | Light — not used in standard components |
| `400` | Regular — too thin for Korean body text; avoid |
| `500` | **Body default** |
| `600` | **Emphasis** — buttons, eyebrows, spec labels |
| `700` | **Headlines** — display, h1, h2 |
| `800` | Reserved — bundled but unused |

Hierarchy is built by size and letter-spacing, not weight. Display 72px / -0.04em creates editorial weight no amount of bolder weight could replace at smaller sizes.

### Hierarchy

| Token | Class | Size | Weight | Letter-spacing | Line-height | Use |
|---|---|---|---|---|---|---|
| display | `.t-display` | 72px | 700 | -0.04em | 1.04 | Hero only — once per page max |
| h1 | `.t-h1` | 48px | 700 | -0.035em | 1.08 | Section headlines |
| h2 | `.t-h2` | 28px | 600 | -0.02em | 1.18 | Sub-section / card group titles |
| h3 | `.t-h3` | 20px | 600 | -0.01em | 1.3 | Card titles |
| body-em | `.t-body-em` | 16px | 600 | normal | 1.5 | Emphasized body |
| body | `.t-body` | 16px | 500 | normal | 1.5 | **Default body text** |
| small | `.t-small` | 14px | 500 | normal | 1.5 | Captions, secondary copy |
| spec-label | `.t-spec-label` | 14px | 600 | normal | 1.5 | Spec table left column |
| spec-value | `.t-spec-value` | 14px | 500 | normal | 1.5 | Spec table right column |
| caption | `.t-caption` | 13px | 500 | normal | 1.5 | Image captions, meta |
| eyebrow | `.t-eyebrow` | 12px | 600 | 0.14em | 1.3 | UPPERCASE section eyebrow |
| button | `.t-button` | 14px | 600 | normal | 1 | Buttons |
| nav | `.t-nav` | 14px | 500 | normal | 1.45 | Top nav, footer links |

### Principles

- **Hierarchy from size and letter-spacing, not weight.**
- **Letter-spacing tightens with size.** Display pulls -0.04em; body stays at 0.
- **Apply negative letter-spacing only to Latin-dominant headlines ≥ 28px.** Korean or mixed-language: 0.
- **Body weight is 500, not 400.** Korean body text at 400 reads anemic.
- **Cap at 700.**
- **Tabular numerals everywhere** via `font-variant-numeric: tabular-nums`.

### Hero scale rule

`.t-display` (72px) is once per page. If a layout asks for a second large headline, use `.t-h1` (48px). When asked to generate "a big headline" without further context, default to `.t-h1` — never `.t-display`.

### Font smoothing (critical)

```css
body {
  -webkit-font-smoothing: subpixel-antialiased;
  text-rendering: optimizeLegibility;
}
```

Do not use `antialiased` — it thins Korean glyph strokes.

## Spacing

| Token | Value |
|---|---|
| `--s-1` | 4px |
| `--s-2` | 8px |
| `--s-3` | 12px |
| `--s-4` | 16px |
| `--s-5` | 20px |
| `--s-6` | 24px |
| `--s-8` | 32px |
| `--s-10` | 40px |
| `--s-12` | 48px |
| `--s-16` | 64px |
| `--s-section` | **120px** — between major bands (desktop) |
| `--s-section-mobile` | **80px** |

Container max 1200px; gutters 32px (desktop) → 16px (mobile).

## Radius

| Token | Value | Use |
|---|---|---|
| `--r-xs` | 4px | Tiny chips |
| `--r-sm` | 6px | Small chips, sub-tabs |
| `--r-md` | 8px | Buttons, form inputs |
| `--r-lg` | 12px | Cards, list items |
| `--r-xl` | 16px | Large cards (cap) |
| `--r-pill` | 9999px | Badges, chips |

Buttons are 8px-radius rectangles. Pills are reserved for badges and chips.

## Components

### Buttons — 40px height, 12-20px padding, weight 600, 8px radius

| Class | BG | Text | Use |
|---|---|---|---|
| `.btn-primary` | `--ink` | `#fff` | Primary CTA on any surface |
| `.btn-secondary` | `--canvas` | `--ink` (border `--line-strong`) | Secondary CTA |
| `.btn-text` | transparent | `--ink` | Text-only (underline on hover) |

States: hover (`--ink` → `--ink-2`); pressed (`--ink-pressed`); disabled (solid `--disabled-bg-strong` + `--ink-disabled`). No opacity, no shadow, no transform.

### Cards

```css
.card {
  border: 1px solid var(--line);
  border-radius: var(--r-xl);
  padding: var(--s-6);
}
.card-white { background: var(--canvas); }
/* .card-brown and .card-gray are styled by their parent .bg-* context */
```

### Section bands

```css
.bg-canvas { background: var(--canvas); }
.bg-warm   { background: var(--surface-warm); }
.bg-cool   { background: var(--surface-cool); }
```

Sections are full-width bleeds with inner `.container` (max 1200px).

### Top nav

64px height, `--canvas` background, `--ink` text. Gains 1px bottom border `--line` on scroll.

### Footer

`--surface-warm` background (or `--canvas` if the section above is warm). Same brightness as the rest of the page — never dark. Column dots use the locked accent mapping.

### Pastel pill / badge

```css
.pill {
  display: inline-flex; align-items: center; gap: 6px;
  height: 24px; padding: 0 10px;
  border-radius: var(--r-pill);
  font: 600 12px/1 var(--font);
  letter-spacing: 0.04em;
}
```

### Eyebrow

12px / 600 / letter-spacing 0.14em / UPPERCASE. Color is one of the five accents — pick by section context.

## Do's and Don'ts

### Do

- Reserve `--ink` for typography, primary CTAs, ribbon-badges, and the wordmark. Never as a backdrop.
- Use the three page backgrounds (canvas / warm / cool) for section rhythm. They're pale enough that adjacent same-tone sections are fine.
- Let card tints adapt to the page bg they sit on — the system picks the right hex via `.bg-* .card-*` selectors.
- Step down headlines: display once (hero), then h1, h2, h3. When in doubt, use h1.
- Carve hierarchy with size + letter-spacing first, weight second.
- Apply negative letter-spacing only to Latin-dominant headlines ≥ 28px.
- Use `subpixel-antialiased`. Never `antialiased`.
- Cap card radius at 16px.
- Use the five accent palette for point emphasis only.
- Default inline links to ink + persistent underline.
- Use solid colors for disabled states, never opacity.
- Keep all borders 1px.

### Don't

- Don't use dark surfaces as backdrops.
- Don't use accent colors as page bgs or card bgs.
- Don't put accent colors on buttons, ribbons, or CTAs. The action layer is monochrome.
- Don't break the locked mappings (footer columns, product-type pills).
- Don't use `.t-display` more than once per page.
- Don't use weight 800 in standard components.
- Don't apply negative letter-spacing to Korean text.
- Don't apply 1.5px or 2px borders.
- Don't use opacity for disabled states.
- Don't darken the footer.
- Don't add shadows.
- Don't hardcode hex values for cards. Always use the `.bg-* .card-*` pattern — that's what makes cards adapt.

## Responsive

| Name | Width | Key changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; display 72→48px; h1 48→32px; section padding 120→80px |
| Tablet | 768–1024px | Top nav horizontal; feature cards 2-up |
| Desktop | 1024–1440px | Full nav; 3-up feature cards |
| Wide | > 1440px | Same as desktop, content max 1200px |

## CSS variable block

```css
:root {
  --font: "Wanted Sans Variable", "Wanted Sans", -apple-system, BlinkMacSystemFont,
          "Apple SD Gothic Neo", "Pretendard", "Malgun Gothic", sans-serif;

  /* tier 1 chrome */
  --ink: #111111;
  --ink-2: #2a2a2a;
  --ink-pressed: #1a1a1a;
  --ink-body: #374151;
  --ink-mute: #6b7280;
  --ink-soft: #898989;
  --ink-disabled: #a1a1a1;
  --ink-disabled-2: #c4c4c4;

  /* tier 2 page bg */
  --canvas: #ffffff;
  --surface-warm: #fbfaf6;
  --surface-cool: #f5f6f9;

  /* tier 3 hairlines */
  --line: #e5e7eb;
  --line-strong: #d4d4d4;
  --line-soft: #f0f0ec;

  /* tier 4 accents (point use) */
  --accent-orange:  #fb923c;
  --accent-pink:    #ec4899;
  --accent-violet:  #8b5cf6;
  --accent-emerald: #34d399;
  --accent-blue:    #3b82f6;

  /* pastel pills */
  --pill-orange-bg:  #fff3e5; --pill-orange-ink:  #c2410c;
  --pill-pink-bg:    #fde8f1; --pill-pink-ink:    #9d174d;
  --pill-violet-bg:  #efe7fe; --pill-violet-ink:  #5b21b6;
  --pill-emerald-bg: #e2f7ee; --pill-emerald-ink: #047857;
  --pill-blue-bg:    #e4ecff; --pill-blue-ink:    #1d4ed8;

  --disabled-bg: #f3f4f6;
  --disabled-bg-strong: #d4d4d4;

  /* spacing */
  --s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
  --s-5: 20px; --s-6: 24px; --s-8: 32px; --s-10: 40px;
  --s-12: 48px; --s-16: 64px;
  --s-section: 120px;
  --s-section-mobile: 80px;

  /* radius */
  --r-xs: 4px; --r-sm: 6px; --r-md: 8px;
  --r-lg: 12px; --r-xl: 16px;
  --r-pill: 9999px;
}

body {
  font-family: var(--font);
  font-weight: 500;
  color: var(--ink);
  background: var(--canvas);
  -webkit-font-smoothing: subpixel-antialiased;
  text-rendering: optimizeLegibility;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
}

/* page bg + card tint adaptive system */
.bg-canvas { background: var(--canvas); }
.bg-warm   { background: var(--surface-warm); }
.bg-cool   { background: var(--surface-cool); }

.card { border: 1px solid var(--line); border-radius: var(--r-xl); padding: var(--s-6); }
.card-white { background: var(--canvas); }

.bg-canvas .card-brown { background: #faf5ef; }
.bg-warm   .card-brown { background: #f7eee2; }
.bg-cool   .card-brown { background: #f4eee6; }

.bg-canvas .card-gray  { background: #f2f4f7; }
.bg-warm   .card-gray  { background: #e7ebf1; }
.bg-cool   .card-gray  { background: #e8ecf3; }
```

## Iteration Guide

1. **Decide the page bg** for the section: canvas (default), warm, or cool.
2. **Pick card type** within that section: white, brown, or gray. The hex is automatic via `.bg-* .card-*`.
3. **Pick headline size from hierarchy.** Display is hero-only. Section headlines are h1.
4. **Use tokens, not raw hex.**
5. **When in doubt, reduce.** Fewer colors, smaller weight range, more white canvas.

## Version History

- **beta-5** (current) — Adaptive card tint system introduced. Cards no longer have a single global tint; instead, the tint depends on the page bg they sit on. Six combinations defined: brown card has three context values (canvas/warm/cool), gray card has three context values. The earlier adjacency rule ("two same-tone sections never touch") is retired — the new page bgs are pale enough that adjacency isn't an issue, and the rule was solving the wrong problem anyway (the real issue was card-vs-page hue mismatch and contrast, not section adjacency). `--surface-soft` finally removed; the system now has exactly three page bg tokens and a procedural rule for card tints.
- **beta-4** — Hue correction. Warm `#faf5ef`, cool `#f2f4f7`. Single card tint values for each hue (no adaptation).
- **beta-3** — Surface tones at the midpoint between alpha and beta-2.
- **beta-2** — Color blocks experiment retired.
- **alpha** — Initial three near-white surfaces that collapsed visually.
