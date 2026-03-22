"use client";

import { projects } from "@/src/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="projects" className="border-t border-border bg-bg-secondary/30 py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeader label="// Projects" title="Selected Work" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.15,
                ease: "easeOut",
              }}
            >
              <ProjectCard
                name={project.name}
                tag={project.tag}
                description={project.description}
                tech={project.tech}
                highlight={project.highlight}
                commended={project.commended}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
