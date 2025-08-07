"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

export default function SingleView() {
  const [showContent, setShowContent] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const backgroundX = useTransform(mouseX, [0, 1000], [0, 50]);
  const backgroundY = useTransform(mouseY, [0, 1000], [0, 50]);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 500);
    const contentTimer = setTimeout(() => setShowContent(true), 3500);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const arabicLetters = [
    { char: "وَ", delay: 0 },
    { char: "أَن", delay: 0.1 },
    { char: "لَّيْسَ", delay: 0.2 },
    { char: "لِلْإِنسَانِ", delay: 0.3 },
    { char: "إِلَّا", delay: 0.4 },
    { char: "مَا", delay: 0.5 },
    { char: "سَعَىٰ", delay: 0.6 },
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
      {/* Islamic Geometric Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="var(--sacred-green)" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="var(--sacred-green)" strokeWidth="0.5"/>
            <path d="M30,30 L70,70 M70,30 L30,70" stroke="var(--sacred-green)" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </motion.div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-50/5 pointer-events-none" />

      <AnimatePresence mode="wait">
        {!showContent ? (
          // Initial verse animation - full screen
          <motion.div
            key="verse"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="text-center px-4">
              {/* Arabic verse with breathing animation */}
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
          </motion.div>
        ) : (
          // Main content - single centered column with enhanced design
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

            {/* Main centered content with golden ratio spacing */}
            <div className="flex-1 flex items-center justify-center px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center max-w-md w-full"
              >
                {/* Name with enhanced typography */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-7xl md:text-8xl font-light text-[var(--void)] mb-3 tracking-tight"
                  style={{ fontWeight: 300 }}
                >
                  Moiz
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-[var(--whisper)] text-xl mb-16"
                  style={{ letterSpacing: '0.05em' }}
                >
                  Abdul Moiz Shahzad
                </motion.p>

                {/* Milestones with golden ratio spacing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="space-y-4 mb-16"
                >
                  <div className="text-[var(--whisper)] text-lg">
                    <span className="text-[var(--sacred-green)] font-bold">14</span> — Spoke at TEDx
                  </div>
                  <div className="text-[var(--whisper)] text-lg">
                    <span className="text-[var(--sacred-green)] font-bold">💻</span> — Self-taught coder
                  </div>
                  <div className="text-[var(--whisper)] text-lg">
                    <span className="text-[var(--sacred-green)] font-bold">NOW</span> — Building ventures
                  </div>
                </motion.div>

                {/* Email with copy functionality */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mb-10"
                >
                  <button
                    onClick={copyEmail}
                    className="group relative text-xl text-[var(--sacred-green)] hover:text-[var(--divine-gold)] transition-all duration-300 hover:tracking-wide"
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

                {/* Social links with magnetic hover effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex justify-center gap-6 mb-10"
                >
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative w-12 h-12 rounded-full border border-[var(--soft-gray)] flex items-center justify-center hover:border-[var(--sacred-green)] hover:bg-[var(--sacred-green)] hover:text-white transition-all duration-300 group"
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--sacred-green)] rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                    </motion.a>
                  ))}
                </motion.div>

                {/* TEDx link with enhanced hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}