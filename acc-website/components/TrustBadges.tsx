"use client";

import { motion } from "framer-motion";

const badges = [
  {
    name: "BBB Accredited",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    name: "Angie Awards",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    name: "Licensed & Insured",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    name: "Free Estimates",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 px-6 bg-surface">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-forest"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={badge.icon}
                  />
                </svg>
              </div>
              <span className="text-charcoal font-semibold text-sm tracking-wide">
                {badge.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
