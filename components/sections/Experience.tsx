"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const experiences = [
  {
    organisation: "Infosys Springboard",
    role: "Virtual Internship",
    status: "Completed",
    project: "CareConnect",
    description:
      "Worked on a community emergency response and assistance platform with a web/backend application and a Flutter mobile application. The applications communicate through REST APIs.",
    technologies: ["Python", "Flask", "SQLite", "Flutter", "Dart", "REST APIs"],
  },
  {
    organisation: "FlyRank",
    role: "Machine Learning Internship",
    status: "In Progress",
    description:
      "Currently undertaking an AI/ML internship and developing practical experience in the field.",
  },
];

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Experience & Programs"
      />

      <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.organisation}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : index * 0.1,
              ease: "easeOut",
            }}
            className="py-6 sm:py-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <h3 className="text-[22px] font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                  {experience.organisation}
                </h3>
                <p className="mt-1 text-base font-medium leading-7 text-slate-200 sm:text-lg">
                  {experience.role}
                </p>
                {experience.project ? (
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Project: {experience.project}
                  </p>
                ) : null}
              </div>

              <span
                className={`w-fit shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${
                  experience.status === "Completed"
                    ? "border-blue-400/20 bg-blue-500/5 text-blue-100/90"
                    : "border-violet-400/20 bg-violet-500/5 text-violet-100/90"
                }`}
              >
                {experience.status}
              </span>
            </div>

            <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300/85 sm:text-lg sm:leading-8">
              {experience.description}
            </p>

            {experience.technologies ? (
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm leading-6 text-slate-400 sm:text-base">
                {experience.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            ) : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
