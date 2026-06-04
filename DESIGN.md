---
name: freaks
description: Expert-led, luxury long-weekends for the obsessed.
colors:
  bg: "#14110f"
  bg-raised: "#1d1916"
  bg-deep: "#0d0b0a"
  ink: "#f2ece1"
  ink-dim: "#b8b0a4"
  ink-faint: "#8a8276"
  terracotta: "#cd6038"
  terracotta-surface: "#9c4327"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(34px, 5.4vw, 82px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(34px, 4.8vw, 68px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(34px, 4.6vw, 64px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(17px, 1.4vw, 21px)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  pill: "999px"
  panel: "18px"
  modal: "14px"
spacing:
  gutter: "clamp(22px, 4vw, 52px)"
  section: "clamp(80px, 15vh, 180px)"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "16px 26px"
  button-primary-hover:
    backgroundColor: "#e06d42"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "16px 26px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-dim}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  chip-active:
    backgroundColor: "{colors.terracotta}"
    textColor: "#ffffff"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "4px 0"
---

# Design System: freaks

## 1. Overview

**Creative North Star: "The Gallery After Dark"**

freaks is a near-black room hung with cinematic prints. Photography is the light source: full-bleed, grayscale-leaning frames under a heavy scrim, with the trip names set as bold type laid over the image like a title card. The rest of the page is a darkened gallery, charcoal walls, off-white text, hairline-framed photographs, and a single warm light that is terracotta. Terracotta is no longer a sliver; it is the gallery's signage and accent lighting, marking the obsession word in every trip name, every link, every primary action, and the one terracotta room (the waitlist).

The voice is confident and spare: it states the bar plainly (a sub-3:20 marathon, eight runners, $4,000 all-in) and trusts the right person to recognize themselves. Hierarchy comes from one grotesque typeface pushed across weights, not from decoration. Numbers are tabular and exact. Surfaces are flat; depth comes from temperature (near-black against the terracotta room, a dark form panel inset on terracotta) and from the way a photograph advances against its dark wall.

It deliberately rejects the editorial-typographic lane it used to live in: no serif italics, no monospaced tracked labels, no hairline-rule eyebrows, no warm cream paper. It also rejects the generic travel-operator look (card grids, star ratings, stock-smile photography), hustle-retreat wellness energy, corporate SaaS scaffolding, and mass-luxury influencer travel. Warmth comes from the photography and the one terracotta light, never from an exclamation point.

**Key Characteristics:**
- Near-black gallery ground; photography is the light
- One warm light: terracotta as structural voice, not accent dust
- A single grotesque (Bricolage Grotesque) across weights, no serif, no mono
- Photographs framed like prints (hairline inset); flat surfaces, no shadows
- The obsession word is terracotta + heavy weight; the place is off-white
- Specificity as luxury: real names, real times, tabular benchmarks

## 2. Colors

A committed dark palette: near-black grounds carry the page, one terracotta is the only chroma, and a single deeper terracotta is the one saturated surface. Values are authored as sRGB hex; the project does not use OKLCH, so the frontmatter hex is canonical. All text/background pairings are verified to WCAG AA.

### Primary
- **Terracotta** (`#cd6038`): The one warm light. Marks the obsession word in trip titles, all links, primary buttons, chip-active, and section eyebrows. Brightened from the legacy brand terracotta specifically so it clears 4.5:1 on near-black. Its presence is generous now, but it is still the *only* hue.
- **Terracotta Surface** (`#9c4327`): A single deeper terracotta used as the one saturated *surface*, the waitlist room. Deep enough that off-white text on it stays AA.

### Neutral — Grounds
- **Bg** (`#14110f`): The near-black body. Warm-leaning charcoal, never cream.
- **Bg Raised** (`#1d1916`): Alternating sections (philosophy), modal card.
- **Bg Deep** (`#0d0b0a`): Footer and the hero's base behind the photograph.

### Neutral — Ink
- **Ink** (`#f2ece1`): Cool off-white, primary text (~15.7:1 on bg). Deliberately not cream.
- **Ink Dim** (`#b8b0a4`): Secondary text, body copy, dates (~8.7:1).
- **Ink Faint** (`#8a8276`): Small labels, meta, itinerary times (~4.9:1, the floor).

### Named Rules
**The One Light Rule.** Terracotta is the only chroma in the system. It may appear generously, marking obsessions, links, actions, and the one terracotta room, but a second accent hue is never introduced. Everything else is near-black or off-white.

**The Two-Ground Rule.** Surfaces are either a near-black ground or the single terracotta room. There is no third surface color and no gradient between them. On the terracotta room, the form sits on an inset near-black panel so inputs stay legible.

## 3. Typography

**Typeface:** Bricolage Grotesque (with system-ui fallback). One family, full weight range.

**Character:** A contemporary grotesque with idiosyncratic, slightly mechanical details, confident and a little unruly, the opposite of a neutral corporate sans. The whole system is this one family pushed hard across weights: 700–800 for display and titles, 400–500 for body and labels. No serif, no monospace, no second family. The contrast axis is weight and size, not typeface.

### Hierarchy
- **Display** (700, `clamp(34px, 5.4vw, 82px)`, lh 0.98, ls -0.03em): Hero trip titles, laid over the photograph as a title card.
- **Headline** (700, `clamp(34px, 4.8vw, 68px)`, lh 1.02): Philosophy statement, waitlist heading.
- **Title** (700, `clamp(34px, 4.6vw, 64px)`, lh 1): Per-trip detail title.
- **Body** (400, `clamp(17px, 1.4vw, 21px)`, lh 1.6): Prose, capped at ~62ch. `text-wrap: pretty`.
- **Label** (600, 12–13px, ls 0.02em, sentence case): Eyebrows, field labels, meta keys. Short phrases; never a tracked-uppercase block.

### Named Rules
**The Obsession-in-Terracotta Rule.** In any trip title, the *thing you're obsessed with* is set in terracotta at weight 700 and the *place* in off-white (`Running` Healdsburg). Terracotta + weight marks the obsession, replacing the old serif-italic convention.

**The Tabular-Truth Rule.** All numbers a reader might compare, benchmarks, distances, times, dates, prices, use `font-variant-numeric: tabular-nums`. The data is the proof of seriousness; it aligns.

## 4. Elevation

Flat by default, with one purposeful exception. The system uses no decorative shadows. Depth is built three ways: the temperature jump between a near-black section and the terracotta room; photographs advancing off their dark walls; and the one inset near-black **form panel** floating on the terracotta surface (a grouping affordance, not decoration). The booking modal uses a single soft backdrop-blur and a brief entrance, the only blur in the system.

### Named Rules
**The Print-on-Black Rule.** Photographs are framed like gallery prints, a 1px inset hairline (`box-shadow: inset 0 0 0 1px var(--line)`), never a drop shadow. If something needs separation, change its ground temperature or frame it, do not lift it.

## 5. Components

### Buttons
- **Shape:** Pill (`999px`). Consistent across primary, ghost, chip, and submit.
- **Primary** (`button-primary`): Solid terracotta, white text, `16px 26px`. The trailing `→` slides on hover; background lifts to `#e06d42`.
- **Ghost** (`button-ghost`): Transparent with a 1px `--line-strong` border, off-white text. Hover brightens the border to off-white. Used for the nav pill and secondary actions.
- **Text link:** Off-white-dim with a 1px underline rule; hover brightens to off-white. Inline prose links are terracotta with a thick underline.

### Chips
- **Style:** Pill, transparent with a 1px `--line-strong` border, dim off-white text, 44px min touch target. On the dark form panel.
- **State:** Hover brightens border + text to off-white. Active (`chip-active`) fills solid terracotta with white text. Multi-select interest toggles; `aria-pressed` reflects state.

### Inputs / Fields
- **Style:** No box. Transparent field over a single 1px bottom rule, off-white text, label above. Live on the inset dark form panel.
- **Focus:** `:focus-within` shifts the bottom rule to terracotta and the label to off-white. Placeholders are dim off-white, verified ≥4.5:1 on the panel.

### Navigation
- **Style:** No nav bar in the body. The hero carries a bold off-white `freaks` wordmark (weight 800) and a single ghost "Join the waitlist" pill. The trip index itself is the primary navigation; hovering or keyboard-focusing a trip cross-fades its photograph behind the type.

### Signature Component — The Gallery Index
The hero's defining pattern: a left-aligned column of bold grotesque trip titles over a full-bleed, heavily-scrimmed photograph. Hover or keyboard-focus dims the siblings to ~0.34 and cross-fades the matching image (1.4s) under a slow 18s scale push. On touch, dimming is disabled. Each title marks its obsession in terracotta; the date rides beside it in tabular dim. Keyboard-reachable (focus triggers the same preview) and the load-bearing first impression.

## 6. Do's and Don'ts

### Do:
- **Do** keep the page near-black with one terracotta room and one terracotta light (**The One Light / Two-Ground Rules**).
- **Do** mark the obsession word in terracotta + weight 700; keep the place off-white (**The Obsession-in-Terracotta Rule**).
- **Do** use a single typeface (Bricolage Grotesque) across weights; let weight and size carry hierarchy.
- **Do** frame photographs like prints with a hairline inset, and keep surfaces flat (**The Print-on-Black Rule**).
- **Do** set every comparable number in tabular figures (**The Tabular-Truth Rule**).
- **Do** lead with specificity: name the expert, the hotel, the trail, the exact time.
- **Do** inset the form on a dark panel when it sits on the terracotta surface, so inputs stay AA.

### Don't:
- **Don't** reintroduce the editorial-typographic lane: no serif italics, no monospaced tracked labels, no hairline-rule eyebrows over every section, no warm cream/paper background.
- **Don't** add a second accent hue or a second typeface.
- **Don't** build a generic travel-operator layout: card grids, star ratings, "book now" clutter, stock-smile photography.
- **Don't** drift into hustle/retreat-bro wellness, corporate SaaS scaffolding, or mass-luxury influencer travel.
- **Don't** use em dashes in copy (commas, colons, periods, or parentheses); en dashes for numeric ranges only.
- **Don't** put body or placeholder text directly on the mid-terracotta surface; it can't reach 4.5:1. Use the dark panel or full off-white.
- **Don't** drop shadows for depth; use temperature, framing, or the inset panel.
