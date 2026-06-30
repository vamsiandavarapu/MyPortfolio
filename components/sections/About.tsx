"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-[70vh] flex flex-col justify-center items-center py-24 px-6 bg-black text-foreground z-20 border-b border-white/5 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-30 z-0" />
      
      {/* Warm Ambient Amber Spotlight Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e8923c]/[0.03] rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="w-full max-w-3xl z-10">
        {/* Floating About Me Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          whileHover={{ 
            y: -18, 
            boxShadow: "0 30px 100px rgba(232,146,60,0.15), 0 0 50px rgba(232,146,60,0.22), 0 0 1px rgba(232,146,60,0.5)",
            borderColor: "rgba(232,146,60,0.95)"
          }}
          className="rounded-2xl border border-amber/40 bg-black/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(232,146,60,0.03)] transition-colors duration-300 cursor-default overflow-hidden"
        >
          {/* Card header */}
          <div className="px-8 pt-8 pb-6 border-b border-amber/20 bg-white/[0.01]">
            <p className="text-xs font-mono text-amber/70 tracking-[0.2em] uppercase mb-2">— Introduction</p>
            <h2 className="text-3xl font-bold tracking-tight text-white">About Me</h2>
          </div>

          {/* Card body */}
          <div className="px-8 py-7 flex flex-col gap-6">
            
            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[15px] text-white/60 leading-relaxed font-sans"
            >
              I am a <span className="text-white font-medium">Computer Science (Data Science)</span> graduate from <span className="text-white font-medium">Nadimpalli Satyanarayana Raju Institute of Technology</span>. My interests lie in <span className="text-amber/90 font-medium">artificial intelligence</span>, <span className="text-amber/90 font-medium">machine learning</span>, <span className="text-amber/90 font-medium">data analytics</span>, <span className="text-amber/90 font-medium">software engineering</span>, and cloud-enabled applications. I enjoy transforming complex problems into practical and scalable solutions through technology.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-[15px] text-white/60 leading-relaxed font-sans"
            >
              I am passionate about building <span className="text-white font-medium">AI-powered applications</span>. As an aspiring AI Engineer, my goal is to translate cutting-edge research into scalable AI systems for industries, enabling real-time insights and intelligent automation.
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="text-[15px] text-white/60 leading-relaxed font-sans"
            >
              Currently focused on developing production-ready systems using <span className="text-white font-medium font-mono text-[14px]">Python</span>, <span className="text-white font-medium">deep learning frameworks</span>, and <span className="text-amber/90 font-medium">Artificial Intelligence</span> — turning raw data into measurable, real-world impact.
            </motion.p>

            {/* Location row */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="flex items-center gap-2 pt-2 text-sm text-white/40 border-t border-white/[0.04]"
            >
              <MapPin className="w-4 h-4 text-amber/70 shrink-0 animate-pulse" />
              <span>Vizianagaram, Andhra Pradesh, India</span>
            </motion.div>
          </div>

          {/* Card footer accent */}
          <div className="h-[2px] bg-gradient-to-r from-amber/50 via-white/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
