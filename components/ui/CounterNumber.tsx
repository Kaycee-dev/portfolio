"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/lib/useCountUp";

interface CounterNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function CounterNumber({
  value,
  prefix,
  suffix,
  decimals = 0,
}: CounterNumberProps) {
  const { ref, display } = useCountUp(value, decimals);

  return (
    <span ref={ref} className="font-mono text-[40px] font-semibold text-accent sm:text-[48px] lg:text-[56px]">
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
