# Sprint Prompt v1.0: Kelechi Uba — Personal Portfolio Website

> **Agent directive:** This sprint is delivery-critical. The target is a live, fully functional personal portfolio website that converts recruiter attention into direct outreach. Every design, content, and engineering decision must serve that goal. Treat visual quality, content accuracy, and deployment integrity as non-negotiable.
>
> **Execution rule:** Follow phases in strict order. Do not skip Discovery. Do not write code before the scaffold is confirmed. Do not merge to `main` before the deployment pipeline is validated. At Human Review Gates, stop and present the required output before continuing.
>
> **Assumption override rule:** This prompt encodes design and content decisions as of 2026-03-22. If live conditions differ from any prompt assumption (changed domain, API deprecation, package version conflict, etc.), document the delta in `08_decisions_log.md` and raise it at the next Human Review Gate or via STOP AND ASK if it affects correctness, visual quality, or go-live readiness.

---

## 0. Mission Parameters

### 0.1 Project Identity

| Field | Value |
|-------|-------|
| **Owner** | Kelechi Michael Uba |
| **Primary audience** | Technical recruiters and hiring managers at banks, fintechs, data engineering shops |
| **User journey** | Recruiter receives CV → visits site URL from CV header → site confirms the candidate → recruiter initiates contact |
| **Tone** | Precise, confident, quietly impressive. Not flashy. Not a standard developer template. |
| **Delivery target** | Live on Vercel-hosted URL, fully functional, all sections complete |

### 0.2 Core Directives

1. **Every pixel serves the recruiter conversion funnel.** The site does not exist to be clever. It exists to move a recruiter from "interesting CV" to "I must speak to this person."
2. **Kelechi's numbers are the hero.** ₦20B cumulative savings, ₦2.2B monthly savings, 70% faster validation, 85% faster control analytics, ₦200M recovered monthly income — these are concrete proof points and they must be prominent, legible, and emotionally resonant.
3. **The UBA commendation is the social proof anchor.** It must be visible without scrolling past the fold on the Experience section, and it must include the formal language from the commendation notice.
4. **Design must be distinctive.** The site must not look like a default Tailwind developer portfolio. The aesthetic direction is: precision-industrial — dark background, tight typography, data-terminal motifs, surgical use of amber accent. Think Bloomberg terminal meets editorial print.
5. **Mobile is production.** Recruiter will open this on a phone. Every section must be fully functional, legible, and non-broken at 375px width.
6. **The contact path must have zero friction.** A recruiter must be able to initiate contact in fewer than three clicks from any section of the site.
7. **Performance is a signal.** A slow personal site tells a recruiter something about the engineer. Lighthouse score ≥ 95 across all categories is required before go-live.
8. **The site must be maintainable.** Content lives in a single typed data file. Adding a new job or project requires editing one file, not hunting through JSX.
9. **No placeholder text at go-live.** Every Lorem ipsum, `[City]`, `[Email]`, `[Phone]`, and `TODO` must be resolved before the deployment gate.

### 0.3 Definition of Done

All of the following must be true before this sprint is closed:

- [ ] The repository is on GitHub and the `main` branch is connected to a Vercel project with automatic deployments enabled.
- [ ] The site is live on a Vercel production URL (e.g. `kelechiuba.vercel.app`) and accessible without VPN.
- [ ] All five major sections render correctly on mobile (375px), tablet (768px), and desktop (1280px+).
- [ ] The Impact Counter strip animates on scroll-entry and displays all four key numbers.
- [ ] The Experience timeline renders the UBA role with the commendation badge and the ₦20B figure in-line.
- [ ] The Projects section displays all three projects with correct technology tags and descriptions.
- [ ] The contact form submits successfully and the owner receives an email.
- [ ] The CV download link points to a real, downloadable PDF.
- [ ] Lighthouse production score: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] No console errors in production.
- [ ] Open Graph preview renders correctly (title, description, image) when the link is shared on LinkedIn or WhatsApp.
- [ ] All placeholder values (`[City]`, `[Email]`, `[Phone]`, `[LinkedIn]`, `[GitHub]`) have been replaced with real data before go-live.
- [ ] Human approvals are recorded at every Review Gate.

### 0.4 Locked Technical Decisions

These are not open for debate during execution. Deviations require a STOP AND ASK.

| Concern | Decision | Rationale |
|---------|----------|-----------|
| Framework | **Next.js 15 (App Router)** | SSG-first, Vercel-native, full TypeScript support |
| Language | **TypeScript** | Non-negotiable for a TypeScript developer's portfolio |
| Styling | **Tailwind CSS v4** | Utility-first, no CSS-in-JS overhead |
| Animation | **Framer Motion** | Scroll-triggered counters, section reveals, micro-interactions |
| Contact form | **React Hook Form + Resend API route** | Owner-controlled, no third-party form service branding |
| Deployment | **Vercel** | Zero-config for Next.js, free tier sufficient, instant previews |
| Package manager | **pnpm** | Faster installs, disk-efficient |
| Hosting | **Vercel free tier** (upgrade to Pro only if custom domain SSL or bandwidth limits require it) |
| Font stack | **Syne** (display/headers) + **IBM Plex Mono** (accent/numbers) + **Geist** (body) |
| Color system | See Appendix C |
| Content source | Single TypeScript data file: `src/data/portfolio.ts` — all sections pull from here |
| CV file | Stored in `public/cv/Kelechi_Uba_CV.pdf` |

### 0.5 Autonomy, Throughput, and Anti-Stall Directive

1. Do not self-throttle. Proceed from one checkpoint to the next unless a Human Review Gate or STOP AND ASK trigger explicitly halts progress.
2. Do not stop after analysis when the implementation step is obvious and already approved by the current phase.
3. Batch independent file reads, installs, and low-risk validation commands together.
4. Prefer one clean, high-leverage pass per concern over repeated shallow passes.
5. Do not defer obvious fixes into "future work" when they are in scope, low-risk, and required for go-live.
6. Do not produce placeholder docs or TODO-only artifacts. Every artifact must contain real findings or real content.
7. If blocked on one task, pivot to another in-scope task in the same approved phase rather than idling.
8. Keep the progress tracker current enough that a fresh agent can resume in under 10 minutes.
9. Human involvement is for gates, true blockers, and content decisions — not routine engineering judgment.

---

## 1. Required Sprint Artifacts

Create this folder before any code changes:

```text
docs/portfolio-sprint/
  00_state_assessment.md
  01_content_inventory.md
  02_design_spec.md
  03_component_plan.md
  04_deployment_spec.md
  05_progress_tracker.md
  06_evidence_log.md
  07_decisions_log.md
  08_qa_and_lighthouse.md
  09_go_live_checklist.md
  10_signoff_log.md
```

### 1.1 Progress Tracker Template

```markdown
# Portfolio Sprint — Progress Tracker

## Baseline
- Branch: main
- Date started:
- Node version:
- pnpm version:
- Next.js version confirmed:
- Vercel project created: [Yes / No]
- GitHub repo created: [Yes / No]
- Known blockers at start:

## Milestones
- M0 Initialization complete: [Not Started / In Progress / Done]
- M1 Scaffold and toolchain verified:
- M2 Design tokens and layout shell:
- M3 All sections — first pass (desktop):
- M4 All sections — responsive (mobile/tablet):
- M5 Animations and interactions:
- M6 Contact form — end-to-end:
- M7 Content finalized (no placeholders):
- M8 Lighthouse ≥ 95:
- M9 Deployment gate — live on Vercel:
- M10 Final QA and sign-off:

## Current Focus
- Task:
- Checkpoint:
- Next actions:
- Open questions requiring human input:
```

### 1.2 Evidence Log Template

```markdown
# Evidence Log — Portfolio Sprint

## E-001 — [Title]
- Date:
- Scope:
- Files changed:
- Commands run:
- Result:
- Visual / functional outcome:
- Risks / follow-up:
```

### 1.3 Decisions Log Template

```markdown
# Decisions Log — Portfolio Sprint

## D-001 — [Short Title]
- Date:
- Phase / Checkpoint:
- Options considered:
- Decision made:
- Rationale:
- Visual / UX impact:
- Human approval:
- Notes:
```

---

## 2. Communication Protocol

### 2.1 STOP AND ASK Triggers

Stop immediately and request human input if any of the following occur:

- Kelechi's personal contact details (email, phone, city) are not available and placeholders cannot be resolved.
- The Resend API key is not available and the contact form cannot be wired.
- The CV PDF is not available and the CV download CTA cannot be fulfilled.
- Vercel deployment fails with an error that cannot be resolved in two attempts.
- A required npm/pnpm package has a breaking API change that conflicts with the locked stack.
- The chosen font CDN is unavailable and a fallback must be selected.
- The Lighthouse score cannot reach ≥ 95 after two optimization passes and a trade-off decision is required.
- Any content decision requires Kelechi's personal judgment: biography wording, project descriptions with sensitive employer context, or the framing of the commendation.
- The custom domain (if used) has DNS propagation issues that cannot be resolved within the sprint window.

### 2.2 Mandatory Question Format

```markdown
## QUESTION: [Short Title]

**Context**
- Phase / Checkpoint:
- What was found:
- Why this matters for go-live:

**Options**
1. Option A — Pros / Cons
2. Option B — Pros / Cons

**Recommendation**
- Preferred option and why:

**Risk**
- Visual / UX impact:
- Go-live impact:
- Rollback complexity:

**Ask**
Approval required before proceeding.
```

### 2.3 Session Start / End Log

Append to `05_progress_tracker.md` for every session:

```markdown
## SESSION START: [timestamp]
- Read: 05_progress_tracker.md, 07_decisions_log.md
- Resuming checkpoint:
- Open blockers from last session:

## SESSION END: [timestamp]
- Checkpoints completed:
- Files modified:
- Commands run:
- Evidence IDs added:
- Next checkpoint:
- Blockers for next session:
```

---

## 3. Human Review Gates

| Gate | Trigger Point | Required Output | Approval Required |
|------|---------------|-----------------|-------------------|
| Gate A | Post-scaffold | Repo live on GitHub, Vercel connected, baseline build passing, design tokens committed | Yes |
| Gate B | Post-section build | All sections rendered at desktop — screenshot or Vercel preview URL provided | Yes |
| Gate C | Post-responsive pass | All sections confirmed at 375px and 768px — screenshots provided | Yes |
| Gate D | Post-content finalization | No placeholders remain, CV PDF linked, contact form tested end-to-end | Yes |
| Gate E | Pre-launch | Lighthouse scores ≥ 95, OG preview confirmed, final QA checklist complete | Yes |
| Gate F | Go-live sign-off | Site live on production URL, `09_go_live_checklist.md` fully checked | Yes |

While awaiting approval at any gate, the agent may continue only low-risk work: docs cleanup, evidence logging, code reading, or non-visual refactoring with no user-facing surface impact.

---

## 4. Rollback Policy

The site is new construction with no existing users. Standard rollback applies:

1. Vercel maintains automatic deployment history. Any previous deployment can be promoted to production via the Vercel dashboard in under 60 seconds.
2. For any code change that breaks the build: revert the offending commit, push to `main`, wait for Vercel to redeploy.
3. For any content change that introduces incorrect information: correct in `src/data/portfolio.ts` and push. The deployment pipeline handles the rest.
4. Do not delete the `public/cv/` folder without replacing the PDF first.

---

## Phase 0 — Initialization

> Goal: Working repository, connected deployment pipeline, and confirmed toolchain before any design or code work.

### 0.1 Create GitHub Repository

```bash
# On GitHub: create a new public repo named "portfolio" (or "kelechi-uba-portfolio")
# Clone locally
git clone https://github.com/[USERNAME]/portfolio.git
cd portfolio
```

### 0.2 Scaffold Next.js Project

```bash
pnpm create next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --no-src-dir \
  --import-alias "@/*"

# Verify the scaffold builds cleanly
pnpm build
pnpm lint
```

Confirm and record:
- Next.js version
- Tailwind CSS version
- TypeScript version
- Node version

### 0.3 Install Core Dependencies

```bash
# Animation
pnpm add framer-motion

# Contact form
pnpm add react-hook-form @hookform/resolvers zod
pnpm add resend

# Icon library
pnpm add lucide-react

# Utility
pnpm add clsx tailwind-merge

# Dev dependencies
pnpm add -D @types/node
```

### 0.4 Configure Vercel Project

1. Go to vercel.com → Add New Project → import the GitHub repo.
2. Accept all default settings (Next.js auto-detected).
3. Do not set environment variables yet — that happens in Phase 4.
4. Trigger an initial deployment and confirm the Vercel URL resolves.
5. Record the Vercel production URL in `04_deployment_spec.md`.

### 0.5 Establish Folder Structure

Create the following folder structure:

```text
/
├── app/
│   ├── layout.tsx           # Root layout with metadata, fonts
│   ├── page.tsx             # Single-page root: imports all sections
│   ├── globals.css          # Tailwind directives + CSS custom properties
│   └── api/
│       └── contact/
│           └── route.ts     # POST handler for contact form
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ImpactStrip.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── SectionHeader.tsx
│       ├── CounterNumber.tsx
│       ├── TimelineItem.tsx
│       ├── ProjectCard.tsx
│       ├── SkillPill.tsx
│       └── CommendationBadge.tsx
├── src/
│   └── data/
│       └── portfolio.ts     # Single source of truth for all content
├── public/
│   ├── cv/
│   │   └── Kelechi_Uba_CV.pdf
│   └── og-image.png         # Open Graph image (1200×630)
├── lib/
│   └── utils.ts             # clsx/tw-merge helper
├── .env.local               # RESEND_API_KEY — never committed
├── .env.example             # Committed template with placeholder values
└── docs/
    └── portfolio-sprint/    # Sprint artifacts (see Section 1)
```

### 0.6 Configure Fonts

In `app/layout.tsx`, use Next.js `next/font/google` for zero-FOUT font loading:

```typescript
import { Syne } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'
import { Geist } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})
```

### 0.7 Configure Design Tokens in `globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Color system — see Appendix C */
  --bg-primary: #080D1A;
  --bg-secondary: #0E1628;
  --bg-card: #131D35;
  --border: #1E2D4F;
  --border-bright: #2E4A7A;
  --text-primary: #E8EDF5;
  --text-secondary: #8A9BBC;
  --text-muted: #4A5A7A;
  --accent: #F59E0B;       /* Amber — sparingly */
  --accent-dim: #92610A;
  --highlight: #3B82F6;    /* Electric blue — links, hover */

  /* Typography */
  --font-display: var(--font-syne);
  --font-body: var(--font-geist);
  --font-mono: var(--font-mono);
}

html {
  scroll-behavior: smooth;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

::selection {
  background: var(--accent);
  color: #080D1A;
}
```

### 0.8 Baseline Commit

```bash
git add .
git commit -m "chore: scaffold Next.js 15, install deps, establish folder structure"
git push origin main
```

Confirm Vercel deploys successfully. Record deployment URL in progress tracker.

**→ Human Review Gate A: Confirm repo live on GitHub, Vercel connected, baseline build passing.**

---

## Phase 1 — Content Data File

> Goal: All portfolio content is encoded in `src/data/portfolio.ts` before any component is written. This is the single source of truth.

### 1.1 Write `src/data/portfolio.ts`

This file must be fully populated — no placeholder values — before Phase 2 begins. The agent must prompt for any missing values via STOP AND ASK.

```typescript
// src/data/portfolio.ts
// SINGLE SOURCE OF TRUTH — all site content lives here.
// To update the site: edit this file. No JSX hunting required.

export const personal = {
  name: "Kelechi Michael Uba",
  title: "Senior Data Engineer · Backend & Fullstack Developer",
  tagline: "I build financial data systems that produce results banks can measure.",
  email: "[EMAIL]",               // STOP AND ASK if not provided
  phone: "[PHONE]",               // STOP AND ASK if not provided
  location: "[CITY, COUNTRY]",    // STOP AND ASK if not provided
  linkedin: "[LINKEDIN_URL]",
  github: "[GITHUB_URL]",
  cvPath: "/cv/Kelechi_Uba_CV.pdf",
}

export const summary = `
Data engineer and backend developer with 6+ years designing automated analytics pipelines,
regulated financial systems, and data-intensive web applications. At UBA, engineered the
Oracle processing engine that directly powered the 5 for 5 Digital Rewards Campaign —
generating cumulative interest expense savings exceeding ₦20 billion and earning a formal
Management Commendation. Strong track record translating complex business rules into
maintainable, high-performance production systems across multi-country banking environments.
`

export const impactNumbers = [
  {
    value: 20,
    prefix: "₦",
    suffix: "B+",
    label: "Cumulative savings delivered",
    subtext: "5 for 5 Campaign · UBA · 2025",
  },
  {
    value: 2.2,
    prefix: "₦",
    suffix: "B",
    label: "Monthly interest expense saved",
    subtext: "Average · 5 for 5 Campaign · UBA",
    decimals: 1,
  },
  {
    value: 70,
    suffix: "%",
    label: "Faster validation cycles",
    subtext: "Automated P&L workflows · UBA",
  },
  {
    value: 200,
    prefix: "₦",
    suffix: "M",
    label: "Monthly income recovered",
    subtext: "Revenue leakage · Fidelity Bank",
  },
]

export const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "PL/SQL"],
  },
  {
    category: "Data & Databases",
    items: ["Oracle", "PostgreSQL", "SQL Server", "pandas", "cx_Oracle", "Power BI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "pg-boss", "Flask", "concurrent.futures"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
  },
  {
    category: "Security & Control",
    items: ["RBAC", "CSRF Protection", "MFA Integration", "Audit Logging", "ISO 27001"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Redis", "Git", "Vercel", "AWS", "Checkpoint/State Management"],
  },
]

export const experience = [
  {
    title: "Digital Products & Services Officer",
    subtitle: "Technology & Automation Focus",
    company: "FirstBank Group — Internal Audit",
    period: "2025 – Present",
    commendation: null,
    bullets: [
      "Analyse digital banking platforms across authentication, authorisation, workflows, integrations, and change pipelines, translating system behaviour into actionable technical findings.",
      "Build monitoring workflows that surface access-control misconfigurations and role inconsistencies earlier than manual review cycles.",
      "Evaluate RBAC implementations, segregation-of-duties gaps, and permission drift across regulated production environments.",
      "Collaborate with engineers, DBAs, and platform teams during deep-dive walkthroughs, rapidly understanding unfamiliar architectures and legacy workflows.",
    ],
  },
  {
    title: "Team Lead, Data Analytics & Revenue Assurance",
    subtitle: null,
    company: "United Bank for Africa (UBA)",
    period: "Aug 2024 – Jun 2025",
    commendation: {
      title: "Commendation for Outstanding Contribution",
      body: "Formally commended by Management for outstanding contribution to the successful delivery of the 5 for 5 Digital Rewards Campaign. The initiative drove average monthly interest expense savings of ₦2.2 billion, with cumulative savings exceeding ₦20 billion in 2025.",
      issuer: "UBA Management",
      year: "2025",
    },
    bullets: [
      "Designed and built the production Oracle data processing engine (Python / cx_Oracle) powering the 5 for 5 campaign — chunked parallel processing (10,000-record batches via concurrent.futures) against multi-million-row transaction tables, with checkpoint/state management for fault tolerance and automated email distribution.",
      "Engineered complex PL/SQL-driven analytical queries joining account, interest, and digital-channel utilisation data across UBA's core banking schema to identify campaign-eligible customers and track digital migration metrics.",
      "Led profit-and-loss variance analysis and introduced automated validation workflows that reduced processing time by 70% across multi-country operations.",
      "Built analytics scripts for revenue-leakage monitoring, data integrity checks, and faster investigation workflows; owned monthly financial reporting that translated large-volume data into actionable remediation insights.",
    ],
  },
  {
    title: "Internal Control Officer",
    subtitle: "IT Control & Automation",
    company: "9 Payment Service Bank",
    period: "Jan 2023 – Jun 2024",
    commendation: null,
    bullets: [
      "Introduced automated data-analysis protocols into control-assessment workflows, improving accuracy and reducing runtime by 85%.",
      "Planned and executed testing across multiple platforms, focusing on real system behaviour, dependencies, and evidence quality.",
    ],
  },
  {
    title: "Internal Systems Auditor",
    subtitle: null,
    company: "Fidelity Bank Plc",
    period: "Jan 2022 – Jan 2023",
    commendation: null,
    bullets: [
      "Performed technology-focused investigations using data spooling, evidence analysis, stakeholder interviews, and root-cause review.",
      "Drove recovery of ₦200M in monthly income across multiple income lines by identifying leakages and coordinating remediation.",
    ],
  },
  {
    title: "Web Developer & Automator",
    subtitle: null,
    company: "RGS Inc. (Huawei Technology)",
    period: "Aug 2019 – Jan 2022",
    commendation: null,
    bullets: [
      "Designed and optimised automated solutions reducing cost and effort of manual operational processes.",
      "Supported server and database administration, troubleshooting, and first-time solution R&D.",
    ],
  },
]

export const projects = [
  {
    name: "5 for 5 Campaign Analytics Engine",
    tag: "Production · Python · Oracle · Parallel Processing",
    description:
      "Designed and delivered the Oracle data processing engine that powered UBA's 5 for 5 Digital Rewards Campaign from inception. The engine processed multi-million-row transaction tables in parallel 10,000-record chunks (concurrent.futures), with full checkpoint/state management for fault tolerance, PL/SQL analytical queries across UBA's core banking schema, and automated email distribution of results. Directly contributed to ₦20B+ cumulative interest expense savings.",
    tech: ["Python", "cx_Oracle", "PL/SQL", "pandas", "concurrent.futures", "Oracle DB"],
    highlight: "₦20B savings impact",
    commended: true,
  },
  {
    name: "Daily Trial Balance Pipeline",
    tag: "Production · Python · Oracle · Financial Reporting",
    description:
      "End-to-end automated GL-level trial balance reporting system interfacing with Oracle (tbaadm schema). Features chunked data processing, multi-currency FX rate handling with sentinel-value validation, post-run quality assurance analyzer with tieout checks, state/checkpoint management for resumability, and automated XLSX/ZIP artifact generation distributed to the Finance team.",
    tech: ["Python", "Oracle", "openpyxl", "pandas", "cx_Oracle", "Parallel Processing"],
    highlight: "GL-level automation",
    commended: false,
  },
  {
    name: "Internal Data Portal",
    tag: "In Progress · PERN Stack · TypeScript",
    description:
      "Full-stack modular data portal migrating legacy Python/Flask-Oracle reporting and reconciliation workflows into maintainable service-layer and API-driven architecture. Modules include trial balance, daily variance, GL automation, and compliance workflows. Implements RBAC, session management, CSRF protection, rate limiting, and MFA-oriented integration patterns.",
    tech: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    highlight: "PERN + TypeScript",
    commended: false,
  },
]

export const certifications = [
  { name: "ISO 27001 Lead Auditor", issuer: "PECB", year: "2024" },
  { name: "AWS Cloud Computing Practitioner", issuer: "AWS", year: "2023" },
  { name: "Cyber Security Professional", issuer: "", year: "2023" },
  { name: "JavaScript Full Stack Developer", issuer: "", year: "2023" },
  { name: "Google Africa Developer Scholarship", issuer: "Google / Andela", year: "2020" },
]

export const education = {
  degree: "B.Sc. (Hons.) Electronic & Computer Engineering",
  class: "Second Class Upper",
  institution: "Lagos State University, Epe",
  period: "Sep 2012 – Dec 2017",
}
```

**STOP AND ASK** if any of the following are missing when this file is being written:
- `personal.email`
- `personal.phone`
- `personal.location`
- `personal.linkedin`
- `personal.github`
- The CV PDF file (`public/cv/Kelechi_Uba_CV.pdf`)

Document all resolved values in `01_content_inventory.md`.

---

## Phase 2 — Layout Shell & Navigation

> Goal: Root layout, persistent navigation, and footer are complete and responsive before any content section is built.

### 2.1 Root Layout (`app/layout.tsx`)

Requirements:
- Font variables applied to `<html>` element.
- `<head>` includes full metadata (see Appendix D).
- Open Graph tags are populated from `personal` data.
- `<body>` has `bg-[var(--bg-primary)] text-[var(--text-primary)]`.
- `Navbar` and `Footer` are imported.

### 2.2 Navbar Component (`components/layout/Navbar.tsx`)

Requirements:
- Fixed to top. `position: fixed`, `z-index: 50`.
- Transparent on page load; transitions to `bg-[var(--bg-secondary)]/90 backdrop-blur-md` after scrolling 60px (use `useScroll` or a scroll event listener).
- Logo: "KU" monogram in amber, Syne font, 24px.
- Nav links: `About`, `Skills`, `Experience`, `Projects`, `Contact`. Smooth-scroll on click.
- CTA button: "Download CV" — links to `personal.cvPath`, opens in new tab.
- Mobile: hamburger menu (Lucide `Menu` icon) opens a full-screen slide-down drawer with the same links.
- Active section highlighting: use IntersectionObserver to highlight the current section link in amber.

### 2.3 Footer Component (`components/layout/Footer.tsx`)

Requirements:
- Single row on desktop: left = "© 2025 Kelechi Michael Uba", right = icon links (LinkedIn, GitHub, Email).
- Centered stack on mobile.
- Thin top border in `var(--border)`.
- "Built with Next.js" is acceptable only as a very small muted footnote, not a visual element.

### 2.4 Main Page (`app/page.tsx`)

Import all sections in order:
```tsx
<Hero />
<ImpactStrip />
<About />
<Skills />
<Experience />
<Projects />
<Certifications />
<Contact />
```

Each section must have an `id` attribute for scroll-spy and anchor navigation.

---

## Phase 3 — Section Implementation

> Goal: All eight content sections are fully implemented and visually complete at desktop width. Responsive work happens in Phase 4.

> **Execution rule:** Build sections in the order listed. Each section must render without console errors before proceeding to the next. Do not partially implement a section and move on.

### 3.1 Hero Section (`components/sections/Hero.tsx`)

**Visual spec:**
- Full viewport height (`min-h-screen`).
- Background: `var(--bg-primary)` with a subtle grid overlay (CSS `background-image` with thin `var(--border)` lines at 40px intervals). No images. No gradients outside of a very subtle radial at center.
- Layout: vertically centered content, left-aligned text, right-aligned decorative element (a terminal-style code block showing one of Kelechi's SQL/Python snippets, faded and non-interactive).

**Content spec:**
- **Eyebrow** (IBM Plex Mono, 13px, amber): `// data.engineer · backend.dev`
- **Name** (Syne, 64–80px depending on breakpoint, bold, white): `Kelechi Michael Uba`
- **Title** (Geist, 20px, `var(--text-secondary)`): pulled from `personal.title`
- **Tagline** (Geist, 18px, `var(--text-secondary)` italic): pulled from `personal.tagline`
- **CTAs**: Two buttons side by side:
  - Primary: "Download CV" → `personal.cvPath` (amber fill, dark text)
  - Secondary: "Get in Touch" → smooth-scrolls to `#contact` (bordered, no fill)
- **Scroll indicator**: animated chevron-down at bottom center.

**Animation:**
- Staggered reveal on mount: eyebrow → name → title → tagline → CTAs. Each with 100ms delay offset using Framer Motion `initial / animate` with `y: 20 → 0, opacity: 0 → 1`.
- The terminal code block fades in last with a slight typewriter cursor blink on its last line.

**Decorative code block content** (right side, desktop only, visible on ≥ 1024px):
```python
# 5for5_campaign_engine.py
def process_chunk(acid_list, month_date):
    """
    ₦20B in cumulative savings.
    One parallel chunk at a time.
    """
    with cx_Oracle.connect(TB_DB_CONNECTION) as conn:
        results = execute_analytical_query(
            conn, acid_list, month_date
        )
    return aggregate_by_sbu(results)
```

### 3.2 Impact Strip (`components/sections/ImpactStrip.tsx`)

**Visual spec:**
- Full-width band, `var(--bg-secondary)` background, thin top and bottom borders in `var(--border)`.
- Four stat cards in a horizontal row (2×2 grid on mobile).
- Amber vertical dividers between cards on desktop.

**Per-card spec:**
- **Number**: IBM Plex Mono, 56px, amber. Animated counter from 0 to final value when the strip enters the viewport (IntersectionObserver + Framer Motion `useMotionValue`/`useSpring` or a custom hook).
- **Label**: Geist, 14px, `var(--text-primary)`, all-caps, tracked wide.
- **Subtext**: IBM Plex Mono, 11px, `var(--text-muted)`.

**Data source:** `impactNumbers` from `portfolio.ts`. Respect the `decimals` field for the ₦2.2B number.

**Animation trigger:** Counter starts when the strip is 30% in the viewport. Numbers animate over 1.5 seconds with an ease-out curve. Numbers must never go backwards on re-entry.

### 3.3 About Section (`components/sections/About.tsx`)

**Visual spec:**
- Section ID: `about`.
- Two-column layout on desktop: left = large typographic quote, right = body paragraphs + a small decorative element (e.g. a minimal timeline of years/milestones or a tech stack icon cluster).
- Left column: a pull-quote from `summary`, Syne font, 28px, with a thick amber left border.

**Content:**
- Body text pulled from `summary` in `portfolio.ts`.
- Education block below body: degree, class, institution, years. Styled as a labeled row.
- Link to CV at the bottom of this section: "Full résumé ↗"

### 3.4 Skills Section (`components/sections/Skills.tsx`)

**Visual spec:**
- Section ID: `skills`.
- Category headers in IBM Plex Mono, 11px, amber, all-caps.
- Skill pills: `var(--bg-card)` background, `var(--border)` border, `var(--text-primary)` text, Geist 13px. On hover: border becomes `var(--highlight)`.
- Layout: category label on the left (fixed width), pills flowing right.

**Animation:** Staggered pill reveal as section enters viewport. Each category reveals its pills with a 30ms stagger between pills and 100ms stagger between categories.

**Data source:** `skills` from `portfolio.ts`.

### 3.5 Experience Section (`components/sections/Experience.tsx`)

**Visual spec:**
- Section ID: `experience`.
- Vertical timeline: thin amber vertical line on the left, circular nodes for each role.
- Node color: amber for current/commended roles, `var(--border-bright)` for others.
- Each timeline item is a `TimelineItem` component.

**TimelineItem component spec:**
- **Company + period**: IBM Plex Mono, 12px, `var(--text-muted)`. Period is right-aligned.
- **Role title**: Syne, 20px, bold, `var(--text-primary)`.
- **Subtitle** (if present): Geist italic, 14px, `var(--text-secondary)`.
- **Commendation badge** (if `commendation` is non-null): See `CommendationBadge` spec below.
- **Bullets**: Geist, 15px, `var(--text-secondary)`. Left-indented, with a small amber `▪` prefix.

**CommendationBadge component spec** (`components/ui/CommendationBadge.tsx`):
- Card with `var(--bg-card)` background, amber left border (4px), inner padding.
- Top row: amber medal icon (Lucide `Award`) + "Management Commendation" label in IBM Plex Mono 11px amber.
- Body: commendation text in Geist 14px `var(--text-secondary)`. Must include the ₦20B figure.
- Issuer + year in IBM Plex Mono 11px `var(--text-muted)`, right-aligned.
- This badge is only rendered for the UBA role. It must appear between the role title and the bullet list.

**Animation:** Timeline items reveal on scroll with `y: 30 → 0, opacity: 0 → 1`, staggered by 150ms per item.

**Data source:** `experience` from `portfolio.ts`.

### 3.6 Projects Section (`components/sections/Projects.tsx`)

**Visual spec:**
- Section ID: `projects`.
- Three cards in a row on desktop (three-column grid). Stack to one column on mobile.
- The `5 for 5` card has a subtle amber glow (`box-shadow: 0 0 30px rgba(245,158,11,0.15)`) and an amber top border.

**ProjectCard component spec** (`components/ui/ProjectCard.tsx`):
- **Tag**: IBM Plex Mono, 11px, amber, top of card.
- **Name**: Syne, 20px, bold.
- **Description**: Geist, 14px, `var(--text-secondary)`. Full text, not truncated.
- **Tech pills**: small pill chips, same style as skill pills but 11px.
- **Highlight badge** (if `highlight` is non-null): small amber badge at the bottom right: e.g. "₦20B savings impact".
- **Commended indicator** (if `commended` is true): amber `Award` icon in the top-right corner of the card header.

**Animation:** Cards scale from `0.96 → 1` and fade in on scroll, staggered by 150ms.

**Data source:** `projects` from `portfolio.ts`.

### 3.7 Certifications Section (`components/sections/Certifications.tsx`)

**Visual spec:**
- Section ID: `certifications`.
- Horizontal scrollable row on mobile, wrapped grid on desktop (auto-fill, min 220px per item).
- Each cert: `var(--bg-card)` background, `var(--border)` border. Name in Syne 15px bold. Issuer + year in IBM Plex Mono 11px `var(--text-muted)`.
- Lucide `BadgeCheck` icon in amber, 20px, top-left of each card.

**Data source:** `certifications` and `education` from `portfolio.ts`.

### 3.8 Contact Section (`components/sections/Contact.tsx`)

**Visual spec:**
- Section ID: `contact`.
- Two-column layout on desktop: left = contact info block, right = contact form.
- Left block:
  - Heading: "Let's work together." (Syne, 36px).
  - Sub-copy: one or two sentences of warm, professional invitation.
  - Contact rows: email (with copy-to-clipboard), LinkedIn link, location.
  - Each row: Lucide icon in amber + text in Geist.
- Right block (the form):
  - Fields: Name, Email, Subject (select: "Recruitment inquiry", "Project collaboration", "General"), Message.
  - Submit button: amber fill, dark text, "Send Message."
  - Success state: replaces form with a confirmation message including a checkmark.
  - Error state: inline error message below the button.

**Form implementation (`app/api/contact/route.ts`):**
```typescript
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // or verified domain
      to: [process.env.CONTACT_EMAIL!],
      subject: `Portfolio: ${subject} from ${name}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
```

**Validation (client-side with Zod):**
- Name: required, min 2 chars.
- Email: required, valid email format.
- Subject: required, one of the three options.
- Message: required, min 20 chars.

---

## Phase 4 — Responsive Pass

> Goal: Every section is fully functional and visually correct at 375px (mobile), 768px (tablet), and 1280px+ (desktop).

### 4.1 Responsive Breakpoints

Use Tailwind's standard breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### 4.2 Per-Section Responsive Requirements

| Section | Mobile (375px) | Tablet (768px) |
|---------|----------------|----------------|
| Hero | Single column; decorative code block hidden; name font 40px | Single column; name font 56px; code block visible but smaller |
| Impact Strip | 2×2 grid; smaller numbers (40px) | 2×2 grid; numbers 48px |
| About | Single column; pull-quote on top | Two-column |
| Skills | Full-width; categories stack vertically | Two-column categories |
| Experience | Timeline collapses to no visible line; cards full-width | Full timeline with line |
| Projects | Single column | Two-column (1 wide + 1 aside on tablet, only if content allows) |
| Certifications | Horizontal scroll | Wrapped grid |
| Contact | Form stacks below contact info | Two-column |

### 4.3 Navbar Responsive Requirements

- At < 1024px: hide desktop nav links; show hamburger icon.
- On hamburger open: full-screen overlay, dark background, links centered vertically.
- Close on: outside click, ESC key, or nav link click.
- Must not break scroll-lock behavior on the main content when open.

### 4.4 Responsive Audit Process

For each section, verify manually (or with screenshot tools) at 375px, 768px, and 1280px:

```markdown
| Section | 375px | 768px | 1280px | Notes |
|---------|-------|-------|--------|-------|
| Hero | | | | |
| ImpactStrip | | | | |
| About | | | | |
| Skills | | | | |
| Experience | | | | |
| Projects | | | | |
| Certifications | | | | |
| Contact | | | | |
| Navbar | | | | |
| Footer | | | | |
```

Fill this table in `08_qa_and_lighthouse.md` before proceeding to Phase 5.

**→ Human Review Gate C: Present Vercel preview with responsive screenshots at all three widths.**

---

## Phase 5 — Animations, Polish, and Performance

> Goal: Animations complete, visual polish pass done, Lighthouse ≥ 95 at production URL.

### 5.1 Scroll Animations

Use `framer-motion` `useInView` hook for all section-level reveal animations. All animated elements must use the pattern:

```tsx
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: "-10% 0px" })

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
```

The `once: true` prevents re-triggering on scroll-up. Do not animate elements that are immediately above the fold on load — they should render immediately.

### 5.2 Impact Counter Animation

Implement a `useCountUp` hook:

```typescript
// lib/useCountUp.ts
import { useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function useCountUp(target: number, decimals = 0) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1500, bounce: 0 })
  const display = useTransform(spring, (v) => v.toFixed(decimals))

  useEffect(() => {
    if (isInView) motionValue.set(target)
  }, [isInView, target, motionValue])

  return { ref, display }
}
```

### 5.3 Performance Optimizations

| Optimization | Implementation |
|-------------|---------------|
| Font preloading | `next/font/google` handles this automatically |
| Image optimization | Use `next/image` for any images (profile photo if added later) |
| Code splitting | Next.js App Router handles this automatically |
| Framer Motion | Use `LazyMotion` + `domAnimation` to reduce bundle size |
| No unused deps | Run `npx depcheck` before deployment and remove unused packages |
| CSS purging | Tailwind CSS handles this automatically in production build |

### 5.4 Framer Motion Bundle Optimization

```tsx
// app/layout.tsx or a client boundary component
import { LazyMotion, domAnimation } from 'framer-motion'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
      </body>
    </html>
  )
}
```

### 5.5 Lighthouse Audit Requirements

Run Lighthouse in Chrome DevTools against the Vercel production URL (not `localhost` — production build only, no dev server):

```markdown
| Category | Target | Actual | Status |
|----------|--------|--------|--------|
| Performance | ≥ 95 | | |
| Accessibility | ≥ 95 | | |
| Best Practices | ≥ 95 | | |
| SEO | ≥ 95 | | |
```

Record results in `08_qa_and_lighthouse.md`.

**Common issues and fixes:**

| Issue | Fix |
|-------|-----|
| LCP too slow | Ensure hero text renders immediately (no lazy load on above-fold content) |
| Accessibility: missing alt | All images and icon-only buttons must have `aria-label` or `alt` text |
| Accessibility: color contrast | Verify `var(--text-secondary)` (#8A9BBC on #080D1A) meets WCAG AA (4.5:1 ratio) |
| SEO: missing meta description | Confirm `layout.tsx` has `description` in metadata export |
| Best Practices: console errors | Resolve all TypeScript and runtime errors before deployment |

### 5.6 Polish Checklist

Before Gate E, confirm:

- [ ] All hover states have smooth transitions (CSS `transition: all 0.2s ease`).
- [ ] Focus states are visible and on-brand (not the browser default outline — use amber outline).
- [ ] Scroll-spy updates the active nav link correctly when scrolling through all sections.
- [ ] The mobile drawer closes smoothly and does not leave a scroll-lock artifact.
- [ ] The commendation badge is visually distinct and readable at all widths.
- [ ] The ambient code block in the hero is legible but clearly non-interactive (slightly faded, no cursor).
- [ ] No FOUC (Flash of Unstyled Content) on initial load.
- [ ] No layout shift (CLS) visible in Lighthouse or Chrome DevTools.

---

## Phase 6 — Deployment, SEO, and Go-Live

> Goal: Site is live on a public URL with correct SEO metadata, OG image, contact form wired to Resend, and the CV PDF accessible.

### 6.1 Environment Variables

Set these in the Vercel project dashboard (Settings → Environment Variables):

```bash
# .env.example (committed — no real values)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=your.email@example.com
NEXT_PUBLIC_SITE_URL=https://kelechiuba.vercel.app
```

**Rules:**
- `RESEND_API_KEY` is secret. Never in code or committed files.
- `CONTACT_EMAIL` is the address that receives form submissions. Set to Kelechi's real email.
- `NEXT_PUBLIC_SITE_URL` is used for OG metadata and sitemaps.

### 6.2 Resend Account Setup

1. Go to resend.com and create a free account.
2. Verify your sending email or domain.
3. Copy the API key into Vercel environment variables.
4. Test the contact form via the Vercel preview URL before going to production.
5. Confirm receipt of the test email in Kelechi's inbox.

### 6.3 Open Graph Image

Create `public/og-image.png` at 1200×630px with:
- Dark `var(--bg-primary)` background.
- "Kelechi Michael Uba" in Syne bold, white, large.
- Role/title in smaller text below.
- Amber accent bar or element.
- Professional — no stock photos.

This can be generated with a simple HTML/CSS screenshot tool (e.g., the OG image can be created as a static image in any graphics tool). Alternatively, use Next.js `ImageResponse` from `next/og` to generate it dynamically:

```typescript
// app/og/route.tsx
import { ImageResponse } from 'next/og'

export async function GET() {
  return new ImageResponse(
    <div style={{ background: '#080D1A', width: '1200px', height: '630px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px' }}>
      <div style={{ color: '#F59E0B', fontFamily: 'sans-serif', fontSize: '16px', marginBottom: '24px' }}>
        data.engineer · backend.dev
      </div>
      <div style={{ color: '#E8EDF5', fontFamily: 'sans-serif', fontSize: '72px', fontWeight: 800 }}>
        Kelechi Michael Uba
      </div>
      <div style={{ color: '#8A9BBC', fontFamily: 'sans-serif', fontSize: '24px', marginTop: '16px' }}>
        Senior Data Engineer · Backend & Fullstack Developer
      </div>
    </div>,
    { width: 1200, height: 630 }
  )
}
```

Update the OG metadata in `layout.tsx`:

```typescript
openGraph: {
  images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/og` }]
}
```

### 6.4 Sitemap and Robots

Add to `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_SITE_URL!,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

Add to `app/robots.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  }
}
```

### 6.5 CV PDF Upload

Upload `Kelechi_Uba_CV.pdf` to `public/cv/Kelechi_Uba_CV.pdf` and verify:

```bash
curl -I https://[VERCEL_URL]/cv/Kelechi_Uba_CV.pdf
# Expected: HTTP/2 200
```

If the PDF is not available at sprint time, STOP AND ASK.

### 6.6 Custom Domain (Optional — In-Sprint If Available)

If a custom domain (e.g. `kelechiuba.com` or `kelechi.dev`) is available:

1. Purchase via Namecheap, Porkbun, or Google Domains (recommended: `kelechiuba.dev`).
2. In Vercel: Settings → Domains → Add Domain.
3. Add the Vercel-provided DNS records (CNAME or A record) at the domain registrar.
4. Wait for SSL provisioning (usually < 5 minutes via Vercel).
5. Update `NEXT_PUBLIC_SITE_URL` to the custom domain.
6. Update the Vercel project's production domain.

If no custom domain is available, the Vercel subdomain (`kelechiuba.vercel.app`) is the go-live URL and is sufficient for the sprint.

**→ Human Review Gate E: Lighthouse scores ≥ 95 confirmed, OG preview confirmed, contact form tested end-to-end. Present evidence before proceeding to go-live.**

---

## Phase 7 — Final QA and Sign-Off

> Goal: All go-live checks are complete, the site is confirmed live, and the sprint is formally closed.

### 7.1 Go-Live Checklist (`09_go_live_checklist.md`)

```markdown
# Go-Live Checklist

## Content
- [ ] No placeholder values in the site (no [City], [Email], [Phone], [LinkedIn], [GitHub])
- [ ] Summary text is accurate and approved
- [ ] All experience entries are accurate
- [ ] All project descriptions are accurate and do not expose confidential employer data inappropriately
- [ ] Commendation badge text matches the official commendation notice
- [ ] CV PDF is downloadable and is the current version

## Technical
- [ ] Site loads at production URL without errors
- [ ] No console errors in production
- [ ] Contact form submits and email is received
- [ ] CV download link returns HTTP 200
- [ ] All internal nav links scroll correctly
- [ ] Lighthouse Performance ≥ 95
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Lighthouse Best Practices ≥ 95
- [ ] Lighthouse SEO ≥ 95
- [ ] OG image renders correctly in LinkedIn link preview
- [ ] OG image renders correctly in WhatsApp link preview

## Visual
- [ ] Site renders correctly at 375px (iPhone SE)
- [ ] Site renders correctly at 390px (iPhone 14)
- [ ] Site renders correctly at 768px (iPad)
- [ ] Site renders correctly at 1280px (laptop)
- [ ] Site renders correctly at 1920px (desktop)
- [ ] Impact counters animate on scroll
- [ ] Experience timeline renders with commendation badge
- [ ] No layout shift visible on load

## Deployment
- [ ] GitHub repo is public (or private — Kelechi's choice)
- [ ] Vercel auto-deploy is enabled on main branch
- [ ] Environment variables set in Vercel dashboard (not in code)
- [ ] .env.local is in .gitignore and not committed
- [ ] .env.example is committed with placeholder values only
```

### 7.2 Sign-Off

```markdown
# Sprint Sign-Off — Portfolio Website

## Go-Live Details
- Production URL:
- GitHub repo:
- Vercel project:
- Date go-live:
- CV version deployed:

## Lighthouse Scores (Production)
- Performance:
- Accessibility:
- Best Practices:
- SEO:

## Human Approvals
- Gate A approved by: | Date:
- Gate B approved by: | Date:
- Gate C approved by: | Date:
- Gate D approved by: | Date:
- Gate E approved by: | Date:
- Gate F approved by: | Date:

## Known Limitations / Follow-Up Backlog
- (List anything deferred and why)

## Sprint Closed By:
- Date:
```

---

## Appendix A — Complete File Tree

```text
/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── og/
│   │   └── route.tsx               # Dynamic OG image
│   ├── sitemap.ts
│   ├── robots.ts
│   └── api/
│       └── contact/
│           └── route.ts             # Contact form POST handler
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ImpactStrip.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── SectionHeader.tsx
│       ├── CounterNumber.tsx
│       ├── TimelineItem.tsx
│       ├── ProjectCard.tsx
│       ├── SkillPill.tsx
│       └── CommendationBadge.tsx
├── lib/
│   ├── utils.ts                     # clsx + tw-merge helper
│   └── useCountUp.ts               # Scroll-triggered counter hook
├── src/
│   └── data/
│       └── portfolio.ts             # SINGLE SOURCE OF TRUTH
├── public/
│   ├── cv/
│   │   └── Kelechi_Uba_CV.pdf
│   └── og-image.png                 # Fallback static OG image
├── docs/
│   └── portfolio-sprint/
│       ├── 00_state_assessment.md
│       ├── 01_content_inventory.md
│       ├── 02_design_spec.md
│       ├── 03_component_plan.md
│       ├── 04_deployment_spec.md
│       ├── 05_progress_tracker.md
│       ├── 06_evidence_log.md
│       ├── 07_decisions_log.md
│       ├── 08_qa_and_lighthouse.md
│       ├── 09_go_live_checklist.md
│       └── 10_signoff_log.md
├── .env.local                       # NOT committed
├── .env.example                     # Committed — placeholders only
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml
```

---

## Appendix B — Commit Convention

```text
chore(init): ...
feat(layout): ...
feat(hero): ...
feat(impact): ...
feat(about): ...
feat(skills): ...
feat(experience): ...
feat(projects): ...
feat(certifications): ...
feat(contact): ...
fix(responsive): ...
fix(a11y): ...
fix(perf): ...
feat(deploy): ...
docs(sprint): ...
```

Examples:
```text
chore(init): scaffold Next.js 15, install core deps
feat(layout): add Navbar with scroll-spy and mobile drawer
feat(hero): Hero section with staggered reveal and decorative code block
feat(impact): ImpactStrip with scroll-triggered animated counters
feat(experience): timeline with CommendationBadge for UBA role
fix(responsive): collapse Experience timeline line at mobile breakpoint
fix(a11y): add aria-labels to all icon-only buttons
feat(deploy): wire Resend API route, add .env.example
docs(sprint): update go-live checklist and sign-off
```

---

## Appendix C — Color System Reference

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#080D1A` | Page background |
| `--bg-secondary` | `#0E1628` | Navbar (scrolled), section band, footer |
| `--bg-card` | `#131D35` | Cards, badges, commendation |
| `--border` | `#1E2D4F` | All borders and dividers |
| `--border-bright` | `#2E4A7A` | Hover borders, active items |
| `--text-primary` | `#E8EDF5` | Headings, labels, primary content |
| `--text-secondary` | `#8A9BBC` | Body text, bullets, descriptions |
| `--text-muted` | `#4A5A7A` | Timestamps, subtext, metadata |
| `--accent` | `#F59E0B` | Amber — CTAs, numbers, badges, icons |
| `--accent-dim` | `#92610A` | Amber hover / pressed state |
| `--highlight` | `#3B82F6` | Links, hover borders |

**Contrast check (WCAG AA):**
- `--text-primary` (#E8EDF5) on `--bg-primary` (#080D1A): ≈ 15:1 ✓
- `--text-secondary` (#8A9BBC) on `--bg-primary` (#080D1A): ≈ 5.1:1 ✓
- `--accent` (#F59E0B) on `--bg-primary` (#080D1A): ≈ 7.4:1 ✓
- `--text-muted` (#4A5A7A) on `--bg-primary` (#080D1A): ≈ 2.8:1 ✗ — **use only for supplementary text, never for actionable items**

---

## Appendix D — SEO Metadata Spec (`app/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: "Kelechi Michael Uba — Data Engineer & Backend Developer",
  description:
    "Senior data engineer and backend developer specialising in financial systems, Oracle pipelines, and automated analytics. Led the 5 for 5 campaign engine at UBA, delivering ₦20B+ in cumulative savings.",
  keywords: [
    "data engineer", "backend developer", "Oracle", "Python", "TypeScript",
    "financial systems", "UBA", "Nigeria", "pipeline automation", "Next.js"
  ],
  authors: [{ name: "Kelechi Michael Uba" }],
  openGraph: {
    title: "Kelechi Michael Uba — Data Engineer & Backend Developer",
    description: "Led analytics systems delivering ₦20B+ in savings. Available for data engineering and backend roles.",
    type: "website",
    locale: "en_GB",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelechi Michael Uba — Data Engineer & Backend Developer",
    description: "Led analytics systems delivering ₦20B+ in savings. Available for data engineering and backend roles.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og`],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: process.env.NEXT_PUBLIC_SITE_URL },
}
```

---

## Appendix E — Environment Variables Reference

| Variable | Secret? | Required? | Example / Placeholder | Used By |
|----------|---------|-----------|------------------------|---------|
| `RESEND_API_KEY` | Yes | Yes | `re_xxxx...` | `app/api/contact/route.ts` |
| `CONTACT_EMAIL` | No | Yes | `kelechi@example.com` | `app/api/contact/route.ts` |
| `NEXT_PUBLIC_SITE_URL` | No | Yes | `https://kelechiuba.vercel.app` | OG metadata, sitemap |

Rules:
- `RESEND_API_KEY` must never appear in any committed file.
- `.env.local` must appear in `.gitignore`.
- `.env.example` must be committed with placeholder values only.

---

## Appendix F — Explicit Quality Bar

This sprint is not complete if any of these remain true:

- Any placeholder text remains on the live site (`[City]`, `[Email]`, `[Phone]`, `TODO`, `Lorem ipsum`).
- The contact form submits but the owner receives no email.
- The CV download link returns a 404.
- Any Lighthouse score is below 95 in production.
- The commendation badge does not appear in the Experience section for the UBA role.
- The impact counters do not animate (they render as static numbers).
- The mobile hamburger menu is broken or leaves a visual artifact after closing.
- The OG image does not render when the URL is pasted into LinkedIn.
- Any TypeScript error (`tsc --noEmit` fails).
- Any ESLint error (`pnpm lint` fails).
- Vercel deployment is not on auto-deploy from `main`.

---

## Appendix G — Agent Warm-Up Sequence (New Session)

A fresh agent beginning work on this sprint must read these files in order before touching any code:

1. `docs/portfolio-sprint/05_progress_tracker.md` — where are we?
2. `docs/portfolio-sprint/07_decisions_log.md` — what was already decided?
3. `docs/portfolio-sprint/06_evidence_log.md` — what was already done?
4. `src/data/portfolio.ts` — what content is locked?
5. This sprint prompt (`kelechi-portfolio-sprint_v1_0.md`) — what is the target?

Then:
```bash
pnpm build       # Confirm the build baseline
pnpm lint        # Confirm lint baseline
npx tsc --noEmit # Confirm TypeScript baseline
```

Only then may the agent continue from the current checkpoint.
```

---

*Sprint authored: 2026-03-22. Version: v1.0.*
*Owner: Kelechi Michael Uba.*
*Execution target: AI agent in IDE (Cursor, Windsurf, or Claude Code).*
