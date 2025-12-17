"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      {/* Logo Mark */}
      <motion.div
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center w-11 h-11 rounded-full border border-[#C9A24D]"
      >
        <span className="font-serif font-bold text-[#C9A24D] text-lg">
          MM
        </span>
      </motion.div>

      {/* Brand Text */}
      <div className="leading-tight">
        <h1 className="text-xl font-serif font-bold text-[#1C1C1C]">
          Mystic <span className="text-[#C9A24D]">Moments</span>
        </h1>
        <p className="text-[10px] tracking-widest uppercase text-[#5F5F5F]">
          Event Management
        </p>
      </div>
    </div>
  );
}
