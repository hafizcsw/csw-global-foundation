# Door 1 — Strategy / Truth / Structure

Status: **LOCKED (v1)**
Owner: CSW Global
Scope: This document is the canonical source of truth for the website's narrative, sitemap, taxonomy, scope, and approved copy. Doors 2, 3, and 4 must conform to this document. Any change requires a Door 1 re-open.

---

## 1. Institutional positioning

**One-line positioning**
CSW Global is a parent company and venture builder that creates, operates, and scales AI-native businesses for long-term value and intelligent global expansion.

**Voice & tone**
- Institutional, restrained, precise.
- No startup hype, no inflated metrics, no consumer-brand tone.
- Long-horizon, operator-led, structurally confident.

**Non-negotiables**
- 12-language readiness from day one (architecture, not translation completeness).
- No hardcoded visible UI text in code.
- Private deployment environment only. No Lovable Cloud, no managed backend.
- No fabricated proof, logos, metrics, partners, or names.

---

## 2. Final sitemap (v1)

Routes that ship in v1:

| Path                  | Page                        | Status |
|-----------------------|-----------------------------|--------|
| `/`                   | Home                        | v1     |
| `/about`              | About / Parent Company      | v1     |
| `/portfolio`          | Portfolio index             | v1     |
| `/portfolio/:slug`    | Portfolio company detail    | v1     |
| `/operating-model`    | Operating model             | v1     |
| `/capabilities`       | Shared capabilities         | v1     |
| `/careers`            | Careers (static, no ATS)    | v1     |
| `/contact`            | Strategic contact           | v1     |
| `/legal/privacy`      | Privacy                     | v1     |
| `/legal/terms`        | Terms                       | v1     |
| `*`                   | 404                         | v1     |

Deferred (post-v1, explicitly out of scope):
- `/news` index + `/news/:slug` (Developments stays as homepage section in v1).
- `/leadership` and `/leadership/:slug`.
- Per-language country/region landing pages.
- Investor relations area.
- Search.

---

## 3. Page purpose map

Each page has exactly one job. If a page tries to do two jobs, it gets split.

| Page               | Single job                                                                 | Primary CTA                  |
|--------------------|----------------------------------------------------------------------------|------------------------------|
| Home               | Communicate what CSW Global is and route visitors to Portfolio or About.   | Explore Portfolio            |
| About              | Explain the parent-company thesis and operating philosophy.                | View Operating Model         |
| Portfolio index    | Show the portfolio as an institutional set, filterable by domain/status.   | Open a company               |
| Portfolio detail   | Present one venture: sector, status, description, relationship to CSW.     | Back to Portfolio / Contact  |
| Operating model    | Explain the repeatable system used to build and operate ventures.          | View Capabilities            |
| Capabilities       | List the shared capabilities concentrated at the parent level.             | Contact for partnerships     |
| Careers            | Invite operators and specialists; set hiring posture (no live ATS in v1).  | Contact Careers              |
| Contact            | Route partnerships, media, strategic inquiries to the right channel.       | Begin a conversation         |
| Legal pages        | Provide privacy and terms; institutional minimum.                          | —                            |
| 404                | Recover the visitor to Home or Portfolio.                                  | Return Home                  |

---

## 4. Portfolio domain taxonomy

Domains are fixed. Companies are tagged with **exactly one** primary domain. Status is one of three values. Relationship is one of three values. No free text on these fields.

**Primary domains (6)**
1. Education & Opportunity
2. Financial Enablement
3. Commerce & Consumer Systems
4. Mobility & Transition
5. AI & Operating Infrastructure
6. Future Strategic Ventures

**Status (controlled vocabulary)**
- In Development
- In Operation
- Scaling

**Relationship to CSW Global (controlled vocabulary)**
- Wholly owned subsidiary
- Operated by CSW Global
- Incubated by CSW Global

**Portfolio entry shape (data contract)**
```
slug:          string, kebab-case, stable, used in URL
name:          string
domain:        one of the 6 primary domains
status:        one of the 3 status values
relationship:  one of the 3 relationship values
summary:       1–2 sentences, plain institutional language
description:   2–4 short paragraphs, optional in v1
```

All portfolio data lives in a single typed registry consumed by both the Portfolio index and detail routes. No per-page hardcoding.

---

## 5. v1 vs later scope

**In v1 (must ship)**
- All routes listed in the sitemap above.
- 12-language i18n architecture with English translated and 11 scaffolds clearly labeled.
- RTL support verified for Arabic.
- Portfolio registry with at least 4 entries (placeholder names allowed if real names are not yet cleared, but marked as such in content).
- Footer with language switcher and legal links.
- Sitemap.xml and robots.txt for the production domain.
- OG/Twitter metadata per route.

**Out of v1 (explicitly later)**
- News/Developments as its own route.
- Leadership pages.
- Country landing pages.
- Live job board / ATS integration.
- Newsletter / forms backed by a server.
- Analytics beyond a privacy-respecting page-view counter.
- CMS. Content stays in typed TS/JSON in the repo for v1.

---

## 6. Approved master copy (v1)

The English copy below is the approved baseline. It lives in `src/i18n/locales/en.json` and is mirrored structurally (scaffolds) into the other 11 locale files. No visible string in any component may exist outside this resource.

> Copy is intentionally restrained. Edits require Door 1 re-open.

### 6.1 Brand
- Name: **CSW Global**
- Tagline: **Parent Company**

### 6.2 Navigation labels
Portfolio · About · Operating Model · Capabilities · Careers · Contact

### 6.3 Home
- Eyebrow: *Parent Company · Venture Builder*
- Headline: **Building the next generation of global companies.**
- Subheadline: *CSW Global is the parent company behind a growing portfolio of AI-native ventures, built for long-term value, operational leverage, and intelligent global expansion.*
- Primary CTA: *Explore Portfolio*
- Secondary CTA: *About CSW Global*

### 6.4 Proof strip (no fabricated metrics)
Parent Company · Venture Builder · AI-Native Operations · Global Ambition · Shared Infrastructure

### 6.5 Thesis
- Title: *A structured system for building and operating companies.*
- Body: *CSW Global is not a collection of brands. It is an integrated operating platform that combines strategic discipline, technology, AI systems, and execution depth to design ventures with structural advantages from inception.*
- Pillars: Strategy / Technology / Operations (bodies in `en.json`).

### 6.6 What we build
Six sector cards mapped 1:1 to the portfolio taxonomy in §4.

### 6.7 Portfolio preview (homepage)
Shows up to 4 entries from the registry, sorted by status then name. Links to `/portfolio/:slug`.

### 6.8 Operating model
Five steps: Identify Structural Opportunity → Design the Venture Framework → Deploy Shared Infrastructure → Operate with Discipline → Scale with Leverage.

### 6.9 Shared capabilities
Strategy · Product Development · AI Systems · Brand Architecture · Digital Operations · Data & Intelligence · Multilingual Readiness · Market Expansion Support.

### 6.10 Global outlook
Built for international markets and multilingual operation from the foundation.

### 6.11 Founder note
Restrained, no emotional excess. Attribution: *Founder, CSW Global*.

### 6.12 Latest developments
Three institutional updates. Category · Date · Title · Body. No fabricated dates — use *Recent* until real dates exist.

### 6.13 Careers
Invite operators and specialists. v1 has no live roles board; CTA routes to Contact.

### 6.14 Strategic contact
Three lanes: Partnerships · Media · Strategic Inquiries. v1 routes to a single institutional email; no form backend.

### 6.15 Footer
Rights line · parent-company line · language switcher · legal links.

---

## 7. Door 1 closure criteria

Door 1 is closed when **all** of the following are true:
- [x] Sitemap locked (§2).
- [x] Page purposes locked (§3).
- [x] Portfolio taxonomy locked (§4).
- [x] v1 scope locked (§5).
- [x] Approved copy locked in `src/i18n/locales/en.json` and mirrored as scaffolds in the other 11 locales.
- [x] Deployment posture locked: private environment only, no Lovable Cloud, no managed backend.

**Door 1: CLOSED.** Proceed to Door 2.
