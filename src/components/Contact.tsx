"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { basics } = resumeData;

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="font-mono text-sm text-[#00d4ff] mb-2 block">// 06</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">Contact</h2>
          <p className="font-body text-white/50 mb-12">Let's connect and build something great together.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: CTA card */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-8"
            style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.05))", boxShadow: "0 0 40px rgba(0,212,255,0.08)" }}>
            <h3 className="font-display text-2xl font-bold text-white mb-3">Open to Opportunities</h3>
            <p className="font-body text-white/60 mb-6 leading-relaxed">
              I'm actively looking for internship and full-time roles in software development. Feel free to reach out!
            </p>
            <a href={`mailto:${basics.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-sm transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", color: "#fff" }}>
              <Mail size={16} /> Send Email <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* Right: Contact details */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: basics.email, href: `mailto:${basics.email}` },
              { icon: Phone, label: "Phone", value: basics.phone, href: `tel:${basics.phone}` },
              { icon: Github, label: "GitHub", value: "satyamrajput12", href: basics.github },
              { icon: Linkedin, label: "LinkedIn", value: "satyam-singh21", href: basics.linkedin },
              { icon: MapPin, label: "Location", value: basics.location, href: null },
            ].map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-center gap-4 glass rounded-xl p-4 glass-hover transition-all">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
                    <Icon size={16} style={{ color: "#00d4ff" }} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-white/40">{item.label}</p>
                    <p className="font-body text-sm text-white/80">{item.value}</p>
                  </div>
                  {item.href && <ArrowUpRight size={14} className="ml-auto text-white/20" />}
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="block">{inner}</a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/30">© 2025 Satyam Singh. Built with Next.js & Framer Motion.</p>
          <p className="font-mono text-xs text-white/20">CS Engineer · LPU · India</p>
        </div>
      </div>
    </section>
  );
}
