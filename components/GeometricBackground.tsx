"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(229, 229, 229, 0.1)";
      ctx.lineWidth = 0.5;

      const size = 60;
      const pattern = [
        [0, 0, size, 0],
        [size, 0, size, size],
        [size, size, 0, size],
        [0, size, 0, 0],
        [0, 0, size, size],
        [size, 0, 0, size],
      ];

      for (let x = 0; x < canvas.width; x += size * 2) {
        for (let y = 0; y < canvas.height; y += size * 2) {
          pattern.forEach(([x1, y1, x2, y2]) => {
            ctx.beginPath();
            ctx.moveTo(x + x1, y + y1);
            ctx.lineTo(x + x2, y + y2);
            ctx.stroke();
          });
        }
      }
    };

    drawPattern();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawPattern();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.03 }}
      />
      
      {/* Animated geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-96 h-96"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-[0.02]">
            <polygon
              points="100,10 190,50 160,150 40,150 10,50"
              fill="none"
              stroke="var(--sacred-green)"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-[0.02]">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="var(--divine-gold)"
              strokeWidth="0.5"
            />
            <polygon
              points="100,20 180,100 100,180 20,100"
              fill="none"
              stroke="var(--divine-gold)"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      </div>
    </>
  );
}