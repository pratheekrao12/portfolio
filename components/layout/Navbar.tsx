"use client";

import Link from "next/link";
import { GitBranch, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pb-4 pt-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="glass-panel flex items-center justify-between rounded-full px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6">
          <Link href="#home" className="text-lg font-semibold tracking-[0.25em] text-white">
            PRATHEEK
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link
              href="https://github.com/pratheekrao12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-100"
            >
              <GitBranch size={18} />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {isOpen ? (
          <div className="glass-panel mt-3 rounded-2xl border border-white/10 p-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="https://github.com/pratheekrao12"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-100"
                onClick={() => setIsOpen(false)}
              >
                <GitBranch size={16} />
                GitHub
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
