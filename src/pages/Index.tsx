import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = sectionsRef.current?.querySelectorAll("[data-animate]");
    sections?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionsRef} className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div data-animate className="opacity-0"><AboutSection /></div>
      <div data-animate className="opacity-0"><SkillsSection /></div>
      <div data-animate className="opacity-0"><ExperienceSection /></div>
      <div data-animate className="opacity-0"><ProjectsSection /></div>
      <div data-animate className="opacity-0"><TechStackSection /></div>
      <div data-animate className="opacity-0"><ContactSection /></div>
      <Footer />
    </div>
  );
};

export default Index;
