"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Training() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="training" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="font-mono text-sm text-[#00d4ff] mb-2 block">// 02</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">Training</h2>
          <p className="font-body text-white/50 mb-12">Hands-on professional training & skill development.</p>
        </motion.div>

        {resumeData.training.map((t, i) => (
          <motion.div key={t.organization} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
                  <BookOpen size={20} style={{ color: "#00d4ff" }} />
                </div>
                <div>
                  <a href={t.link} target="_blank" rel="noreferrer"
                    className="font-display text-xl font-bold text-white hover:text-[#00d4ff] transition-colors flex items-center gap-2">
                    {t.organization} <ExternalLink size={14} className="opacity-50" />
                  </a>
                  <p className="font-body text-white/60 text-sm font-semibold">{t.course}</p>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-full self-start"
                style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)" }}>
                {t.dates}
              </span>
            </div>

            <div className="space-y-3 ml-0 md:ml-16">
              {t.bullets.map((b, bi) => (
                <div key={bi} className="flex gap-3">
                  <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#00d4ff]/60" />
                  <p className="font-body text-sm text-white/65 leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
