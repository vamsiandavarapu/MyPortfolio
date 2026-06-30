"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/lib/data";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Show exactly TripEase, Movie Recommendation, and Airbnb Analysis on the homepage
  const homepageProjects = [experience[0], experience[2], experience[3]];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full py-32 px-6 bg-[#18181c] text-foreground z-20 flex flex-col items-center border-b border-white/5 overflow-hidden"
    >
      {/* Background soft glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber/[0.01] rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="w-full max-w-5xl z-10">
        {/* Section Header */}
        <div className="mb-20 text-center w-full flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Projects <span className="text-amber">Timeline</span>
          </h2>
          <div className="h-[2px] w-20 bg-amber mt-4 rounded-full" />
        </div>

        {/* Timeline Grid Container */}
        <div ref={timelineRef} className="relative w-full">
          {/* Vertical central solid line */}
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-16 w-[4.5px] bg-[#e8923c]/85 -translate-x-1/2 z-0" />

          {/* Dotted end line before the show more button */}
          <div className="absolute left-[18px] md:left-1/2 -bottom-12 h-28 w-0 border-l-[4.5px] border-dashed border-[#e8923c]/80 -translate-x-1/2 z-0" />

          {homepageProjects.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-16 pl-10 md:pl-0 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline center indicator dot */}
                <div 
                  className="absolute left-[18px] md:left-1/2 w-5 h-5 rounded-full bg-white border-[3.5px] border-amber/60 -translate-x-1/2 z-10 transition-transform duration-300 hover:scale-125"
                  style={{ 
                    boxShadow: `0 0 12px rgba(232, 146, 60, 0.4)`
                  }}
                />

                {/* Timeline Project Card */}
                <div className="w-full md:w-[45%] z-10" style={{ perspective: 1000 }}>
                  <Link href={`/projects/${project.id}`} className="block">
                    <motion.div
                    whileHover={{
                      y: -10,
                      rotateX: 3,
                      rotateY: isEven ? -3 : 3,
                      boxShadow: "0 22px 45px rgba(232,146,60,0.35), 0 0 20px rgba(232,146,60,0.15)"
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 600,
                      damping: 20
                    }}
                    className="group relative rounded-2xl border border-white/10 bg-[#0d0d0f] overflow-hidden cursor-default transition-colors duration-200"
                    style={{ 
                      transformStyle: "preserve-3d",
                      boxShadow: "0 15px 30px rgba(232,146,60,0.2), 0 0 12px rgba(232,146,60,0.08)" 
                    }}
                  >
                    {/* Placeholder image container */}
                    <div className="relative w-full aspect-[23/9] bg-gradient-to-br from-[#16161a] to-black flex flex-col items-center justify-center border-b border-white/5 group-hover:from-[#181818] transition-colors duration-300 overflow-hidden">
                      {/* @ts-ignore */}
                      {project.image ? (
                        /* @ts-ignore */
                        <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                      ) : (
                        <>
                          {/* Grid overlay */}
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]" />
                          
                          {/* Placeholder UI indicator */}
                          <span className="text-[10px] font-mono text-white/20 tracking-[0.25em] uppercase border border-white/5 px-3 py-1 rounded bg-black/40 backdrop-blur-sm relative z-10">
                            [ Project Media Preview ]
                          </span>
                        </>
                      )}
                    </div>

                    {/* Card details */}
                    <div className="p-4 flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-semibold" style={{ color: project.color }}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{project.period}</span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-amber transition-colors duration-200">
                        {project.title}
                      </h3>

                      <p className="text-[10px] text-white/40 font-mono tracking-wide uppercase">
                        {project.company}
                      </p>

                      <p className="text-sm text-white/60 leading-relaxed font-sans mt-1 line-clamp-3">
                        {/* @ts-ignore */}
                        {project.shortDescription || (project.bullets && project.bullets[0])}
                      </p>

                      {/* Click/Action pointer at the bottom right */}
                      <div className="flex justify-end text-xs text-white/30 font-mono gap-1 items-center mt-4 border-t border-white/5 pt-2 group-hover:text-amber transition-colors duration-200">
                        <ExternalLink className="w-3 h-3" />
                        <span>View Details</span>
                      </div>
                    </div>
                  </motion.div>
                  </Link>
                </div>

                {/* Empty layout spacer for desktop layout symmetry */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>

        {/* Centered Show More Timeline Button */}
        <div className="w-full flex flex-col items-center mt-12 relative z-20">
          <Link href="/projects" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-amber hover:bg-amber-500 text-black font-semibold text-sm px-7 py-3 rounded-xl shadow-[0_8px_20px_rgba(232,146,60,0.25)] transition-all duration-200"
            >
              Show More
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
