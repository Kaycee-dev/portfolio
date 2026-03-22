"use client";

import { personal } from "@/src/data/portfolio";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const codeSnippet = `# 5for5_campaign_engine.py
def process_chunk(acid_list, month_date):
    """
    ₦20B in cumulative savings.
    One parallel chunk at a time.
    """
    with cx_Oracle.connect(TB_DB_CONNECTION) as conn:
        results = execute_analytical_query(
            conn, acid_list, month_date
        )
    return aggregate_by_sbu(results)`;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          opacity: 0.3,
        }}
      />
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,158,11,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-24 sm:py-32">
        {/* Left content */}
        <div className="max-w-2xl">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-[13px] text-accent mb-5"
          >
            {"// data.engineer · backend.dev"}
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl md:text-6xl lg:text-[80px] lg:leading-[1.05]"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-3 font-body text-lg text-text-secondary sm:text-xl sm:mt-4"
          >
            {personal.title}
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-1.5 font-body text-base italic text-text-secondary sm:text-lg sm:mt-2"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
          >
            <a
              href={personal.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-body text-sm font-medium text-bg-primary transition-colors hover:bg-accent-dim"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-body text-sm font-medium text-text-primary transition-colors hover:border-border-bright hover:text-accent"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Right decorative code block — desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hidden lg:block"
        >
          <div className="relative w-[380px] rounded-lg border border-border bg-bg-card/60 p-5 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
              <span className="ml-3 font-mono text-[10px] text-text-muted">
                5for5_campaign_engine.py
              </span>
            </div>
            <pre className="font-mono text-[12px] leading-relaxed text-text-secondary/70 select-none">
              {codeSnippet}
            </pre>
            <span className="inline-block h-4 w-1.5 animate-pulse bg-accent/60" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to content">
          <ChevronDown size={24} className="animate-bounce text-text-muted" />
        </a>
      </motion.div>
    </section>
  );
}
