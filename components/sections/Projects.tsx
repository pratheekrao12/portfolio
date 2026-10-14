"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  {
    id: "01",
    title: "DinePulse",
    category: "FULL-STACK / AI / RESTAURANT TECHNOLOGY",
    description:
      "An AI-assisted restaurant intelligence and management platform covering customer dining workflows, restaurant operations, inventory management, analytics, and AI-powered assistance.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Google Gemini"],
    badge: null,
    featured: true,
    visual: "analysis",
    github: "https://github.com/pratheekrao12/dinepulse",
    demo: "https://dinepulse-sigma.vercel.app",
  },
  {
    id: "02",
    title: "CareConnect",
    category: "FULL-STACK / MOBILE / EMERGENCY RESPONSE",
    description:
      "A community emergency response and assistance platform with a Flask-based backend/web application and a Flutter mobile client. It supports role-based workflows, SOS reporting, volunteer coordination, and emergency assistance features.",
    tags: ["Python", "Flask", "SQLite", "Flutter", "Dart", "REST APIs"],
    badge: null,
    featured: true,
    visual: "careconnect",
    github: "https://github.com/Springboard-Internship-2026/CareConnect--Community-Emergency-Response---Assistance-Network-with-Mobile-App-July-2026/tree/pratheekrao12",
    demo: undefined,
  },
  {
    id: "03",
    title: "AttendX",
    category: "JAVA / BACKEND / WEB APPLICATION",
    description:
      "A Java and Spring Boot attendance management platform featuring role-based dashboards, student and teacher management, attendance recording, attendance percentage tracking, and reports.",
    tags: ["Java 17", "Spring Boot", "Spring Data JPA", "Spring Security", "Thymeleaf", "H2", "Maven"],
    badge: null,
    featured: true,
    visual: "attendance",
    github: "https://github.com/pratheekrao12/AttendX",
    demo: undefined,
  },
  {
    id: "04",
    title: "CaseMind",
    category: "AI / LEGAL TECHNOLOGY",
    description:
      "An AI-assisted legal case management application developed on the qRaptor platform. It uses an AI Copilot and Data Vault document integration to support legal document workflows and case analysis.",
    tags: ["AI", "Legal Tech", "Workflow", "Case Management", "Data Vault"],
    badge: "Completed",
    featured: false,
    visual: "careconnect",
    github: undefined,
    demo: undefined,
  },
  {
    id: "05",
    title: "MoodFlix AI",
    category: "AI / COMPUTER VISION / RECOMMENDATIONS",
    description:
      "A movie recommendation prototype combining mood-based suggestions, facial emotion detection, TMDB movie information, interactive analytics, and rule-based spoiler detection.",
    tags: ["Python", "Streamlit", "OpenCV", "DeepFace", "Pandas", "Plotly", "TMDB API"],
    badge: "Prototype",
    featured: false,
    visual: "featured",
    github: "https://github.com/pratheekrao12/MoodFlixAI",
    demo: undefined,
  },
  {
    id: "06",
    title: "Smart Voting System",
    category: "ANDROID / MOBILE DEVELOPMENT",
    description:
      "An Android voting workflow prototype featuring voter registration, an approval workflow, election and candidate management, vote recording, and results visualisation.",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Firebase Firestore", "MVVM"],
    badge: "Prototype",
    featured: false,
    visual: "attendance",
    github: "https://github.com/pratheekrao12/SmartVotingSystem",
    demo: undefined,
  },
  {
    id: "07",
    title: "AI-Based Violence Detection",
    category: "AI / COMPUTER VISION",
    description:
      "A computer vision prototype exploring zero-shot scene classification for potentially violent or hazardous scenes, alongside an experimental violence-classification training script.",
    tags: ["Python", "PyTorch", "OpenAI CLIP", "OpenCV", "Streamlit", "TensorFlow/Keras"],
    badge: "Prototype",
    featured: false,
    visual: "featured",
    github: "https://github.com/ninjaaaa18/voilence_detection",
    demo: undefined,
  },
  {
    id: "08",
    title: "RoastMaster-AI",
    category: "CONVERSATIONAL AI / PROMPT ENGINEERING",
    description:
      "A Langflow-based conversational AI prototype that generates playful roasts and comebacks using prompt engineering, an LLM agent workflow, and conversational memory. It supports multiple humor styles with prompt-based safety constraints.",
    tags: ["Langflow", "LLM Agents", "Prompt Engineering", "Conversational Memory", "JSON Workflow"],
    badge: "Prototype",
    featured: false,
    visual: "attendance",
    github: "https://github.com/pratheekrao12/RoastMaster-AI",
    demo: undefined,
  },
  {
    id: "09",
    title: "Agent Commerce Gateway",
    category: "AI AGENTS / BACKEND / AI GOVERNANCE",
    description:
      "A policy-controlled commerce gateway that evaluates purchase requests from simulated shopping agents against spending limits and product-category restrictions. It records authorization decisions and demonstrates retry behavior when purchases are blocked.",
    tags: ["Java 17", "Spring Boot 3", "Maven", "Spring Data JPA", "H2", "Lombok"],
    badge: "In Progress",
    featured: false,
    visual: "featured",
    github: undefined,
    demo: undefined,
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "featured") {
    return (
      <div className="project-visual gradient-blue-violet" style={{ minHeight: 160 }}>
        <div className="project-visual__camera" />
        <div className="project-visual__scan" />
      </div>
    );
  }

  if (type === "careconnect") {
    return (
      <div className="project-visual gradient-cyan-emerald" style={{ minHeight: 160 }}>
        <div className="project-visual__phone" />
        <div className="project-visual__dot-grid" />
      </div>
    );
  }

  if (type === "analysis") {
    return (
      <div className="project-visual gradient-amber-orange" style={{ minHeight: 160 }}>
        <div className="project-visual__bars">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual gradient-violet-fuchsia" style={{ minHeight: 160 }}>
      <div className="project-visual__sheet" />
      <div className="project-visual__mini-card" />
    </div>
  );
}

function getBadgeClasses(badge: string | null) {
  if (badge === "In Progress") {
    return "border-blue-400/30 bg-blue-500/10 text-blue-100";
  }

  if (badge === "Completed") {
    return "border-emerald-400/30 bg-emerald-500/10 text-emerald-100";
  }

  if (badge === "Prototype") {
    return "border-violet-400/30 bg-violet-500/10 text-violet-100";
  }

  return "border-amber-400/30 bg-amber-500/10 text-amber-100";
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const primaryLink = project.github ?? project.demo;

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.06,
        ease: "easeOut",
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      className={`flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border p-5 transition-colors duration-300 hover:border-blue-400/30 sm:p-6 ${
        project.featured
          ? "border-blue-400/20 bg-blue-500/[0.035]"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-xs font-medium tracking-[0.12em] text-slate-400">
              {project.id}
            </span>
            <span className="text-xs font-medium uppercase leading-5 tracking-[0.12em] text-slate-300/80">
              {project.category}
            </span>
          </div>
          <h3 className="mt-3 break-words text-xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-2xl">
            {project.title}
          </h3>
        </div>

        {primaryLink ? (
          <Link
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 rounded-full p-2 text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white"
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight size={18} />
          </Link>
        ) : null}
      </div>

      {project.badge ? (
        <div className="mt-3">
          <Badge className={`${getBadgeClasses(project.badge)} text-xs tracking-[0.08em]`}>
            {project.badge}
          </Badge>
        </div>
      ) : null}

      <p className="mt-4 text-base leading-7 text-slate-300/90 sm:text-lg sm:leading-8">
        {project.description}
      </p>

      <ul className="mt-5 flex min-w-0 flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="inline-flex max-w-full break-words rounded-lg border border-blue-300/15 bg-slate-950/50 px-3 py-1.5 text-sm leading-5 text-slate-200 sm:text-[15px]"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <ProjectVisual type={project.visual} />
        {project.github || project.demo ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.github ? (
              <Button
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5"
              >
                GitHub
              </Button>
            ) : null}
            {project.demo ? (
              <Button
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="px-4 py-2.5"
              >
                Live Demo
              </Button>
            ) : null}
          </div>
        ) : null}
        {project.title === "AI-Based Violence Detection" ? (
          <p className="mt-4 text-sm leading-6 text-amber-100/85">
            Selected as a Star Project for the Vigyaanrang Project Expo.
          </p>
        ) : null}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Selected Work"
        subtitle="A few things I’ve built and worked on."
      />

      <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-5 grid items-stretch gap-5 lg:grid-cols-3">
        {projects.slice(3).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index + 3} />
        ))}
      </div>
    </section>
  );
}
