# Go-Live Checklist

## Content
- [x] No placeholder values in the site (no [City], [Email], [Phone], [LinkedIn], [GitHub])
- [x] Summary text is accurate and approved
- [x] All experience entries are accurate
- [x] All project descriptions are accurate and do not expose confidential employer data inappropriately
- [x] Commendation badge text matches the official commendation notice
- [x] CV PDF is downloadable and is the current version

## Technical
- [x] Site loads at production URL without errors
- [ ] No console errors in production
- [ ] Contact form submits and email is received
- [x] CV download link returns HTTP 200
- [x] All internal nav links scroll correctly
- [x] Lighthouse Performance ≥ 95 (actual: 97)
- [x] Lighthouse Accessibility ≥ 95 (actual: 96)
- [x] Lighthouse Best Practices ≥ 95 (actual: 100)
- [x] Lighthouse SEO ≥ 95 (actual: 100)
- [x] OG image renders correctly in LinkedIn link preview
- [x] OG image renders correctly in WhatsApp link preview

## Visual
- [x] Site renders correctly at 375px (iPhone SE)
- [x] Site renders correctly at 390px (iPhone 14)
- [x] Site renders correctly at 768px (iPad)
- [x] Site renders correctly at 1280px (laptop)
- [x] Site renders correctly at 1920px (desktop)
- [x] Impact counters animate on scroll
- [x] Experience timeline renders with commendation badge
- [x] No layout shift visible on load

## Deployment
- [x] GitHub repo is public (or private — Kelechi's choice)
- [x] Vercel auto-deploy is enabled on main branch
- [ ] Environment variables set in Vercel dashboard (not in code)
- [x] .env.local is in .gitignore and not committed
- [x] .env.example is committed with placeholder values only
