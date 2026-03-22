"use client";

import { impactNumbers } from "@/src/data/portfolio";
import CounterNumber from "@/components/ui/CounterNumber";

export default function ImpactStrip() {
  return (
    <section className="border-y border-border bg-bg-secondary">
      <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
        {impactNumbers.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-1.5 px-3 py-8 text-center sm:gap-2 sm:px-4 sm:py-10 ${
              i < impactNumbers.length - 1
                ? "lg:border-r lg:border-border"
                : ""
            } ${i < 2 ? "border-b border-border lg:border-b-0" : ""}`}
          >
            <CounterNumber
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
            />
            <p className="font-body text-xs font-medium uppercase tracking-wider text-text-primary sm:text-sm">
              {stat.label}
            </p>
            <p className="font-mono text-[11px] text-text-muted">
              {stat.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
