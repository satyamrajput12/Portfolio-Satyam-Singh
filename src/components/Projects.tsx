"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { resumeData } from "@/data/resume";

function ProjectCard({ project, index }: { project: (typeof resumeData.projects)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stackColors: Record<string, string> = {
    "React": "#00d4ff", "React.js": "#00d4ff", "Node": "#22c55e", "Node.js": "#22c55e",
    "MongoDB": "#22c55e", "Express.js": "#f59e0b", "PHP": "#7c3aed", "Python": "#f59e0b",
    "HTML": "#f97316", "CSS": "#3b82f6", "JS": "#eab308", "MS SQL": "#ef4444",
    "AudioAPI": "#a855f7", "C++": "#06b6d4",
  };

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass rounded-2xl overflow-hidden glass-hover cursor-pointer"
      onClick={() => setExpanded(!expanded)}
      style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.3)" }}>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {project.featured && (
                <span className="font-mono text-xs px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(0,212,255,0.1)", color: "#00d4ff", border: "1px solid rgba(0,212,255,0.2)" }}>
                  Featured
                </span>
              )}
              <span className="font-mono text-xs text-white/30">{project.dates}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
            <p className="font-body text-sm text-white/50">{project.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg glass text-white/60 hover:text-[#00d4ff] transition-colors"
                onClick={(e) => e.stopPropagation()}>
                <Github size={15} />
              </a>
            )}
            {expanded ? <ChevronUp size={16} className="text-white/40" /> : <ChevronDown size={16} className="text-white/40" />}
          </div>
        </div>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((s) => (
            <span key={s} className="font-mono text-xs px-2 py-0.5 rounded-md"
              style={{ background: `${stackColors[s] || "#64748b"}18`, color: stackColors[s] || "#94a3b8", border: `1px solid ${stackColors[s] || "#64748b"}30` }}>
              {s}
            </span>
          ))}
        </div>

        {/* First bullet always visible */}
        <p className="font-body text-sm text-white/60 leading-relaxed">{project.bullets[0]}</p>

        {/* Expanded bullets */}
        {expanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }} className="mt-3 space-y-2">
            {project.bullets.slice(1).map((b, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-[#00d4ff]/50" />
                <p className="font-body text-sm text-white/60 leading-relaxed">{b}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="font-mono text-sm text-[#00d4ff] mb-2 block">// 01</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">Projects</h2>
          <p className="font-body text-white/50 mb-12 max-w-lg">Building real-world solutions with modern technology stacks.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
