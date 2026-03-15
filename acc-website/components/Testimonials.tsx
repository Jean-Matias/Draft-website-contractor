"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "American Custom Concrete transformed our backyard into a stunning outdoor retreat. The stamped patio is absolutely beautiful and the quality is top-notch.",
    name: "Sarah M.",
    project: "Stamped Patio & Walkway",
    stars: 5,
  },
  {
    quote:
      "Professional from start to finish. They were on time, on budget, and the new driveway looks incredible. Our neighbors keep asking who did the work!",
    name: "James R.",
    project: "Custom Driveway",
    stars: 5,
  },
  {
    quote:
      "We had a complex retaining wall project and they handled it expertly. Great communication throughout and the finished product exceeded our expectations.",
    name: "Linda K.",
    project: "Retaining Wall & Landscaping",
    stars: 5,
  },
  {
    quote:
      "The fire pit area they built for us has become the favorite spot in our yard. Beautiful craftsmanship and they cleaned up perfectly when done.",
    name: "Mike & Donna T.",
    project: "Fire Pit & Patio",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-sand"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-forest font-semibold text-sm tracking-[0.25em] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative min-h-[280px] flex items-center">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 w-12 h-12 rounded-full bg-surface hover:bg-forest/10 flex items-center justify-center transition-colors -translate-x-2 md:-translate-x-6"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 z-10 w-12 h-12 rounded-full bg-surface hover:bg-forest/10 flex items-center justify-center transition-colors translate-x-2 md:translate-x-6"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full text-center px-12 md:px-16"
            >
              <StarRating count={testimonials[current].stars} />
              <blockquote className="text-xl md:text-2xl text-charcoal leading-relaxed mb-6 font-light italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <p className="font-bold text-charcoal">
                {testimonials[current].name}
              </p>
              <p className="text-gray text-sm">
                {testimonials[current].project}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-forest w-8"
                  : "bg-surface hover:bg-forest/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
