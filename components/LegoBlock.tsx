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
  size = 20, 
  color = "var(--sacred-green)", 
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
      className={`absolute ${className}`}
      style={{
        width: size,
        height: size,
        perspective: "1000px",
      }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(-30deg) rotateY(45deg)",
        }}
        animate={{
          rotateY: [45, 50, 45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* LEGO Block Faces */}
        <div
          className="absolute inset-0 rounded-sm"
          style={{
            background: `linear-gradient(135deg, ${color}33, ${color}66)`,
            border: `2px solid ${color}`,
            backdropFilter: "blur(10px)",
            boxShadow: glowing ? `0 0 30px ${color}88` : `0 2px 10px ${color}33`,
          }}
        />
        
        {/* Top studs */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div
            className="w-3 h-3 rounded-full"
            style={{
              background: color,
              opacity: 0.8,
              boxShadow: `0 -2px 4px ${color}66`,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}