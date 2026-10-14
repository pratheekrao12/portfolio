import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { CursorGlow } from "@/components/sections/CursorGlow";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <CursorGlow />
      <div className="pointer-events-none fixed inset-0 z-[-2] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),transparent_30%)]" />

      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}