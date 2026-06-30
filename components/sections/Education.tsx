"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap, Calendar, MapPin, Award, Star } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full py-32 px-6 bg-[#18181c] text-foreground z-20 flex flex-col items-center border-b border-white/5 overflow-hidden"
    >
      {/* Background soft glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber/[0.015] rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="w-full max-w-4xl z-10">
        {/* Section Header */}
        <div className="mb-20 text-left w-full flex flex-col items-start">
          <span className="text-amber font-mono text-xs tracking-wider uppercase block mb-3">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Education & <span className="text-amber">Qualifications</span>
          </h2>
          <div className="h-[2px] w-20 bg-amber mt-4 rounded-full" />
        </div>

        {/* Vertical Cards List */}
        <div className="flex flex-col gap-8 w-full">
          {education.map((edu, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div key={edu.id} className="w-full" style={{ perspective: 1000 }}>
                <motion.div
                  initial={{
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    backgroundColor: "rgba(0, 0, 0, 0.4)"
                  }}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(232,146,60,0.4)",
                    backgroundColor: "rgba(7, 7, 7, 1)",
                    boxShadow: "0 20px 40px rgba(232,146,60,0.1)"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 20
                  }}
                  className="group h-full relative rounded-2xl border bg-black/40 backdrop-blur-sm p-7 md:p-8 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-300"
                >
                  {/* Decorative Amber Gradient Accent in top left */}
                  <div
                    className="absolute top-0 left-0 w-24 h-[2px] opacity-20 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(to right, #e8923c, transparent)`
                    }}
                  />

                  <div>
                    <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                      {/* Left Side: Institution and Degree */}
                      <div className="max-w-[70%]">
                        <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-amber">
                          <GraduationCap className="w-4 h-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-snug">
                          {edu.degree}
                        </h3>
                      </div>
                      
                      {/* Right Side: Period, Location, Grade */}
                      <div className="flex flex-col md:items-end gap-1.5 shrink-0">
                        <div className="flex items-center gap-1.5 text-sm text-white/50 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-white/30" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-white/50 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-white/30" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                          Grade: <span className="text-amber ml-1 font-semibold">{edu.grade}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bullets List */}
                    <ul className="space-y-3.5">
                      {edu.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[#e8923c] shadow-[0_0_8px_rgba(232,146,60,0.8)]" />
                          <span className="text-sm text-white/70 leading-relaxed font-sans">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
