# Decisions Log — Portfolio Sprint

## D-001 — Next.js 16 Instead of 15
- Date: 2026-03-22
- Phase / Checkpoint: Phase 0 — Initialization
- Options considered:
  1. Downgrade to Next.js 15 as specified in sprint doc
  2. Proceed with Next.js 16.2.1 (already scaffolded and installed)
- Decision made: Proceed with Next.js 16.2.1
- Rationale: Next.js 16 is the current stable release. The scaffold was created with it. Downgrading would add risk with no benefit. Key difference: async request APIs (params, headers, cookies) are mandatory — this affects route handlers but is straightforward to accommodate.
- Visual / UX impact: None
- Human approval: Approved (Gate A, 2026-03-22)
- Notes: Sprint doc locked decision says "Next.js 15 (App Router)." This delta is documented per the Assumption Override Rule in Section 0. Turbopack is now the default bundler.
