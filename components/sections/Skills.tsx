"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "Python", "C/C++", "JavaScript", "SQL"],
  },
  {
    title: "Backend & Web",
    items: ["Spring Boot", "Node.js", "REST APIs", "HTML", "CSS", "Flutter"],
  },
  {
    title: "AI & Data",
    items: ["Pandas", "NumPy", "Scikit-learn", "Data Analysis", "Machine Learning", "Computer Vision"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Jupyter", "MySQL", "Maven"],
  },
];

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Tech Stack"
        subtitle="Technologies I use to build, experiment, and learn."
        align="center"
      />

      <div className="mx-auto mt-8 max-w-5xl divide-y divide-white/10 sm:mt-10">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              delay: shouldReduceMotion ? 0 : index * 0.07,
              ease: "easeOut",
            }}
            className="grid gap-3 py-5 sm:grid-cols-[minmax(10rem,0.8fr)_2fr] sm:gap-8 sm:py-6"
          >
            <h3 className="text-[15px] font-semibold uppercase tracking-[0.12em] text-blue-100/90 sm:text-base">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              {group.items.map((item) => (
                <li key={item} className="max-w-full break-words">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
