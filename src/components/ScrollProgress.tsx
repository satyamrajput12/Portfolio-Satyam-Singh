"use client";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-50"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
        background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
      }}
    />
  );
}
