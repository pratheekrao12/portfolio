"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
            delayChildren: 0.04,
            staggerChildren: 0.06,
          },
        },
      }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 8 },
          visible: { opacity: 1, y: 0 },
        }}
        className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-300/80"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 8 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-4 text-base leading-7 text-slate-300/80"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
