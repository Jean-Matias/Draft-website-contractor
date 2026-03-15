"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    name: "Stamped Concrete",
    description:
      "Custom patterns and colors that mimic natural stone, brick, or wood at a fraction of the cost.",
  },
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4",
    name: "Driveways",
    description:
      "Durable, attractive driveways built to withstand Virginia weather and heavy daily use.",
  },
  {
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z",
    name: "Patios & Walkways",
    description:
      "Beautiful outdoor living areas designed for entertaining, relaxation, and lasting enjoyment.",
  },
  {
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z",
    name: "Retaining Walls",
    description:
      "Engineered walls that prevent erosion, add tiered landscaping, and enhance curb appeal.",
  },
  {
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
    name: "Fire Pits & Fireplaces",
    description:
      "Custom-built fire features that create a warm gathering place for family and friends.",
  },
  {
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    name: "Pavers & Flagstone",
    description:
      "Artfully installed natural stone and paver systems for timeless elegance and durability.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-forest font-semibold text-sm tracking-[0.25em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Our Services
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-lg">
            From concept to completion, we deliver exceptional concrete work
            tailored to your property and lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-stone border border-surface hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-forest/10 flex items-center justify-center mb-5 group-hover:bg-forest/20 transition-colors">
                <svg
                  className="w-7 h-7 text-forest"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={service.icon}
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-charcoal mb-3">
                {service.name}
              </h3>
              <p className="text-gray leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
