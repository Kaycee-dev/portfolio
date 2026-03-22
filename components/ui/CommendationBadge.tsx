import { Award } from "lucide-react";

interface CommendationBadgeProps {
  title: string;
  body: string;
  issuer: string;
  year: string;
}

export default function CommendationBadge({
  title,
  body,
  issuer,
  year,
}: CommendationBadgeProps) {
  return (
    <div className="my-4 rounded-lg border-l-4 border-accent bg-bg-card p-4">
      <div className="mb-2 flex items-center gap-2">
        <Award size={16} className="text-accent" />
        <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-accent">
          {title}
        </span>
      </div>
      <p className="font-body text-sm leading-relaxed text-text-secondary">
        {body}
      </p>
      <p className="mt-2 text-right font-mono text-[11px] text-text-muted">
        {issuer} · {year}
      </p>
    </div>
  );
}
