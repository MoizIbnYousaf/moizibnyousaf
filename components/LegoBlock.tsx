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
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${color}22, ${color}44)`,
            border: `1px solid ${color}`,
            backdropFilter: "blur(10px)",
            boxShadow: glowing ? `0 0 20px ${color}44` : "none",
          }}
        />
        
        {/* Top studs */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: color,
              opacity: 0.6,
              boxShadow: `0 -2px 4px ${color}44`,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}