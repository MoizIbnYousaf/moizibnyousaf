"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function EffortMeter() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.3, 1]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 h-[300px] w-[2px] z-50 hidden lg:block"
    >
      {/* Background line */}
      <div className="absolute inset-0 bg-[var(--soft-gray)] opacity-30" />
      
      {/* Progress fill */}
      <motion.div
        style={{ height, opacity }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--sacred-green)] to-[var(--divine-gold)]"
      />
      
      {/* Arabic text that appears at 100% */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.95 ? 1 : 0,
          scale: scrollYProgress.get() > 0.95 ? 1 : 0.8
        }}
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
      >
        <span className="font-arabic text-sm text-[var(--sacred-green)]">
          مَا سَعَىٰ
        </span>
      </motion.div>

      {/* Milestone markers */}
      <div className="absolute inset-0">
        {[0.25, 0.5, 0.75].map((position, index) => (
          <motion.div
            key={index}
            style={{ top: `${(1 - position) * 100}%` }}
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--divine-gold)]"
            initial={{ scale: 0 }}
            animate={{ 
              scale: scrollYProgress.get() >= position ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  );
}