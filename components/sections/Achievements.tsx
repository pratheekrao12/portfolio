"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const achievements = [
  {
    organisation: "AttendX",
    title: "First Place — Department-Level Project Recognition",
    description:
      "Recognized with first place at the department level for AttendX, a Java and Spring Boot attendance management platform.",
  },
  {
    organisation: "DinePulse",
    title: "Selected Among the Top 50 Teams",
    description: "DinePulse was selected among the top 50 teams in a hackathon.",
  },
  {
    organisation: "Violence Detection",
    title: "Star Project Selection",
    description:
      "The AI-based violence detection project was selected as a Star Project for the college project showcase.",
  },
  {
    organisation: "Vigyaanrang Project Expo",
    title: "Project Expo Participant",
    description:
      "Participated in the Vigyaanrang Project Expo to present project work.",
  },
];

export function Achievements() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Milestones"
        title="A Few Milestones"
      />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
        className="mt-10 rounded-3xl border border-blue-400/20 bg-blue-500/[0.04] px-6 py-6 sm:px-8 sm:py-7"
      >
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-200/80">
          Academic Performance
        </p>
        <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
          9.28 CGPA
        </h3>
        <p className="mt-2 text-base leading-7 text-slate-300/85 sm:text-lg">
          Current cumulative grade point average.
        </p>
      </motion.div>

      <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
        {achievements.map((item, index) => (
          <motion.li
            key={item.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              delay: shouldReduceMotion ? 0 : index * 0.06,
              ease: "easeOut",
            }}
            className="grid gap-2 py-5 sm:grid-cols-[minmax(12rem,0.8fr)_2fr] sm:gap-8 sm:py-6"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-200/80">
                {item.organisation}
              </p>
              <h3 className="mt-1 text-xl font-semibold leading-snug tracking-[-0.04em] text-white sm:text-2xl">
                {item.title}
              </h3>
            </div>
            <p className="text-base leading-7 text-slate-300/85 sm:text-lg sm:leading-8">
              {item.description}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
