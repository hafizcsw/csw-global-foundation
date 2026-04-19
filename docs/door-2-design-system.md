# Door 2 — Design System / UX / Page Design

Status: **NEAR-CLOSE — revision r2 applied; awaiting acknowledgement.**
Owner: CSW Global
Scope: Canonical design system, component inventory, multilingual + RTL UI rules, wireframes for every primary template, and the hi-fi production order. Door 3 implements against this document. Any change requires a Door 2 re-open.

Door 1 reference: `docs/door-1-strategy.md` (r2, CLOSED).

---

## 0. Aesthetic direction (locked)

**Movement:** *Institutional Restraint.*
Premium, quiet, structurally confident. Editorial — not consumer. Every element earns its place; negative space is a primary material. The site should read like the annual report of a serious holding group, not a startup landing page.

Reference vocabulary: Swiss editorial grid · monochrome with one restrained metallic accent · serif display + grotesk text · hairline rules as primary divider · motion measured in millimetres, not gestures.

Anti-patterns (forbidden):
- Purple/blue gradients, glassmorphism, neon, glow.
- Emoji in UI. Icon zoo. Decorative illustration.
- Hero video. Parallax. Auto-rotating carousels.
- Marketing badges ("New!", "🔥"). Inflated numerals.

---

## 1. Token spec

All tokens are HSL. All component code consumes semantic tokens, never raw colors. Tokens live in `src/index.css` (`:root` and `.dark`) and are surfaced through `tailwind.config.ts`. Door 3 must reconcile the existing tokens with this spec.

### 1.1 Color — semantic roles

Light is the canonical mode. Dark is supported but secondary in v1.

| Token              | Light (HSL)         | Dark (HSL)          | Role                                  |
|--------------------|---------------------|---------------------|---------------------------------------|
| `--background`     | `40 24% 96%`        | `30 8% 8%`          | Page background (parchment / ink)     |
| `--foreground`     | `30 12% 12%`        | `40 14% 92%`        | Primary text                          |
| `--ink`            | `30 12% 12%`        | `40 14% 92%`        | Headlines, strong text                |
| `--ink-soft`       | `30 8% 32%`         | `40 8% 70%`         | Body, secondary                       |
| `--muted`          | `36 14% 88%`        | `30 6% 16%`         | Subtle surfaces                       |
| `--muted-foreground` | `30 6% 42%`       | `40 6% 60%`         | Captions, eyebrows                    |
| `--card`           | `40 22% 98%`        | `30 8% 11%`         | Card surface                          |
| `--card-foreground`| `30 12% 12%`        | `40 14% 92%`        | Card text                             |
| `--hairline`       | `30 10% 84%`        | `30 6% 22%`         | 1px dividers, card borders            |
| `--gold`           | `36 38% 46%`        | `36 42% 58%`        | The single accent. Use sparingly.     |
| `--gold-soft`      | `36 38% 46% / 0.12` | `36 42% 58% / 0.18` | Accent washes                         |
| `--primary`        | `30 12% 12%`        | `40 14% 92%`        | Default button (ink-on-parchment)     |
| `--primary-foreground` | `40 24% 96%`    | `30 8% 8%`          | Default button text                   |
| `--destructive`    | `8 60% 42%`         | `8 60% 52%`         | Errors only                           |
| `--ring`           | `36 38% 46%`        | `36 42% 58%`        | Focus ring (gold)                     |

Accent rule: gold appears at most **once per viewport** as a meaningful signal (active state, eyebrow, single CTA emphasis). It is never decorative.

### 1.2 Typography

Two families. No third family.

- **Display / Serif:** Cormorant Garamond — headlines, page titles, venture names.
- **Text / Sans:** Inter — body, nav, labels, buttons, captions.
- **Numerals:** tabular-nums on all data (`font-variant-numeric: tabular-nums`).

Type scale (modular, 1.25 ratio, anchored at 16px body):

| Token         | Size / Line             | Family | Use                              |
|---------------|-------------------------|--------|----------------------------------|
| `display-xl`  | 72/78 (clamp 48–72)     | Serif  | Hero headline                    |
| `display-lg`  | 56/62 (clamp 40–56)     | Serif  | Page titles                      |
| `display-md`  | 40/46                   | Serif  | Section titles                   |
| `display-sm`  | 28/34                   | Serif  | Card titles, venture names       |
| `body-lg`     | 18/30                   | Sans   | Lead paragraphs                  |
| `body`        | 16/28                   | Sans   | Body                             |
| `body-sm`     | 14/22                   | Sans   | Secondary body                   |
| `eyebrow`     | 11/14, 0.22em tracking, uppercase | Sans | Eyebrows, status pills |
| `nav`         | 12/16, 0.18em tracking, uppercase | Sans | Top nav                |
| `mono-meta`   | 12/16, tabular          | Sans   | Dates, indices (`01 / 06`)       |

Rules:
- Headlines: serif, weight 400, tight tracking.
- Body: sans, weight 400, normal tracking.
- Never bold serif headlines. Never italic body. Italic reserved for attribution lines.

### 1.3 Spacing

Base unit **4px**. Steps: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160.

Section vertical rhythm:
- Mobile: `py-16` (64px).
- Tablet: `py-20` (80px).
- Desktop: `py-32` (128px).

Inter-element rhythm: section header → content gap = 64px desktop / 48px mobile.

### 1.4 Grid

- Container max width: **1280px**.
- Container side padding: 24px mobile, 32px tablet, 48px desktop.
- 12-column grid, 24px gutter desktop, 16px tablet, 0 (stack) on mobile.
- Reading column max-width: **68ch** for body prose.

### 1.5 Radius

Institutional = sharp.
- `radius-none`: 0 — default for cards, inputs, buttons.
- `radius-sm`: 2px — pills only (status, eyebrow).
- `radius-full`: 9999px — only avatar.

No rounded cards. No rounded buttons. The Tailwind `--radius` token defaults to `0.125rem` and is applied selectively.

### 1.6 Border

- Width: 1px only. No 2px borders anywhere.
- Color: always `--hairline`. No colored borders except focus ring.
- Cards use a single 1px hairline + an internal 1px hairline grid (`gap-px` over a `bg-hairline` parent).

### 1.7 Shadow / elevation

Editorial sites do not float. v1 uses **no drop shadows** on surfaces.
The only allowed elevation cues:
- `--ring` focus ring (2px gold, offset 2px).
- Sticky header gets a 1px hairline bottom border, no shadow.

### 1.8 Motion

Restrained. Purposeful. Never decorative.

| Token            | Value                              | Use                          |
|------------------|------------------------------------|------------------------------|
| `motion-fast`    | 150ms ease-out                     | Hover state changes          |
| `motion-base`    | 240ms cubic-bezier(.2,.7,.2,1)     | Reveal on scroll, accordions |
| `motion-slow`    | 480ms cubic-bezier(.2,.7,.2,1)     | Hero entrance only           |

Rules:
- Reveal-on-scroll: opacity 0→1, translateY 8px→0. Once per element. Never re-trigger.
- Respect `prefers-reduced-motion: reduce` — disable all transforms; opacity only.
- No parallax, no marquee, no auto-play.

---

## 2. Component inventory + variants

Every component below is a stable contract. Door 3 builds these and only these in v1.

### 2.1 Primitives
- **Button** — variants: `primary` (ink fill), `ghost` (text + hairline underline on hover), `link` (inline, gold underline). Sizes: `md` (default, 44px), `sm` (36px). Always sentence case for CTAs.
- **Eyebrow** — uppercase 11px, tracked 0.22em, color `--muted-foreground`.
- **SectionHeader** — eyebrow + serif title + optional 1-paragraph body. Locked composition.
- **Hairline** — 1px `--hairline` divider.
- **Pill** — status / domain pill, 1px hairline border, 11px uppercase.
- **Tag** — capability tag, no border, ink text on muted ground.
- **IndexLabel** — `01 / 06` mono-meta counter.

### 2.2 Composed
- **TopNav** — sticky, hairline bottom, brand left, nav center/right, language switcher far right. Mobile collapses to a sheet.
- **Footer** — 4 columns desktop (Brand · Sitemap · Legal · Language), stacks on mobile. Bottom rights line.
- **LanguageSwitcher** — listbox with code, label, dir, status badge (`scaffold` shown as a small muted tag). Never an emoji flag.
- **Hero** — eyebrow + display-xl headline + lead + 2 CTAs + a single hairline below.
- **ProofStrip** — horizontal hairline-separated list of phrases. No metrics.
- **DomainCard** — sector card with index label, serif title, body. Used on Home (What We Build) and Portfolio filter chips.
- **PortfolioCard** — venture name (serif), domain pill, status pill, 1–2 line summary, "Open" link. Used on Portfolio index and homepage preview.
- **OperatingStep** — large numeral, serif step title, body. Five-step row on `/our-model`, stacks on mobile.
- **CapabilityTag** — small tag, used as a wrapped list on `/our-model`.
- **LeaderCard** — name (serif), role (eyebrow), short remit. No avatar in v1 (avoid stock).
- **NewsCard** — category eyebrow, date (mono), serif title, 2-line dek, "Read" link.
- **CTAStrip** — page-end strip with one institutional CTA (e.g., "Begin a conversation").
- **PageHeader** — page-level title block: eyebrow + display-lg title + lede. Lives at top of every non-home route.
- **Breadcrumb** — used on detail routes only (`Portfolio / Venture Name`).

### 2.3 Forbidden in v1
Carousel · Modal (except language switcher, optional) · Toast for marketing · Toggle switches outside settings · Avatars with stock photos · Tab UI on top-level pages.

---

## 3. Multilingual + RTL UI rules

The site is engineered for the 12-language baseline from day one. These rules are enforced in components, not retrofitted.

### 3.1 Direction
- `<html dir>` and `<html lang>` are set on language change (already implemented in `src/i18n/index.ts`).
- Layout uses **logical CSS properties** only: `ms-*`, `me-*`, `ps-*`, `pe-*`, `start-0`, `end-0`, `text-start`, `text-end`. **No `ml-*`, `mr-*`, `left-*`, `right-*`, `text-left`, `text-right`** in app components.
- Iconography that implies direction (arrows, chevrons) flips in RTL via `[dir="rtl"] .rtl-flip { transform: scaleX(-1); }`. Brand marks never flip.
- No `isArabic` / `language === 'ar'` branches anywhere. Behaviour is direction-driven (`dir="rtl"`) or token-driven, never language-string-driven.

### 3.2 Typography per script
Font stacks fall back per script family. Inter and Cormorant cover Latin/Cyrillic/Greek; other scripts route to a system font with the correct metrics.

```
--font-serif: "Cormorant Garamond", "Noto Serif", Georgia, serif;
--font-sans:  "Inter", "Noto Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
--font-arabic: "Noto Naskh Arabic", "Geeza Pro", serif;       /* ar */
--font-cjk-sc: "Noto Sans SC", "PingFang SC", sans-serif;     /* zh */
--font-cjk-jp: "Noto Sans JP", "Hiragino Sans", sans-serif;   /* ja */
--font-cjk-kr: "Noto Sans KR", "Apple SD Gothic Neo", sans-serif; /* ko */
--font-indic-dev: "Noto Sans Devanagari", sans-serif;         /* hi */
--font-indic-ben: "Noto Sans Bengali", sans-serif;            /* bn */
```

Per-language overrides applied via `html[lang="ar"] { --font-sans: var(--font-arabic); --font-serif: var(--font-arabic); }` etc. Headlines in non-Latin scripts drop one step in size and gain +0.05 line-height to compensate for taller glyph metrics.

### 3.3 Numerals & dates
- Numerals: tabular-nums everywhere data is shown.
- Dates: `Intl.DateTimeFormat(locale)` only. No string templating.
- Locale-sensitive number formatting: `Intl.NumberFormat(locale)`.

### 3.4 String hygiene
- Every visible string is a translation key. Lint rule (Door 3) flags JSX text nodes that are not `{t(...)}`.
- No string concatenation across keys. Use ICU placeholders inside a single key.
- Keys follow `page.section.element` namespacing.

### 3.5 Scaffold disclosure
Languages with `status: "scaffold"` show a subtle `scaffold` badge in the language switcher. Switching is allowed; layout behaviour is what's being validated, not copy.

### 3.6 RTL acceptance gate (Door 3 must pass)
For Arabic: nav order mirrors, hero CTAs mirror, hairline-grid card layouts mirror, breadcrumb chevrons flip, dates render in `ar` locale, no horizontal scroll at any breakpoint.

---

## 4. ASCII wireframes — all primary templates

Notation: `█` = strong type, `▒` = body, `─` = hairline, `[ ]` = button, `▸` = link, `▢` = card.

### 4.1 Home `/`
```
┌──────────────────────────────────────────────────────────┐
│ CSW GLOBAL · Parent Company   About Portfolio Our Model …│
└──────────────────────────────────────────────────────────┘
  Parent Company · Venture Builder
  ████████████████████████████████████████████
  Building the next generation of global companies.
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
  [ Explore Portfolio ]   ▸ About CSW Global
─────────────────────────────────────────────
  Parent Company · Venture Builder · AI-Native Operations · …
─────────────────────────────────────────────
  OUR THESIS
  A structured system for building and operating companies.
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
  ┌──────────┬──────────┬──────────┐
  │ 01 Strat │ 02 Tech  │ 03 Ops   │
  └──────────┴──────────┴──────────┘
─────────────────────────────────────────────
  WHAT WE BUILD       (six DomainCards in 3×2 grid)
─────────────────────────────────────────────
  PORTFOLIO  ▸ View full portfolio
  ┌──────────────┬──────────────┐
  │ PortfolioCard│ PortfolioCard│   (4 entries, 2×2)
  ├──────────────┼──────────────┤
  │ PortfolioCard│ PortfolioCard│
  └──────────────┴──────────────┘
─────────────────────────────────────────────
  OUR MODEL    01 → 02 → 03 → 04 → 05  (preview row, link to /our-model)
─────────────────────────────────────────────
  GLOBAL OUTLOOK         FOUNDER NOTE
─────────────────────────────────────────────
  LATEST DEVELOPMENTS  (3 NewsCards) ▸ All news
─────────────────────────────────────────────
  CAREERS CTA          STRATEGIC CONTACT CTA
─────────────────────────────────────────────
  Footer · Language ·  Legal
```

### 4.2 About `/about`
```
PageHeader: ABOUT — A parent company built for the long term.
─ Lead paragraph (68ch) ─
Section: Thesis pillars (3-up)
Section: How we operate (Operating Model preview, links to /our-model)
Section: Shared capabilities (CapabilityTag wrap)
Section: Founder note
CTAStrip → Contact
```

### 4.3 Portfolio index `/portfolio`
```
PageHeader: PORTFOLIO — Companies operated under CSW Global.
Domain filter row (approved Door 1 taxonomy, exact labels):
  [All]
  [Access & Opportunity]
  [Mobility & Services]
  [Commerce & Consumer Platforms]
  [Financial Enablement]
  [AI & Digital Infrastructure]
  [Strategic Future Ventures]
Status filter row: [All] [In Development] [In Operation] [Scaling]

Note: domain labels are the canonical Door 1 taxonomy. No short-label
substitutions are approved. If a label wraps on mobile, it wraps —
relabeling is not permitted without re-opening Door 1.
─────────────────────────────────────────────
PortfolioCard grid (2 cols desktop, 1 col mobile, hairline grid)
─────────────────────────────────────────────
CTAStrip → Contact (partnerships)
```

### 4.4 Portfolio detail `/portfolio/:slug`
```
Breadcrumb: Portfolio / Venture Name
PageHeader: Venture Name           Domain pill · Status pill
Lead summary (68ch)
─────────────────────────────────────────────
Two-column meta block:
  Domain         | Relationship
  Status         | Stage
─────────────────────────────────────────────
Description body (long-form)
─────────────────────────────────────────────
"Other ventures" — 3 PortfolioCards
CTAStrip → Contact
```

### 4.5 Our Model `/our-model`
```
PageHeader: OUR MODEL — How CSW Global builds companies.
Five OperatingSteps (vertical on mobile, horizontal hairline-divided on desktop)
─────────────────────────────────────────────
Shared capabilities — CapabilityTag wrap
─────────────────────────────────────────────
CTAStrip → Portfolio
```

### 4.6 Leadership index `/leadership`
```
PageHeader: LEADERSHIP — The operators behind the group.
LeaderCard grid (3 cols desktop, 1 col mobile, hairline grid)
[Each card: name (serif), role (eyebrow), 2-line remit, ▸ Profile]
CTAStrip → Careers
```

### 4.7 Leadership profile `/leadership/:slug`
```
Breadcrumb: Leadership / Name
PageHeader: Name           Role (eyebrow)
Lead remit
─────────────────────────────────────────────
Bio (long-form, 68ch)
─────────────────────────────────────────────
"Other leaders" — 3 LeaderCards
```

### 4.8 News index `/news`
```
PageHeader: NEWS — Updates from the parent company.
NewsCard list (1 col, hairline-separated rows desktop; full-width cards mobile)
[Category eyebrow · Date · Serif title · 2-line dek · ▸ Read]
```

### 4.9 News article `/news/:slug`
```
Breadcrumb: News / Title
Eyebrow: Category · Date
Serif page title (display-lg)
Lead (body-lg, 68ch)
─────────────────────────────────────────────
Article body (68ch)
─────────────────────────────────────────────
"More from CSW Global" — 3 NewsCards
```

### 4.10 Careers `/careers`
```
PageHeader: CAREERS — For builders, operators, and specialists.
Lead paragraph
Section: Hiring posture (3 short blocks: Operators / Specialists / Builders)
Section: How we work (3 short blocks)
CTAStrip → Contact — routes to /contact#careers (Careers Inquiry lane).
```

### 4.11 Contact `/contact`
```
PageHeader: CONTACT — For partnerships, media, strategic inquiries, and careers.
Four lanes (4-up desktop / 2-up tablet / 1-up mobile, hairline grid):
  Partnerships   Media   Strategic Inquiries   Careers Inquiry
  ▒ blurb        ▒ blurb ▒ blurb               ▒ blurb
  ▸ email        ▸ email ▸ email               ▸ email
The Careers lane is anchored at #careers so /careers CTA deep-links here.
─────────────────────────────────────────────
Institutional address block (when available; scaffold otherwise)
```

### 4.12 Legal `/legal/privacy`, `/legal/terms`
```
PageHeader: PRIVACY / TERMS
Long-form prose, 68ch, hairline section dividers, table of contents on desktop sidebar.
```

### 4.13 404
```
Centered:
  404
  This page does not exist.
  [ Return Home ]   ▸ View Portfolio
```

---

## 5. Hi-fi production order (locked)

Door 3 implements pages in this order. A page is "hi-fi done" only when: tokens applied, components per §2 used, RTL verified at desktop+mobile, copy via i18n keys, lighthouse a11y ≥ 95.

**Priority A (ship first):**
1. Home `/`
2. Portfolio index `/portfolio`
3. Our Model `/our-model`
4. About `/about`
5. Contact `/contact`

**Priority B (ship next):**
6. Leadership index `/leadership`
7. News index `/news`
8. Careers `/careers`

**Priority C (ship to complete v1):**
9. Portfolio detail `/portfolio/:slug`
10. Leadership profile `/leadership/:slug`
11. News article `/news/:slug`
12. Legal `/legal/privacy`, `/legal/terms`
13. 404

---

## 6. Door 2 closure criteria

Door 2 closes when:
- [x] Token spec written (§1).
- [x] Component inventory + variants written (§2).
- [x] Multilingual + RTL rules written (§3).
- [x] ASCII wireframes for all primary templates written (§4).
- [x] Hi-fi production order written (§5).
- [x] Portfolio taxonomy labels reconciled with Door 1 (r2 fix).
- [x] Careers → Contact routing reconciled (Careers Inquiry lane added) (r2 fix).
- [ ] You acknowledge the spec or request revisions.

On acknowledgement: **Door 2 → CLOSED**, Door 3 opens and implements against this document. No design decisions are made inside Door 3.

---

## 7. Revision log

- **r1** — Initial spec (tokens, components, RTL rules, wireframes, production order).
- **r2** — Two blocking fixes applied:
  1. `/portfolio` filter labels replaced with the exact Door 1 taxonomy
     (Access & Opportunity · Mobility & Services · Commerce & Consumer Platforms
     · Financial Enablement · AI & Digital Infrastructure · Strategic Future Ventures).
     No short-label substitutions approved.
  2. `/contact` extended to **four lanes** — Partnerships, Media,
     Strategic Inquiries, **Careers Inquiry** (anchored `#careers`).
     `/careers` CTA now deep-links to `/contact#careers`, resolving the
     careers-lane mismatch.
