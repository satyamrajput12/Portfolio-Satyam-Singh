"use client";
import { useState, useCallback } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Training from "@/components/Training";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const onDone = useCallback(() => setSplashDone(true), []);

  return (
    <>
      <SplashScreen onDone={onDone} />
      <AnimatedBackground />
      {splashDone && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="relative" style={{ zIndex: 1 }}>
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Training />
            <Skills />
            <Education />
            <Certifications />
            <Contact />
          </main>
        </motion.div>
      )}
    </>
  );
}
