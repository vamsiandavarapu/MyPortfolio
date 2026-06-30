"use client";

import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { Mail, GraduationCap, ArrowUpRight } from "lucide-react";

// Local custom brand icons because installed lucide-react lacks them
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    width="16"
    height="16"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    width="16"
    height="16"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-between items-center py-20 px-6 bg-transparent text-foreground z-20"
    >
      <div className="w-full max-w-4xl mt-12 flex flex-col items-center justify-center">

        {/* Contact CTA */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-amber font-mono text-xs tracking-[0.2em] uppercase mb-4"
          >
            GET IN TOUCH
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8"
          >
            Let&apos;s build the <span className="gradient-text">next model.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base max-w-lg leading-relaxed mb-10 text-balance"
          >
            I am currently seeking AI/ML Engineer and Software Developer roles where I can help train, evaluate, and deploy intelligent software systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <a 
              href="mailto:vamsiandavarapu83096@gmail.com"
              className={buttonVariants({ size: "lg", className: "bg-amber hover:bg-amber-dim text-black font-semibold px-8 glow-amber gap-2" })}
            >
              <Mail className="w-4 h-4" />
              <span>Email Direct</span>
            </a>

            <a
              href="https://linkedin.com/in/vamsi-andavarapu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 gap-2">
                <LinkedinIcon className="w-4 h-4 text-amber" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </Button>
            </a>

            <a
              href="https://github.com/vamsiandavarapu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 gap-2">
                <GithubIcon className="w-4 h-4 text-amber" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="w-full max-w-6xl flex flex-col items-center pt-8 border-t border-white/5 text-xs text-muted-foreground font-mono gap-4 text-center">
        <div>
          &copy; {currentYear} Vamsi Andavarapu Portfolio. All rights reserved.
        </div>
        <div className="flex gap-6">
          <span className="hover:text-amber cursor-pointer transition-colors" onClick={() => handleScrollToTop()}>
            [BACK_TO_TOP]
          </span>
        </div>
      </div>
    </section>
  );
}
