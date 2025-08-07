"use client";

import { motion } from "framer-motion";

export default function MihrabFrame() {
  return (
    <>

      {/* Mihrab arch frame */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main mihrab arch */}
        <motion.path
          d="M 300 500 L 300 250 Q 300 150, 400 100 Q 500 150, 500 250 L 500 500"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="3"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Inner decorative arch */}
        <motion.path
          d="M 320 480 L 320 260 Q 320 170, 400 130 Q 480 170, 480 260 L 480 480"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
        


        {/* Base decorative elements */}
        <motion.line
          x1="250" y1="500" x2="550" y2="500"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          opacity="0.3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* Corner flourishes */}
        <motion.path
          d="M 250 500 Q 270 480, 290 500"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        
        <motion.path
          d="M 510 500 Q 530 480, 550 500"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </motion.svg>
    </>
  );
}