"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Sections
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import WorkExperience from "@/components/sections/WorkExperience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";



export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  // Mouse coordinate ref (avoiding re-renders on mousemove)
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync GSAP scroll trigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 2. Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const sections = ["hero", "about", "experience", "skills", "work-experience", "education", "contact"];
    const triggers: ScrollTrigger[] = [];

    sections.forEach((sectionId) => {
      const trigger = ScrollTrigger.create({
        trigger: `#${sectionId}`,
        start: "top 45%",
        end: "bottom 45%",
        onEnter: () => setActiveSection(sectionId),
        onEnterBack: () => setActiveSection(sectionId),
      });
      triggers.push(trigger);
    });

    // 3. Track mouse coordinates globally for 3D parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      lenis.destroy();
      triggers.forEach((t) => t.kill());
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative bg-[#0D0D0D] min-h-screen text-foreground noise-overlay">
      {/* DOM Interactive Content Layer */}
      <div className="relative z-20">
        <Hero onScrollToSection={handleScrollToSection} />
        <About />
        <Experience />
        <Skills />
        <WorkExperience />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
