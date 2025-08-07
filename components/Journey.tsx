"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const journeyMilestones = [
  {
    id: "tedx",
    age: "14",
    title: "I stood before hundreds to speak of purpose",
    description: "TEDx speaker on financial literacy and entrepreneurship",
    link: "https://www.youtube.com/watch?v=aQSYLruVxeE",
    icon: "🎤",
  },
  {
    id: "code",
    age: "∞",
    title: "Through syntax, I found scripture",
    description: "Self-taught programming as a form of worship, where every function is a prayer",
    icon: "💻",
  },
  {
    id: "business",
    age: "NOW",
    title: "In business, I found purpose",
    description: "Building ethical ventures guided by Islamic principles",
    icon: "🌱",
  },
];

function JourneyCard({ milestone, index }: { milestone: typeof journeyMilestones[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.23, 1, 0.32, 1]
      }}
      className="relative group"
    >
      {/* Connection line */}
      {index < journeyMilestones.length - 1 && (
        <div className="absolute left-8 top-20 w-0.5 h-40 bg-gradient-to-b from-[var(--soft-gray)] to-transparent" />
      )}

      <div className="flex gap-6 items-start">
        {/* Age/Time indicator */}
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border border-[var(--soft-gray)] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
          {milestone.icon}
        </div>

        {/* Content */}
        <div className="flex-1 pb-20">
          <span className="text-[var(--sacred-green)] text-sm font-bold mb-2 block">
            {milestone.age}
          </span>
          <h3 className="text-2xl md:text-3xl text-[var(--void)] mb-3 font-light">
            {milestone.title}
          </h3>
          <p className="text-[var(--whisper)] text-lg leading-relaxed">
            {milestone.description}
          </p>
          {milestone.link && (
            <motion.a
              href={milestone.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[var(--sacred-green)] hover:text-[var(--divine-gold)] transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Watch →
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="min-h-screen py-20 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl text-[var(--void)] font-light mb-4">
          The Journey
        </h2>
        <p className="text-[var(--whisper)] text-lg">
          Each step, a conscious effort
        </p>
      </motion.div>

      {/* Journey cards */}
      <div className="space-y-8">
        {journeyMilestones.map((milestone, index) => (
          <JourneyCard key={milestone.id} milestone={milestone} index={index} />
        ))}
      </div>

      {/* Current work section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-32 text-center"
      >
        <h3 className="text-3xl md:text-4xl text-[var(--void)] font-light mb-8">
          Current Work
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Project cards */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 border border-[var(--soft-gray)] rounded-lg hover:border-[var(--sacred-green)] transition-colors duration-300"
          >
            <div className="text-3xl mb-4">🕌</div>
            <h4 className="text-xl mb-2">Sadaqah Code</h4>
            <p className="text-[var(--whisper)] text-sm">
              Open source contributions as continuous charity
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 border border-[var(--soft-gray)] rounded-lg hover:border-[var(--sacred-green)] transition-colors duration-300"
          >
            <div className="text-3xl mb-4">📱</div>
            <h4 className="text-xl mb-2">Digital Ventures</h4>
            <p className="text-[var(--whisper)] text-sm">
              Building ethical technology solutions
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 border border-[var(--soft-gray)] rounded-lg hover:border-[var(--sacred-green)] transition-colors duration-300"
          >
            <div className="text-3xl mb-4">✍️</div>
            <h4 className="text-xl mb-2">Writing</h4>
            <p className="text-[var(--whisper)] text-sm">
              Sharing thoughts on faith, code, and purpose
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}