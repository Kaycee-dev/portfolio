"use client";

import { certifications, education } from "@/src/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck } from "lucide-react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="certifications" className="py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeader
            label="// Certifications"
            title="Credentials & Education"
          />
        </motion.div>

        {/* Certs grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.1 + i * 0.08,
                ease: "easeOut",
              }}
              className="rounded-lg border border-border bg-bg-card p-4"
            >
              <BadgeCheck size={20} className="mb-2 text-accent" />
              <p className="font-display text-[15px] font-bold text-text-primary">
                {cert.name}
              </p>
              <p className="font-mono text-[11px] text-text-muted">
                {cert.issuer ? `${cert.issuer} · ` : ""}
                {cert.year}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          className="mt-8 rounded-lg border border-border bg-bg-card p-5"
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-accent mb-2">
            Education
          </p>
          <p className="font-display text-base font-bold text-text-primary">
            {education.degree}
          </p>
          <p className="font-mono text-xs text-text-muted">
            {education.class} · {education.institution} · {education.period}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
