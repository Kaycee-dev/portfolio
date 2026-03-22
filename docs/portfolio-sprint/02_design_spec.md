# Design Spec — Portfolio Sprint

## Aesthetic Direction
Precision-industrial: dark background, tight typography, data-terminal motifs, surgical use of amber accent.
Bloomberg terminal meets editorial print.

## Color System
See Appendix C of sprint doc. Tokens defined in `globals.css` as CSS custom properties.

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#080D1A` | Page background |
| `--bg-secondary` | `#0E1628` | Navbar (scrolled), section band, footer |
| `--bg-card` | `#131D35` | Cards, badges, commendation |
| `--border` | `#1E2D4F` | All dividers |
| `--border-bright` | `#2E4A7A` | Hover borders, active items |
| `--text-primary` | `#E8EDF5` | Headings, primary content |
| `--text-secondary` | `#8A9BBC` | Body text, descriptions |
| `--text-muted` | `#4A5A7A` | Timestamps, metadata |
| `--accent` | `#F59E0B` | Amber — CTAs, numbers, badges |
| `--accent-dim` | `#92610A` | Amber hover/pressed |
| `--highlight` | `#3B82F6` | Links, hover borders |

## Font Stack
- **Display/Headers:** Syne (400, 600, 700, 800)
- **Accent/Numbers:** IBM Plex Mono (400, 500, 600)
- **Body:** Geist (variable)

## Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## Section Order
Hero → ImpactStrip → About → Skills → Experience → Projects → Certifications → Contact
