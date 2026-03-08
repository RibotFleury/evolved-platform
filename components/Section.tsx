import type { ReactNode } from "react";
import Container from "@/components/Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}