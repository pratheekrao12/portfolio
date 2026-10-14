"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tags = ["Student", "Developer", "Builder", "Learner"];

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="About"
        title="A developer who likes building things."
        subtitle="I’m an Information Science Engineering student with a practical interest in software development, AI/ML, and data-driven problem solving."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
          className="space-y-6 text-base leading-8 text-slate-300/80"
        >
          <p>
            My work is shaped by learning through building. I like turning ideas into
            working systems, exploring how data and models can support real decisions, and
            shipping solutions that feel useful beyond the demo.
          </p>
          <p>
            I’m comfortable experimenting across web, mobile, backend, and AI workflows,
            and I keep pushing into modern tools and practical problem-solving. Right now,
            I’m focused on web development, AI experimentation, and building projects that
            connect technical thinking with user needs.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: "easeOut",
          }}
        >
          <GlassCard className="p-6 lg:-translate-y-12">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Profile</span>
              <ArrowUpRight className="text-slate-300" size={16} />
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-300/75">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Focus</span>
                <span className="text-white">Software + AI</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Current interest</span>
                <span className="text-white">Modern web</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>CGPA</span>
                <span className="text-white">9.28</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Approach</span>
                <span className="text-white">Build, test, learn</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
