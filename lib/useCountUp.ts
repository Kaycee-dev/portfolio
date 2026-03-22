"use client";

import { useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function useCountUp(target: number, decimals = 0) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1500, bounce: 0 });
  const display = useTransform(spring, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, target, motionValue]);

  return { ref, display };
}
