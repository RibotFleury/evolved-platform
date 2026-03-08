import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm transition hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}