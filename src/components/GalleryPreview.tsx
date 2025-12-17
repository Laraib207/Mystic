"use client";

import { motion } from "framer-motion";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
];

export default function GalleryPreview() {
  return (
    <section className="py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1C1C]">
            Our <span className="text-[#C9A24D]">Gallery</span>
          </h2>
          <p className="mt-4 text-[#5F5F5F] max-w-2xl mx-auto">
            Moments we turned into memories — every picture tells a story.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <img
                src={img}
                alt="Mystic Moments Event"
                className="w-full h-64 object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 rounded-full bg-[#1C1C1C] text-white hover:bg-[#C9A24D] hover:text-black transition">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
