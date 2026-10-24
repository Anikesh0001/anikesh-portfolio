---
name: frontend-design
description: Design system and taste rules for Anikesh's portfolio. Load before building or editing any UI so every component follows one consistent, premium design language instead of generic AI defaults.
---

# Frontend Design — Anikesh Portfolio

This is a dark, futuristic developer portfolio. Every new section must look like it belongs to the
same system. When in doubt, match existing components (`Experience.jsx`, `AboutTimeline.jsx`,
`Projects.jsx`) rather than inventing a new look.

## Brand & color tokens
Never hardcode random hex values. Use these:

- Background (dark): `#030014`
- Accent cyan (primary): `#00f2ff`
- Accent purple (secondary): `#7000ff`
- Text on dark: `#ffffff`, muted: `text-gray-300` / `text-gray-400`
- Signature gradient: `from-[#00f2ff] to-[#7000ff]` — use the `.text-gradient` utility for headings,
  and `bg-gradient-to-r`/`bg-gradient-to-b` from cyan→purple for accents, borders, and dividers.
- Status/success: `emerald-400/500`. Use sparingly (e.g. "Current" badges).

## Typography
- Headings: **Space Grotesk** (applied to `h1`–`h6` globally).
- Body/UI: **Outfit**.
- Scale (don't invent sizes): section titles `text-4xl md:text-5xl font-bold`; card titles
  `text-xl`–`text-3xl`; body `text-sm md:text-base`; eyebrow labels `text-xs uppercase tracking-wider`.
- Every section leads with: a small pill eyebrow (icon + label), then an `h2` with one word in
  `.text-gradient`, then a short `h-1 w-20` gradient underline. Keep this rhythm consistent.

## Spacing — 8px grid
Use the 8px base scale only (Tailwind `2/4/6/8/10/12/16/20/24` map to multiples of 8/4px).
Sections use `.section-padding` (`py-20 px-6 md:px-12 max-w-7xl mx-auto`). Card inner padding
`p-6 sm:p-8 md:p-10`. Gaps `gap-3`/`gap-4`/`gap-6`.

## Components
- **Cards**: `.glass` utility (backdrop blur + subtle border) with `rounded-2xl md:rounded-3xl`.
  Add a soft gradient glow behind important cards and a left `w-1.5` cyan→purple accent bar.
- **Hover**: lift/scale subtly (`hover:scale-105` on pills, `hover:-translate-y-1` on cards) + glow
  (`hover:shadow-[0_0_40px_rgba(0,242,255,0.15)]`). Always `transition-all duration-300/500`.
- **Pills/tags**: `rounded-full`, `bg-cyan-900/20 text-cyan-300 border border-cyan-500/20`.
- **Buttons**: gradient fill for primary CTA; outline/glass for secondary. Always a focus-visible ring.

## Motion (Framer Motion — required)
Every section and card must animate in. Standard pattern:
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: index * 0.1 }}  // stagger lists by index
```
- Scroll-triggered fades + upward reveal for every block.
- Stagger children of a list/grid by `index * 0.05–0.1`.
- Smooth hover transitions on all interactive elements. Keep durations 0.3–0.6s. No bouncy/janky easing.

## Accessibility & performance
- All `<img>` below the fold get `loading="lazy"` and a real `alt`. Above-the-fold hero image stays eager.
- Keep focus-visible rings (defined in `index.css`). Maintain AA contrast on text over glows.
- Don't add new font weights without reason; the project loads a trimmed set.

## Avoid the "generic AI aesthetic"
- No default Tailwind blue/indigo buttons, no `shadow-md` grey cards, no emoji as icons
  (use `lucide-react`), no centered wall of equal-weight text.
- Prefer asymmetry, generous whitespace, one clear accent per section, and real hierarchy.
- Reuse existing utilities (`.glass`, `.text-gradient`, `.section-padding`, `.glow-cyan`) before
  writing new CSS.
