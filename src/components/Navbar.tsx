"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const NAV = ["About", "Projects", "Training", "Skills", "Education", "Certifications", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const sections = NAV.map(item => item.toLowerCase());
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section.charAt(0).toUpperCase() + section.slice(1);
          }
        }
      }
      if (window.scrollY < 100) current = "";
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (item: string) => {
    if (pathname !== "/") {
      router.push(`/#${item.toLowerCase()}`);
    } else {
      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const handleHomeClick = () => {
    if (pathname !== "/") {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={handleHomeClick}
          className="font-display text-xl font-bold"
          style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          SS
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          {NAV.map((item) => (
            <button key={item} onClick={() => handleNavClick(item)}
              className={`relative px-3 xl:px-4 py-2 rounded-xl font-body text-sm font-bold transition-all duration-300 ease-out overflow-hidden group
                ${active === item 
                  ? "text-white bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/40 shadow-[0_0_15px_rgba(0,212,255,0.3)]" 
                  : "text-white/70 hover:text-white bg-white/5 border border-white/10 hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/10 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                } hover:-translate-y-1 active:translate-y-0`}
            >
              <span className="relative z-10 tracking-widest uppercase text-xs">{item}</span>
            </button>
          ))}
          <Link href="/resume" className="ml-2 flex items-center gap-2 font-body text-sm font-bold text-white bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] px-5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(124,58,237,0.4)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider text-xs">
              <FileText size={16} /> Resume
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-white/80 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass border-t border-white/5 px-6 py-4 absolute w-full top-full left-0 flex flex-col gap-2">
            {NAV.map((item) => (
              <button key={item} onClick={() => handleNavClick(item)}
                className="block w-full text-left py-2 text-white/70 hover:text-[#00d4ff] font-body text-sm transition-colors">
                {item}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 mt-2">
              <Link href="/resume" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 w-full text-center py-2 font-body text-sm font-semibold text-white bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-lg">
                <FileText size={16} /> View Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
