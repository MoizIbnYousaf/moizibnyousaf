"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SingleView() {
  const [showContent, setShowContent] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 500);
    const contentTimer = setTimeout(() => setShowContent(true), 3500);
    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
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

  const socialLinks = [
    { name: "X", handle: "@MoizIbnYousaf", url: "https://x.com/MoizIbnYousaf", icon: "𝕏" },
    { name: "GitHub", handle: "moizibnyousaf", url: "https://github.com/moizibnyousaf", icon: "⌘" },
    { name: "LinkedIn", handle: "moizibnyousaf", url: "https://linkedin.com/in/moizibnyousaf", icon: "in" },
  ];

  return (
    <div className="h-screen w-screen flex flex-col">
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
              {/* Arabic verse */}
              <motion.div className="mb-8">
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
          // Main content - single centered column
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col h-full"
          >
            {/* Header with verse */}
            <motion.header
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="px-8 py-4 border-b border-[var(--soft-gray)]"
            >
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="font-arabic text-xl md:text-2xl text-[var(--void)] opacity-60">
                  وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ
                </div>
                <div className="text-sm text-[var(--whisper)]">53:39</div>
              </div>
            </motion.header>

            {/* Main centered content */}
            <div className="flex-1 flex items-center justify-center px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center max-w-md w-full"
              >
                {/* Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-6xl md:text-7xl font-light text-[var(--void)] mb-2"
                >
                  Moiz
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-[var(--whisper)] text-xl mb-12"
                >
                  Abdul Moiz Shahzad
                </motion.p>

                {/* Milestones */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="space-y-3 mb-12"
                >
                  <div className="text-[var(--whisper)] text-lg">
                    <span className="text-[var(--sacred-green)] font-bold">14</span> — Spoke at TEDx
                  </div>
                  <div className="text-[var(--whisper)] text-lg">
                    <span className="text-[var(--sacred-green)] font-bold">∞</span> — Self-taught coder
                  </div>
                  <div className="text-[var(--whisper)] text-lg">
                    <span className="text-[var(--sacred-green)] font-bold">NOW</span> — Building ventures
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mb-8"
                >
                  <a
                    href="mailto:moizibnyousaf@gmail.com"
                    className="text-xl text-[var(--sacred-green)] hover:text-[var(--divine-gold)] transition-all duration-300 hover:tracking-wide"
                  >
                    moizibnyousaf@gmail.com
                  </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex justify-center gap-6 mb-8"
                >
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full border border-[var(--soft-gray)] flex items-center justify-center hover:border-[var(--sacred-green)] hover:bg-[var(--sacred-green)] hover:text-white transition-all duration-300"
                    >
                      <span className="text-lg">{link.icon}</span>
                    </motion.a>
                  ))}
                </motion.div>

                {/* TEDx link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=aQSYLruVxeE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--whisper)] hover:text-[var(--void)] transition-all duration-300 group"
                  >
                    <span>Watch TEDx Talk</span>
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