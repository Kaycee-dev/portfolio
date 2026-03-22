import CommendationBadge from "@/components/ui/CommendationBadge";

interface Commendation {
  title: string;
  body: string;
  issuer: string;
  year: string;
}

interface TimelineItemProps {
  title: string;
  subtitle: string | null;
  company: string;
  period: string;
  commendation: Commendation | null;
  bullets: string[];
  isActive: boolean;
}

export default function TimelineItem({
  title,
  subtitle,
  company,
  period,
  commendation,
  bullets,
  isActive,
}: TimelineItemProps) {
  return (
    <div className="relative pl-0 md:pl-8 pb-12 last:pb-0">
      {/* Timeline line (hidden on mobile) */}
      <div className="absolute left-0 top-0 bottom-0 hidden w-px bg-border md:block" />

      {/* Timeline node */}
      <div
        className={`absolute left-0 top-1.5 hidden h-3 w-3 -translate-x-[5.5px] rounded-full border-2 md:block ${
          isActive
            ? "border-accent bg-accent"
            : "border-border-bright bg-bg-primary"
        }`}
      />

      {/* Header */}
      <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="font-display text-xl font-bold text-text-primary">
            {title}
          </h3>
          {subtitle && (
            <p className="font-body text-sm italic text-text-secondary">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="mb-3 flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
        <p className="font-mono text-xs text-text-muted">{company}</p>
        <span className="hidden text-text-muted sm:inline">·</span>
        <p className="font-mono text-xs text-text-muted">{period}</p>
      </div>

      {/* Commendation badge */}
      {commendation && (
        <CommendationBadge
          title={commendation.title}
          body={commendation.body}
          issuer={commendation.issuer}
          year={commendation.year}
        />
      )}

      {/* Bullets */}
      <ul className="space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-text-secondary">
            <span className="mt-1.5 shrink-0 text-[8px] text-accent">▪</span>
            <span className="font-body text-[15px] leading-relaxed">
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
