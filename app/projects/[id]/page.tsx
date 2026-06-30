import { experience, workExperience } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";
import Image from "next/image";

// Helper to find project from both arrays just in case, but usually in experience
const getProject = (id: string) => {
  return [...experience, ...workExperience].find((p) => p.id === id);
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  // @ts-ignore
  const fullText = project.fullDescription || (project.bullets ? project.bullets.join(" ") : "");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center relative overflow-hidden">
      {/* Background elements to match theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40 z-0" />
      
      {/* Header matching Hero.tsx */}
      <header className="w-full max-w-[85rem] px-4 lg:px-8 flex justify-between items-center z-10 pt-8 pb-4">
        <Link href="/" className="flex items-center gap-2 font-mono tracking-widest text-amber scale-[0.7] origin-left hover:opacity-80 transition-opacity">
          <Cpu className="w-6 h-6" />
          <span className="text-lg">V.A // AI-ENG</span>
        </Link>

        {/* Navigation Links (Glassmorphism Pill) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80 bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-md shadow-2xl shadow-black/50">
          <Link href="/#hero" className="relative hover:text-amber transition-colors group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#experience" className="relative hover:text-amber transition-colors group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#skills" className="relative hover:text-amber transition-colors group">
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#work-experience" className="relative hover:text-amber transition-colors group">
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        
        {/* Spacer to balance layout like Hero.tsx */}
        <div className="w-[100px] hidden md:block"></div>
      </header>

      <div className="w-full max-w-5xl px-6 pt-10 pb-24 z-10">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/#experience"
            className="text-amber/70 hover:text-amber transition-colors inline-flex items-center text-sm font-mono tracking-wide"
          >
            <span className="mr-2">«</span> back
          </Link>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white drop-shadow-md">
            {project.title.split('—')[0].trim()}
          </h1>
          <p className="text-white/60 text-lg font-mono">
            <span className="text-amber">{project.period}</span> <span className="text-white/30 mx-2">•</span> {project.company}
          </p>
        </div>

        {/* Media Placeholder */}
        <div className="w-full aspect-[21/9] bg-[#0d0d0f] rounded-2xl border border-amber/10 mb-12 flex items-center justify-center overflow-hidden relative shadow-[0_20px_50px_rgba(232,146,60,0.05)]">
          {/* @ts-ignore */}
          {project.image ? (
            /* @ts-ignore */
            <Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover opacity-90" />
          ) : (
            <>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
              <p className="text-white/20 font-mono tracking-[0.2em] text-sm relative z-10 uppercase">
                [ Project Media Preview ]
              </p>
            </>
          )}
        </div>

        {/* Description */}
        <div className="mb-16 text-[15px] md:text-lg text-white/70 leading-relaxed font-sans max-w-4xl mx-auto">
          <p>{fullText}</p>
        </div>

        {/* Tech Stack */}
        <div className="text-center mb-16">
          <h3 className="text-xl md:text-2xl font-bold mb-8 text-white">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 rounded border border-white/10 bg-white/[0.03] text-white/70 text-sm font-mono hover:text-amber hover:border-amber/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons matching Hero.tsx style */}
        <div className="flex justify-center gap-4">
          {/* @ts-ignore */}
          {project.sourceLink && (
            <a
              /* @ts-ignore */
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E8923C] hover:bg-[#d07b27] text-black font-semibold px-8 py-3 rounded-xl shadow-lg glow-amber transition-all flex items-center justify-center"
            >
              Source Code
            </a>
          )}
          {/* @ts-ignore */}
          {project.liveLink && (
            <a
              /* @ts-ignore */
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-amber/10 text-amber border border-amber/30 hover:border-amber font-semibold px-8 py-3 rounded-xl shadow-md transition-all flex items-center justify-center"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
