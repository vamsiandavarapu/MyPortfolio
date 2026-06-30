"use client";

import { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data";
import { ChevronDown, Database, Cpu, ShieldCheck } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const start = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      video.muted = true;
      video.volume = 1;

      video.play().then(() => {
        video.muted = false;
        video.volume = 0;
        let vol = 0;
        const fade = setInterval(() => {
          vol = Math.min(1, vol + 0.2);
          video.volume = vol;
          if (vol >= 1) { clearInterval(fade); setIsMuted(false); }
        }, 25);
      }).catch(() => {});
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("click", start, { once: true });
      section.addEventListener("keydown", start, { once: true });
      section.addEventListener("touchstart", start, { once: true });
    }

    return () => {
      if (section) {
        section.removeEventListener("click", start);
        section.removeEventListener("keydown", start);
        section.removeEventListener("touchstart", start);
      }
    };
  }, []);

  // Pause when hero scrolls out of view, resume when back in view
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!hasStartedRef.current) return; // don't touch video before user starts it
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.1 } // trigger when at least 10% of section is visible
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const unlockAudio = () => {}; // no-op (native listeners handle it)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.volume > 0) { video.volume = 0; setIsMuted(true); }
    else { video.volume = 1; setIsMuted(false); }
  };


  const headline = "Designing Intelligent Systems for Real-World Problems";
  const subtext =
    "Hi, I am Vamsi Andavarapu — an aspiring AI Engineer who loves building real-world projects with AI & ML, RAG pipelines, NLP, and creating impactful digital experiences.";

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      onClick={unlockAudio}
      onMouseMove={handleMouseMove}
      onKeyDown={unlockAudio}
      onTouchStart={unlockAudio}
      onTouchMove={unlockAudio}
      tabIndex={0}
      className="relative w-full min-h-screen flex flex-col justify-between items-center pt-10 pb-20 px-6 overflow-hidden bg-black text-foreground z-20"
    >
      {/* Dark heavy background gradient/grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40 z-0" />
      <div
        className="absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 146, 60, 0.1), transparent 80%)`,
        }}
      />

      {/* Header bar / Spacer */}
      <div className="w-full max-w-[85rem] px-4 lg:px-8 flex justify-between items-center z-10 mb-2 pt-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-lg tracking-widest text-amber scale-[0.7] origin-left"
        >
          <Cpu className="w-6 h-6" />
          <span>V.A // AI-ENG</span>
        </motion.div>

        {/* Navigation Links (Upper Part) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80 bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-md shadow-2xl shadow-black/50"
        >
          <button onClick={() => onScrollToSection("hero")} className="relative hover:text-amber transition-colors group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => onScrollToSection("experience")} className="relative hover:text-amber transition-colors group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => onScrollToSection("skills")} className="relative hover:text-amber transition-colors group">
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => onScrollToSection("work-experience")} className="relative hover:text-amber transition-colors group">
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => onScrollToSection("contact")} className="relative hover:text-amber transition-colors group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber transition-all duration-300 group-hover:w-full"></span>
          </button>
        </motion.div>
        
        {/* Spacer to replace Chat AI and balance layout */}
        <div className="w-[100px] hidden md:block"></div>
      </div>

      {/* Main content layout (Two Column Split) */}
      <div className="w-full max-w-[85rem] px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-2 mb-auto z-10 py-4">
        
        {/* Left column: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left w-full">
          {/* Headline Word Stagger */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight select-none text-left"
          >
            {headline.split(" ").map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className="inline-block mr-3"
              >
                {word === "Intelligent" || word === "Systems" ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed mb-8 text-left max-w-xl text-balance"
          >
            Hi, I am <span className="gradient-text font-bold">Vamsi Andavarapu</span> — an aspiring AI Engineer who loves building real-world projects with AI & ML, RAG pipelines, NLP, and creating impactful digital experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-2 w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="bg-[#E8923C] hover:bg-[#d07b27] text-black font-semibold px-8 rounded-2xl h-12 shadow-lg glow-amber transition-all"
              onClick={() => onScrollToSection("experience")}
            >
              My Projects
            </Button>
            <Button
              size="lg"
              className="bg-transparent hover:bg-amber/10 text-amber border border-amber/30 hover:border-amber font-semibold px-8 rounded-2xl h-12 shadow-md transition-all"
              onClick={() => window.open("https://drive.google.com/file/d/14eb1_cSu04J-DGks6Uws2p6CnuvlbsK3/view?usp=sharing", "_blank")}
            >
              Resume
            </Button>
          </motion.div>

          {/* Social Icons (Down below buttons) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.0 }}
            className="flex items-center gap-5 mt-4"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors" title="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
              </svg>
            </a>
            <a href="https://leetcode.com/u/vamsiandavarapu/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors" title="LeetCode">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a3.758 3.758 0 0 0 .005 5.309l2.21 2.21a3.759 3.759 0 0 0 5.3 0l9.787-9.789a1.378 1.378 0 0 0-1.95-1.95L8.31 15.76a1.005 1.005 0 0 1-1.42 0l-2.21-2.21a1.006 1.006 0 0 1 0-1.42l9.778-9.779A1.377 1.377 0 0 0 13.483 0zm-2.887 7.29a1.377 1.377 0 0 0-1.377 1.377v1.377a1.377 1.377 0 0 0 2.754 0V8.667a1.377 1.377 0 0 0-1.377-1.377z" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right column: Video Player Card (No overlap) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 lg:col-start-8 relative w-[85%] mx-auto lg:mr-0 aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl shadow-amber/5 flex items-center justify-center"
        >
          <video
            ref={videoRef}
            playsInline
            loop
            className="w-full h-full object-cover"
          >
            <source src="/video/everything_is_good_just_math_m.mp4" type="video/mp4" />
          </video>

          {/* Sound Mute/Unmute toggle overlay directly on video */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            onClick={toggleMute}
            className="absolute bottom-4 right-4 p-3 rounded-full border border-white/10 bg-black/70 backdrop-blur-md text-amber cursor-pointer hover:border-amber/50 hover:bg-black/90 transition-all z-30"
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </motion.button>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, delay: 1.2 }}
        className="flex flex-col items-center gap-1 cursor-pointer z-10 mt-8"
        onClick={() => onScrollToSection("about")}
      >
        <span className="text-[10px] tracking-[0.25em] font-mono text-muted-foreground">SCROLL</span>
        <ChevronDown className="w-4 h-4 text-amber" />
      </motion.div>
    </section>
  );
}
