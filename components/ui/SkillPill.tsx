import { cn } from "@/lib/utils";

interface SkillPillProps {
  name: string;
}

export default function SkillPill({ name }: SkillPillProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-md border border-border bg-bg-card px-3 py-1.5",
        "font-body text-[13px] text-text-primary",
        "transition-colors duration-200 hover:border-highlight"
      )}
    >
      {name}
    </span>
  );
}
