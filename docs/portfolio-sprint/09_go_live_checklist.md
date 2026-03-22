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
