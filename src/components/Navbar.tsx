"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = ["About", "Projects", "Training", "Skills", "Education", "Certifications", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "glass py-3" : "py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-bold"
          style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          SS
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <button key={item} onClick={() => scrollTo(item)}
              className={`font-body text-sm transition-colors hover:text-[#00d4ff] ${active === item ? "text-[#00d4ff]" : "text-white/60"}`}>
              {item}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white/80" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/5 px-6 py-4">
          {NAV.map((item) => (
            <button key={item} onClick={() => scrollTo(item)}
              className="block w-full text-left py-2 text-white/70 hover:text-[#00d4ff] font-body text-sm transition-colors">
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
