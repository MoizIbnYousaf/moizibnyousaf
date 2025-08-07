"use client";

import { motion } from "framer-motion";

interface LegoBlockProps {
  size?: number;
  color?: string;
  opacity?: number;
  delay?: number;
  className?: string;
  glowing?: boolean;
}

export default function LegoBlock({ 
  size = 40, 
  color = "#2C5530", 
  opacity = 1,
  delay = 0,
  className = "",
  glowing = false
}: LegoBlockProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity }}
      transition={{ delay, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={className}
      style={{
        width: size,
        height: size,
        position: "absolute",
      }}
    >
      {/* Main block body */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${color}88, ${color}CC)`,
          border: `2px solid ${color}`,
          borderRadius: "4px",
          boxShadow: glowing 
            ? `0 0 40px ${color}88, 0 4px 20px rgba(0,0,0,0.2)` 
            : `0 4px 15px rgba(0,0,0,0.1)`,
          position: "relative",
          transform: "rotateX(-20deg) rotateY(25deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Top stud */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: size * 0.3,
            height: size * 0.3,
            borderRadius: "50%",
            background: color,
            boxShadow: `inset 0 2px 4px rgba(0,0,0,0.3)`,
          }}
        />
      </div>
    </motion.div>
  );
}