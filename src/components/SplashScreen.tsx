"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onDone, 600);
          }, 200);
          return 100;
        }
        return p + 4;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: "#080c14" }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Monogram */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="relative mb-12"
          >
            <div className="w-24 h-24 rounded-2xl gradient-border flex items-center justify-center"
              style={{ background: "rgba(13,20,36,0.8)" }}>
              <span className="font-display text-4xl font-bold"
                style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                SS
              </span>
            </div>
            {/* Orbiting ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{ border: "1px solid rgba(0,212,255,0.3)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-xl font-semibold text-white/80 mb-8 tracking-widest uppercase"
          >
            Satyam Singh
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #00d4ff, #7c3aed)", width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>
          <p className="mt-3 font-mono text-xs text-white/30">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
