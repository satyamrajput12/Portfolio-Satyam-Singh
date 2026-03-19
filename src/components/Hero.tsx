"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown, Download } from "lucide-react";
import { resumeData } from "@/data/resume";
import Image from "next/image";

export default function Hero() {
  const { basics } = resumeData;

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <span className="inline-block font-mono text-sm px-3 py-1 rounded-full mb-6"
                style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", color: "#00d4ff" }}>
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4">
              <span className="text-white">{basics.name.split(" ")[0]}</span>
              <br />
              <span className="glow-text" style={{ background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {basics.name.split(" ")[1]}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="font-display text-xl text-white/50 mb-6 tracking-wide">
              {basics.title}
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="font-body text-white/70 text-base leading-relaxed max-w-lg mb-8">
              {basics.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-xl font-display font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", color: "#fff", boxShadow: "0 0 20px rgba(0,212,255,0.25)" }}>
                View Projects
              </button>
              <a href="mailto:satyamkinjer111@gmail.com"
                className="px-6 py-3 rounded-xl font-display font-semibold text-sm transition-all hover:scale-105 glass-hover"
                style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}>
                <Mail size={14} className="inline mr-2" />Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="flex gap-4 items-center">
              <a href={basics.github} target="_blank" rel="noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/60 hover:text-[#00d4ff] transition-colors hover:scale-110">
                <Github size={18} />
              </a>
              <a href={basics.linkedin} target="_blank" rel="noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/60 hover:text-[#00d4ff] transition-colors hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href={`tel:${basics.phone}`}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/60 hover:text-[#00d4ff] transition-colors hover:scale-110">
                <Phone size={18} />
              </a>
              <span className="font-mono text-xs text-white/30 ml-2">{basics.location}</span>
            </motion.div>
          </div>

          {/* Right: Photo + stats */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center gap-6">
            {/* Photo */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden gradient-border"
                style={{ boxShadow: "0 0 60px rgba(0,212,255,0.15)" }}>
                <Image src={basics.photo} alt={basics.name} width={288} height={288}
                  className="object-cover object-top w-full h-full" priority />
              </div>
              {/* Floating badge */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-3 glass px-3 py-2 rounded-xl"
                style={{ border: "1px solid rgba(0,212,255,0.3)" }}>
                <p className="font-mono text-xs text-[#00d4ff]">CS Engineer</p>
              </motion.div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              {[{ n: "3+", l: "Projects" }, { n: "4+", l: "Certs" }, { n: "6+", l: "Skills" }].map((s) => (
                <div key={s.l} className="glass rounded-xl p-3 text-center">
                  <p className="font-display text-xl font-bold" style={{ color: "#00d4ff" }}>{s.n}</p>
                  <p className="font-body text-xs text-white/50">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
          <span className="font-mono text-xs text-white/30">scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={16} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
