"use client";

import { skills } from "@/src/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillPill from "@/components/ui/SkillPill";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="skills" className="border-t border-border bg-bg-secondary/30 py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeader label="// Skills" title="Technical Toolkit" />
        </motion.div>

        <div className="space-y-8">
          {skills.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.1 + ci * 0.1,
                ease: "easeOut",
              }}
              className="flex flex-col gap-3 sm:flex-row sm:items-start"
            >
              <span className="w-40 shrink-0 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-accent pt-2">
                {category.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.15 + ci * 0.1 + si * 0.03,
                      ease: "easeOut",
                    }}
                  >
                    <SkillPill name={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
