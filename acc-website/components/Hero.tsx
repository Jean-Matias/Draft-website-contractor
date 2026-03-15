"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onOpenForm: () => void;
}

export default function Hero({ onOpenForm }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80')",
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/80 via-forest-dark/60 to-forest-dark/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sand font-semibold text-sm tracking-[0.3em] uppercase mb-6"
        >
          Fredericksburg, VA &bull; Since 1999
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6"
        >
          Crafting Outdoor
          <br />
          <span className="text-sand">Living Spaces</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          25+ years of expert concrete craftsmanship. From stunning stamped
          patios to durable driveways, we bring your vision to life with
          precision and pride.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onOpenForm}
            className="bg-sand hover:bg-sand-light text-charcoal font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Get Your Free Estimate
          </button>
          <a
            href="#projects"
            className="border-2 border-white/40 hover:border-white text-white font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/10"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
