"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Wrench, Heart } from "lucide-react";
import { resumeData } from "@/data/resume";

const groups = [
  { key: "languages", label: "Languages", icon: Code2, color: "#00d4ff", items: resumeData.skills.languages },
  { key: "toolsPlatforms", label: "Tools & Platforms", icon: Wrench, color: "#7c3aed", items: resumeData.skills.toolsPlatforms },
  { key: "softSkills", label: "Soft Skills", icon: Heart, color: "#f59e0b", items: resumeData.skills.softSkills },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="font-mono text-sm text-[#00d4ff] mb-2 block">// 03</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">Skills</h2>
          <p className="font-body text-white/50 mb-12">Technical toolkit and professional competencies.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g, gi) => {
            const Icon = g.icon;
            return (
              <motion.div key={g.key} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: gi * 0.1 }}
                className="glass rounded-2xl p-6 glass-hover"
                style={{ boxShadow: `0 0 30px ${g.color}10` }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${g.color}15`, border: `1px solid ${g.color}30` }}>
                    <Icon size={18} style={{ color: g.color }} />
                  </div>
                  <h3 className="font-display font-bold text-white">{g.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <motion.span key={item.name} whileHover={{ scale: 1.05 }}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default"
                      style={{ background: `${g.color}12`, color: g.color, border: `1px solid ${g.color}25` }}>
                      <img src={item.image} alt={item.name} className="w-4 h-4 object-contain rounded-sm" />
                      {item.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
