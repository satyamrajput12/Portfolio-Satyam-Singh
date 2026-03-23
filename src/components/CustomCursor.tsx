"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use framer-motion's motion values for performance (no React re-renders on mouse move)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Add a spring physics effect for smooth lagging movement
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show custom cursor on non-touch (desktop) devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements like buttons or links
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  // Hide the default cursor when our custom one is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.cursor = "none";
      
      // Also hide cursor for buttons and links so they don't override the style
      const style = document.createElement("style");
      style.innerHTML = `
        * { cursor: none !important; }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.body.style.cursor = "auto";
        document.head.removeChild(style);
      };
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* The trailing blurred glow layer */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovered ? 80 : 32,
            height: isHovered ? 80 : 32,
            opacity: isHovered ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-full bg-[#ef4444] blur-[15px] pointer-events-none"
        />
      </motion.div>
      
      {/* The sharp inner arrow layer that stays perfectly attached to the real cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100]"
        style={{
          x: cursorX,
          y: cursorY,
          /* Adjust translate so the tip of the arrow is exactly at the cursor point (top-left of the icon roughly) */
          translateX: "-10%",
          translateY: "-10%",
        }}
      >
        <motion.div 
          animate={{
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="text-[#ef4444] drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] pointer-events-none" 
        >
          <MousePointer2 size={20} fill="#ef4444" absoluteStrokeWidth strokeWidth={1} />
        </motion.div>
      </motion.div>
    </>
  );
}
