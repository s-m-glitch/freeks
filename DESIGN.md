---
name: freaks
description: Expert-led, luxury long-weekends for the obsessed.
colors:
  bg: "#fafbe4"
  bg-raised: "#f4f7f8"
  bg-deep: "#0d0b0a"
  ink-strong: "#16151a"
  ink: "#16151a"
  ink-dim: "#54515a"
  ink-faint: "#6c6972"
  pink: "#cf0f59"
  pink-bright: "#ff3d80"
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
  pill: "3px"
  panel: "10px"
spacing:
  gutter: "clamp(22px, 4vw, 52px)"
  section: "clamp(80px, 15vh, 180px)"
components:
  button-primary:
    backgroundColor: "{colors.pink}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "16px 26px"
  button-primary-hover:
    backgroundColor: "{colors.pink-bright}"
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
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "4px 0"
---

# Design System: freaks

## 1. Overview

**Creative North Star: "The Daylight Gallery"**

freaks is a daylit gallery painted in two soft tones, pale lemon and cool mist, entered through and closed by a dark photographic threshold. The page opens on a full-bleed, scrimmed photograph with the trip names over it (the dark hero), settles into the bright two-tone gallery (lemon and mist sections alternating, photographs framed like prints, near-black type), and closes on a dark footer that bookends the hero. Color is held in reserve: one electric pink appears only twice as a resting state, the obsession word in a trip title and the primary action button. Everywhere else is grounds and ink.

The voice is confident and spare: it states the bar plainly (a sub-3:20 marathon, eight runners, $4,000 all-in) and trusts the right person to recognize themselves. Hierarchy comes from one grotesque typeface pushed across weights and from the rhythm of the two grounds, not from decoration. Numbers are tabular and exact. Corners are nearly square (3px), athletic and technical, not soft.

It deliberately stays out of the warm/dark register that reads as Halloween or Strava (orange-on-black) and out of the editorial-typographic lane it once lived in: no serif italics, no monospaced tracked labels, no hairline-rule eyebrows, no warm cream paper. It also rejects the generic travel-operator look (card grids, star ratings, stock-smile photography), hustle-retreat wellness energy, corporate SaaS scaffolding, and mass-luxury influencer travel. Warmth comes from the photography and the lemon ground, never from an exclamation point.

**Key Characteristics:**
- Two soft grounds, pale lemon (primary) and cool mist (alternating)
- Dark photographic threshold at both ends: the hero and the footer bookend the page
- Pink used twice at rest only: the obsession mark and the primary CTA
- A single grotesque (Bricolage Grotesque) across weights, no serif, no mono
- Photographs framed like prints (hairline inset); flat surfaces, no shadows
- Near-square 3px corners; specificity and tabular numbers as the luxury

## 2. Colors

A light, cool two-tone palette: pale lemon and mist gray carry the page, near-black is the type, the hero and footer are the one dark tone, and one electric pink is a rare highlight, never a surface. Values are authored as sRGB hex; the project does not use OKLCH, so the frontmatter hex is canonical. All text/background pairings are verified to WCAG AA.

### Primary
- **Pink** (`#cf0f59`): The deep pink. Used at rest **only** on primary CTA fills (Request to book, Join the waitlist). Also carries focus rings, the field focus rule, and link hover. White text on it clears 4.5:1.
- **Pink Bright** (`#ff3d80`): The electric mark. Used at rest **only** for the obsession word in trip titles (always large display) and as the button-hover lift.

### Neutral — Grounds
- **Lemon** (`#fafbe4`): The pale-lemon primary ground. Cool, not a warm cream. Body default and the trip-detail section.
- **Mist** (`#f4f7f8`): The cool light-gray alternating ground. Philosophy, waitlist, modal card.
- **Threshold Black** (`#0d0b0a` / `#16151a`): The dark tone. `#0d0b0a` behind the hero photograph; `#16151a` (`--ink-strong`) is the footer anchor.

### Neutral — Ink
- **Ink** (`#16151a`): Near-black primary text (~16:1 on the grounds). Also the active-chip fill.
- **Ink Dim** (`#54515a`): Secondary text, body copy, eyebrows, dates (~7:1).
- **Ink Faint** (`#6c6972`): Small labels, meta, placeholders (~5:1, the floor).

### Named Rules
**The Two-Highlights Rule.** Pink appears at rest in exactly two places: the obsession word in a trip title (bright) and the primary action button (deep). Everywhere else, including eyebrows, links, benchmark labels, and active chips, is ink. Pink may additionally carry interaction states (focus ring, link hover), because those are transient. Do not let pink leak back into eyebrows, surfaces, or body links at rest.

**The Two-Grounds-and-Bookends Rule.** The body alternates two soft grounds, lemon and mist; the hero and footer are the one dark tone, bookending the page. There is no third ground color and no pink surface. Sections separate by ground and space, never by a rule or a gradient.

## 3. Typography

**Typeface:** Bricolage Grotesque (with system-ui fallback). One family, full weight range.

**Character:** A contemporary grotesque with idiosyncratic, slightly mechanical details, confident and a little unruly, the opposite of a neutral corporate sans. The whole system is this one family pushed hard across weights: 700–800 for display and titles, 400–500 for body and labels. No serif, no monospace, no second family. The contrast axis is weight and size, not typeface.

### Hierarchy
- **Display** (700, `clamp(34px, 5.4vw, 82px)`, lh 0.98, ls -0.03em): Hero trip titles over the dark threshold.
- **Headline** (700, `clamp(34px, 4.8vw, 68px)`, lh 1.02): Philosophy statement, waitlist heading.
- **Title** (700, `clamp(34px, 4.6vw, 64px)`, lh 1): Per-trip detail title.
- **Body** (400, `clamp(17px, 1.4vw, 21px)`, lh 1.6): Prose, capped at ~62ch. `text-wrap: pretty`.
- **Label** (600, 12–13px, ls 0.02em, sentence case): Eyebrows, field labels, meta keys, in ink-dim/faint. Short phrases; never a tracked-uppercase block.

### Named Rules
**The Obsession-in-Pink Rule.** In any trip title, the *thing you're obsessed with* is set in bright pink (`#ff3d80`) at weight 700 and the *place* in ink (off-white over the dark hero). This is one of only two resting uses of pink; it is always large display type, so the bright pink clears the 3:1 large-text bar.

**The Tabular-Truth Rule.** All numbers a reader might compare, benchmarks, distances, times, dates, prices, use `font-variant-numeric: tabular-nums`. The data is the proof of seriousness; it aligns.

## 4. Elevation

Flat by default. The system uses no decorative shadows and (now) no inset panels: forms sit flat on their ground. Depth is built three ways: the dark hero threshold and dark footer against the light body; photographs advancing off their grounds inside a hairline frame; and ground temperature shifting between lemon and mist. The booking modal uses a single soft backdrop-blur and a brief entrance, the only blur in the system. Corners are near-square: 3px on pills, 10px on the modal.

### Named Rules
**The Print-Frame Rule.** Photographs are framed like gallery prints, a 1px inset hairline (`box-shadow: inset 0 0 0 1px var(--line)`), never a drop shadow. If something needs separation, change its ground or frame it, do not lift it.

## 5. Components

### Buttons
- **Shape:** Near-square pill (`3px`). Deliberately angular, not rounded.
- **Primary** (`button-primary`): Solid deep pink (`#cf0f59`), white text, `16px 26px`. One of the two resting pink uses. The trailing `→` slides on hover; background lifts to bright pink.
- **Ghost** (`button-ghost`): Transparent with a 1px border, ink text on the grounds (off-white on the hero). Hover brightens the border. The hero nav pill and secondary actions.
- **Text link:** Ink-dim with a 1px underline rule; hover brightens to ink. Inline prose links are ink with a faint underline that turns pink on hover only.

### Chips
- **Style:** Near-square (`3px`), transparent with a 1px border, ink-dim text, 44px min touch target. Flat on the ground.
- **State:** Hover brightens border + text to ink. Active (`chip-active`) fills **ink** (near-black) with ground-colored text, not pink. Multi-select interest toggles; `aria-pressed` reflects state.

### Inputs / Fields
- **Style:** No box, no panel. Transparent field over a single 1px bottom rule, ink text, label above. Flat on the section ground.
- **Focus:** `:focus-within` shifts the bottom rule to pink and the label to ink-dim. Placeholders are ink-faint, verified ≥4.5:1 on the grounds.

### Navigation
- **Style:** No nav bar in the body. The hero carries a bold off-white `freaks` wordmark (weight 800) and a single ghost "Join the waitlist" pill. The trip index itself is the primary navigation; hovering or keyboard-focusing a trip cross-fades its photograph behind the type.

### Signature Component — The Gallery Index
The hero's defining pattern: a left-aligned column of bold grotesque trip titles over a full-bleed, heavily-scrimmed photograph (the dark threshold). Hover or keyboard-focus dims the siblings to ~0.34 and cross-fades the matching image (1.4s) under a slow 18s scale push. On touch, dimming is disabled. Each title marks its obsession in bright pink; the date rides beside it in tabular dim. Keyboard-reachable and the load-bearing first impression.

## 6. Do's and Don'ts

### Do:
- **Do** carry the page on the two soft grounds (lemon primary, mist alternating) and bookend it with the dark hero and footer (**The Two-Grounds-and-Bookends Rule**).
- **Do** keep pink to exactly two resting uses, the obsession mark and the primary CTA (**The Two-Highlights Rule**).
- **Do** mark the obsession word in bright pink + weight 700; keep the place in ink/off-white (**The Obsession-in-Pink Rule**).
- **Do** use a single typeface (Bricolage Grotesque) across weights.
- **Do** frame photographs like prints with a hairline inset, and keep surfaces flat (**The Print-Frame Rule**).
- **Do** set every comparable number in tabular figures (**The Tabular-Truth Rule**).
- **Do** keep corners near-square: 3px pills, 10px modal.

### Don't:
- **Don't** let pink leak back into eyebrows, links, surfaces, or active chips at rest; those are ink.
- **Don't** drift into the warm/dark register (orange-on-black reads Halloween / Strava) or back into the editorial-typographic lane: no serif italics, no mono labels, no hairline-rule eyebrows, no cream paper.
- **Don't** add a second accent hue, a third ground color, or a second typeface.
- **Don't** round the pills back into full lozenges; the angular 3px corner is the brand.
- **Don't** build a generic travel-operator layout: card grids, star ratings, "book now" clutter, stock-smile photography.
- **Don't** drift into hustle/retreat-bro wellness, corporate SaaS scaffolding, or mass-luxury influencer travel.
- **Don't** use em dashes in copy (commas, colons, periods, or parentheses); en dashes for numeric ranges only.
- **Don't** drop shadows or add inset cards for depth; use the dark bookends, framing, or ground temperature.
