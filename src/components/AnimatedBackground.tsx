"use client";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (prefersReduced) {
      canvas.style.background = "linear-gradient(135deg, #080c14 0%, #0d1424 50%, #080c14 100%)";
      return;
    }

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const isMobile = w < 768;
    const MAX_PARTICLES = isMobile ? 40 : 100;

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; alpha: number };

    const particles: Particle[] = Array.from({ length: MAX_PARTICLES }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    // gradient mesh points
    const meshPoints = [
      { x: 0.1, y: 0.2, color: "rgba(0,212,255,0.06)" },
      { x: 0.8, y: 0.1, color: "rgba(124,58,237,0.05)" },
      { x: 0.5, y: 0.7, color: "rgba(0,212,255,0.04)" },
      { x: 0.2, y: 0.9, color: "rgba(245,158,11,0.03)" },
      { x: 0.9, y: 0.6, color: "rgba(124,58,237,0.04)" },
    ];

    let animId: number;
    let tick = 0;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);

      // dark bg
      ctx.fillStyle = "#080c14";
      ctx.fillRect(0, 0, w, h);

      // gradient mesh blobs
      meshPoints.forEach((mp) => {
        const gx = mp.x * w + Math.sin(tick * 0.001 + mp.x * 10) * 60;
        const gy = mp.y * h + Math.cos(tick * 0.001 + mp.y * 10) * 40;
        const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, w * 0.35);
        grad.addColorStop(0, mp.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });

      // particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.alpha})`;
        ctx.fill();
      });

      // connecting lines between nearby particles
      const MAX_DIST = isMobile ? 80 : 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      tick++;
      animId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      if (canvas) { canvas.width = w; canvas.height = h; }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: "none" }}
    />
  );
}
