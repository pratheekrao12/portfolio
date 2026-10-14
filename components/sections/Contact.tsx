"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="section-shell py-12 sm:py-16">
      <SectionHeading
        eyebrow="LET'S CONNECT"
        title="Have a project in mind?"
        subtitle="I'm interested in building useful software, exploring new ideas, and collaborating on interesting projects."
        align="center"
      />

      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="flex justify-center"
        >
          <Button href="mailto:pratheekrao11@gmail.com" className="px-6 py-3">
            Email Me
          </Button>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="flex justify-center"
        >
          <Button href="https://github.com/pratheekrao12" target="_blank" rel="noopener noreferrer" variant="secondary" className="px-6 py-3">
            GitHub
          </Button>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="flex justify-center"
        >
          <Button href="https://www.linkedin.com/in/pratheek-rao-ba7150310/" target="_blank" rel="noopener noreferrer" variant="secondary" className="px-6 py-3">
            LinkedIn
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
