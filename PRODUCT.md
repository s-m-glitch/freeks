# Product

## Register

brand

## Users

People who are all-in on a craft or pursuit — runners chasing a sub-3:20 marathon, painters, writers, gravel cyclists, fossil hunters, energy obsessives. They already travel for the things they love and hold themselves to real standards (the running trip lists pace benchmarks as a soft bar to entry). They're discerning about taste and allergic to anything that feels mass-market or sold-to. When they hit the page they're sizing up whether this is a serious group of fellow obsessives or another packaged tour. The job to be done: decide quickly that freeks is *for them*, then join the waitlist or request a specific trip.

## Product Purpose

freeks runs expert-led, luxury long-weekends built around a single obsession — three days of going deep on one thing with a small group and a genuine expert leading it (e.g. an SFRC manager and ultrarunner hosting the Healdsburg running weekend). The landing page exists to communicate the taste and seriousness of the experience and to capture intent: waitlist signups and per-trip booking requests, both wired to live Vercel serverless endpoints (Resend + Google Sheets). Success looks like the right people — obsessives who meet the bar — self-selecting in, and the wrong people self-selecting out. It is a communicate-not-transact surface; there is no checkout, only requests that start a conversation.

## Brand Personality

Editorial, obsessive, cinematic. The voice is confident and spare — it states what the trip is and what's expected, and trusts the reader to recognize themselves. References: Satisfy Running and Monocle for editorial restraint and insider taste; A24 for the cinematic, slightly cool mood (the hero treatment — grayscale-leaning full-bleed photography, film grain, vignette — is doing this literally). Should evoke the feeling of being let into a club you earn your way into, not one that's selling to you. Warmth comes from the craft and the company, not from exclamation points.

## Anti-references

- **Generic travel / tour-operator sites** (Expedia, TripAdvisor): card grids, star ratings, "book now" clutter, stock-smile photography.
- **Hustle / retreat-bro wellness**: loud transformation promises, countdown-timer urgency, neon gradients, mastermind-funnel energy.
- **Corporate SaaS landing pages**: feature grids, the big-number hero-metric template, gradient-on-white, buzzword copy.
- **Mass-luxury / influencer travel**: over-filtered aspirational lifestyle imagery, conspicuous logos, FOMO marketing.

## Design Principles

- **Earn it, don't sell it.** State the bar (pace benchmarks, small groups, real experts) plainly and let the right people self-select. Persuasion is the absence of a hard sell.
- **The photograph is the design.** Cinematic, full-bleed, grayscale-leaning imagery carries the mood; typography and rules frame it rather than competing with it.
- **Specificity is the luxury.** Name the expert, the hotel, the restaurant, the trail, the exact times. Concrete detail signals taste and seriousness in a way adjectives can't.
- **Restraint with a point of view.** Spare layout and a tight palette, but never timid — the A24/editorial mood is a committed stance, not safety.
- **One obsession per surface.** Each trip is its own self-contained world; the page paces them one at a time rather than flattening them into a grid.

## Accessibility & Inclusion

Target WCAG 2.1 AA. Body and placeholder text must hold ≥4.5:1 against their backgrounds (watch the muted inks on warm paper and the light-on-dark waitlist/footer). Every motion effect — hero image cross-swaps, scroll reveals, the film-grain overlay, modal entrance — needs a `prefers-reduced-motion: reduce` alternative (crossfade or instant, content always visible by default). Maintain visible keyboard focus on the trip links, chips, form fields, and modal, and keep the booking modal's focus and Escape handling intact.
