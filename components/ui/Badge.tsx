import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100 ${className}`}
    >
      {children}
    </span>
  );
}
