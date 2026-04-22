"use client";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className={"reveal " + className}
      style={{ transitionDelay: delay + "ms" }}
    >
      {children}
    </div>
  );
}
