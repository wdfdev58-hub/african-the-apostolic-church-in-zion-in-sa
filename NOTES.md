# African The Apostolic Church in Zion in SA — brand & build notes

## Brief
Lovable rebuild (CLAUDE.md §0 case B). Kuruman, Northern Cape. Pastor Makgothu Morapedi.
Real branding: deep navy + gold. No screenshots yet — service times, address and phone
are still the template's placeholders pending Phase 2 content from the operator.

## Phase 1 — v1
`generate.py --palette royal` → navy/gold token set (`ink #0A0E1A`, `ember #3B6EF5`,
`blaze #1E3A8F`, `gold #F5C542`, `bone #EEF2FB`). Hero "A TRANSFORMED / WORLD",
scripture John 8:36, moments heading "Free in the Kingdom of God".

## Phase 2 — refine (design-library direction: Super Travel)
Auto-picked **Super Travel** (elegant/established/stately) — the base template's
signature was a generic "rising embers" particle field + 🔥 eyebrow icon, leftover
from the library's fire-themed demo church. That's a thematic mismatch for a
established Apostolic/Zion congregation, so it was replaced rather than just recoloured.

Kept the church's real navy + gold palette (CLAUDE.md: branding leads) instead of
swapping to Super Travel's stock cream/dusty-rose — adopted the direction's
**structure** on top of the real brand colours:
- Type: League Spartan everywhere (was Anton + Inter), weight carries hierarchy,
  headings tightened to leading-[0.85]/tracking-tight.
- Nav: permanent floating glass pill (was full-width bar, blur only on scroll).
- Gallery: staggered offset (2nd "Moments" image drops on md+) + grayscale→colour
  reveal on hover, applied to the welcome portrait too.
- Signature element: floating rotating badge built from the church's own verse —
  "FREE INDEED" spinning around a "JN 8:36" centre disc, bounces gently (CSS only,
  keeps turning without JS, respects prefers-reduced-motion).
- Removed the ember canvas/particle system and the fire emoji; reworded two
  fire-metaphor lines ("Fuel the fire" → "Sow into the Kingdom", "room at this
  fire" → "room in this family") to match language already used elsewhere on
  the page. All factual content/copy/images untouched.
- Buttons restyled solid gold on ink (was a blue→navy gradient) for a more
  editorial/luxury contrast.
- Favicon swapped from a 🔥 emoji to a plain gold cross mark.

## Phase 2 — real content pass (from operator's Lovable screenshots)
The old site (`africanthefirstapostolicchurchinzionofsa.lovable.app`) had the church's
name **wrong** — "African The First Apostolic Church In Zion of SA". Corrected name used
everywhere on this site: **African The Apostolic Church in Zion in SA**. Only content and
branding were carried across, never the name, per the operator's explicit instruction.

Carried across from the screenshots:
- **Vision** (repurposed the Welcome section): heading "A Kingdom people, alive in the
  Spirit.", their real vision paragraph, hero subhead now their real vision line, scripture
  pairing "John 8:36 · Romans 8:2" used the way they use it (hero, vision, pinned verse tag).
- **Three Pillars** (replaced the generic "what to expect" cards): Baptize (Matthew 28:19) ·
  Empower (Acts 1:8) · Transform (Romans 12:2), plus their footer tagline "Faith in Christ ·
  Power of the Spirit · Kingdom impact".
- **Visit**: heading "Every soul is welcome at the altar.", their real welcoming paragraph.
- **Service times corrected**: the v1 template had invented a third "Friday night" service
  that isn't real — removed it. Real, confirmed services only: Sunday Service 09:00–12:00,
  Midweek Prayer Wednesdays 18:30.
- **F✝A logo mark**: the operator supplied the real file (`assets/img/logo.png`, trimmed of its
  white margin) — swapped in for nav + footer, replacing an earlier hand-drawn SVG placeholder.
  Favicon also re-cropped from the real logo's cross mark (was a plain generated cross).
- Nav/footer IA aligned to their real site: Vision · Pillars · Visit · Ministries · Give.

Note: the operator's first upload attempt for the logo resolved to an unrelated church's file
("Tlhotlhomiso Community Church") that happened to share a similar filename in the shared assets
store — did not use it, asked for a re-upload instead. Worth double-checking any asset the operator
references by name rather than by direct upload, since filenames collide across churches.

## Phase 2 — Mission section added
Operator sent the full text. New `#mission` section between Vision and Pillars (matches old
site's order): "To proclaim the Gospel of Jesus Christ. To baptize believers through full
immersion in water, and to build Spirit-filled church communities that deliver healing,
holiness, and hope across South Africa and beyond." — Matthew 28:19–20. Added "Mission" back
into nav + footer. Also removed a duplicate "Matthew 28:19–20" tag I'd mistakenly put under
Pillars in the first content pass — that reference belongs to Mission only; the old site's
Pillars section has no section-level scripture tag of its own, just the per-card refs.

Re-confirmed at full resolution: the old site's "Reach us" card really does just say "Across
South Africa" — no street, no suburb, nothing more specific in any of the 4 screenshots.

## Still open — asked the operator, not yet answered
- **Whether Kuruman is even correct.** The operator questioned this after seeing the live map —
  worth being precise about where it came from: Kuruman/Northern Cape was given in the
  *original build brief* (before any Lovable screenshots existed), not from the old site itself
  (which never names a city — just "across South Africa"). So it's not confirmed by the old
  site, but it's also not something invented this session. Waiting on the operator to confirm
  or correct it. **Do not change the city without their explicit confirmation** — several WDF
  churches share this exact name across different branches/pastors (see CLAUDE.md's slug rule),
  so getting the branch's real town wrong is a serious mistake, not a cosmetic one.
- **Real physical street address / phone / email** — still nothing more specific than city-level
  Kuruman anywhere. Map shows a generic Kuruman-area search, not a precise pin. Phone link still
  the template placeholder `tel:+27000000000`.
