import { GitBranch, Link } from "lucide-react";
import NextLink from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 pb-10 pt-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-center text-sm text-slate-300/80 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="text-base font-semibold tracking-[0.18em] text-white">PRATHEEK RAO</div>
          <p className="mt-1">Built with Next.js, TypeScript & Node.js</p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <NextLink href="https://github.com/pratheekrao12" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition-colors hover:border-blue-400/30 hover:text-white">
            <GitBranch size={16} />
          </NextLink>
          <NextLink href="https://www.linkedin.com/in/pratheek-rao-ba7150310/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition-colors hover:border-blue-400/30 hover:text-white">
            <Link size={16} />
          </NextLink>
        </div>

        <div>© 2026 Pratheek Rao</div>
      </div>
    </footer>
  );
}
