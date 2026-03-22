import { Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  name: string;
  tag: string;
  description: string;
  tech: string[];
  highlight: string | null;
  commended: boolean;
}

export default function ProjectCard({
  name,
  tag,
  description,
  tech,
  highlight,
  commended,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border bg-bg-card p-6 transition-colors",
        commended
          ? "border-accent/30 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
          : "border-border hover:border-border-bright"
      )}
    >
      {/* Header */}
      <div className="mb-3 flex items-start justify-between">
        <p className="font-mono text-[11px] font-medium text-accent">{tag}</p>
        {commended && <Award size={16} className="shrink-0 text-accent" />}
      </div>

      <h3 className="mb-3 font-display text-xl font-bold text-text-primary">
        {name}
      </h3>

      <p className="mb-5 flex-1 font-body text-sm leading-relaxed text-text-secondary">
        {description}
      </p>

      {/* Tech pills */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded border border-border bg-bg-secondary px-2 py-0.5 font-mono text-[11px] text-text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Highlight badge */}
      {highlight && (
        <div className="self-end">
          <span className="rounded bg-accent/10 px-2.5 py-1 font-mono text-[11px] font-medium text-accent">
            {highlight}
          </span>
        </div>
      )}
    </div>
  );
}
