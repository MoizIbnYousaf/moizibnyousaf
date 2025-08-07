"use client";

import { motion } from "framer-motion";

export default function GeometricFrame() {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 2 }}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Large central 8-pointed star */}
      <g transform="translate(400, 300)">
        <motion.path
          d="M 0,-120 L 30,-30 L 120,0 L 30,30 L 0,120 L -30,30 L -120,0 L -30,-30 Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        
        {/* Inner star */}
        <motion.path
          d="M 0,-80 L 20,-20 L 80,0 L 20,20 L 0,80 L -20,20 L -80,0 L -20,-20 Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
        
        {/* Center circle */}
        <motion.circle
          cx="0"
          cy="0"
          r="15"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </g>
      
      {/* Corner stars - smaller */}
      {/* Top left */}
      <g transform="translate(100, 100)">
        <path
          d="M 0,-40 L 10,-10 L 40,0 L 10,10 L 0,40 L -10,10 L -40,0 L -10,-10 Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          opacity="0.5"
        />
      </g>
      
      {/* Top right */}
      <g transform="translate(700, 100)">
        <path
          d="M 0,-40 L 10,-10 L 40,0 L 10,10 L 0,40 L -10,10 L -40,0 L -10,-10 Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          opacity="0.5"
        />
      </g>
      
      {/* Bottom left */}
      <g transform="translate(100, 500)">
        <path
          d="M 0,-40 L 10,-10 L 40,0 L 10,10 L 0,40 L -10,10 L -40,0 L -10,-10 Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          opacity="0.5"
        />
      </g>
      
      {/* Bottom right */}
      <g transform="translate(700, 500)">
        <path
          d="M 0,-40 L 10,-10 L 40,0 L 10,10 L 0,40 L -10,10 L -40,0 L -10,-10 Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          opacity="0.5"
        />
      </g>
      
      {/* Connecting lines */}
      <motion.line
        x1="140" y1="100" x2="660" y2="100"
        stroke="url(#goldGradient)"
        strokeWidth="0.5"
        strokeDasharray="5 10"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
      
      <motion.line
        x1="140" y1="500" x2="660" y2="500"
        stroke="url(#goldGradient)"
        strokeWidth="0.5"
        strokeDasharray="5 10"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
      
      <motion.line
        x1="100" y1="140" x2="100" y2="460"
        stroke="url(#goldGradient)"
        strokeWidth="0.5"
        strokeDasharray="5 10"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
      
      <motion.line
        x1="700" y1="140" x2="700" y2="460"
        stroke="url(#goldGradient)"
        strokeWidth="0.5"
        strokeDasharray="5 10"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
    </motion.svg>
  );
}