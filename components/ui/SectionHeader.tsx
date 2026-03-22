interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">
        {label}
      </p>
      <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
