import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  target?: string;
  rel?: string;
};

export function Button({
  href,
  children,
  className = "",
  variant = "primary",
  target,
  rel,
}: ButtonProps) {
  const variantClasses = {
    primary:
      "border border-blue-400/40 bg-gradient-to-r from-blue-500/20 to-violet-500/20 text-white shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-300/70 hover:shadow-[0_0_35px_rgba(96,165,250,0.25)]",
    secondary:
      "border border-white/10 bg-white/3 text-white/90 hover:border-white/20 hover:bg-white/5",
    ghost:
      "border border-transparent bg-transparent text-white/75 hover:border-white/10 hover:bg-white/5",
  };

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-[0.02em] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
