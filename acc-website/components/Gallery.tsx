"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    label: "Stamped Patio",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    label: "Custom Driveway",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    label: "Outdoor Living",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    label: "Retaining Wall",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    label: "Walkway",
  },
  {
    src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    label: "Fire Pit Area",
  },
];

function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden select-none">
      {/* After Image (bottom layer) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')",
        }}
      />
      {/* Before Image (top layer, clipped) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&q=80')",
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
        }}
      />
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-charcoal/70 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-forest/70 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
        After
      </div>
      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
      {/* Invisible Range Input */}
      <input
        type="range"
        min={0}
        max={100}
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="projects" className="py-24 px-6 bg-stone">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-forest font-semibold text-sm tracking-[0.25em] uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Featured Projects
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-lg">
            See the quality and craftsmanship that has earned us the trust of
            hundreds of homeowners across Fredericksburg.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-semibold text-lg">
                  {project.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl text-charcoal text-center mb-6">
            See the Transformation
          </h3>
          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
