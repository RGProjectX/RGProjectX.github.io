import { ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
}

// Pass-through wrapper. Each section manages its own scroll-reveal animations
// (via ScrollReveal / motion). Wrapping them again here caused a double
// fade-in flicker as both animations played in sequence.
const SectionTransition = ({ children, className = "" }: SectionTransitionProps) =>
  className ? <div className={className}>{children}</div> : <>{children}</>;

export default SectionTransition;
