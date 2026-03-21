"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the 3D scene so Next.js doesn't try to Server-Side Render WebGL
const ThreeCanvasScene = dynamic(() => import("@/components/ThreeCanvasScene"), { ssr: false });

export default function AnimatedBackground() {
  const [activeSection, setActiveSection] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      setActiveSection(Math.max(0, Math.floor((scrollY + vh / 2) / vh)));
    };
    
    // Check match media for prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted || (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
    return <div className="fixed inset-0 w-full h-full bg-[#080c14]" style={{ zIndex: 0 }} />;
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-[#080c14]" style={{ zIndex: 0, pointerEvents: "none" }}>
      <ThreeCanvasScene activeSection={activeSection} />
    </div>
  );
}
