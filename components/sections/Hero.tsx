"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, GitBranch, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-x-hidden pb-12 pt-8 sm:pb-16 sm:pt-12">
      <div className="absolute inset-x-0 top-[-5rem] z-[-1] h-[28rem] bg-[radial-gradient(circle,rgba(59,130,246,0.14),transparent_55%)] blur-3xl" />

      <div className="mx-auto max-w-4xl text-center">
        <div className="relative min-w-0">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.08, duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" }}
            className="mb-6 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-2 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-blue-100 sm:text-xs"
          >
            <Sparkles size={14} className="shrink-0 text-blue-300" aria-hidden="true" />
            Information Science Engineering · Software Development · AI
          </motion.div>

          <h1
            aria-label="Pratheek Rao"
            className="whitespace-nowrap text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[1.02] tracking-[-0.07em] text-white"
          >
            <motion.span
              aria-hidden="true"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.78, ease: "easeOut" }}
              className="inline-block"
            >
              Pratheek{" "}
            </motion.span>
            <motion.span
              aria-hidden="true"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.17,
                duration: shouldReduceMotion ? 0 : 0.78,
                ease: "easeOut",
              }}
              className="inline-block text-gradient"
            >
              Rao
            </motion.span>
          </h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.42, duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-[clamp(1.75rem,3vw,2.25rem)] font-medium leading-tight tracking-[-0.035em] text-white"
          >
            Build. Learn. Explore.
          </motion.p>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.56, duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300/90 sm:text-xl"
          >
            I&apos;m an Information Science Engineering student interested in backend
            development, AI-powered applications, and building practical software.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.7, duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Button href="#projects" className="px-6 py-3">
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href="https://github.com/pratheekrao12" target="_blank" rel="noopener noreferrer" variant="secondary" className="px-6 py-3">
              <GitBranch size={16} aria-hidden="true" />
              GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
            </Button>
          </motion.div>

          <motion.ul
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.84, duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
            className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center text-sm font-medium leading-6 text-slate-300/85 sm:text-base"
          >
            {["Backend Systems", "AI & Data Science", "Web & Mobile", "Problem Solving"].map((focus) => (
              <li
                key={focus}
                className="border-l border-white/15 px-3 first:border-l-0 sm:px-4"
              >
                {focus}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
