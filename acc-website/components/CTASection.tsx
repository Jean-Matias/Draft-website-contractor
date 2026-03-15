"use client";

import { motion } from "framer-motion";

interface CTASectionProps {
  onOpenForm: () => void;
}

export default function CTASection({ onOpenForm }: CTASectionProps) {
  return (
    <section id="contact" className="relative py-24 px-6 bg-forest-dark overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Ready to Transform Your
            <br />
            <span className="text-sand">Outdoor Space?</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Get a free, no-obligation estimate from our team. We&apos;ll work with
            you to design the perfect concrete solution for your home.
          </p>
          <button
            onClick={onOpenForm}
            className="bg-sand hover:bg-sand-light text-charcoal font-bold text-lg px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Get Your Free Estimate
          </button>
          <p className="text-white/50 text-sm mt-6">
            Or call us directly at{" "}
            <a
              href="tel:5408455381"
              className="text-sand hover:text-sand-light transition-colors underline"
            >
              (540) 845-5381
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
