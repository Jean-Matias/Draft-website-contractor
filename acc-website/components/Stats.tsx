"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  target: number;
  suffix: string;
  label: string;
  duration?: number;
}

function AnimatedStat({ target, suffix, label, duration = 2 }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-center px-8 py-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
        className="font-display text-5xl md:text-6xl text-white mb-2"
      >
        {count}
        {suffix}
      </motion.div>
      <p className="text-white/70 text-sm tracking-[0.2em] uppercase font-medium">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-forest-dark py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          <AnimatedStat target={25} suffix="+" label="Years Experience" />
          <AnimatedStat target={500} suffix="+" label="Projects Completed" />
          <AnimatedStat target={1} suffix=" Year" label="Warranty on All Work" duration={0.5} />
        </div>
      </div>
    </section>
  );
}
