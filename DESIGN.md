---
name: freaks
description: Expert-led, luxury long-weekends for the obsessed.
colors:
  paper: "#ece7dc"
  paper-warm: "#e3ddd0"
  paper-stone: "#d9cfbb"
  ink: "#1a1815"
  ink-soft: "#3b3631"
  ink-muted: "#6e6862"
  rule: "#c8c1b3"
  terracotta: "#8a4a31"
  cream: "#ede6d4"
typography:
  display:
    fontFamily: "Fraunces, 'Lyon Display', 'Times New Roman', Times, serif"
    fontSize: "clamp(42px, 6vw, 96px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Fraunces, 'Lyon Display', Times, serif"
    fontSize: "clamp(38px, 5vw, 76px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Fraunces, 'Lyon Display', Times, serif"
    fontSize: "clamp(36px, 4.4vw, 64px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "clamp(17px, 1.55vw, 22px)"
    fontWeight: 300
    lineHeight: 1.55
    letterSpacing: "-0.012em"
  label:
    fontFamily: "'IBM Plex Mono', ui-monospace, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  none: "0px"
spacing:
  gutter: "36px"
  gutter-mobile: "22px"
  section: "clamp(70px, 12vw, 170px)"
components:
  button-primary:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "18px 30px"
  button-primary-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  chip:
    backgroundColor: "transparent"
    textColor: "#bdb5a2"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "11px 16px"
  chip-active:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "6px 0"
---

# Design System: freaks

## 1. Overview

**Creative North Star: "The Cinematic Field Journal"**

freaks reads like the opening frames of an A24 film bound into a serious obsessive's logbook. The mood is cinematic: a full-bleed, grayscale-leaning photograph fills the first viewport, dimmed under a directional vignette and a fixed film-grain overlay, with the trip names set as a hovering title sequence over the frame. Then the page settles into the field-journal half of its identity, warm paper stock, hairline rules, monospaced detail set in the cadence of a runner's training log: pace benchmarks, hour-by-hour itineraries, named hotels and restaurants and trails. The two registers share one voice. The serif supplies the cinema; the mono supplies the documentation.

The system is built to make the right person recognize themselves and the wrong person move on. It states the bar plainly (a sub-3:20 marathon, eight runners, $4,000 all-inclusive) and trusts the reader to react. Restraint here is a stance, not timidity: a tight two-temperature palette, sharp 0px corners everywhere, and generous vertical pacing that lets one obsession occupy the screen at a time.

It explicitly rejects the generic travel-operator look (card grids, star ratings, "book now" clutter, stock-smile photography), hustle-retreat wellness energy (countdown urgency, neon gradients, transformation promises), corporate SaaS scaffolding (feature grids, big-number hero metrics, gradient-on-white), and mass-luxury influencer travel (over-filtered aspiration, conspicuous logos, FOMO). Warmth comes from craft and company, never from an exclamation point.

**Key Characteristics:**
- Cinematic full-bleed hero, photograph as the design, grain and vignette doing the mood work
- Two-temperature palette: warm paper by day, near-black ink by night, one terracotta voice
- Serif display (cinema) against monospaced body (field notes), no third typeface
- Sharp corners, hairline rules, no shadows, no cards
- Specificity as luxury: real names, real times, real benchmarks
- One obsession per surface; long scroll, deliberate pacing

## 2. Colors

A two-temperature palette: a warm paper range carries the daylight sections, a near-black ink range carries the cinematic hero, waitlist, and footer, and a single terracotta is the only chromatic voice in the system. Values are authored as sRGB hex; the project does not use OKLCH, so the frontmatter hex is canonical.

### Primary
- **Terracotta** (`#8a4a31`): The one saturated voice. Used sparingly: the wordmark, inline links, selection highlight, and the underline on itinerary references. Its rarity is the point; it never fills a surface.

### Neutral — Warm Paper (daylight)
- **Paper** (`#ece7dc`): The default body background. A warm off-white that reads as quality stock, not screen-white.
- **Paper Warm** (`#e3ddd0`): The philosophy section ground, one step deeper to separate it from the body.
- **Paper Stone** (`#d9cfbb`): The deepest paper tone, used to tint alternating trip-detail sections.
- **Rule** (`#c8c1b3`): Hairline dividers and section separators on paper.

### Neutral — Ink (night / cinema)
- **Ink** (`#1a1815`): Primary text on paper, and the full background of the hero, waitlist, and footer.
- **Ink Soft** (`#3b3631`): Long-form body copy on paper. Verified at ~8.8:1 on Paper Warm; the workhorse reading color.
- **Ink Muted** (`#6e6862`): Small uppercase labels and metadata on paper. Use with care: at 10px on paper it sits right at the AA edge (~4.4:1).
- **Cream** (`#ede6d4`): Text and primary-button fill on ink grounds. High contrast on dark (~12:1).

### Named Rules
**The One Voice Rule.** Terracotta is the only chroma in the system and appears on a sliver of any screen, links, the mark, selection. Everything else is paper or ink. Never introduce a second accent hue; warmth is carried by the paper and the photography, not by adding color.

**The Two-Temperature Rule.** Every section is either paper (daylight, documentary) or ink (night, cinema). There is no in-between gray surface. Transitions between the two are hard cuts across a hairline rule, never gradients.

## 3. Typography

**Display Font:** Fraunces (with Lyon Display, then Times fallback)
**Body / Label Font:** IBM Plex Mono (with ui-monospace, SF Mono, Menlo)

**Character:** A high-contrast optical serif paired against a humanist monospace, cinema set against the typewriter. The serif runs at weight 400 with tight negative tracking and frequent italics for the obsession words (*Running*, *Gravel*, *obsessed*); the mono runs light (weight 300) for body and medium (500) for tracked uppercase labels. The pairing is the whole system; there is no third family.

### Hierarchy
- **Display** (400, `clamp(42px, 6vw, 96px)`, lh 1.02, ls -0.035em): Hero trip titles set as a title sequence over the photograph.
- **Headline** (400, `clamp(38px, 5vw, 76px)`, lh 1.02, ls -0.03em): The philosophy statement and waitlist heading.
- **Title** (400, `clamp(36px, 4.4vw, 64px)`, lh 1, ls -0.035em): Per-trip detail titles.
- **Body** (300, `clamp(17px, 1.55vw, 22px)`, lh 1.55, ls -0.012em): Monospaced long-form copy. Capped at ~90ch; mono runs wide, so keep measures generous but never edge-to-edge.
- **Label** (500, 10–11px, ls 0.10–0.12em, UPPERCASE): Section eyebrows, field labels, metadata keys, chip text. Short phrases only.

### Named Rules
**The Italic-Obsession Rule.** In display and title type, the *thing you're obsessed with* is set in serif italic and the *place* in roman (`*Running* Healdsburg`). Italics mark the obsession, not arbitrary emphasis.

**The Caps-Are-Labels-Only Rule.** Uppercase is reserved for short tracked labels (≤4 words), eyebrows, and metadata keys. Body copy is never set in caps, and mono body never goes above weight 300.

## 4. Elevation

Flat by default. The system uses no box-shadows on paper; depth comes from the two-temperature contrast (ink sections advancing against paper sections) and from hairline rules, not from lifting elements off the page. The only depth effects live in the cinematic layers: the hero's stacked vignette gradients and the fixed film-grain multiply overlay, plus a single soft backdrop-blur behind the booking modal.

### Named Rules
**The No-Shadow Rule.** Surfaces are flat. If something needs to feel separate, change its temperature (paper vs. ink) or rule it off, never drop a shadow under it. The grain and vignette are atmosphere, not elevation, and belong only to the cinematic (ink) sections.

## 5. Components

### Buttons
- **Shape:** Sharp rectangles (`0px` radius). No rounding anywhere in the system.
- **Primary** (`button-primary`): Cream fill (`#ede6d4`), ink text, tracked uppercase mono label, `18px 30px` padding. Used for the waitlist and modal submit. Hover lifts the fill to pure white; a trailing `→` arrow slides right on hover.
- **Ghost** (`button-ghost`): Transparent with a 1px ink border, ink text, `16px 28px`. The trip "Request to book" CTA. Hover inverts to a solid ink fill with paper text over a 0.35s ease; the `→` arrow slides.
- **Inline link:** Terracotta with a 1px underline at 3px offset; hover drops opacity to 0.7.

### Chips
- **Style:** Transparent with a 1px border (`#3a352f` on the ink waitlist ground), muted cream text, tracked uppercase mono, `11px 16px`, min-height 38px for touch.
- **State:** Unselected is outline-only; hover warms the border and text toward cream. Selected (`chip-active`) inverts to a solid cream fill with ink text. These are multi-select interest toggles, not single-choice filters.

### Inputs / Fields
- **Style:** No box. A transparent field over a single 1px bottom rule, cream text, mono weight 300, label tracked uppercase above. The line is the field.
- **Focus:** Currently relies on the bottom rule; there is no distinct focus treatment yet (see Do's and Don'ts).
- **Placeholder:** Italic mono. Note the shipped placeholder color (`#5a544c`) fails AA on the ink ground (~2.4:1) and needs lightening.

### Navigation
- **Style:** There is no nav bar. The hero presents a single centered serif-italic wordmark in terracotta, and the trip list itself is the primary navigation, hovering a trip name cross-fades the hero photograph behind it (mouse) or swaps it on tap (touch). Deliberate: the page is a single long scroll, not a sectioned site.

### Signature Component — The Cinematic Trip Selector
The hero's defining pattern: a vertical list of serif trip titles over a full-bleed photograph. Hovering one title dims the others to ~0.22 opacity and cross-fades its matching background image (1.4s) while a slow 16s scale pan runs. On touch, dimming is disabled (it would strand the user) and tap swaps the image. Dates ride as superscript mono on desktop, drop to captions below the title on mobile. This component is the brand's first impression; treat it as load-bearing.

## 6. Do's and Don'ts

### Do:
- **Do** keep terracotta to a sliver (links, mark, selection). Its scarcity is the brand (**The One Voice Rule**).
- **Do** set every surface as either warm paper or near-black ink, separated by hairline rules, never a gradient or a mid-gray.
- **Do** set body copy in IBM Plex Mono weight 300 and cap measures near 90ch; let the typewriter cadence carry the field-journal voice.
- **Do** mark the obsession in serif italic and the place in roman (**The Italic-Obsession Rule**).
- **Do** lead with specificity: name the expert, the hotel, the trail, the exact time. Concrete detail is the luxury.
- **Do** ship real cinematic photography full-bleed; the photograph is the design.
- **Do** keep corners at `0px` and surfaces flat (**The No-Shadow Rule**).

### Don't:
- **Don't** build a generic travel-operator layout: card grids, star ratings, "book now" clutter, or stock-smile photography.
- **Don't** drift into hustle/retreat-bro wellness: countdown timers, neon gradients, transformation promises, mastermind-funnel energy.
- **Don't** fall into corporate SaaS scaffolding: feature grids, the big-number hero-metric template, gradient-on-white, buzzword copy.
- **Don't** chase mass-luxury influencer travel: over-filtered aspiration, conspicuous logos, FOMO marketing.
- **Don't** add a second accent hue or a third typeface; two families, one chroma.
- **Don't** use em dashes in copy (commas, colons, periods, or parentheses instead); en dashes for numeric ranges only.
- **Don't** set placeholder or label text so light it fails 4.5:1, the shipped `#5a544c` placeholder and `#7a7367` footer text are too dim on ink.
- **Don't** round corners, drop shadows, or use a card; the system is sharp and flat.
