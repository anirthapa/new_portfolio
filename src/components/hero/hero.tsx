"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2 };
    const numParticles = 130;
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(5, 5, 10, 1)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 150;

        if (dist < repelRadius && dist > 0) {
          const force = (repelRadius - dist) / repelRadius;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * 0.5;
          p.vy += Math.sin(angle) * force * 0.5;
        }

        p.vx *= 0.95;
        p.vy *= 0.95;
        p.vx += (Math.random() - 0.5) * 0.1;
        p.vy += (Math.random() - 0.5) * 0.1;

        const maxSpeed = 3;
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(180, 180, 200, 0.7)";
        ctx.fill();

        for (let j = i + 1; j < numParticles; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = 1 - dist / 120;
            ctx.strokeStyle = `rgba(150,150,180,${alpha * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Central Animation Origin Line */}
      <motion.div
        className="relative z-10 w-32 sm:w-48 h-px bg-linear-to-r from-transparent via-[#b4b4c8] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Main Text Section */}
      <motion.div
        className="relative z-10 text-center mt-6 select-none"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.8, ease: "easeOut" }}
      >
        {/* Clean Glitch Text */}
        <h1
          className="relative text-4xl sm:text-5xl md:text-7xl font-bold uppercase text-[#b4b4c8] glitch-text"
          style={{
            fontFamily: "'Syncopate', 'Orbitron', 'Montserrat', sans-serif",
            letterSpacing: "0.04em",
          }}
        >
          <span aria-hidden="true">Anir Jung Thapa</span>
          Anir Jung Thapa
          <span aria-hidden="true">Anir Jung Thapa</span>
        </h1>

        {/* Tagline */}
        <motion.p
          className="text-[#d0d0e0] text-sm sm:text-base md:text-lg font-light tracking-widest mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          Creative Developer | Full-Stack Developer | IT Enthusiast
        </motion.p>

        {/* Short Desc */}
        <motion.p
          className="text-[#9b9bb0] text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-4 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.2 }}
        >
          I craft immersive, high-performance web experiences that blend
          technology, design, and motion into digital art.
        </motion.p>
      </motion.div>

      {/* Subtle scroll hint */}
      <motion.div
        className="absolute bottom-10 text-[#777] text-xs tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.4 }}
      >
        ↓ SCROLL TO EXPLORE
      </motion.div>

      {/* Glitch animation */}
      <style jsx>{`
        .glitch-text {
          position: relative;
          display: inline-block;
          color: #b4b4c8;
          text-shadow: 0 0 6px rgba(180, 180, 200, 0.3);
        }
        .glitch-text span {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0.8;
          animation: glitch 2s infinite;
        }
        .glitch-text span:first-child {
          left: 1px;
          text-shadow: -2px 0 magenta;
          animation-delay: 0.15s;
        }
        .glitch-text span:last-child {
          left: -1px;
          text-shadow: 2px 0 cyan;
          animation-delay: 0.35s;
        }
        @keyframes glitch {
          0% {
            clip-path: inset(80% 0 0 0);
          }
          5% {
            clip-path: inset(10% 0 85% 0);
          }
          10% {
            clip-path: inset(85% 0 5% 0);
          }
          15% {
            clip-path: inset(0 0 80% 0);
          }
          20%,
          100% {
            clip-path: inset(0 0 0 0);
          }
        }
      `}</style>
    </section>
  );
}
