"use client";

import { summary, education, personal } from "@/src/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="about" className="py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeader label="// About" title="Background" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Pull-quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <blockquote className="border-l-4 border-accent pl-6">
              <p className="font-display text-xl leading-relaxed text-text-primary sm:text-2xl md:text-[28px]">
                I build financial data systems that produce results banks can measure.
              </p>
            </blockquote>
          </motion.div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="font-body text-[15px] leading-relaxed text-text-secondary">
              {summary}
            </p>

            {/* Education */}
            <div className="flex items-start gap-3 rounded-lg border border-border bg-bg-card/50 p-4">
              <GraduationCap size={20} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="font-body text-sm font-medium text-text-primary">
                  {education.degree}
                </p>
                <p className="font-mono text-xs text-text-muted">
                  {education.class} · {education.institution} · {education.period}
                </p>
              </div>
            </div>

            <a
              href={personal.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex font-body text-sm font-medium text-highlight transition-colors hover:text-accent"
            >
              Full résumé ↗
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
