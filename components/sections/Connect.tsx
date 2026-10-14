import { ArrowUpRight, GitBranch, Link } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Connect() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(14,23,46,0.8),rgba(18,16,31,0.7),rgba(8,8,13,0.9))] p-8 sm:p-12">
        <SectionHeading
          eyebrow="GitHub / Connect"
          title="BUILD. LEARN. REPEAT."
          subtitle="Most of my learning happens by building. Explore my repositories and see what I’m experimenting with."
          align="center"
        />

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="https://github.com/pratheekrao12" target="_blank" rel="noopener noreferrer" className="px-6 py-3">
            <GitBranch size={16} />
            GitHub
            <ArrowUpRight size={16} />
          </Button>
          <Button href="https://www.linkedin.com/in/pratheek-rao-ba7150310/" target="_blank" rel="noopener noreferrer" variant="secondary" className="px-6 py-3">
            <Link size={16} />
            LinkedIn
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
