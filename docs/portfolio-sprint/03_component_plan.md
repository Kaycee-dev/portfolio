# Component Plan — Portfolio Sprint

## Layout Components
- `components/layout/Navbar.tsx` — Fixed top nav, scroll-spy, mobile drawer
- `components/layout/Footer.tsx` — Row on desktop, stack on mobile

## Section Components
- `components/sections/Hero.tsx` — Full viewport, staggered reveal, decorative code block
- `components/sections/ImpactStrip.tsx` — 4 animated counters in horizontal band
- `components/sections/About.tsx` — Pull-quote + body + education
- `components/sections/Skills.tsx` — Categorized skill pills
- `components/sections/Experience.tsx` — Vertical timeline with commendation badge
- `components/sections/Projects.tsx` — 3-column project cards
- `components/sections/Certifications.tsx` — Grid/scroll cert cards
- `components/sections/Contact.tsx` — Contact info + form (React Hook Form + Zod)

## UI Components
- `components/ui/SectionHeader.tsx` — Reusable section heading
- `components/ui/CounterNumber.tsx` — Animated number display
- `components/ui/TimelineItem.tsx` — Single experience entry
- `components/ui/ProjectCard.tsx` — Single project card
- `components/ui/SkillPill.tsx` — Single skill tag
- `components/ui/CommendationBadge.tsx` — UBA commendation card

## Utilities
- `lib/utils.ts` — clsx + tailwind-merge helper (`cn()`)
- `lib/useCountUp.ts` — Scroll-triggered counter hook

## Data
- `src/data/portfolio.ts` — Single source of truth for all content

## API Routes
- `app/api/contact/route.ts` — POST handler for contact form (Resend)

## SEO/Meta
- `app/og/route.tsx` — Dynamic OG image generation
- `app/sitemap.ts` — XML sitemap
- `app/robots.ts` — Robots.txt
