# Impactrum Marketing UI kit

A high-fidelity recreation of the marketing-site surface defined in `Design.md`. Built as a click-thru prototype: hero band → product category switcher → feature grid → case studies → inquiry tiers → CTA band → footer.

## Files
- `index.html` — full marketing page mock; loads React + Babel and assembles the components below
- `Nav.jsx` — top navigation (wordmark + horizontal menu + KO/EN toggle + "Get a quote")
- `Hero.jsx` — 7/5 hero with display-xl headline and product image card
- `CategoryPills.jsx` — nav-pill-group switching between Indoor / Outdoor / Transparent / Custom
- `FeatureGrid.jsx` — 3-up feature cards alternating warm and cool surfaces
- `ProductGrid.jsx` — product image cards with category tag and short tagline
- `CaseStudies.jsx` — 3-up case study cards with installation photography
- `InquiryTiers.jsx` — three inquiry tiers, the middle marked featured (1px ink + ribbon)
- `CTABand.jsx` — pre-footer warm CTA card
- `Footer.jsx` — light `surface-soft` footer (deliberately not dark)
- `Photo.jsx` — labeled placeholder block standing in for real LED installation photography

## Coverage
- ✅ Top nav, KO/EN toggle, primary CTA
- ✅ Hero (display-xl + product image card)
- ✅ Category pill-group with active state
- ✅ Feature cards (warm / cool variants)
- ✅ Product image cards + spec card excerpt
- ✅ Case study cards
- ✅ Inquiry tier cards (standard + featured)
- ✅ Light CTA band, light footer
- ✅ Click-thru: switching categories repaints the product grid; submitting the inquiry CTA flashes a success state

## Caveats
- **Photography is placeholder.** Every photo slot is a labeled `--bg-warm` rectangle with a thin caption — please supply real LED installation imagery.
- **Icons are Lucide** (CDN-loaded), substituted for the system's missing icon set.
- **Korean copy is illustrative** — written in 존댓말 register but not editorially reviewed.
