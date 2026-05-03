---
name: impactrum-design
description: Use this skill to generate well-branded interfaces and assets for Impactrum, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `ui_kits/marketing/`, `preview/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out of `assets/` and create static HTML files for the user to view. Reference `colors_and_type.css` directly. The marketing UI kit at `ui_kits/marketing/` contains React components — `Nav`, `Hero`, `FeatureGrid`, `ProductGrid`, `CategoryPills`, `CaseStudies`, `InquiryTiers`, `CTABand`, `Footer`, `Photo` — that you can lift wholesale or compose into new pages.

If working on production code, you can copy assets and read the rules in `README.md` to become an expert in designing with this brand. The single most important rule is: **black is for typography, primary CTAs, and the wordmark — never as a backdrop.** Surface variation comes from three light tones (`--bg-warm` #fafaf7, `--bg-cool` #f3f5f7, `--bg-soft` #f8f9fa); featured emphasis is a 1.5px ink border + ribbon badge, never a dark card.

Typography is single-family **Wanted Sans Variable** (loaded from jsDelivr CDN — see `colors_and_type.css`), with hierarchy carved by weight (400 → 500 → 600 → 700 → 800). Negative letter-spacing applies only to Latin display ≥ 28px; Korean headlines use `0`.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions about scope (marketing page? product detail? inquiry form?) and language (KO / EN / both?), then act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
