"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Brain, Bot, BarChart3, Database, Code2, Settings } from "lucide-react";
import { motion } from "framer-motion";

// Map categories to distinct icons
const iconMap: { [key: string]: React.ComponentType<any> } = {
  "ML / AI Frameworks": Brain,
  "NLP & LLMs Tooling": Bot,
  "Data & Analytics": BarChart3,
  "Database": Database,
  "Languages": Code2,
  "Core CS & Tools": Settings,
};

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full py-32 px-6 bg-black text-foreground z-20 flex flex-col items-center border-b border-white/5 overflow-hidden"
    >
      {/* Background radial spotlight accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber/[0.04] rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="w-full max-w-5xl z-10">
        {/* Section Header */}
        <div className="mb-20 text-left w-full relative">
          <span className="text-amber font-mono text-xs tracking-wider uppercase block mb-3">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Skills & <span className="text-amber">Tech Stack</span>
          </h2>
          <div className="h-[2px] w-20 bg-amber mt-4 rounded-full" />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => {
            const IconComponent = iconMap[category.category] || Settings;
            
            return (
              <motion.div
                key={category.category}
                onMouseMove={handleMouseMove}
                whileHover={{
                  y: -10,
                  borderColor: category.color,
                  boxShadow: `0 30px 60px ${category.glowColor.replace('0.4', '0.12')}, 0 0 20px ${category.glowColor.replace('0.4', '0.08')}`,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 18 
                }}
                className="relative rounded-2xl border border-white/10 bg-[#070707] p-7 flex flex-col justify-between overflow-hidden cursor-default transition-colors duration-200"
                style={{
                  background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.035) 0%, transparent 80%), #070707`
                } as any}
              >
                {/* Visual Accent glow line in top left */}
                <div 
                  className="absolute top-0 left-0 w-24 h-[2px] opacity-40 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to right, ${category.color}, transparent)`
                  }}
                />

                <div>
                  {/* Category Title with unique icon */}
                  <div className="flex items-center gap-3.5 mb-7">
                    <div
                      className="p-2.5 rounded-xl text-black font-semibold shrink-0 shadow-lg shadow-black/40"
                      style={{ 
                        backgroundColor: category.color,
                        boxShadow: `0 6px 15px ${category.glowColor.replace('0.4', '0.15')}`
                      }}
                    >
                      <IconComponent className="w-4.5 h-4.5 text-black" />
                    </div>
                    <h3 className="font-bold text-[17px] tracking-tight text-white select-none">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills Grid (Pills / Badges with Category-colored Dots) */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="flex items-center gap-2 px-3 py-1.5 text-[13.5px] font-mono rounded-lg border border-white/5 bg-white/[0.02] text-white/70 select-none hover:text-white transition-all duration-150"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = category.color;
                          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)";
                        }}
                      >
                        {/* Colored indicator dot */}
                        <span 
                          className="w-1.5 h-1.5 rounded-full shrink-0" 
                          style={{ backgroundColor: category.color }}
                        />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
