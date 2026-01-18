"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroVerse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const y = useTransform(scrollY, [0, 400], [0, -50]);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const arabicLetters = [
    { char: "وَ", delay: 0 },
    { char: "أَن", delay: 0.1 },
    { char: "لَّيْسَ", delay: 0.2 },
    { char: "لِلْإِنسَانِ", delay: 0.3 },
    { char: "إِلَّا", delay: 0.4 },
    { char: "مَا", delay: 0.5 },
    { char: "سَعَىٰ", delay: 0.6 },
  ];

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale, y }}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Subtle geometric background */}
      <div className="absolute inset-0 geometric-pattern pointer-events-none" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--sacred-green)] rounded-full opacity-20"
            initial={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`
            }}
            animate={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main verse container */}
      <div className="relative z-10 text-center">
        {/* Arabic verse with animation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isRevealed ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-arabic text-5xl md:text-7xl lg:text-8xl text-[var(--void)] verse-glow select-none">
            {arabicLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ 
                  opacity: isRevealed ? 1 : 0, 
                  y: isRevealed ? 0 : 20,
                  scale: isRevealed ? 1 : 0.8
                }}
                transition={{
                  delay: letter.delay,
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="inline-block mx-1"
              >
                {letter.char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* English translation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-[var(--whisper)] text-lg md:text-xl max-w-2xl mx-auto mb-4"
        >
          that man will only have what he has worked towards
        </motion.p>

        {/* Verse reference */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-[var(--whisper)] text-sm opacity-60"
        >
          53:39
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-breathe">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-[var(--whisper)]"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
}