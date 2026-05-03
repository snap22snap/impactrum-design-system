---
version: alpha
name: Impactrum
description: Design system for Impactrum — a Korea-based premium LED display manufacturer and integrator delivering indoor, outdoor, transparent, and custom LED solutions to corporate showrooms, retail spaces, civic media installations, museums, control rooms, and architectural projects. The system is bright and airy by intent — a light, well-curated showroom rather than a heavy industrial catalog. White canvas with warm off-white and cool gray surface variation, hairline-defined cards, generous whitespace, and Wanted Sans Variable typography across all type roles. Black is reserved for typography, primary CTAs, ribbon emphasis, and the brand mark — never as a backdrop, never as a heavy enclosure. Brand voltage comes from real LED installation photography (which supplies all the chromatic energy) shown in-card, plus weight contrast within Wanted Sans, plus a five-color accent palette (orange / pink / violet / emerald / blue) used for inline emphasis, category tags, footer dots, line icons, and other accent moments. The action layer (buttons, ribbons, primary CTAs) stays strictly monochrome; accent colors are for emphasis and category identity only, never on a CTA. Adapted from the Cal.com structural baseline; the footer and dark-tier patterns of the original have been deliberately replaced with light surfaces, since the original's dark-footer rhythm reads as oppressive in the LED hardware context where black surfaces have historically made Impactrum's pages feel closed in.

webfont:
  import: "@import url('https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css');"
  family: "Wanted Sans Variable"
  fallback: "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard', 'Malgun Gothic', sans-serif"
  self-hosted: "TTF files in assets/fonts/ for production use and PPTX/document generation. Weights bundled: 400, 500, 600, 700, 800."

colors:
  primary: "#111111"
  primary-hover: "#2a2a2a"
  primary-pressed: "#1a1a1a"
  ink: "#111111"
  body: "#374151"
  muted: "#6b7280"
  muted-soft: "#898989"
  disabled-text-primary: "#a1a1a1"
  disabled-text-secondary: "#c4c4c4"
  hairline: "#e5e7eb"
  hairline-strong: "#d4d4d4"
  hairline-soft: "#f0f0ec"
  canvas: "#ffffff"
  surface-soft: "#f7f8fa"
  surface-warm: "#fbfaf6"
  surface-cool: "#f6f8fa"
  surface-pill: "#ebedf0"
  surface-disabled-secondary: "#f3f4f6"
  surface-disabled-primary: "#d4d4d4"
  surface-strong: "#e5e7eb"
  surface-dark: "#0a0a0a"
  surface-dark-elevated: "#1a1a1a"
  on-primary: "#ffffff"
  success: "#10b981"
  warning: "#f59e0b"
  error: "#e8464d"
  accent-orange: "#fb923c"
  accent-pink: "#ec4899"
  accent-violet: "#8b5cf6"
  accent-emerald: "#34d399"
  accent-blue: "#3b82f6"

typography:
  display-xl:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -1px
  display-md:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.5px
  display-sm:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.3px
  title-lg:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  title-md:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: 0
  title-sm:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: 0
  body-md:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: 0
  spec-label:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
    color: "{colors.ink}"
    note: "Spec row left column. Bold labels anchor multi-product comparison tables — users scan vertically by label, then horizontally across product columns."
  spec-value:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    color: "{colors.body}"
    note: "Spec row right column. Regular weight values; tabular numerics align by default in Wanted Sans's variable axis."
  code:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
    note: "Reserved token. Wanted Sans is proportional and will not column-align — reassign to a monospace family before introducing actual code blocks."
  button:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Wanted Sans Variable, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 120px
  section-mobile: 80px

shadows:
  pill-active: "0 1px 2px rgba(0, 0, 0, 0.06)"
  inquiry-tier: "0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06)"
  input-focus-glow: "inset 0 0 0 3px rgba(17, 17, 17, 0.05)"

components:
  button-primary:
    default:
      backgroundColor: "{colors.primary}"
      textColor: "{colors.on-primary}"
      typography: "{typography.button}"
      rounded: "{rounded.md}"
      padding: 12px 20px
      height: 40px
    hover:
      backgroundColor: "{colors.primary-hover}"
      note: "Color shift only — no shadow, no transform. #111111 → #2a2a2a is clearly perceptible without being loud."
    pressed:
      backgroundColor: "{colors.primary-pressed}"
      note: "Sinks back from hover toward default. Subtle darkening from hover."
    disabled:
      backgroundColor: "{colors.surface-disabled-primary}"
      textColor: "{colors.disabled-text-primary}"
      cursor: "not-allowed"
      note: "Solid colors, no opacity. Heavy faded background, light text — clearly inert."
  button-secondary:
    default:
      backgroundColor: "{colors.canvas}"
      textColor: "{colors.ink}"
      typography: "{typography.button}"
      rounded: "{rounded.md}"
      padding: 12px 20px
      height: 40px
      border: "1px solid {colors.hairline-strong}"
    hover:
      backgroundColor: "{colors.surface-disabled-secondary}"
      border: "1px solid {colors.hairline-strong}"
      note: "Subtle gray tint. Less aggressive than nav-pill hover — secondary already has a defined border."
    pressed:
      backgroundColor: "{colors.hairline-strong}"
      border: "1px solid {colors.hairline-strong}"
    disabled:
      backgroundColor: "{colors.surface-disabled-secondary}"
      border: none
      textColor: "{colors.disabled-text-secondary}"
      cursor: "not-allowed"
      note: "Border removed — gray fill defines the area. Border would be redundant noise."
  button-icon-circular:
    default:
      backgroundColor: "{colors.canvas}"
      textColor: "{colors.ink}"
      rounded: "{rounded.full}"
      size: 36px
      border: "1px solid {colors.hairline-strong}"
      note: "Same border tone as button-secondary. All white-background buttons share #d4d4d4 border."
    hover:
      backgroundColor: "{colors.surface-pill}"
      border: "1px solid {colors.hairline-strong}"
      note: "Stronger hover than secondary — small button needs more visible feedback."
    pressed:
      backgroundColor: "{colors.hairline-strong}"
  button-text-link:
    default:
      backgroundColor: transparent
      textColor: "{colors.ink}"
      typography: "{typography.button}"
    hover:
      textDecoration: underline
      note: "Underline appears on hover. Color stays ink — never accent-colored. This is a button role inside cards/CTAs, not a prose link."
  text-link:
    default:
      backgroundColor: transparent
      textColor: "{colors.ink}"
      typography: "{typography.body-md}"
      textDecoration: underline
    hover:
      textDecoration: underline
      note: "Default inline link inside running prose. Ink with persistent underline. Single-color, neutral, the safest choice."
  text-link-accent:
    default:
      backgroundColor: transparent
      textColor: "one of {colors.accent-orange|pink|violet|emerald|blue}"
      typography: "{typography.body-md}"
      textDecoration: underline
    hover:
      textDecoration: underline
      note: "Optional accent variant for inline links. Pick from the five-color palette to match the moment — surrounding tone, eyebrow color of the section, line-icon color of the adjacent feature card. If the link sits inside a category-themed section that already uses a fixed accent (footer column or product-type pill context), match that color so the page reads as one system. Use sparingly — one accent per paragraph as a guideline, never as a default."
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
    scrolledBorder: "1px solid {colors.hairline} on bottom edge when page scrolled"
  nav-pill-group:
    backgroundColor: "{colors.surface-pill}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.pill}"
    padding: 6px
  category-tab:
    default:
      backgroundColor: transparent
      textColor: "{colors.muted}"
      typography: "{typography.nav-link}"
      padding: 8px 14px
      rounded: "{rounded.md}"
    hover:
      textColor: "{colors.body}"
    active:
      backgroundColor: "{colors.canvas}"
      textColor: "{colors.ink}"
      shadow: "{shadows.pill-active}"
      note: "Active tab lifts above the gray pill-group container via subtle shadow."
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  hero-product-image-card:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    border: "1px solid {colors.hairline}"
  feature-card:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    structure: "image area (16:9, edge-to-edge) → title → description → spec summary line"
  feature-card-cool:
    backgroundColor: "{colors.surface-cool}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    note: "Cool-toned variant for alternating rows. Same structure as feature-card."
  feature-icon-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
  product-image-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 0
    border: "1px solid {colors.hairline}"
    note: "LED installation photography fills the card edge-to-edge. Card's rounded corners clip the image."
  product-spec-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
    title: "{typography.title-md}"
    rowDivider: "1px solid {colors.hairline}"
    note: "Multi-product comparison table pattern. Use spec-label (bold) for left column, spec-value (regular) for right column."
  spec-row:
    backgroundColor: transparent
    padding: 12px 0
    label: "{typography.spec-label}"
    value: "{typography.spec-value}"
    divider: "{colors.hairline}"
    note: "Two-column structure. Bold label anchors row scanning across multiple product columns. Wanted Sans tabular numerics align values automatically."
  case-study-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 0
    border: "1px solid {colors.hairline}"
  testimonial-card:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  inquiry-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
    shadow: "{shadows.inquiry-tier}"
  inquiry-tier-card-featured:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
    shadow: "{shadows.inquiry-tier}"
    emphasis: "ribbon-badge only — no thicker border, no surface inversion"
    note: "Standard tier uses secondary CTA (white button). Featured tier uses primary CTA (black button) + ribbon badge. Hierarchy comes from CTA weight + ribbon, NOT from heavy borders or dark surfaces."
  ribbon-badge:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
    note: "Black with white text. The only place black appears as a 'fill' rather than as text/border — and only at small ribbon scale."
  text-input:
    default:
      backgroundColor: "{colors.canvas}"
      textColor: "{colors.ink}"
      typography: "{typography.body-md}"
      rounded: "{rounded.md}"
      padding: 10px 14px
      height: 40px
      border: "1px solid {colors.hairline-strong}"
    focused:
      backgroundColor: "{colors.canvas}"
      border: "1px solid {colors.muted}"
      shadow: "{shadows.input-focus-glow}"
      note: "Border darkens (#d4d4d4 → #6b7280) AND a subtle inner glow appears (5% black, 3px inset). Two combined signals. No black border, no thickness change."
    filled:
      note: "Same as default state."
  badge-pill-neutral:
    backgroundColor: "{colors.surface-pill}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  badge-pill-pastel:
    backgroundColor: "one of {colors.accent-orange|pink|violet|emerald|blue} at low opacity (~15%)"
    textColor: "matching accent color at full saturation"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
    note: "For product category tags (Indoor / Outdoor / Transparent / Custom) the color follows a fixed mapping — see badge-pill-pastel notes in the Components section. For other pastel-pill uses (sub-category tags, special markers, eyebrow pills) any of the five accents may be used as the moment requires."
  category-dot:
    size: 6px
    rounded: "{rounded.full}"
    backgroundColor: "one of {colors.accent-orange|pink|violet|emerald|blue}"
    note: "Small color dot used inline before category labels, eyebrows, and section markers. For the four footer columns the mapping is fixed (Products→orange, Solutions→pink, Company→violet, Resources→emerald). For other dot uses (eyebrows, status indicators, sub-section markers) any of the five accents — including blue — may be used."
  avatar-circle:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 36px
  rating-stars:
    backgroundColor: transparent
    textColor: "{colors.accent-orange}"
    typography: "{typography.caption}"
  cta-band-light:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.lg}"
    padding: 64px
  footer:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: 64px
    secondaryTextColor: "{colors.muted}"
    topBorder: "1px solid {colors.hairline} (optional, marks transition from canvas above)"
    note: "Light gray footer. Each column header is preceded by a {component.category-dot} in its assigned accent color (Products→orange, Solutions→pink, Company→violet, Resources→emerald). The wordmark stays ink (#111111)."
---

## Overview

Impactrum is a Korea-based premium LED display manufacturer and integrator delivering indoor, outdoor, transparent, and custom LED solutions to corporate showrooms, retail spaces, civic media installations, museums, control rooms, and architectural projects. The audiences are procurement teams, AV integrators, museum directors, retail brand managers, and facility operators — buyers who respond to demonstrated specification fluency and proof of installation.

The marketing surface this design system supports is **bright and airy by deliberate intent**. The brand mark is black, but black is reserved for typography, primary CTAs, ribbon emphasis, and the wordmark — never used as a heavy backdrop or as a page-closing dark surface. The voice target is "well-curated showroom" rather than "industrial catalog": a calm, generously spaced page that lets LED installation photography supply the chromatic energy. Black, when it appears, is the organizing tool — typography that defines hierarchy, a thin border that closes a card, a CTA that confirms action, a small ribbon that marks the recommended tier — not a mood.

This is a meaningful departure from the Cal.com structural baseline this system is adapted from. Cal.com closes every page with a deep dark footer (#101010), and uses a dark surface for its featured pricing tier — both signature moves of that system. Impactrum keeps Cal.com's structural rhythm (white canvas, hairline cards, weight-driven hierarchy, monochrome action layer) but **replaces every dark surface with light surfaces** because the original's dark-footer pacing reads as oppressive when paired with LED hardware photography that already carries dramatic luminance. The footer here is `{colors.surface-soft}` (#f7f8fa) — quiet, neutral, doesn't shut the page down. The featured inquiry tier is signaled by a ribbon badge and a stronger primary CTA, never by inverting the surface or thickening the border.

The accent layer is also a meaningful departure from Cal.com. Cal.com uses **blue** as its single accent color — for inline links, for highlight text, for emphasis. Impactrum uses a **five-color accent palette** instead: **orange, pink, violet, emerald, and blue**. These are auxiliary colors, freely available to designers wherever an accent moment needs warmth, energy, or visual variety — inline links, line icons on feature cards, category dots, pastel pill tags, status indicators, eyebrow markers. The action layer (buttons, ribbons, primary CTAs) remains strictly monochrome — accents never appear on a button surface or a CTA. The palette is generous on purpose: a single-color accent system would feel monotone next to LED installation photography that already carries chromatic richness.

Two specific patterns lock part of the palette into a fixed mapping for consistency. First, the **footer's four columns** (Products / Solutions / Company / Resources) are each marked by a category dot, with a fixed assignment: Products → orange, Solutions → pink, Company → violet, Resources → emerald. This mapping is permanent across the site so a reader who learns it once can rely on it. Second, the **four product-type pastel pills** (Indoor / Outdoor / Transparent / Custom on product cards) follow the same four-color assignment for the same reason. Outside these two specific patterns, the five accents — including blue — are used freely. Blue is not "extra" or "rare"; it's a full member of the palette that designers reach for whenever it serves the moment.

Typography unifies into a single **Wanted Sans Variable** family covering both Korean and Latin glyphs. Hierarchy that a two-family system would carve via family swaps is here carved with **weight contrast** — display sizes use 600–700 (capped at 700, 800 is available but not used in standard components), body uses 400, with 600 mid-weight for buttons and small titles. The single-family choice keeps Korean and Latin content visually unified — important for a Korean manufacturer serving both domestic and international clients.

Surface variation does the breathing work. Five light surfaces ship in the system: **`canvas`** (#ffffff, default page floor), **`surface-soft`** (#f7f8fa, neutral cool — footer and section dividers), **`surface-warm`** (#fbfaf6, slightly warm off-white — feature cards, hero product backdrop, testimonials, CTA bands), **`surface-cool`** (#f6f8fa, slightly cool gray — alternating feature card variant), and **`surface-pill`** (#ebedf0, slightly stronger gray — nav-pill-group container, neutral badges, button hover). Cycling between them across the page keeps the surface rhythm from feeling monotonous without ever raising the value contrast enough to feel heavy.

**Key Characteristics:**
- White canvas with black primary CTA (`{colors.primary}` — #111111). Black is for typography, primary CTAs, ribbon-badges, and the wordmark — never as a backdrop.
- Five light surface tones (`canvas`, `surface-soft`, `surface-warm`, `surface-cool`, `surface-pill`) variegate the page rhythm without darkening it.
- **Five-color accent palette** — `accent-orange` (#fb923c), `accent-pink` (#ec4899), `accent-violet` (#8b5cf6), `accent-emerald` (#34d399), `accent-blue` (#3b82f6) — available for inline emphasis, line icons, category dots, pastel tags, and other accent moments. Two fixed mappings: the footer's four category dots (Products → orange, Solutions → pink, Company → violet, Resources → emerald) and the four product-type pastel pills (Indoor → orange, Outdoor → pink, Transparent → violet, Custom → emerald). Outside these two patterns, all five accents are used freely. The action layer (buttons, ribbons, CTAs) stays monochrome — accents never appear on a button.
- Light gray footer (`surface-soft`) replaces the original Cal.com dark footer.
- **Wanted Sans Variable** for the entire type system, self-hosted from `assets/fonts/` for production and PPTX use, with jsDelivr CDN as the fallback. Display sizes use weight 600–700; body and UI use 400–600. Weight 800 is available but unused in standard components.
- Negative letter-spacing applies only to display sizes ≥ 28px and only on Latin-dominant headlines. Korean headlines use `0` tracking.
- Two-tier hairline borders define cards and buttons. `{colors.hairline}` (#e5e7eb) for cards and inputs; `{colors.hairline-strong}` (#d4d4d4) for buttons (white-background buttons all share this stronger border tone).
- Real LED installation photography embedded directly in marketing cards — feature cards open with a 16:9 image area, titles + description below, and a one-line spec summary at the bottom.
- Multi-product spec tables use bold labels (anchor) + regular values (scannable) — the B2B catalog pattern (Samsung Display, LG Electronics).
- Spacing rhythm is `{spacing.section}` (120px) between major bands on desktop; collapses to 80px on mobile.
- Border radius is hierarchical: `{rounded.md}` (8px) for buttons + inputs, `{rounded.lg}` (12px) for content cards, `{rounded.xl}` (16px) for the hero product image container, `{rounded.pill}` for nav-pill-group + badges, `{rounded.full}` for avatars + icon buttons.
- All borders are 1px. There are no 1.5px or 2px borders anywhere — emphasis comes from color shift, not thickness.

## Color Usage Philosophy

This is the most important section in the document. **Black (#111111) in this system is a tool of organization, not of mood.** It belongs to typography, the primary CTA, the wordmark, ribbon-badges, and the occasional inline icon. It does not belong to backdrops, surface fills, footers, or page-closing bands. When a designer reaches for black-as-surface, the answer is almost always "use a light surface variant and let the typography do the work instead."

The historical pain point this philosophy addresses: prior Impactrum surfaces leaned heavily on dark backgrounds (a common reflex when the logo is black and the product is illuminated panels). The result read as closed, heavy, and dated — the opposite of what premium LED installations should evoke. The fix is structural: shift every "dark by default" pattern to "light by default with black accents." The brand mark stays black; the page around it becomes bright.

The `surface-dark` and `surface-dark-elevated` tokens remain in the palette for legacy reference and for the rare deliberate-contrast moment. They are **not** used in any of the standard components defined in this document. If a future component needs them, treat that need as a design decision worth defending in writing — not as a default reach.

### The five-color accent palette

The accent layer is a five-color set: **`accent-orange` (#fb923c), `accent-pink` (#ec4899), `accent-violet` (#8b5cf6), `accent-emerald` (#34d399), `accent-blue` (#3b82f6)`**. These are auxiliary colors meant to give the page warmth and variety without disturbing the monochrome action layer. Designers reach for them wherever an accent moment helps — inline link emphasis, small line icons on feature cards, eyebrow status indicators, pastel pill tags, category dots, rating stars. The palette is intentionally generous: five accents (rather than one or two) keep the system from feeling monotone next to LED installation photography that already carries strong chromatic energy.

Two specific patterns lock four of the five accents into a fixed mapping, for consistency:

| Pattern | Mapping |
|---|---|
| Footer column dots (the four top-level site sections) | Products → `accent-orange` · Solutions → `accent-pink` · Company → `accent-violet` · Resources → `accent-emerald` |
| Product-type pastel pills (the four LED product types on product cards) | Indoor → `accent-orange` · Outdoor → `accent-pink` · Transparent → `accent-violet` · Custom → `accent-emerald` |

Inside these two patterns, the assignment is permanent across the whole site — same color for the same category every time, so a reader who learns the mapping once can rely on it. **Outside these two patterns, the five accents are used freely.** A blog-post hero eyebrow can be blue. A line icon on a feature card can be any of the five. An inline link in a body paragraph can carry an accent if accent emphasis is genuinely wanted (or stay ink — see `{component.text-link}`). Pick what fits the moment.

Blue is a full first-class member of the palette. It's not "rare" or "reserved" — it's just one of the five. The earlier draft of this system tried to ban blue entirely (because Cal.com's identity is blue and we didn't want to look like Cal.com); that ban over-corrected. The right answer is that **Cal.com's blue is Cal.com's only accent**, while **Impactrum's blue is one of five** — they read very differently in context. Blue used alongside orange, pink, violet, and emerald reads as part of a varied palette, not as a brand-identity blue.

The action layer remains strictly **monochrome** — ink on canvas, white on ink. Accent colors never appear on a button surface, on a CTA, on a ribbon-badge, or on any element a user clicks to perform a task. This is the rule that protects the system's hierarchy: action belongs to ink, accent belongs to emphasis. Don't blur them.

## Colors

### Brand & Action
- **Primary** (`{colors.primary}` — #111111): All primary CTAs, h1/h2 display type, the wordmark, ribbon-badges. Hover state shifts to `{colors.primary-hover}` (#2a2a2a, clearly lighter), pressed shifts to `{colors.primary-pressed}` (#1a1a1a, between default and hover).

### Accent (five-color palette)
- **Accent Orange** (`{colors.accent-orange}` — #fb923c): Footer "Products" dot, "Indoor" pastel pill, rating stars. Available freely elsewhere — line icons, eyebrow indicators, inline emphasis when warmth fits.
- **Accent Pink** (`{colors.accent-pink}` — #ec4899): Footer "Solutions" dot, "Outdoor" pastel pill. Available freely elsewhere.
- **Accent Violet** (`{colors.accent-violet}` — #8b5cf6): Footer "Company" dot, "Transparent" pastel pill. Available freely elsewhere.
- **Accent Emerald** (`{colors.accent-emerald}` — #34d399): Footer "Resources" dot, "Custom" pastel pill, status indicator dots ("Seoul HQ · 240+ installations" eyebrow when signaling "live, current, real"). Available freely elsewhere.
- **Accent Blue** (`{colors.accent-blue}` — #3b82f6): No fixed mapping — used freely for inline emphasis, line icons, eyebrows, info-leaning moments. Blue carries calm/credible/precise associations that fit specification-heavy content well.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor.
- **Surface Soft** (`{colors.surface-soft}` — #f7f8fa): Footer background, section dividers. Neutral cool.
- **Surface Warm** (`{colors.surface-warm}` — #fbfaf6): Feature cards, hero product backdrop, testimonial cards, CTA bands, avatar fills, featured inquiry tier card. Adds quiet warmth without breaking neutrality.
- **Surface Cool** (`{colors.surface-cool}` — #f6f8fa): Alternating feature card variant. Pairs with surface-warm to keep card-grid rhythm from feeling monotonous.
- **Surface Pill** (`{colors.surface-pill}` — #ebedf0): nav-pill-group container, neutral badge backgrounds, secondary button hover. The strongest of the light grays — used where a "container" needs to clearly define interactive space.
- **Surface Disabled** (Primary disabled bg `{colors.surface-disabled-primary}` #d4d4d4, Secondary disabled bg `{colors.surface-disabled-secondary}` #f3f4f6): Used for button disabled states. Solid colors, no opacity.
- **Surface Strong** (`{colors.surface-strong}` — #e5e7eb): Reserved utility token. Most use cases now go through `surface-pill` or hairline tokens.
- **Surface Dark** (`{colors.surface-dark}` — #0a0a0a): Reserved. Not used in standard components.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #1a1a1a): Reserved. Not used.

### Borders
- **Hairline** (`{colors.hairline}` — #e5e7eb): Cards, inputs, content dividers. The default content border.
- **Hairline Strong** (`{colors.hairline-strong}` — #d4d4d4): All button borders (button-secondary, button-icon-circular). Default text-input border. Anywhere a slightly stronger line is needed.
- **Hairline Soft** (`{colors.hairline-soft}` — #f0f0ec): Reserved for very subtle in-card dividers if ever needed. Currently unused — spec-row dividers use `hairline` for clearer table structure.

### Text
- **Ink** (`{colors.ink}` — #111111): All headlines, primary text, spec labels, primary CTAs, default inline links.
- **Body** (`{colors.body}` — #374151): Default running-text color. Spec values.
- **Muted** (`{colors.muted}` — #6b7280): Secondary text — sub-headings, breadcrumbs, footer secondary text, inactive nav-tab text. Also the focused input border color.
- **Muted Soft** (`{colors.muted-soft}` — #898989): Tertiary text — captions, fine-print, copyright lines.
- **Disabled Text Primary** (`{colors.disabled-text-primary}` — #a1a1a1): Text on primary-disabled buttons.
- **Disabled Text Secondary** (`{colors.disabled-text-secondary}` — #c4c4c4): Text on secondary-disabled buttons.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on primary buttons and ribbon-badges.

### Semantic
- **Success** (`{colors.success}` — #10b981): Confirmation states ("Inquiry sent"), in-stock badges.
- **Warning** (`{colors.warning}` — #f59e0b): Lead-time warnings, capacity callouts.
- **Error** (`{colors.error}` — #e8464d): Validation errors. Calmer than the standard #ef4444 — slight rose tilt makes it sit comfortably with the system's bright/airy surfaces while still clearly reading as red.

## Typography

### Font Family
The system runs a single typeface — **Wanted Sans Variable** — across every type role. Wanted Sans is a Korean–Latin variable sans-serif maintained by Wanted Lab, distributed under SIL Open Font License 1.1.

For development and rapid prototyping, the font loads from jsDelivr CDN:

```css
@import url('https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css');
```

For production websites and PPTX/document generation, self-hosted TTF files in `assets/fonts/` are used. Bundled weights: 400, 500, 600, 700, 800 (all five from the static Wanted Sans family).

The fallback stack is `-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", "Malgun Gothic", sans-serif`.

Hierarchy is carved by weight, not by family:
- **Display (h1–h2)** — weight 700 at 48–64px, weight 700 at 36px, weight 600 at 28px, with negative letter-spacing only on the largest sizes (Latin-dominant headlines only).
- **Title (h3–h5)** — weight 600 at 16–22px, neutral tracking.
- **Body / UI** — weight 400–500 at 14–16px, neutral tracking. Buttons use weight 600 for tap-target legibility.
- **Spec rows** — weight 600 (label) + weight 400 (value) at 14px. Bold labels anchor multi-product comparison tables.

### Weight Cap

**Maximum weight in standard components is 700.** Weight 800 is available in the loaded font set but is not used by any standard component. The decision was made during setup: 800 read as "shouting marketing copy" rather than as the "well-curated showroom" tone the system targets, and there was no meaningful weight hierarchy between 800 display-xl and 800 display-lg. Capping at 700 forces hierarchy to come from size and spacing rather than from weight escalation.

If a future moment genuinely needs weight 800 (rare campaign headline, special editorial), define it as a named variant — don't reach for it as a default.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 700 | 1.1 | -1.5px | Homepage h1 (Latin-dominant only; Korean headlines drop to 0) |
| `{typography.display-lg}` | 48px | 700 | 1.15 | -1px | Section heads |
| `{typography.display-md}` | 36px | 700 | 1.2 | -0.5px | Sub-section heads, product category titles |
| `{typography.display-sm}` | 28px | 600 | 1.25 | -0.3px | CTA-band heads, project titles |
| `{typography.title-lg}` | 22px | 600 | 1.35 | 0 | Product names, inquiry tier names |
| `{typography.title-md}` | 18px | 600 | 1.45 | 0 | Feature card titles, case study titles |
| `{typography.title-sm}` | 16px | 600 | 1.45 | 0 | Small card titles, list labels |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Default running-text |
| `{typography.body-sm}` | 14px | 400 | 1.6 | 0 | Footer body, fine-print |
| `{typography.caption}` | 14px | 500 | 1.45 | 0 | Badge labels, captions |
| `{typography.spec-label}` | 14px | 600 | 1.5 | 0 | Spec row left column (bold anchor) |
| `{typography.spec-value}` | 14px | 400 | 1.5 | 0 | Spec row right column (regular, scannable) |
| `{typography.code}` | 14px | 400 | 1.6 | 0 | Reserved. Reassign to monospace before use. |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | Standard button labels |
| `{typography.nav-link}` | 14px | 500 | 1.45 | 0 | Top-nav menu items |

### Korean & Latin Mixing Notes
- Mixed-language strings (e.g., "P1.2 실내용 LED 디스플레이", "Outdoor LED 4K") are routine. The single Wanted Sans family handles both without per-language overrides.
- For headline text in Korean, drop letter-spacing to `0` even on `display-xl`. The negative tracking values in the table are calibrated for Latin-dominant headlines only.
- Product spec values (pixel pitch, brightness in nits, refresh rate in Hz) align cleanly without manual `font-variant-numeric: tabular-nums` — Wanted Sans's variable axis handles tabular numerics by default.

### Spec Table Pattern
Multi-product spec comparison is the core B2B catalog use case. The system follows the Samsung Display / LG Electronics pattern:

- **Label (left column, fixed)**: weight 600, ink color. Anchors the row.
- **Value (right column)**: weight 400, body color. Scannable across multiple product columns.
- **Row dividers**: hairline (#e5e7eb), clearly visible.

Users scan vertically by label ("I want to compare Brightness"), then horizontally across product columns. Bold labels make this scanning fast. This is opposite of single-product spec pages (Apple iPhone style) where values are bolded — Impactrum's catalog context reverses the emphasis.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 120px (desktop) / `{spacing.section-mobile}` 80px (mobile).
- **Section padding:** 120px on desktop — bumped from the Cal.com baseline of 96px to counter the historical "closed in" feel of prior Impactrum pages.
- **Mobile section padding:** 80px — pages stay generous but don't feel over-spaced on smaller screens.
- **Card internal padding:** `{spacing.xl}` (32px) for feature cards and inquiry tier cards; `{spacing.lg}` (24px) for testimonial and product-spec cards. Product image cards and case study cards use `padding: 0` — the photography fills the card edge to edge.
- **Gutters:** `{spacing.lg}` (24px) between cards in 3-up grids; `{spacing.md}` (16px) inside footer columns.

### Grid & Container
- **Max content width:** ~1200px centered on marketing pages.
- **Editorial body:** Single 12-column grid; hero band often uses 7/5 split (h1 left, hero product image card right).
- **Product category grids:** 4-up at desktop (Indoor / Outdoor / Transparent / Custom), 2-up at tablet, 1-up at mobile.
- **Case study grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Footer:** 4-column link list at desktop, wrapping to 2-up at tablet, 1-up at mobile.

### Whitespace Philosophy
Generous, deliberately so. Section padding sits at 120px on desktop — wider than most modern-SaaS systems use — because the historical pain point for Impactrum has been pages feeling closed and dense. Every band has a single h1 + h2 + supporting cards. The product is hardware shown in real installations; the page should feel like a well-curated showroom that lets each piece breathe, not a feed of stacked claims.

## Surface Rhythm

The page reads as a deliberate cycle through three light surface tones plus the white canvas. The pattern goes:

```
canvas (hero) → surface-warm (feature cards) → canvas (product grid) →
surface-cool (alternating feature band) → canvas (case studies) →
surface-warm (CTA band) → surface-soft (footer)
```

**Same row = same surface.** All cards within a single 3-up or 4-up row share the same surface. Alternation happens **between rows or major bands**, not within a row. Mixing surfaces within a row reads as random rather than rhythmic.

Two consecutive bands should not share the same surface. The cool/warm alternation prevents a stretch of `surface-warm` cards from reading as a single beige stripe. The white-canvas bands between surface bands are the breathing rooms — the page never goes more than two bands without returning to canvas.

The repeated `surface-warm` (feature cards + CTA band) at start and end of the long-scroll page is intentional — it creates visual bookending. The two appearances are separated by at least two canvas bands, so they don't read as adjacent.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands |
| Soft hairline | 1px `{colors.hairline}` border | Cards, inputs, content dividers |
| Stronger hairline | 1px `{colors.hairline-strong}` border | Buttons (secondary, icon-circular), default text-input |
| Card surface | `surface-warm` or `surface-cool` background | Feature cards, testimonials, CTA band, hero product backdrop, featured inquiry tier |
| Pill active shadow | `{shadows.pill-active}` (0 1px 2px rgba(0,0,0,0.06)) | nav-pill-group active tab |
| Inquiry tier shadow | `{shadows.inquiry-tier}` (0/1/2 + 0/4/12, low alpha) | Inquiry tier cards (both standard and featured) |
| Input focus glow | `{shadows.input-focus-glow}` (inset 0 0 0 3px rgba(17,17,17,0.05)) | Focused text-input |
| Featured emphasis | Ribbon-badge + primary CTA contrast | Featured inquiry tier — NOT a thicker border, NOT a dark surface |

The elevation philosophy is **soft, hairline-led, and engineered**. Shadows are minimal and only appear where they earn their place (active states, focused states, elevated tier cards). Emphasis comes from border weight choice (hairline vs hairline-strong), surface tone variation, and ribbon-badge presence — never from heavy shadows or surface inversion.

### Hover Intensity Principle
Hover intensity scales inversely with the component's visual prominence at rest:
- **Large or prominent components** (Secondary button with visible border): subtle hover (#f3f4f6 tint)
- **Small or understated components** (Icon-circular button with same border): stronger hover (#ebedf0 tint)
- **Dark/inverted components** (Primary button): hover via color shift (#111111 → #2a2a2a), no shadow, no motion

This pattern lets new components inherit appropriate hover treatment based on their visual weight.

### Decorative Depth
- LED installation photography carries its own internal lighting and contrast. Don't add card-level shadows on top of product photography that already has dramatic studio or environmental lighting.
- Product image cards stay flat with hairline borders so the photography reads as the elevation.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Almost no use — reserved for badge accents |
| `{rounded.sm}` | 6px | Small inline buttons, dropdown items |
| `{rounded.md}` | 8px | Standard CTA buttons, text inputs, category tabs |
| `{rounded.lg}` | 12px | Content cards (feature cards, case study cards, inquiry tier cards) |
| `{rounded.xl}` | 16px | Hero product image card |
| `{rounded.pill}` | 9999px | Nav-pill-group, badge pills, ribbon badges |
| `{rounded.full}` | 9999px / 50% | Avatars, icon buttons, category dots |

### Border Thickness Rule
**All borders are 1px.** No 1.5px, no 2px borders anywhere in the system. Emphasis comes from color shift (hairline → hairline-strong → muted → ink) or from surface tone, never from thickening lines. This rule was tightened during setup after a 1.5px featured-tier border read as "messy" in preview.

### Photography Geometry
LED installation photography fills product image cards and case study cards edge to edge — `padding: 0` with the card's `{rounded.lg}` clipping the image corners. Hero product images use `{rounded.xl}` (16px). Avatar photos use `{rounded.full}` at 36px in testimonial rows.

## Components

### Top Navigation

**`top-nav`** — White nav bar pinned to the top. 64px tall, `{colors.canvas}` background. Wordmark + Impactrum mark at left, primary horizontal menu (Products / Solutions / Projects / Company / Contact), right-side cluster with optional language selector (KO / EN), "Get a quote" `{component.button-primary}`. Menu items in `{typography.nav-link}` (Wanted Sans 14px / 500). Bottom edge carries a 1px `{colors.hairline}` divider when scrolled.

**`nav-pill-group`** — Pill-radius wrapper around 2–4 sub-nav segments (e.g., product-type switcher: "Indoor / Outdoor / Transparent / Custom"). Background `{colors.surface-pill}` (#ebedf0) with internal padding 6px, rounded `{rounded.pill}`. Active segment renders as a white-canvas pill with `{shadows.pill-active}` lifting it visibly above the gray container.

### Buttons

**`button-primary`** — Background `{colors.primary}` (#111111), text `{colors.on-primary}`, type `{typography.button}`, padding 12px × 20px, height 40px, rounded `{rounded.md}` (8px).
- **Default**: bg #111111
- **Hover**: bg #2a2a2a (clearly lighter, color shift only — no shadow, no transform)
- **Pressed**: bg #1a1a1a (subtle darkening from hover, button "sinks back")
- **Disabled**: bg #d4d4d4 + text #a1a1a1 (solid colors, no opacity, clearly inert)

Primary use: "Get a quote", "Request inquiry", "Download spec sheet".

**`button-secondary`** — White button with stronger hairline border. Same padding + height + radius as primary.
- **Default**: bg #ffffff, border 1px #d4d4d4, text #111111
- **Hover**: bg #f3f4f6 (subtle gray tint — secondary already has a defined border, so hover is minimal)
- **Pressed**: bg #d4d4d4
- **Disabled**: bg #f3f4f6, **no border** (gray fill defines the area, border would be redundant), text #c4c4c4

Used for secondary actions: "View specifications", "See case studies".

**`button-icon-circular`** — 36 × 36px circular icon button. Same border tone as button-secondary (#d4d4d4) — all white-background buttons share the stronger hairline.
- **Default**: bg #ffffff, border 1px #d4d4d4, ink-color icon
- **Hover**: bg #ebedf0 (stronger than secondary — small button needs more visible feedback)
- **Pressed**: bg #d4d4d4

Used for share, "view more", carousel arrows on case study sliders.

**`button-text-link`** — Inline text button (not a prose link), no background. Text color ink, weight 600. Underline appears on hover. Used for inline CTA buttons inside cards (e.g. "View specifications →" at the bottom of a feature card). Color stays ink — never accent-colored. Distinguished from `text-link` (which is a prose link).

### Links (prose)

**`text-link`** — Default inline link inside running prose. Text color `{colors.ink}`, weight 400, **persistent underline** (visible at rest, not hover-only). The neutral, single-color baseline — used everywhere unless an accent variant is explicitly chosen.

**`text-link-accent`** — Optional accent variant for inline links. Text color is one of the five accents (`accent-orange`, `accent-pink`, `accent-violet`, `accent-emerald`, `accent-blue`), with persistent underline. Pick the color that matches the moment — surrounding eyebrow color, line-icon color of an adjacent feature card, or (when relevant) the section's footer-mapped category.

When the link sits inside content that's clearly tied to one of the four footer-mapped sections, matching the section's color helps the page read as one system:

| Section context | Link accent (when matched to footer mapping) |
|---|---|
| Products section, Indoor product page | `accent-orange` |
| Solutions section, Outdoor product page | `accent-pink` |
| Company / About section, Transparent product page | `accent-violet` |
| Resources / Catalog / Spec sheets, Custom product page | `accent-emerald` |
| Other contexts (general body, info-leaning copy, eyebrow-marked sections) | Any of the five — pick what fits |

Accent links are **deliberate, not default.** Use them when the link genuinely benefits from accent emphasis. In a neutral context (a generic body paragraph, a footer disclaimer, an About bio), use `{component.text-link}` (ink) instead. **One accent link per paragraph as a guideline** — they lose their meaning if every link is colored.

**Blue is one of the five accents** — same status as orange, pink, violet, emerald. Use it where it fits.

### Cards & Containers

**`hero-band`** — White-canvas hero with a 7-5 grid: h1 + sub-headline + button row on the left, `{component.hero-product-image-card}` on the right. Vertical padding `{spacing.section}` (120px desktop / 80px mobile). The eyebrow above the headline (e.g. "Seoul HQ · 240+ installations") uses an `{component.category-dot}` in `accent-emerald` followed by caption-sized text — a small status-indicator pattern that signals "live, current, real" without color noise.

**`hero-product-image-card`** — Showcases flagship LED installation photography. Background `{colors.surface-warm}` (the warm off-white serves as a neutral mat behind the photo — not a neutral gray, because warm reads as more "showroom" than "studio"). 1px hairline border, rounded `{rounded.xl}` (16px), no drop shadow.

**`feature-card`** — Used in 3-up feature grids ("Why Impactrum"). Background `{colors.surface-warm}` (#fbfaf6), rounded `{rounded.lg}` (12px), padding `{spacing.xl}` (32px). 

**Card structure (B2B catalog pattern)**:
1. Image area at top (16:9 aspect ratio, edge-to-edge, card's rounded corners clip the image)
2. Title in `{typography.title-md}`
3. Description in `{typography.body-md}`
4. One-line spec summary at bottom in `{typography.spec-value}` style, separated by a hairline divider (e.g., "P1.2–P3.0 · 800–1,200 nits · 160° viewing")

The image leads (LED hardware imagery is the marketing voltage). The spec summary closes (gives B2B buyers immediate technical credibility). Generic outline icons in place of photography are NOT a substitute — if photography isn't available, leave a warm-tinted placeholder that reads as "image coming."

**Icon-led variants** (image 2 in the reference pack) are an alternative when a feature claim is conceptual rather than installation-specific. In that case, the leading element is a small accent-colored line icon (orange, pink, violet, or emerald — chosen per the category mapping above; e.g. a Manufacturing claim takes orange, a Design claim takes violet, a Proof/Track-record claim takes emerald). The icon is line-style at ~24px, single-color in the matched accent, sitting top-left of the card. This is the only place accent color appears as foreground on a feature card — never as a fill, never on the title, never on the description body.

**`feature-card-cool`** — Cool-toned variant of `feature-card`. Background `{colors.surface-cool}` (#f6f8fa). Used to alternate within a feature grid or to differentiate adjacent feature bands. Same dimensions and content rules as `feature-card`.

**`feature-icon-card`** — Simpler card for 4-up feature grids on lower-density bands. Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). Use only when an actual feature claim doesn't warrant photography — most marketing surfaces should use `feature-card` instead. Same icon-color rule applies: line icon in the matched accent, never a filled icon block.

**`product-image-card`** — Card showing LED product photography (panel renders, modules, fixtures). Background `{colors.canvas}`, hairline border, rounded `{rounded.lg}`, padding `0`. Product image fills the card edge to edge; product name and short tagline sit beneath the image in a separate text block. Category pastel pill (`{component.badge-pill-pastel}`) sits above the product name, color-mapped to the category (Indoor → orange, Outdoor → pink, Transparent → violet, Custom → emerald).

**`product-spec-card`** — Specification-sheet card listing technical attributes (pixel pitch, brightness, refresh rate, IP rating, viewing angle, lifespan). Background `{colors.canvas}`, hairline border, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). Title at top in `{typography.title-md}`, then `{component.spec-row}` entries with `{colors.hairline}` dividers.

**`spec-row`** — A single row in a product specification list. Two-column layout:
- **Label (left)**: `{typography.spec-label}` — Wanted Sans 14px / 600 / ink. Bold to anchor row scanning.
- **Value (right)**: `{typography.spec-value}` — Wanted Sans 14px / 400 / body. Regular weight; tabular numerics align automatically.
- **Divider**: `{colors.hairline}` (#e5e7eb), clearly visible.
- **Padding**: 12px vertical.

The B2B catalog pattern: bold labels anchor each row so users can scan vertically by attribute, then horizontally across multiple product columns. This is opposite of single-product spec pages where values are bolded.

**`case-study-card`** — Showcases a completed installation project. Background `{colors.canvas}`, hairline border, rounded `{rounded.lg}`, padding `0`. Installation photograph fills the card top, with a metadata block underneath carrying client name, project type, and a one-line scope description in `{typography.body-sm}`.

**`testimonial-card`** — Background `{colors.surface-warm}`, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). Top row carries an `{component.avatar-circle}` + name + role + company; below sits the testimonial quote in `{typography.body-md}`. For B2B context, "role + company" matters more than the photograph — the company name carries credibility.

**`inquiry-tier-card`** — Standard inquiry/contact tier (e.g., "Standard inquiry"). Background `{colors.canvas}`, 1px hairline border, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px), with `{shadows.inquiry-tier}` lifting the card slightly. Carries the tier name in `{typography.title-lg}`, scope description in `{typography.body-md}`, feature checklist, and a `{component.button-secondary}` at the bottom (white CTA — secondary emphasis).

**`inquiry-tier-card-featured`** — The featured tier (typically "Custom project"). Background `{colors.surface-warm}` (slight warm tint distinguishes it from standard), 1px hairline border (same thickness as standard — **no thicker border**), rounded `{rounded.lg}`, padding `{spacing.xl}`, same `{shadows.inquiry-tier}`. Carries a `{component.ribbon-badge}` ("Most requested" or similar) + a `{component.button-primary}` (black CTA — primary emphasis).

**Featured emphasis comes from the ribbon-badge presence and the primary CTA color difference, NOT from a heavier border, NOT from a dark surface inversion.** This was a deliberate decision during setup: a 1.5px ink border made the card read as "boxed in" and contradicted the system's "ink is organization, not enclosure" philosophy.

**`ribbon-badge`** — Small pill with ink background and white text. Type `{typography.caption}` (14px / 500), rounded `{rounded.pill}`, padding 4px × 12px. The only place black appears as a fill rather than as text/border, and only at small ribbon scale. Used to mark featured items, "New", "Limited", "Most requested".

### Inputs & Forms

**`text-input`** — Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}` (8px), padding 10px × 14px, height 40px.

- **Default**: 1px solid `{colors.hairline-strong}` (#d4d4d4) — slightly stronger than card hairline so inputs are clearly visible, not floating in white space.
- **Focused**: border darkens to `{colors.muted}` (#6b7280) AND a subtle inner glow appears (`{shadows.input-focus-glow}`, 5% black inset, 3px). Two combined signals — color shift + soft inner glow. **Border thickness stays 1px.** No black border, no outer shadow.
- **Filled** (with content, not focused): Same as default state.

The focus signal is intentionally gentle. Black is not used as a focus color even at 1px — it would feel heavy in the bright/airy system. The medium-gray border + soft inner glow combination achieves clear focus feedback while staying refined.

### Tags / Badges

**`badge-pill-neutral`** — Background `{colors.surface-pill}` (#ebedf0, the same gray as nav-pill-group container), text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px × 12px. Used for non-category tags ("P1.2 mm", "In stock", "New"). Can also carry a leading dot in matched accent color when used as an eyebrow indicator (e.g. "● Seoul HQ · 240+ installations" with an emerald dot).

**`badge-pill-pastel`** — Background one of the accent colors at low opacity (~15%), text in the matching saturated accent. Rounded `{rounded.pill}`, padding 4px × 12px.

For **product category tags** (Indoor / Outdoor / Transparent / Custom on product cards) the mapping is fixed:

| Tag | Accent |
|---|---|
| Indoor | `accent-orange` |
| Outdoor | `accent-pink` |
| Transparent | `accent-violet` |
| Custom | `accent-emerald` |

This product-type mapping is a system-level decision, not a per-page choice. Once set, every product card uses the same color for the same product type. This consistency is what makes the pill colors meaningful — a reader scanning the catalog can identify "Indoor" by color before reading the label.

For **other pastel-pill uses** (sub-category tags, special markers, eyebrow pills, status pills), any of the five accents — including `accent-blue` — may be used as the moment requires. Outside product-type tags, the pill color is a designer choice.

**`category-dot`** — Small filled circle, 6px, rounded `{rounded.full}`. Used inline before category labels (e.g. footer column heads, hero eyebrow indicators, section eyebrows). Color follows the same mapping as `badge-pill-pastel` (Products → orange, Solutions → pink, Company → violet, Resources → emerald). The dot is the smallest unit of accent in the system — it appears wherever a section needs a quiet color signature without committing to a full pastel pill.

**`avatar-circle`** — 36px diameter, rounded `{rounded.full}`. Either holds a photo or a `{colors.surface-warm}` fill with initials in `{typography.caption}`.

**`rating-stars`** — Inline star rating in `{colors.accent-orange}` (#fb923c).

### Tab / Filter

**`category-tab`** — Used inside the nav-pill-group.
- **Default (inactive)**: transparent background, text `{colors.muted}`, padding 8px × 14px, rounded `{rounded.md}`
- **Hover (inactive)**: text shifts to `{colors.body}`
- **Active**: bg `{colors.canvas}` (white), text `{colors.ink}`, `{shadows.pill-active}` lifts it above the gray container

### CTA / Footer

**`cta-band-light`** — Pre-footer "Talk to us about your project" CTA card. Background `{colors.surface-warm}`, rounded `{rounded.lg}`, padding 64px. h2 in `{typography.display-sm}`, sub-line, and a `{component.button-primary}` centered.

**`footer`** — Background `{colors.surface-soft}` (#f7f8fa) — light gray, **not dark**. Text `{colors.ink}` for primary links, `{colors.muted}` for secondary text and copyright. 4-column link list at desktop covering **Products / Solutions / Company / Resources**, each column header preceded by its `{component.category-dot}` in the assigned accent (orange / pink / violet / emerald). Vertical padding 64px. The Impactrum wordmark sits at the top-left in `{colors.ink}` (the same black it uses everywhere — the wordmark doesn't change). A 1px `{colors.hairline}` separator can sit at the top edge to mark the transition from canvas above. **The footer is the same brightness as the rest of the page, deliberately.**

The four-color dot pattern is the footer's quiet identity move — it's a fixed, learnable mapping that anchors the four top-level sections. Outside the footer, the rest of the page can use any of the five accents (including blue) for eyebrows, line icons, and inline emphasis.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#111111) for primary CTAs, h1/h2 type, the wordmark, ribbon-badges, and inline icons.
- Use **Wanted Sans Variable** for every type role. Carve hierarchy with weight (400 → 500 → 600 → 700), not with family swaps.
- Cap weight at 700 in standard components. 800 is loaded but reserved.
- Apply negative letter-spacing **only on Latin-dominant display headlines ≥ 28px**. Korean or mixed-language headlines use `0`.
- Bump line-height for Korean comfort (1.6 for body, 1.45 for tight UI sizes).
- Cycle through `surface-warm`, `surface-cool`, and canvas to vary card-grid rhythm. Don't stack two consecutive bands of the same surface.
- Apply one surface tone per card row — never mix surfaces within a single 3-up or 4-up row.
- Use hairline borders to define cards (#e5e7eb) and white-background buttons (#d4d4d4).
- Embed real LED installation photography inside marketing cards. Generic icons are not a substitute.
- **Use the five-color accent palette where it fits.** Footer column dots and product-type pastel pills follow a fixed four-color mapping (Products/Indoor → orange, Solutions/Outdoor → pink, Company/Transparent → violet, Resources/Custom → emerald). Outside those two patterns, all five accents — orange, pink, violet, emerald, blue — are available for line icons, eyebrows, status indicators, sub-category pills, and inline link emphasis. Pick what fits the moment.
- Default inline links to ink + persistent underline (`{component.text-link}`). Reach for `{component.text-link-accent}` only when the link sits inside a category-themed section and accent emphasis is wanted.
- Use `{component.ribbon-badge}` to mark featured tiers and special items.
- For multi-product spec tables, bold the labels (left), keep values regular (right).
- End every page with the `surface-soft` light footer. Brightness should be continuous from hero to footer.
- Give pages room: 120px between major bands on desktop (80px on mobile).
- Use solid colors for disabled states, never opacity. The result reads more deliberately as "inert."
- Keep all borders at 1px. Use color shift (hairline → hairline-strong → muted → ink) for emphasis.

### Don't
- **Don't use dark surfaces as default backdrops.** `surface-dark` and `surface-dark-elevated` are reserved tokens — using them in standard components contradicts the system's core philosophy.
- **Don't put accent colors on buttons, ribbons, or CTAs.** The action layer is monochrome (ink + canvas + ribbon-black). Accents — including blue — are for emphasis and category identity, not for clickable actions. A blue button would read as a Cal.com / SaaS-app convention; that's not Impactrum.
- **Don't break the two fixed mappings.** Footer columns (Products → orange, Solutions → pink, Company → violet, Resources → emerald) and product-type pills (Indoor → orange, Outdoor → pink, Transparent → violet, Custom → emerald) are permanent assignments. Outside these two patterns, accent choice is free; inside them, it's locked.
- **Don't flood a paragraph with accent links.** One accent link per paragraph is a guideline. Accent links are an emphasis tool — they lose their meaning when every link is colored.
- **Don't darken the footer.** The footer is `surface-soft`, the same brightness as the rest of the page.
- **Don't invert the featured tier to dark, and don't thicken its border.** Featured emphasis comes from the ribbon-badge + primary CTA contrast — not from surface inversion or border thickness.
- **Don't apply 1.5px or 2px borders anywhere.** All borders are 1px. Emphasis is by color, not thickness.
- **Don't apply negative letter-spacing to Korean text.** Korean glyphs read poorly with negative tracking — even at display sizes.
- **Don't use Wanted Sans weight 800 in standard components.** Cap at 700.
- **Don't use rounded radius beyond `{rounded.xl}` (16px) on cards.**
- **Don't add motion or shadow to button-primary hover.** Color shift only (#111111 → #2a2a2a).
- **Don't use opacity for disabled states.** Use solid color values — they read more deliberately and avoid edge cases (children inheriting transparency, etc.).
- **Don't apply a border to button-secondary disabled.** The gray fill (#f3f4f6) defines the area; a border would be redundant.
- **Don't use `{typography.code}` for actual code blocks** until the token is reassigned to a monospace family.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→32px; hero-product-image-card stacks below content; feature grids 1-up; pricing 1-up; footer 4 cols → 1; section padding 120px → 80px |
| Tablet | 768–1024px | Top nav stays horizontal but tightens; nav-pill-group wraps; feature cards 2-up; inquiry tiers 2-up |
| Desktop | 1024–1440px | Full top-nav with all menu items; 3-up feature cards; 4-up product category grid |
| Wide | > 1440px | Same as desktop with more outer breathing room; max content width caps at 1200px |

### Touch Targets
- `{component.button-primary}` minimum 40 × 40px.
- `{component.button-icon-circular}` exactly 36 × 36 — slightly under WCAG 44 × 44 but the centered icon and full-circle silhouette compensate.
- `{component.text-input}` height is 40px.

### Collapsing Strategy
- Top nav collapses to hamburger at < 768px; menu opens as a full-screen sheet (white canvas, ink text — not a dark sheet).
- Hero band's 7-5 grid collapses to single-column on mobile.
- Feature grids reduce columns rather than scaling cards down.
- Inquiry tier cards collapse 4 → 2 → 1; featured tier's ribbon and primary CTA stay distinct at every breakpoint.
- Multi-product spec tables: on mobile, switch from horizontal columns to one product per card vertically (the bold-label pattern still works for single-product reading).
- Section padding scales: 120px → 80px on mobile.

### Image Behavior
- LED installation photography retains native aspect ratios; cards resize.
- Avatar photos crop to circles at every breakpoint.
- Hero product image card scales proportionally on mobile.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.button-primary}`).
2. Variants of an existing component (states like `default`, `hover`, `pressed`, `disabled`, `focused`) live within the component's nested structure in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Document Default, Hover, Pressed/Active, Focused, and Disabled states. Hover is mandatory for desktop usability — never omit it.
5. Hierarchy is carved by **weight** (400 → 500 → 600 → 700), not by family. The whole system speaks in one Wanted Sans voice.
6. The system has no dark surfaces, no blue *buttons or CTAs*, and no borders thicker than 1px in standard components. Adding any of these is a design decision worth defending in writing. (Blue *as accent* — links, line icons, eyebrows, pastel pills outside the locked product-type mapping — is fine; blue *as action* is not.)
7. The accent palette is five colors (orange, pink, violet, emerald, blue). Two specific patterns lock four of them into fixed mappings — footer columns and product-type pills. Outside those two patterns, designers freely choose from all five for the moment. Don't ban colors, don't add a sixth.
8. When in doubt about emphasis: bigger Wanted Sans before bolder Wanted Sans, color shift before thickness change, ribbon-badge before surface inversion, ink link before accent link.

## Known Gaps

- The `surface-dark` and `surface-dark-elevated` tokens remain in the palette but are not assigned to any standard component. If a future campaign page needs a deliberate dark moment, define it as a named variant rather than reaching for these tokens ad-hoc.
- The accent palette went through two earlier iterations during setup: first a single `brand-accent` blue (Cal.com-style), then a four-color set (orange/pink/violet/emerald) that explicitly excluded blue. The current five-color palette (orange/pink/violet/emerald/blue) is the resolved version — blue is a full first-class accent, not a special-case token. Older Impactrum collateral that uses a single blue accent in a Cal.com-style way (everything-is-blue) should be migrated to use the five-color palette in moderation, not by replacing every blue with another color.
- `{typography.code}` is currently mapped to Wanted Sans by project decision — Wanted Sans is proportional and will not column-align in code blocks. Reassign to a monospace family (e.g., `JetBrains Mono`, `D2Coding`) when actual code UI is introduced.
- Animation and transition timings are not in scope. A future revision should specify durations for hover/pressed transitions (suggested: 150–200ms ease-out for color shifts).
- Form validation states beyond `{component.text-input.focused}` are not extracted — error / success states need to be defined when the contact/inquiry flow is built.
- LED product photography directional treatment (studio vs. environmental, day vs. dusk) is not in scope. The system assumes photography is provided; it doesn't dictate how the photography is shot.
- Self-hosted Wanted Sans TTF files in `assets/fonts/` are bundled at weights 400, 500, 600, 700, 800. The 800 weight is loaded but unused in standard components — keep it bundled in case a future deliberate moment needs it (PPTX presentations, special headlines).
- The `surface-card` (#f5f5f5) token from earlier drafts has been replaced by `surface-warm` and `surface-pill` for component use. The token still exists for legacy reference but should not be applied to new components.
- Multi-product spec table responsive collapse (horizontal columns → vertical cards on mobile) is described in principle but not detailed at the component level. Define when implementing the actual product comparison page.
- The icon-led feature card variant (Manufacturing/Design/Proof line icons) currently picks accent color per claim type (Manufacturing → orange, Design → violet, Proof → emerald). This mapping is editorial — if the card content changes (new claim types, different framing), the assignment may need to be revisited.
