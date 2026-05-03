# Impactrum Design System

A bright, airy, monochrome system for Impactrum — a Korea-based premium LED display manufacturer and integrator delivering **indoor, outdoor, transparent, and custom LED solutions** to corporate showrooms, retail spaces, civic media installations, museums, control rooms, and architectural projects.

The design surface this system supports is **bright and airy by deliberate intent** — a "well-curated showroom" rather than an industrial catalog. The brand mark is black, but **black is reserved for typography, primary CTAs, and the wordmark — never as a heavy backdrop or page-closing dark surface**. LED installation photography supplies all the chromatic energy.

## Sources

This system is derived from the company's canonical design definition:

- **GitHub repo:** `snap22snap/impactrum-design-system` (private) — branch `Codex`
  - `Readme.md` — system intent, file structure, font policy
  - `Design.md` — full token spec, components, do's and don'ts (single source of truth)
  - `assets/impactrum-logo-black-2026.svg` — Impactrum wordmark
  - `assets/impactrum-logo-black-2026-1200px.png` — wordmark, raster

The repo's policy is **single latest** — no version tags, no compat branches. This design system mirrors that policy: there is one current spec, and it is this folder.

## Index

```
.
├── README.md                  ← you are here
├── colors_and_type.css        Color + typography tokens (CSS vars + base type roles)
├── SKILL.md                   Cross-compatible Agent Skill manifest
├── assets/
│   ├── impactrum-logo-black-2026.svg
│   └── impactrum-logo-black-2026-1200px.png
├── preview/                   Design System tab cards (one card per concept)
└── ui_kits/
    └── marketing/             Marketing site UI kit (the only product surface defined)
        ├── README.md
        ├── index.html
        └── *.jsx              React recreations of nav, hero, cards, footer, etc.
```

## Core Philosophy

> Black is an organizing tool, not a mood.

1. **Black for ink, CTAs, the wordmark, and 1px featured borders.** Nothing else.
2. **Three light surfaces breathe the page** — `--bg-warm` (#fbfaf6), `--bg-cool` (#f6f8fa), `--bg-soft` (#f7f8fa). Two consecutive bands never share a surface.
3. **One typeface — Wanted Sans Variable** — covers Korean and Latin. Hierarchy is carved by **weight** (400 → 500 → 600 → 700 → 800), never by family swap.
4. **LED installation photography supplies the color.** The system itself is monochrome; the chromatic energy comes from real product imagery embedded in cards.
5. **The footer is light.** Brightness is continuous from hero to footer — no dark closing band.

---

## Content Fundamentals

### Voice & tone
- **Audience:** procurement teams, AV integrators, museum directors, retail brand managers, and facility operators — buyers who respond to specification fluency and proof of installation.
- **Voice target:** "well-curated showroom." Calm, confident, generously paced. Never industrial-catalog energy ("HUGE INVENTORY!"), never SaaS-marketing energy ("✨ Reimagine your displays ✨").
- **Stance:** the company speaks as a maker who has installed the work, not as a vendor pitching a feature list.

### Casing
- **Sentence case for headlines, titles, buttons.** "Get a quote", not "Get A Quote".
- **Title Case is reserved** for product proper names ("Indoor LED Display", "Custom Project") and tab labels in the nav-pill-group.
- **All-caps is not used** anywhere in the system — no all-caps eyebrows, no all-caps category badges. The badge pills use mixed case.

### Person
- **No first-person plural ("we") in marketing copy.** Lead with the work or the audience: "Get a quote" rather than "We'll send you a quote." Case studies say "Installed at the Seoul Design Museum" rather than "We installed…".
- **Second-person ("you") is sparing**, used for CTAs and form labels ("Tell us about your project") but not for editorial body.
- **Korean copy uses 존댓말** (formal polite) — `~합니다 / ~입니다` register, never `~해요`.

### Bilingual content
- **Mixed-language strings are routine** — "P1.2 실내용 LED 디스플레이", "Outdoor LED 4K", "관제실 솔루션 / Control Room Solutions". Wanted Sans handles both inside one type role.
- **Display headlines in Korean drop the negative letter-spacing** to `0`. The negative tracking values in the type table are calibrated for Latin-dominant headlines only.
- **A KO / EN toggle** sits in the top-nav cluster on the right, near the "Get a quote" CTA.

### Specifications
- Spec rows use **tabular numerics** (Wanted Sans variable axis ships these by default). Pixel pitch / brightness / refresh rate / IP rating columns align without manual `font-variant-numeric`.
- Units are spelled out the first time (`1,500 nits`, not `1.5K nit`). Subsequent rows can compact (`120 Hz`, `3,840 × 2,160`).
- Use thin spaces around units (`P1.2 mm`, not `P1.2mm`) on Latin spec sheets; Korean spec sheets follow the `~ / 단위` pattern.

### Examples (in voice)

> **Get a quote** → "Get a quote" (button) / "견적 받기" (Korean equivalent)
>
> **Hero h1, EN** → "Premium LED, engineered for the spaces that demand it."
>
> **Hero h1, KO** → "공간을 정의하는 프리미엄 LED 디스플레이."
>
> **Featured tier badge** → "Most requested" / "가장 많이 문의해요"
>
> **CTA-band copy** → "Talk to us about your project." (statement, not question)
>
> **Spec-row label** → "Pixel pitch", "Brightness", "Refresh rate" — sentence case, no colons, value column on the right.

### Don't
- Don't use emoji. Not in marketing copy, not in micro-copy, not in error states.
- Don't use unicode dingbats (★, ✦, ✓-as-ornament) as decoration. The hairline + ribbon vocabulary is the decoration.
- Don't write "🎉 Now available!" energy. "Now available" is a fact, not a celebration.
- Don't use exclamation points outside of error toasts.

---

## Visual Foundations

### Colors
- **Primary** is `#111111`. Used for headlines, primary CTAs, the wordmark, and a 1px featured-emphasis border. Press state shifts to `#242424`.
- **Three light surfaces alternate** to give the page rhythm:
  - `--bg-warm` (#fbfaf6) — feature cards, hero mat, testimonials, CTA band
  - `--bg-cool` (#f6f8fa) — alternating feature cards
  - `--bg-soft` (#f7f8fa) — footer, nav-pill backdrop, soft section dividers
- **Brand accent (#3b82f6)** appears rarely — inline links, occasional "new" highlights. Never on a primary CTA.
- **Badge pastels** (orange / pink / violet / emerald) tag product categories ("Indoor / Outdoor / Transparent / Custom"). Never on hero CTAs.
- **`--bg-dark` and `--bg-dark-elevated` are reserved tokens.** They exist in the palette for legacy reference but are not assigned to any standard component. Reaching for them is a design decision worth defending in writing.

### Typography
- **Wanted Sans Variable** (Wanted Lab, SIL OFL) is the only typeface in the system, loaded from jsDelivr.
- **Hierarchy by weight:** display 700–800, titles 600–700, body 400, buttons 600.
- **Negative tracking only on Latin display ≥ 28px.** Korean headlines use `0`.
- **Line-height bumps for Korean comfort:** body 1.6 (vs. 1.5 baseline), tight UI 1.45 (vs. 1.4).
- **Caption sits at 14px**, not 13px — 13px Korean text reads as cramped.

### Spacing
- **Base unit 4px**, scale `4 / 8 / 12 / 16 / 24 / 32 / 48`.
- **Section padding 120px** between major bands — deliberately wider than most modern-SaaS systems use, to counter the historical "closed-in" feel.
- **Card padding:** `32px` for feature / inquiry cards, `24px` for testimonial / spec cards. Product image and case study cards use `padding: 0` — photography fills the card edge to edge.

### Backgrounds
- **No full-bleed photographic backgrounds, no gradients, no repeating patterns, no textures.** The page floor is white canvas; the surface variation is achieved by alternating the three light surface tones across cards and bands.
- **No hand-drawn illustrations.** When a visual is needed, it is real LED installation photography embedded in a card.
- **No protection gradients over imagery** — photography sits inside hairline-bordered cards, not as a hero overlay.

### Animation & motion
- **Animation timings are not in the system spec.** Default to short, restrained easing (150–200 ms, `ease-out`) for state changes only.
- **No bounces, no spring overshoot, no scroll-jacking.**
- **Press state is a color shift** (primary → primary-active), not a scale-down.
- **No fades on initial page load.** The page lands flat.

### Hover & press states
**Document Default, Hover, and Active/Pressed states for every interactive element.** Hover feedback is mandatory for desktop usability, not optional.

**Principle.** Hover, press, and disabled states are expressed via **solid color shifts using fixed hex values** — not opacity, not shadow, not motion. Each state is a distinct, opaque fill. The only exceptions: clickable cards may use a `translateY(-1px)` lift, and the active item inside a pill-group carries a small drop shadow. Buttons themselves are pure color.

**Hover intensity is unified across white-background buttons.** Both `button-secondary` and `button-icon-circular` use `#F2F3F5` on hover — a soft neutral tint that confirms pointer presence without competing with the active gray surfaces (`#eef0f3` pill-group, `#f3f4f6` disabled fill).

**Disabled principle.** Disabled = a **fully separate solid fill** (e.g. primary `#d4d4d4` / `#6b7280`, secondary `#f3f4f6` + `#c4c4c4` border + `#9ca3af` text), not the default fill at reduced opacity. Slightly stronger background and border than default reads as "structured but inactive"; opacity-dimmed buttons get confused with low-contrast active controls.

**Per component:**
- **`button-primary`:** default `#111111` → hover `#333333` (clearly perceptible lightening — the button visibly brightens on mouseover while remaining unmistakably "the dark button") → pressed `#1a1a1a` (slight darkening from default, feels like the button is pushed down). Disabled: `#d4d4d4` background, `#a1a1a1` text. No shadow, no transform.
- **`button-secondary`:** default `#ffffff` + 1px `#d4d4d4` border → hover `#F2F3F5` (subtle tint — the hairline frame already defines the button) → pressed `#d4d4d4`. Disabled: `#f3f4f6` background, **no border**, `#c4c4c4` text — the gray fill defines the button edge, so the border becomes redundant.
- **`button-icon-circular`:** default `#ffffff` + 1px `#d4d4d4` border → hover `#F2F3F5` → pressed `#d4d4d4`. Border stays `#d4d4d4` across all states. Hover bg unified with `button-secondary` since both are white-background buttons.
- **`button-text-link` ("Learn more"):** default no underline → hover underline. Color stays ink.
- **Inline `text-link` (body links):** same as button-text-link — ink, underline on hover only.
- **`category-tab` (inactive segment in `nav-pill-group`):** muted `#6b7280` → hover ink `#111`. Active segment is unchanged on hover.
- **Clickable cards (`feature-card`, `case-study-card`, `product-image-card`):** subtle elevation lift on hover — `translateY(-1px)` plus a soft shadow intensification (`0 1px 2px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.05)`). Hairline border may shift from `--hairline` to `--hairline-strong`. Non-clickable cards (pure layout containers) get no hover.
- **Focus on `text-input`:** two combined signals — border color steps from `--hairline-strong` (`#d4d4d4`, default) to muted gray (`#6b7280`, focused), and a soft inner glow `box-shadow: inset 0 0 0 3px rgba(17, 17, 17, 0.05)` adds depth. Border thickness stays 1px; no black border, no outer shadow. Filled state matches default.

All transitions are short and restrained — 120–150 ms `ease`. No bounces, no spring, no scale-down on press.

### Borders
- **All interactive borders are 1px. Uniform.** No exceptions — no 1.5px, no 2px. Emphasis comes from **color change** (e.g. `text-input` focus shifts hairline-strong → muted gray; featured cards shift hairline → ink) or **fill change**, never from thickening the border. This applies to default, hover, focus, and featured-emphasis states.
- **All white-background buttons share the same border tone: `--hairline-strong` (`#d4d4d4`).** This unifies `button-secondary` and `button-icon-circular`. The lighter `--hairline` (`#e5e7eb`) is reserved for **cards and inputs** — not buttons. Buttons sit on the page as actionable surfaces and need slightly more edge presence than passive content containers.
- **Borders define areas on white canvas; filled backgrounds define their own areas.** When a component sits on white (default `button-secondary`, default `text-input`, default cards), it carries a 1px hairline to define its edge. When a component carries a tinted/colored fill (`button-secondary-disabled` `#f3f4f6`, `button-primary` `#111`, badge pills, ribbons), the fill is the boundary — do not also draw a border. Adding both produces visual noise without adding information.
- **Hairline-defined cards.** 1px `--hairline` (#e5e7eb) is the default card border.
- **Stronger hairline** (`--hairline-strong`, #d4d4d4, 1px) on secondary buttons and emphasized borders.
- **Featured emphasis** is a **1px ink-colored border** (`--color-ink`), paired with a ribbon badge. This replaces dark-card inversion.
- **Soft hairline** (`--hairline-soft`, #f0f0ec) divides spec rows and section transitions on white canvas.

### Shadows
- **Most components are flat, hairline-led — no shadow.**
- **Pill-group active item** carries a subtle drop shadow inside the pill wrapper: `0 2px 4px rgba(0,0,0,0.06)`. Pill-group container background is `#eef0f3` — barely-there gray.
- **Inquiry tier cards** carry a soft, two-layer shadow: `0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)` — softer than typical modern-SaaS cards to keep the airy feel.
- **Never shadow product photography cards.** The photo carries its own lighting; an extra shadow muddies it.

### Featured emphasis
- The featured pattern is **1px ink border + ribbon badge** ("Most requested"), not a dark card. This is the single most important rule that distinguishes Impactrum's adaptation from its Cal.com structural baseline.

### Layout rules
- **Max content width** ~1200px, centered, on marketing pages.
- **Hero band** uses a 7/5 split — h1 + sub + buttons on the left, hero product image card on the right.
- **Product category grids** are 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Case study grids** are 3-up at desktop.
- **Top nav is sticky white** (no blur, no translucency). 64px tall. A 1px hairline appears at the bottom edge only when the page has scrolled.

### Transparency & blur
- **The system does not use translucent surfaces or backdrop-blur.** Every surface is fully opaque. The "premium" signal comes from spacing and weight contrast, not from glass.

### Imagery treatment
- **Photography is real LED installation work** — corporate showrooms, museums, retail, civic installations, control rooms.
- **No filtering, no grading.** The system assumes photography arrives accurately white-balanced. Color temperature in imagery is whatever the install actually was — warm interior, cool exterior, neutral studio.
- **Aspect ratios are preserved.** Product image cards size to the photo, not the photo to the card.
- **No grain overlay, no duotone treatment, no black-and-white conversion.** The chromatic energy is the point.

### Corner radii
| Token | Value | Use |
|---|---|---|
| `--radius-md` | 8px | Buttons, inputs, category tabs |
| `--radius-lg` | 12px | Content cards (feature, case study, inquiry tier) |
| `--radius-xl` | 16px | Hero product image card |
| `--radius-pill` | 9999px | Nav-pill-group, badge pills, ribbon |
| `--radius-full` | 9999px | Avatars, circular icon buttons |

### Cards (the canonical card)
A card in this system is:
- 12px corner radius
- 1px `--hairline` border (or `--bg-warm` / `--bg-cool` fill, no border)
- No shadow (except inquiry tier card, which carries the soft two-layer shadow)
- 32px internal padding for content, 0 for photography

That's it. There is no second card style. Variations (featured, photo, spec) are modifications to this single card grammar.

---

## Iconography

The Impactrum design system **does not ship an icon set**. The repo's `assets/` folder contains only the wordmark logo (SVG + 1200px PNG) — no icon font, no SVG sprite, no per-icon files.

### Approach in this system
- **Lucide icons** (https://lucide.dev) are substituted as the icon vocabulary for prototypes and UI kit components in this design system. Lucide is a clean, even-stroke (1.5–2px), open-source set whose visual register matches Impactrum's restrained, hairline-led aesthetic. **This is a substitution flagged for the user — please supply official iconography if it exists.**
- **Stroke weight target:** 1.5px at 24px icon size. Heavier strokes (Phosphor Bold, Heroicons solid) read as too noisy against the system's 1px hairlines.
- **Icon color** is `--color-ink` on light surfaces, `--color-on-primary` on primary buttons. Icons never use accent or pastel color.
- **Icon size** is 16px inside small UI (button-icon-circular at 36px), 20px inside top-nav, 24px inside feature cards.

### Loaded via CDN
For prototypes in this design system:
```html
<script src="https://unpkg.com/lucide@latest"></script>
```

### Emoji
- **Not used.** Anywhere.

### Unicode characters as iconography
- **Not used as decoration.** A `→` arrow inside a button label is acceptable as a typographic glyph; using `★` or `●` as visual ornaments is not.

### Logo usage
- **The wordmark is always black** (`#111111`), set in the brand mark file. There is no white-on-dark variant in scope, because the system does not use dark surfaces.
- **Minimum width:** 96px for the wordmark. Below that, the wordmark loses legibility.
- **Clear space:** equal to the cap height of the wordmark on every side.
- **Don't recolor the wordmark.** Don't apply gradient, drop-shadow, or tint.

---

## Caveats / known gaps

- **No icon set ships with this system.** Lucide is substituted as a stylistic match. Please supply official Impactrum iconography if it exists.
- **No real LED installation photography ships with this system.** UI kit components leave photo slots as labeled placeholders (a warm `--bg-warm` rectangle with a thin caption like `LED installation photo · 16:9`). Please supply real photography for production use.
- **`--font-mono` is not defined.** The DESIGN.md `code` typography token is reserved but maps to Wanted Sans (proportional). For real code blocks, reassign to a monospace family — DESIGN.md suggests `JetBrains Mono` or `D2Coding`.
- **Animation timings are not in scope.** This system documents states only — default, active, focused, disabled. Hover styling beyond underline-on-link is intentionally absent.
- **Form validation states beyond `text-input-focused`** are not extracted yet — error and success states need to be defined when the inquiry/contact flow is built.

## License notes

- The design system definition itself (this repo, the `Design.md` it derives from) is Impactrum internal.
- **Wanted Sans Variable** — SIL Open Font License 1.1 (Wanted Lab).
- The structural baseline is adapted from publicly-observable Cal.com patterns; no Cal.com trademarks or brand assets are used.
