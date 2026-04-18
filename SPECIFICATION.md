# emassage — SPECIFICATION

> Generated from `vbrief/specification.vbrief.json` (status: approved)

## Overview

Satirical single-page static website for **Epstein's Olde Fashioned Pervy Massages** — a parody
business that brings professional rigour and best practices to the historically unreliable world of
pervy massages. Six sections: Home, Mission, Services, About, Testimonials, Franchising (with
interactive qualifying quiz). Built with Next.js (static export), Tailwind CSS, and shadcn/ui.
Deployed via Cloudflare Pages on push to GitHub `main`.

---

## Requirements

### Functional

| ID | Requirement |
|----|-------------|
| FR-1 | Single-page layout with smooth-scroll anchor navigation |
| FR-2 | Fully responsive (mobile + desktop) |
| FR-3 | Home / hero section with establishment branding |
| FR-4 | Mission section with satirical professional copy |
| FR-5 | Services section with satirical menu cards |
| FR-6 | About section with founder story |
| FR-7 | Testimonials section with fake client reviews |
| FR-8 | Franchising section with opportunity pitch |
| FR-9 | Interactive client-side franchise qualifying quiz |

### Non-Functional

| ID | Requirement |
|----|-------------|
| NFR-1 | Static export only — no SSR or API routes |
| NFR-2 | Deployed to Cloudflare Pages via GitHub `main` branch |
| NFR-3 | ≥85% test coverage; `task check` passes before every commit |
| NFR-4 | Old-timey visual aesthetic: burgundy, parchment, gold, serif typography |

---

## Architecture

- **Framework**: Next.js 14 with `output: 'export'` and `trailingSlash: true`
- **Styling**: Tailwind CSS with custom theme; shadcn/ui primitives (Button, Card, Badge, Separator)
- **Typography**: Playfair Display (headings) + EB Garamond (body) via `next/font/google`
- **Palette**: burgundy `#7B1C2A` · parchment `#F5E6C8` · navy `#1A1A2E` · gold `#C9A84C`
- **Testing**: Vitest + React Testing Library
- **Tasks**: Taskfile (`task check` = lint + typecheck + test + build)
- **Deploy**: Cloudflare Pages ← GitHub `main`, build output: `out/`

Single entry point: `app/page.tsx` composes six `<section id="...">` components in order.
No SSR, no API routes, no server components beyond the root layout.

---

## Implementation Plan

### Phase 1 — Foundation

#### 1.1 Initialise Next.js 14 project with TypeScript *(traces: NFR-1)*
Configure `next.config.ts` with `output: 'export'` and `trailingSlash: true`. Add `.nvmrc`.
**Acceptance**: `task build` produces `/out` directory with static HTML.

#### 1.2 Configure Tailwind CSS with custom old-timey theme *(traces: NFR-4)*
Extend `tailwind.config` with custom colours (burgundy, parchment, navy, gold). Add Playfair
Display and EB Garamond via `next/font/google`. Configure `darkMode: 'class'`.

#### 1.3 Install and configure shadcn/ui
Run `shadcn/ui init`, add: Button, Card, CardContent, CardHeader, Badge, Separator.
**Acceptance**: components render without errors.

#### 1.4 Set up Taskfile *(traces: NFR-3)*
Tasks: `dev`, `build`, `lint`, `fmt`, `typecheck`, `test`, `test:coverage`, `check`, `clean`.
`task check` runs lint → typecheck → test → build in sequence.

---

### Phase 2 — Layout & Navigation

#### 2.1 Header component *(traces: FR-1, FR-2)*
Sticky header. Wordmark: *Epstein's Olde Fashioned Pervy Massages* in Playfair Display.
Nav links: Home · Mission · Services · About · Testimonials · Franchising — smooth-scroll anchors.
Collapses to hamburger on mobile.

#### 2.2 Footer component *(traces: NFR-4)*
Est. year, tagline, copyright line. Old-timey ornamental styling.

#### 2.3 Root page layout with section anchors *(traces: FR-1)*
`app/page.tsx` composes all six section components. Each wrapped in `<section id="...">`.

---

### Phase 3 — Content Sections

#### 3.1 Hero / Home *(traces: FR-3)*
Full-viewport hero. Heading: *Epstein's Olde Fashioned Pervy Massages*.
Subheading: *Est. 1991 — Discretion. Process. Results.*
CTA button scrolls to Services. Parchment background, burgundy/gold ornamental dividers.

#### 3.2 Mission *(traces: FR-4)*
Serious corporate copy played entirely straight:
> *"For too long, the industry of personalised massage services has been plagued by inconsistency,
> improvisation, and a troubling absence of documentation. Epstein's brings standardised intake
> protocols, a rigorous practitioner vetting programme, and a fully documented chain of custody
> to every engagement. Because you deserve better."*

#### 3.3 Services *(traces: FR-5)*
Card grid of satirical offerings with pompous name, one-line description, and notional price:

| Service | Description | Price |
|---------|-------------|-------|
| The Introductory Orientation | For first-time clients only. Discretion briefing included. | $250 |
| The Island Retreat Package | By referral only. Travel, accommodation, and NDA bundled. | POA |
| The Executive Discretion Suite | Full dossier management. Complimentary memory suppression techniques. | $1,800 |
| The Compliance Audit | For clients seeking a thorough review of their exposure. | $950 |
| The Recurring Arrangement | Monthly retainer. Priority scheduling. Loyalty rewarded. | $3,500/mo |

#### 3.4 About *(traces: FR-6)*
Founder biography in breathless admiring corporate prose. Sepia ornamental photo frame
placeholder. Story arc: visionary sees chaos in the industry, decides to codify the art,
establishes the firm's legendary standards.

#### 3.5 Testimonials *(traces: FR-7)*
3–5 fake glowing testimonials. Clients identified by first name and vague title only:

- *"Unmatched professionalism. I have recommended Epstein's to heads of state."*
  — **Prince A.**, European Royalty
- *"The NDA was notarised within the hour. Five stars."*
  — **W.C.**, Former Head of State
- *"I wasn't sure the industry could be this organised. I was wrong."*
  — **A.D.**, Technology Visionary
- *"My lawyers have reviewed the intake process. They found nothing."*
  — **L.M.**, Media Personality

#### 3.6 Franchising — pitch copy *(traces: FR-8)*
Opportunity overview: exclusive territory rights, onboarding programme, brand standards manual,
ongoing compliance audits. Hard review process emphasised — *"not everyone qualifies."*
CTA button opens the franchise qualifying quiz.

---

### Phase 4 — Franchise Qualifying Quiz

#### 4.1 Multi-step quiz component — client-side *(traces: FR-9, NFR-1)*
`FranchiseQuiz` client component. `useState` tracks current step and answers. 5 questions,
one per screen. Progress bar. **Acceptance**: navigates forward/back, tracks answers, shows result.

#### 4.2 Quiz questions and scoring logic *(traces: FR-9)*

| # | Question | Qualifying answer |
|---|----------|-------------------|
| 1 | Do you have access to a private island or equivalent exclusive venue? | Yes |
| 2 | Rate your discretion on a scale of 1 to 10. (Our minimum is 11.) | 11 |
| 3 | How many powerful friends are you prepared to leverage on behalf of the brand? | 10+ |
| 4 | Have you ever operated in a jurisdiction with lax regulatory oversight? | Yes (noted as a plus) |
| 5 | Are you comfortable with a rigorous background check conducted exclusively by us? | Yes |

Score ≥ 4 → **"You May Qualify"**; Score < 4 → **"Not Quite Ready"**.

#### 4.3 Quiz result display *(traces: FR-9)*
Result card:
- **Qualify**: *"You May Qualify — our team will be in touch. Please do not contact us."*
- **Decline**: *"Not Quite Ready — we suggest further grooming before reapplying."*

"Retake Quiz" button resets state.

---

### Phase 5 — Quality & Deployment

#### 5.1 Unit tests *(traces: NFR-3)*
Vitest + React Testing Library. Cover: quiz scoring logic, step navigation, result rendering,
each section renders without errors. Coverage gate: ≥85%.

#### 5.2 Cloudflare Pages configuration *(traces: NFR-2)*
Connect Cloudflare Pages project to GitHub repo. Branch: `main`. Build command: `npx next build`
(or `task build`). Output dir: `out`. Add `public/_redirects` if needed.

#### 5.3 Responsive polish & accessibility *(traces: FR-2)*
Verify at 375px (mobile) and 1280px (desktop). Semantic HTML: `<section>`, `<nav>`, `h1`–`h3`,
`aria-label` on quiz navigation buttons.

---

## Dependencies Between Phases

```
Phase 1 (Foundation)
  └─► Phase 2 (Layout & Navigation)
        └─► Phase 3 (Content Sections)
              └─► Phase 4 (Franchise Quiz)
                    └─► Phase 5 (Quality & Deployment)
```

---

## Testing Strategy

- **Unit**: Vitest + React Testing Library — component render tests, quiz logic tests
- **Coverage**: `task test:coverage` must report ≥85% before merge
- **Pre-commit gate**: `task check` (lint + typecheck + test + build)
- **Manual**: Browser smoke test of static `out/` via `npx serve out`

---

*Source: `vbrief/specification.vbrief.json` · Strategy: interview (Light path)*
