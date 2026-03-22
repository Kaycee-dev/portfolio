"use client";

import { experience } from "@/src/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import TimelineItem from "@/components/ui/TimelineItem";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="experience" className="py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeader label="// Experience" title="Career Timeline" />
        </motion.div>

        <div className="relative">
          {experience.map((role, i) => (
            <motion.div
              key={`${role.company}-${role.period}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.15,
                ease: "easeOut",
              }}
            >
              <TimelineItem
                title={role.title}
                subtitle={role.subtitle}
                company={role.company}
                period={role.period}
                commendation={role.commendation}
                bullets={role.bullets}
                isActive={role.commendation !== null || role.period.includes("Present")}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
