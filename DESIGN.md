---
name: freeks
description: Expert-led, luxury long-weekends for the obsessed.
colors:
  bg: "#f1eee7"
  bg-alt: "#e8e3d8"
  ink: "#1c1a16"
  ink-dim: "#57534b"
  ink-faint: "#656157"
  accent: "#743b2d"
  dark: "#100f0d"
  on-dark: "#ece8df"
typography:
  display:
    fontFamily: "'Switzer', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(30px, 4.6vw, 66px)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Switzer', system-ui, sans-serif"
    fontSize: "clamp(30px, 4.4vw, 58px)"
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Switzer', system-ui, sans-serif"
    fontSize: "clamp(17px, 1.35vw, 20px)"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "'Switzer', system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2em"
    textTransform: "uppercase"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(24px, 4.5vw, 64px)"
  section: "clamp(110px, 18vh, 210px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "18px 32px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-dark}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-dim}"
    rounded: "{rounded.none}"
    padding: "11px 18px"
  chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "2px 0"
---

# Design System: freeks

## 1. Overview

**Creative North Star: "The Quiet Expedition"**

freeks reads like an expensive, understated travel house, an Aman that happens to be for obsessives. The page is built on deep restraint and cinematic photography. You enter through a dark film still (the hero): a full-bleed, dimmed photograph with the trip list set over it in a refined light-weight sans. Then the page opens into a calm, daylit editorial body on warm bone and stone, with enormous whitespace, hairline rules, and tracked-uppercase labels. It closes on a dark footer that bookends the hero. There is no bright color anywhere; the only chroma is a single deep oxblood, used so sparingly you almost miss it.

The voice is confident and spare: it states the bar plainly (a sub-3:20 marathon, eight runners, $4,000 all-in) and trusts the right person to recognize themselves. Hierarchy comes from scale, weight contrast within one typeface, and space, never from decoration or color. Numbers are tabular and exact. Corners are square; motion is slow and elegant.

It is modeled on Aman (warm, calm, expensive restraint), Satisfy Running (stark editorial, athletic), and A24 (cinematic, gallery-like). It rejects anything that reads loud or cheap: bright accents, the bygone electric-pink, gradient meshes, glassmorphism, generic SaaS scaffolding, generic travel-operator card grids, hustle-retreat energy, and influencer-luxury gloss. Luxury here is the absence of noise.

**Key Characteristics:**
- Cinematic dark film-still hero, light editorial body, dark footer (the page is bookended dark)
- Warm bone + stone grounds; deep restraint and enormous whitespace
- One refined sans (Switzer) across weights; light for display, medium tracked caps for labels
- A single deep-oxblood accent, used so sparingly it is almost a secret
- Square corners, hairline rules, flat surfaces, slow elegant motion
- Specificity and tabular numbers as the luxury; no bright color anywhere

## 2. Colors

A warm, quiet, almost-monochrome palette. Two light grounds (bone and stone) carry the editorial body; one dark tone carries the hero and footer; one deep oxblood is the only chroma, used as a whisper. Values are sRGB hex; the project does not use OKLCH, so the frontmatter hex is canonical. All text/background pairings are verified to WCAG AA.

### Primary
- **Oxblood** (`#743b2d`): The only chroma in the system, and used so sparingly it reads as restraint, not color. Permitted uses, and no others: the short rule before a label, the single obsession word in a trip/detail/modal title, inline-link underlines, the field focus rule, focus outlines, and the button-hover lift. Never a fill, never a surface, never body text.

### Neutral — Grounds
- **Bone** (`#f1eee7`): The warm off-white primary ground. Body default, philosophy, waitlist, modal.
- **Stone** (`#e8e3d8`): The deeper warm neutral. The trip-detail section.
- **Dark** (`#100f0d`): The near-black film ground behind the hero photograph and the footer.

### Neutral — Ink
- **Ink** (`#1c1a16`): Warm charcoal, primary text (~14:1 on bone). Also the solid-button fill.
- **Ink Dim** (`#57534b`): Secondary text, body copy (~6:1).
- **Ink Faint** (`#656157`): Tracked-caps labels, meta, placeholders (~4.8:1, the floor on stone).
- **On-Dark** (`#ece8df`) + dim/faint tints: warm off-white text on the dark hero and footer.

### Named Rules
**The Secret-Accent Rule.** Oxblood is the only color, and it is rationed. If you can spot more than two oxblood elements in a single viewport, you have used too much; pull it back. Its scarcity is the luxury.

**The No-Bright-Surface Rule.** No surface is ever saturated or bright, no colored rooms, no gradients, no glass. Every ground is bone, stone, or near-black. Color lives only in the photography and the rationed oxblood.

## 3. Typography

**Typeface:** Switzer (Fontshare), with system-ui fallback. One family, weights 300–600.

**Character:** A refined, contemporary grotesque, neutral enough to feel expensive, with enough warmth to avoid feeling corporate. Used the way luxury houses use a single custom sans: light weights at large sizes for display, medium for tracked-uppercase labels, regular for body. The contrast axis is weight, size, and space, not a second typeface.

### Hierarchy
- **Display** (300, `clamp(30px, 4.6vw, 66px)`, lh ~1.05, ls -0.02em): Hero trip titles. The obsession word steps up to 500 for a quiet weight contrast.
- **Headline** (300, `clamp(30px, 4.4vw, 58px)`, lh 1.12): Philosophy and waitlist headings. Light, airy, generous.
- **Title** (300, `clamp(34px, 4.4vw, 60px)`): Per-trip detail title; the obsession word in oxblood at weight 400.
- **Body** (400, `clamp(17px, 1.35vw, 20px)`, lh 1.7): Prose, capped ~60ch, `text-wrap: pretty`.
- **Label** (500, 10–11px, ls 0.2em, UPPERCASE): Eyebrows, field labels, meta keys, nav, button text. The luxury signal. Often paired with a short oxblood rule (`.label--rule`).

### Named Rules
**The Weight-Not-Color Rule.** Within a title, emphasis (the obsession word) comes from a step up in weight, and at most a touch of oxblood on the light body, never from size jumps or a second color.

**The Tabular-Truth Rule.** All comparable numbers (benchmarks, distances, times, dates, prices) use `font-variant-numeric: tabular-nums`. The data is the proof of seriousness; it aligns.

## 4. Elevation

Flat, fully. No shadows, no panels, no glass. Depth comes only from the dark film bookends (hero, footer) against the light body, from photographs sitting inside a hairline frame, and from the ground shift between bone and stone. Corners are square (`0px`) everywhere.

### Named Rules
**The Hairline Rule.** Separation is a 1px rule or a change of ground, never a shadow or a box. Photographs get a 1px inset frame (`box-shadow: inset 0 0 0 1px var(--line)`); sections divide by ground and whitespace.

## 5. Components

### Buttons
- **Shape:** Square (`0px`).
- **Primary** (`button-primary`): Solid ink fill, bone text, tracked-caps label, `18px 32px`. Hover lifts the fill to oxblood (the one place the accent fills anything, briefly, on interaction). The trailing `→` slides.
- **Ghost** (`button-ghost`): Transparent with a 1px ink border, ink tracked-caps text; hover inverts to the ink fill.
- **Text link:** Tracked-caps, ink-dim, with a 1px underline rule that turns oxblood on hover.

### Chips
- **Style:** Square, transparent, 1px border, tracked-caps ink-dim text, 44px min target.
- **State:** Hover brightens to ink. Active (`chip-active`) fills ink with bone text, not oxblood. Multi-select; `aria-pressed` reflects state.

### Inputs / Fields
- **Style:** Boxless. Transparent field over a single 1px bottom rule, ink text, tracked-caps label above, flat on the ground.
- **Focus:** `:focus-within` shifts the bottom rule to oxblood. Placeholders are ink-faint, AA on the grounds.

### Navigation
- **Style:** No nav bar in the body. The hero carries a `freeks` wordmark and a single tracked-caps "Waitlist" link with an underline-on-hover. The trip index is the primary navigation; hover or keyboard-focus dims the siblings and cross-fades the photograph (1.8s) behind the type.

### Signature Component — The Quiet Index
A left-aligned column of refined light-weight trip titles over a dark, dimmed film still. The obsession word steps up to medium weight; the date rides beside it in tracked tabular caps. Hover/focus dims the rest to ~0.32 and slowly cross-fades the matching image. Keyboard-reachable; the load-bearing first impression.

## 6. Do's and Don'ts

### Do:
- **Do** bookend the page dark (hero, footer) around a light bone/stone editorial body (**The No-Bright-Surface Rule**).
- **Do** ration the oxblood to two or fewer elements per viewport (**The Secret-Accent Rule**).
- **Do** carry hierarchy with weight, scale, and whitespace within one typeface (Switzer) (**The Weight-Not-Color Rule**).
- **Do** use tracked-uppercase labels (with the short oxblood rule) where they carry information.
- **Do** keep surfaces flat and corners square; separate with hairlines and space (**The Hairline Rule**).
- **Do** set every comparable number in tabular figures (**The Tabular-Truth Rule**).
- **Do** let cinematic, full-color photography carry the body; the dark hero film still sets the mood.

### Don't:
- **Don't** introduce any bright color, the electric pink, a gradient mesh, or glassmorphism; this system is the deliberate opposite of those.
- **Don't** let oxblood become a fill, a surface, or body text; it is a whisper, not a voice.
- **Don't** add a second typeface or a third ground color.
- **Don't** round corners or add shadows, panels, or cards.
- **Don't** build a generic travel-operator layout (card grids, star ratings, "book now" clutter, stock-smile photography) or drift into hustle-retreat wellness, SaaS scaffolding, or influencer-luxury gloss.
- **Don't** use em dashes in copy (commas, colons, periods, or parentheses); en dashes for numeric ranges only.
- **Don't** crowd the page; whitespace is the luxury, so when in doubt, add space and remove elements.
