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

      <div className="w-full max-w-5xl z-10">
        {/* Section Header */}
        <div className="mb-20 text-center w-full flex flex-col items-center">
          <span className="text-amber font-mono text-xs tracking-wider uppercase block mb-3">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Education <span className="text-amber">Timeline</span>
          </h2>
          <div className="h-[2px] w-20 bg-amber mt-4 rounded-full" />
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {education.map((edu, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div key={edu.id} className="w-full" style={{ perspective: 1000 }}>
                <motion.div
                  whileHover={{
                    y: -10,
                    rotateX: 2.5,
                    rotateY: isEven ? -2.5 : 2.5,
                    boxShadow: "0 22px 45px rgba(232,146,60,0.38), 0 0 20px rgba(232,146,60,0.12)"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 20
                  }}
                  className="group h-full relative rounded-2xl border border-white/10 bg-[#0d0d0f] p-7 md:p-8 flex flex-col justify-between overflow-hidden cursor-default transition-colors duration-200"
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: "0 15px 30px rgba(232,146,60,0.22), 0 0 12px rgba(232,146,60,0.06)"
                  }}
                >
                  {/* Decorative Amber Gradient Accent in top left */}
                  <div
                    className="absolute top-0 left-0 w-24 h-[2px] opacity-40 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to right, #e8923c, transparent)`
                    }}
                  />

                  {/* Top section: Degree, Institution, Period */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-amber/10 border border-amber/20 text-amber shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-amber transition-colors duration-200 leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-white/50 font-medium mt-1">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Metadata block: location & period */}
                    <div className="flex flex-wrap gap-4 text-xs font-mono text-white/40 border-b border-white/5 pb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber/60" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber/60" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-amber/60" />
                        <span className="text-amber font-semibold">{edu.grade}</span>
                      </div>
                    </div>

                    {/* Bullets List */}
                    <ul className="flex flex-col gap-3 mt-2 text-sm text-white/60 leading-relaxed font-sans">
                      {edu.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <Star className="w-3 h-3 text-amber/70 shrink-0 mt-1.5" />
                          <span>{bullet}</span>
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
