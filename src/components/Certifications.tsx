"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { resumeData } from "@/data/resume";

const issuerColors: Record<string, string> = {
  "Udemy": "#a435f0",
  "NPTEL": "#f59e0b",
  "Coursera": "#0056d2",
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="font-mono text-sm text-[#00d4ff] mb-2 block">// 05</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">Certifications</h2>
          <p className="font-body text-white/50 mb-12">Professional certificates and credentials.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {resumeData.certifications.map((cert, i) => {
            const color = issuerColors[cert.issuer] || "#00d4ff";
            return (
              <motion.div key={cert.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 glass-hover"
                style={{ boxShadow: `0 0 20px ${color}10` }}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}35` }}>
                    <Award size={18} style={{ color }} />
                  </div>
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-lg glass text-white/50 hover:text-[#00d4ff] transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <div className="w-8 h-8" />
                  )}
                </div>
                <h3 className="font-display font-semibold text-white text-sm leading-tight mb-2">{cert.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2 py-0.5 rounded-md"
                    style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-xs text-white/40 flex items-center gap-1">
                    <Calendar size={10} />{cert.date}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
