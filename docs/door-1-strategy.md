# Door 1 — Strategy / Truth / Structure

Status: **NEAR-CLOSE (revision r2). NOT CLOSED.**
Owner: CSW Global
Scope: Canonical source of truth for narrative, sitemap, taxonomy, scope, and approved copy. Doors 2–4 must conform. Any change requires a Door 1 re-open.

---

## 0. Revision history

- **r1** — initial lock attempt. **Retracted.** Closed prematurely; silently introduced "Capabilities" as a top-level nav item, silently locked "no managed backend" as a rule, and treated placeholder venture names as approved launch copy.
- **r2 (current)** — corrections applied. Door 1 is **near-close**, awaiting three explicit confirmations (§8) before it can be marked closed.

---

## 1. Institutional positioning

**One-line positioning**
CSW Global is a parent company and venture builder that creates, operates, and scales AI-native businesses for long-term value and intelligent global expansion.

**Voice & tone**
Institutional, restrained, precise. No startup hype, no inflated metrics, no consumer-brand tone. Long-horizon, operator-led, structurally confident.

**Non-negotiables (locked)**
- 12-language readiness from day one (architecture, not translation completeness).
- No hardcoded visible UI text in code.
- **Private environment only.**
- **No Lovable Cloud under any circumstances.**
- No fabricated proof, logos, metrics, partners, or names.

**Explicitly NOT locked at Door 1**
- Whether the site uses any managed backend or not. The only Door 1 rule on infrastructure is "private environment only, no Lovable Cloud." Backend posture beyond that is a Door 3 decision.

---

## 2. Canonical sitemap (v1, multi-route — locked)

Single-page scroll is **rejected**. v1 ships as a multi-route site.

| Path                  | Page                        | In v1 |
|-----------------------|-----------------------------|-------|
| `/`                   | Home                        | yes   |
| `/about`              | About                       | yes   |
| `/portfolio`          | Portfolio index             | yes   |
| `/portfolio/:slug`    | Portfolio company detail    | yes   |
| `/our-model`          | Our Model                   | yes   |
| `/leadership`         | Leadership index            | yes   |
| `/leadership/:slug`   | Leadership profile          | yes   |
| `/news`               | News index                  | yes   |
| `/news/:slug`         | News article                | yes   |
| `/careers`            | Careers (static, no ATS)    | yes   |
| `/contact`            | Contact                     | yes   |
| `/legal/privacy`      | Privacy                     | yes   |
| `/legal/terms`        | Terms                       | yes   |
| `*`                   | 404                         | yes   |

Deferred (post-v1):
- Per-language country/region landing pages.
- Investor relations area.
- Search.
- Live ATS / job board on `/careers`.
- CMS. v1 content lives in typed TS/JSON in the repo.

---

## 3. Canonical navigation (locked)

Top navigation, in order:

1. About
2. Portfolio
3. Our Model
4. Leadership
5. News
6. Careers
7. Contact

Rules:
- **No "Capabilities" as a top-level nav item.** Shared capabilities content lives inside `/our-model` (and/or `/about`) as a section, not as a route or nav entry.
- Footer mirrors the same nav, plus legal links and the language switcher.
- Nav labels are translation keys, never hardcoded.

---

## 4. Page purpose map

| Page               | Single job                                                                 | Primary CTA                  |
|--------------------|----------------------------------------------------------------------------|------------------------------|
| Home               | Communicate what CSW Global is and route to Portfolio or About.            | Explore Portfolio            |
| About              | Parent-company thesis and operating philosophy.                            | View Our Model               |
| Portfolio index    | Show the portfolio as an institutional set, filterable by domain/status.   | Open a company               |
| Portfolio detail   | Present one venture: domain, status, description, relationship to CSW.     | Back to Portfolio / Contact  |
| Our Model          | The repeatable system used to build and operate ventures + shared caps.    | View Portfolio               |
| Leadership index   | Present the leadership group institutionally.                              | Open a profile               |
| Leadership profile | Single leader: role, remit, short bio.                                     | Back to Leadership           |
| News index         | Chronological list of institutional updates.                               | Open an article              |
| News article       | One update: category, date, title, body.                                   | Back to News                 |
| Careers            | Hiring posture; route to Contact (no live ATS in v1).                      | Contact Careers              |
| Contact            | Route partnerships, media, strategic inquiries.                            | Begin a conversation         |
| Legal              | Privacy and terms; institutional minimum.                                  | —                            |
| 404                | Recover the visitor to Home or Portfolio.                                  | Return Home                  |

---

## 5. Portfolio domain taxonomy (locked)

Companies are tagged with **exactly one** primary domain. Status and Relationship are controlled vocabularies. No free text on these fields.

**Primary domains (6)**
1. Education & Opportunity
2. Financial Enablement
3. Commerce & Consumer Systems
4. Mobility & Transition
5. AI & Operating Infrastructure
6. Future Strategic Ventures

**Status**: In Development · In Operation · Scaling
**Relationship**: Wholly owned subsidiary · Operated by CSW Global · Incubated by CSW Global

**Entry shape (data contract)**
```
slug, name, domain, status, relationship, summary (1–2 sentences), description (optional)
```

Single typed registry consumed by both Portfolio index and detail routes. No per-page hardcoding.

---

## 6. v1 scope

**In v1**
- All routes in §2.
- Top nav per §3.
- 12-language i18n architecture; English translated; 11 scaffolds clearly labeled.
- RTL verified for Arabic.
- Portfolio registry with at least 4 entries. **Names are internal scaffolds until cleared. They are not approved launch copy and will not ship to production unless replaced or explicitly approved.**
- Leadership registry: structure ready; entries are internal scaffolds until cleared.
- News registry: structure ready; at least 3 scaffold entries clearly marked as such.
- Footer with language switcher and legal links.
- `sitemap.xml`, `robots.txt`, OG/Twitter metadata per route.

**Deferred (out of v1)**
- Country landing pages, IR area, search, ATS, CMS, newsletter/forms with a server.

---

## 7. Approved master copy (v1)

English copy lives in `src/i18n/locales/en.json` and is mirrored structurally (scaffolds) in the other 11 locale files. No visible string in any component may exist outside this resource.

**Approved as launch copy**: brand, nav labels, Home, Thesis, sector cards, Our Model steps, Shared Capabilities list, Global Outlook, Founder note framing, Careers framing, Contact framing, Footer.

**Internal scaffold only — not approved for launch**:
- All venture names and venture descriptions in the portfolio registry.
- All leadership names, roles, and bios.
- All News entries and dates (use *Recent* until real dates exist).
- Institutional contact email (see §8.3).

A scaffold flag must be visible in the data layer (e.g., `scaffold: true`) so QA can block production builds that still contain scaffold content in approved-launch slots.

---

## 8. Open confirmations (block Door 1 closure)

Door 1 cannot move to **CLOSED** until these three are explicitly answered:

- **8.1 Portfolio names** — Confirm: keep placeholder venture names as internal scaffolds (not shipped to production) **OR** provide the cleared real names now.
- **8.2 Leadership entries** — Confirm: scaffold-only for v1 launch (page exists, entries marked scaffold) **OR** provide real leadership entries now.
- **8.3 Institutional contact email** — **Unresolved.** No real address has been provided. A placeholder may be used internally during build but must not ship to production. Provide the real address before launch.

---

## 9. What is truly locked vs deferred

**Locked at Door 1 (r2)**
- Positioning, voice, non-negotiables (§1).
- Multi-route sitemap (§2).
- Top nav order and the exclusion of "Capabilities" as a route/nav item (§3).
- Page purpose map (§4).
- Portfolio taxonomy and data contract (§5).
- v1 scope boundary (§6).
- Approved master copy slots vs scaffold slots (§7).
- Deployment rule: **private environment only, no Lovable Cloud.**

**Deferred**
- Country/region pages, IR, search, ATS, CMS, server-backed forms.
- Backend posture beyond "private environment only, no Lovable Cloud" (Door 3 decision).
- Real venture names, real leadership entries, real news dates, real contact email (block production, not Door 1 structure).

---

## 10. Door 1 closure criteria

Door 1 closes only when §8.1, §8.2, and §8.3 each have an explicit answer recorded here. Until then: **NEAR-CLOSE.**
