"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Wedding Client",
    text: "Mystic Moments turned our wedding into a dream..",
  },
  {
    name: "Rohit Sharma",
    role: "Corporate Event",
    text: "Every detail was perfect — professional, classy, and delivered on time.",
  },
  {
    name: "Neha Verma",
    role: "Birthday Celebration",
    text: "From décor to event management, everything was flawless..",
  },
];

export default function Testimonials() {
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
            What Our <span className="text-[#C9A24D]">Clients Say</span>
          </h2>
          <p className="mt-4 text-[#5F5F5F] max-w-2xl mx-auto">
            Happy clients are our greatest identity.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-[#5F5F5F] text-sm leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-[#1C1C1C]">
                  {item.name}
                </h4>
                <span className="text-xs text-[#C9A24D]">
                  {item.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
