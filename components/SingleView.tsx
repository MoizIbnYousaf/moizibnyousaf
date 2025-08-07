"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IslamicFrame from "./IslamicFrame";

export default function SingleView() {
  const [showContent, setShowContent] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);
  

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 800);
    const contentTimer = setTimeout(() => setShowContent(true), 2500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  const arabicLetters = [
    { char: "وَ", delay: 0.3 },
    { char: "أَن", delay: 0.4 },
    { char: "لَّيْسَ", delay: 0.5 },
    { char: "لِلْإِنسَانِ", delay: 0.6 },
    { char: "إِلَّا", delay: 0.7 },
    { char: "مَا", delay: 0.8 },
    { char: "سَعَىٰ", delay: 0.9 },
  ];

  const socialLinks = [
    { name: "X", handle: "@MoizIbnYousaf", url: "https://x.com/MoizIbnYousaf", icon: "𝕏" },
    { name: "GitHub", handle: "moizibnyousaf", url: "https://github.com/moizibnyousaf", icon: "⌘" },
    { name: "LinkedIn", handle: "moizibnyousaf", url: "https://linkedin.com/in/moizibnyousaf", icon: "in" },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("moizibnyousaf@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };


  return (
    <div className="h-screen w-screen flex flex-col relative overflow-hidden">

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-50/5 pointer-events-none" />

      <AnimatePresence mode="wait">
        {!showContent ? (
          // Verse Display
          <motion.div
            key="verse"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="text-center px-4 relative">
              {/* Arabic verse */}
              <motion.div 
                className="mb-8"
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <h1 className="font-arabic text-5xl md:text-7xl lg:text-8xl text-[var(--void)] verse-glow select-none">
                  {arabicLetters.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{
                        opacity: isRevealed ? 1 : 0,
                        y: isRevealed ? 0 : 20,
                        scale: isRevealed ? 1 : 0.8,
                      }}
                      transition={{
                        delay: letter.delay,
                        duration: 0.8,
                        ease: [0.23, 1, 0.32, 1],
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
                transition={{ delay: 2, duration: 0.8 }}
                className="text-[var(--whisper)] text-lg md:text-xl max-w-2xl mx-auto mb-4"
              >
                that man will only have what he has worked towards
              </motion.p>

              {/* Verse reference */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="text-[var(--whisper)] text-sm opacity-60"
              >
                53:39
              </motion.p>
            </div>
          </motion.div>
        ) : (
          // Main Content
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col h-full"
          >
            {/* Header with verse - breathing animation */}
            <motion.header
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="px-8 py-4 border-b border-[var(--soft-gray)]"
            >
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <motion.div 
                  className="font-arabic text-xl md:text-2xl text-[var(--sacred-green)] opacity-70"
                  animate={{ 
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ
                </motion.div>
                <div className="text-sm text-[var(--whisper)]">53:39</div>
              </div>
            </motion.header>

            {/* Main centered content */}
            <div className="flex-1 flex items-center justify-center px-8">
              <IslamicFrame className="w-full max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center max-w-md w-full mx-auto py-12 px-8"
              >
                {/* Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-7xl md:text-8xl font-light text-[var(--void)] mb-3 tracking-tight relative"
                  style={{ fontWeight: 200 }}
                >
                  <motion.span
                    initial={{ clipPath: "inset(100% 0 0 0)" }}
                    animate={{ clipPath: "inset(0 0 0 0)" }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                  >
                    Moiz
                  </motion.span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-[var(--whisper)] text-xl mb-16"
                  style={{ letterSpacing: '0.15em' }}
                >
                  Abdul Moiz Shahzad
                </motion.p>

                {/* Milestones */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="space-y-5 mb-16"
                >
                  <motion.div 
                    className="text-[var(--whisper)] text-lg cursor-default transition-all duration-300"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: hoveredMilestone === 0 ? 5 : 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    onMouseEnter={() => setHoveredMilestone(0)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                    whileHover={{ color: "var(--void)" }}
                  >
                    <motion.span 
                      className="text-[var(--sacred-green)] font-bold inline-block text-2xl"
                      animate={{ 
                        scale: hoveredMilestone === 0 ? 1.2 : 1,
                        rotate: hoveredMilestone === 0 ? [0, -5, 5, 0] : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      14
                    </motion.span>
                    <span className="ml-3">Spoke at TEDx</span>
                  </motion.div>
                  
                  <motion.div 
                    className="text-[var(--whisper)] text-lg cursor-default transition-all duration-300"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: hoveredMilestone === 1 ? 5 : 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    onMouseEnter={() => setHoveredMilestone(1)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                    whileHover={{ color: "var(--void)" }}
                  >
                    <motion.span 
                      className="text-[var(--sacred-green)] font-bold inline-block text-2xl"
                      animate={{ 
                        scale: hoveredMilestone === 1 ? 1.2 : 1,
                        rotate: hoveredMilestone === 1 ? [0, 360] : 0
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      💻
                    </motion.span>
                    <span className="ml-3">Self-taught coder</span>
                  </motion.div>
                  
                  <motion.div 
                    className="text-[var(--whisper)] text-lg cursor-default transition-all duration-300"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: hoveredMilestone === 2 ? 5 : 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    onMouseEnter={() => setHoveredMilestone(2)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                    whileHover={{ color: "var(--void)" }}
                  >
                    <motion.span 
                      className="text-[var(--sacred-green)] font-bold inline-block"
                      animate={{ 
                        scale: hoveredMilestone === 2 ? [1, 1.3, 1.2] : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ 
                        textShadow: hoveredMilestone === 2 ? "0 0 20px rgba(44, 85, 48, 0.5)" : "none"
                      }}
                    >
                      NOW
                    </motion.span>
                    <span className="ml-3">Building ventures</span>
                  </motion.div>
                </motion.div>

                {/* Email with copy functionality */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="mb-10"
                >
                  <button
                    onClick={copyEmail}
                    className="group relative text-lg font-mono text-[var(--sacred-green)] hover:text-[var(--divine-gold)] transition-all duration-300"
                  >
                    <span className="relative">
                      moizibnyousaf@gmail.com
                      {emailCopied && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: -30 }}
                          exit={{ opacity: 0 }}
                          className="absolute left-1/2 transform -translate-x-1/2 text-sm text-[var(--sacred-green)] whitespace-nowrap"
                        >
                          Copied!
                        </motion.span>
                      )}
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--sacred-green)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>
                </motion.div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  className="flex justify-center gap-6 mb-10"
                >
                  {socialLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.4 + i * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative w-12 h-12 rounded-full border border-[var(--soft-gray)] flex items-center justify-center hover:border-[var(--sacred-green)] hover:bg-[var(--sacred-green)] hover:text-white transition-all duration-300 group"
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--sacred-green)] rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                    </motion.a>
                  ))}
                </motion.div>

                {/* TEDx link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=aQSYLruVxeE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--whisper)] hover:text-[var(--sacred-green)] transition-all duration-300 group"
                  >
                    <span className="relative">
                      Watch TEDx Talk
                      <span className="absolute inset-x-0 bottom-0 h-[1px] bg-[var(--sacred-green)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                    <motion.span
                      className="inline-block"
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </a>
                </motion.div>
              </motion.div>
              </IslamicFrame>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}// Force rebuild
