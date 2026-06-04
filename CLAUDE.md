# CLAUDE.md

## Project

**freaks** — a single-file static landing page (`index.html`, no build step) for expert-led, luxury long-weekend trips built around one obsession (running, painting, gravel, energy, fossil hunting). All CSS is inline in one `<style>` block; ~100 lines of vanilla JS at the bottom drive the hero image swap, interest chips, scroll reveals, and the booking modal. Two Vercel serverless functions in `api/` (`subscribe.js`, `book-request.js`) handle the waitlist and per-trip booking requests via Resend + a Google Sheets webhook. Deployed on Vercel. See [README.md](README.md) for deploy steps.

## Design Context

This project uses the **impeccable** design skill. Two root files carry the design intent; read them before any UI work:

- **[PRODUCT.md](PRODUCT.md)** (strategic): register, users, purpose, brand personality, anti-references, design principles, accessibility bar.
- **[DESIGN.md](DESIGN.md)** (visual): the tokens, typography, components, and named rules. `.impeccable/design.json` is its machine-readable sidecar.

**Register:** brand (design IS the product; communicate, not transact).

**Audience:** all-in obsessives who already travel for their craft and hold themselves to real standards. The page should make the right person self-select in and the wrong person move on.

**Personality:** editorial, obsessive, cinematic. References: Satisfy Running and Monocle (editorial restraint, insider taste), A24 (cinematic, slightly cool mood). Warmth comes from craft and company, not exclamation points.

**Creative North Star:** "The Gallery After Dark" — a near-black room hung with cinematic prints, lit by a single terracotta light. (Redesigned from the earlier "Cinematic Field Journal" to leave the editorial-typographic lane: no serif, no mono, no rules, no cream.)

**Design principles:**
- Earn it, don't sell it — state the bar plainly, let people self-select.
- The photograph is the design — cinematic full-bleed imagery carries the mood.
- Specificity is the luxury — name the expert, hotel, trail, exact time.
- Restraint with a point of view — spare but never timid.
- One obsession per surface — pace the trips one at a time, never a grid.

**Anti-references (do NOT look like):** generic travel/tour-operator sites · hustle/retreat-bro wellness · corporate SaaS landings · mass-luxury/influencer travel.

**Accessibility:** target WCAG 2.1 AA. Body/placeholder text ≥4.5:1; `prefers-reduced-motion` alternatives for hero swaps, scroll reveals, grain, and modal; visible keyboard focus; preserve the modal's focus + Escape handling.
