// src/data/portfolio.ts
// SINGLE SOURCE OF TRUTH — all site content lives here.
// To update the site: edit this file. No JSX hunting required.

export const personal = {
  name: "Kelechi Michael Uba",
  title: "Senior Data Engineer · Backend & Fullstack Developer",
  tagline:
    "I build financial data systems that produce results banks can measure.",
  email: "[EMAIL]", // STOP AND ASK if not provided
  phone: "[PHONE]", // STOP AND ASK if not provided
  location: "[CITY, COUNTRY]", // STOP AND ASK if not provided
  linkedin: "[LINKEDIN_URL]",
  github: "https://github.com/Kaycee-dev",
  cvPath: "/cv/Kelechi_Uba_CV.pdf",
};

export const summary = `Data engineer and backend developer with 6+ years designing automated analytics pipelines, regulated financial systems, and data-intensive web applications. At UBA, engineered the Oracle processing engine that directly powered the 5 for 5 Digital Rewards Campaign — generating cumulative interest expense savings exceeding ₦20 billion and earning a formal Management Commendation. Strong track record translating complex business rules into maintainable, high-performance production systems across multi-country banking environments.`;

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
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "PL/SQL"],
  },
  {
    category: "Data & Databases",
    items: [
      "Oracle",
      "PostgreSQL",
      "SQL Server",
      "pandas",
      "cx_Oracle",
      "Power BI",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "pg-boss",
      "Flask",
      "concurrent.futures",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
  },
  {
    category: "Security & Control",
    items: [
      "RBAC",
      "CSRF Protection",
      "MFA Integration",
      "Audit Logging",
      "ISO 27001",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "Docker",
      "Redis",
      "Git",
      "Vercel",
      "AWS",
      "Checkpoint/State Management",
    ],
  },
];

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
];

export const projects = [
  {
    name: "5 for 5 Campaign Analytics Engine",
    tag: "Production · Python · Oracle · Parallel Processing",
    description:
      "Designed and delivered the Oracle data processing engine that powered UBA's 5 for 5 Digital Rewards Campaign from inception. The engine processed multi-million-row transaction tables in parallel 10,000-record chunks (concurrent.futures), with full checkpoint/state management for fault tolerance, PL/SQL analytical queries across UBA's core banking schema, and automated email distribution of results. Directly contributed to ₦20B+ cumulative interest expense savings.",
    tech: [
      "Python",
      "cx_Oracle",
      "PL/SQL",
      "pandas",
      "concurrent.futures",
      "Oracle DB",
    ],
    highlight: "₦20B savings impact",
    commended: true,
  },
  {
    name: "Daily Trial Balance Pipeline",
    tag: "Production · Python · Oracle · Financial Reporting",
    description:
      "End-to-end automated GL-level trial balance reporting system interfacing with Oracle (tbaadm schema). Features chunked data processing, multi-currency FX rate handling with sentinel-value validation, post-run quality assurance analyzer with tieout checks, state/checkpoint management for resumability, and automated XLSX/ZIP artifact generation distributed to the Finance team.",
    tech: [
      "Python",
      "Oracle",
      "openpyxl",
      "pandas",
      "cx_Oracle",
      "Parallel Processing",
    ],
    highlight: "GL-level automation",
    commended: false,
  },
  {
    name: "Internal Data Portal",
    tag: "In Progress · PERN Stack · TypeScript",
    description:
      "Full-stack modular data portal migrating legacy Python/Flask-Oracle reporting and reconciliation workflows into maintainable service-layer and API-driven architecture. Modules include trial balance, daily variance, GL automation, and compliance workflows. Implements RBAC, session management, CSRF protection, rate limiting, and MFA-oriented integration patterns.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    highlight: "PERN + TypeScript",
    commended: false,
  },
];

export const certifications = [
  { name: "ISO 27001 Lead Auditor", issuer: "PECB", year: "2024" },
  { name: "AWS Cloud Computing Practitioner", issuer: "AWS", year: "2023" },
  { name: "Cyber Security Professional", issuer: "", year: "2023" },
  { name: "JavaScript Full Stack Developer", issuer: "", year: "2023" },
  {
    name: "Google Africa Developer Scholarship",
    issuer: "Google / Andela",
    year: "2020",
  },
];

export const education = {
  degree: "B.Sc. (Hons.) Electronic & Computer Engineering",
  class: "Second Class Upper",
  institution: "Lagos State University, Epe",
  period: "Sep 2012 – Dec 2017",
};
