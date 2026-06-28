"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type RevealTone = "lift" | "soft" | "panel" | "line";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  tone?: RevealTone;
};

const variants: Record<RevealTone, Variants> = {
  lift: {
    hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  soft: {
    hidden: { opacity: 0, y: 18, scale: 0.98, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  },
  panel: {
    hidden: { opacity: 0, y: 28, rotateX: 6, filter: "blur(7px)" },
    visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" },
  },
  line: {
    hidden: { opacity: 0, x: -18 },
    visible: { opacity: 1, x: 0 },
  },
};

export function Reveal({ children, className, delay = 0, tone = "lift" }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.24, margin: "0px 0px -96px 0px" }}
      variants={variants[tone]}
      transition={{
        duration: tone === "line" ? 0.45 : 0.72,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
