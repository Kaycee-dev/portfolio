# Deployment Spec — Portfolio Sprint

## Platform
- Host: Vercel (free tier)
- Auto-deploy: main branch → production

## GitHub Repository
- URL: https://github.com/Kaycee-dev/portfolio
- Branch: main
- Visibility: TBD (Kelechi's choice)

## Vercel Project
- Production URL: TBD (pending first deploy)
- Framework: Next.js (auto-detected)
- Build command: `next build` (default)
- Output directory: `.next` (default)

## Environment Variables (Vercel Dashboard)

| Variable | Secret | Required | Status |
|----------|--------|----------|--------|
| `RESEND_API_KEY` | Yes | Yes | Not set |
| `CONTACT_EMAIL` | No | Yes | Not set |
| `NEXT_PUBLIC_SITE_URL` | No | Yes | Not set |

## DNS / Domain
- Custom domain: TBD
- Fallback: `kelechiuba.vercel.app` (or similar)

## Rollback
- Vercel maintains deployment history
- Promote any previous deployment via dashboard
