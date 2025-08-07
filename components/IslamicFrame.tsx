"use client";

import { motion } from "framer-motion";

interface IslamicFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function IslamicFrame({ children, className = "" }: IslamicFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Top left corner */}
      <motion.svg
        className="absolute -top-4 -left-4 w-20 h-20 text-[var(--divine-gold)] pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <g fill="none" stroke="currentColor" strokeWidth="1">
          {/* 8-pointed star */}
          <path d="M30 10 L35 20 L45 15 L40 25 L50 30 L40 35 L45 45 L35 40 L30 50 L25 40 L15 45 L20 35 L10 30 L20 25 L15 15 L25 20 Z" />
          {/* Connecting lines */}
          <path d="M50 30 L100 30" strokeDasharray="2 4" opacity="0.3" />
          <path d="M30 50 L30 100" strokeDasharray="2 4" opacity="0.3" />
          {/* Inner detail */}
          <circle cx="30" cy="30" r="5" fill="currentColor" opacity="0.5" />
        </g>
      </motion.svg>

      {/* Top right corner */}
      <motion.svg
        className="absolute -top-4 -right-4 w-20 h-20 text-[var(--divine-gold)] pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M70 10 L75 20 L85 15 L80 25 L90 30 L80 35 L85 45 L75 40 L70 50 L65 40 L55 45 L60 35 L50 30 L60 25 L55 15 L65 20 Z" />
          <path d="M0 30 L50 30" strokeDasharray="2 4" opacity="0.3" />
          <path d="M70 50 L70 100" strokeDasharray="2 4" opacity="0.3" />
          <circle cx="70" cy="30" r="5" fill="currentColor" opacity="0.5" />
        </g>
      </motion.svg>

      {/* Bottom left corner */}
      <motion.svg
        className="absolute -bottom-4 -left-4 w-20 h-20 text-[var(--divine-gold)] pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M30 50 L35 60 L45 55 L40 65 L50 70 L40 75 L45 85 L35 80 L30 90 L25 80 L15 85 L20 75 L10 70 L20 65 L15 55 L25 60 Z" />
          <path d="M50 70 L100 70" strokeDasharray="2 4" opacity="0.3" />
          <path d="M30 0 L30 50" strokeDasharray="2 4" opacity="0.3" />
          <circle cx="30" cy="70" r="5" fill="currentColor" opacity="0.5" />
        </g>
      </motion.svg>

      {/* Bottom right corner */}
      <motion.svg
        className="absolute -bottom-4 -right-4 w-20 h-20 text-[var(--divine-gold)] pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M70 50 L75 60 L85 55 L80 65 L90 70 L80 75 L85 85 L75 80 L70 90 L65 80 L55 85 L60 75 L50 70 L60 65 L55 55 L65 60 Z" />
          <path d="M0 70 L50 70" strokeDasharray="2 4" opacity="0.3" />
          <path d="M70 0 L70 50" strokeDasharray="2 4" opacity="0.3" />
          <circle cx="70" cy="70" r="5" fill="currentColor" opacity="0.5" />
        </g>
      </motion.svg>

      {/* Subtle border frame */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        {/* Top border */}
        <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[var(--divine-gold)] to-transparent opacity-20" />
        
        {/* Bottom border */}
        <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[var(--divine-gold)] to-transparent opacity-20" />
        
        {/* Left border */}
        <div className="absolute left-0 top-12 bottom-12 w-[1px] bg-gradient-to-b from-transparent via-[var(--divine-gold)] to-transparent opacity-20" />
        
        {/* Right border */}
        <div className="absolute right-0 top-12 bottom-12 w-[1px] bg-gradient-to-b from-transparent via-[var(--divine-gold)] to-transparent opacity-20" />
      </motion.div>

      {/* Breathing glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          boxShadow: [
            "inset 0 0 50px rgba(212, 175, 55, 0)",
            "inset 0 0 50px rgba(212, 175, 55, 0.05)",
            "inset 0 0 50px rgba(212, 175, 55, 0)",
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}