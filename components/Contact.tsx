"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const socialLinks = [
  {
    name: "X",
    handle: "@MoizIbnYousaf",
    url: "https://x.com/MoizIbnYousaf",
    icon: "𝕏",
  },
  {
    name: "GitHub",
    handle: "moizibnyousaf",
    url: "https://github.com/moizibnyousaf",
    icon: "⌘",
  },
  {
    name: "LinkedIn",
    handle: "Abdul Moiz",
    url: "https://linkedin.com/in/moizibnyousaf",
    icon: "in",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-[60vh] py-20 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl text-[var(--void)] font-light mb-4">
          Connect
        </h2>
        <p className="text-[var(--whisper)] text-lg mb-12">
          Let&apos;s build something meaningful together
        </p>

        {/* Email - Primary CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mb-16"
        >
          <a
            href="mailto:moizibnyousaf@gmail.com"
            className="inline-block text-2xl md:text-3xl text-[var(--void)] hover:text-[var(--sacred-green)] transition-colors duration-300 font-light"
          >
            moizibnyousaf@gmail.com
          </a>
        </motion.div>

        {/* Social links */}
        <div className="flex justify-center gap-8 flex-wrap">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-[var(--soft-gray)] flex items-center justify-center text-xl group-hover:border-[var(--sacred-green)] group-hover:bg-[var(--sacred-green)] group-hover:text-white transition-all duration-300">
                  {link.icon}
                </div>
                <span className="text-sm text-[var(--whisper)] group-hover:text-[var(--void)] transition-colors">
                  {link.handle}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer verse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 pt-20 border-t border-[var(--soft-gray)]"
        >
          <p className="font-arabic text-2xl text-[var(--whisper)] opacity-30 mb-2">
            وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ
          </p>
          <p className="text-sm text-[var(--whisper)] opacity-50">
            Built with faith, code, and purpose
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}