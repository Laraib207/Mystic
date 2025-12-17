"use client";

import { motion } from "framer-motion";

export default function Hamburger({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="relative w-8 h-8 flex flex-col justify-center items-center md:hidden"
    >
      {/* Top line */}
      <motion.span
        animate={{
          rotate: open ? 45 : 0,
          y: open ? 6 : 0,
        }}
        className="absolute w-7 h-[2px] bg-black"
      />

      {/* Middle line */}
      <motion.span
        animate={{
          opacity: open ? 0 : 1,
        }}
        className="absolute w-7 h-[2px] bg-black"
      />

      {/* Bottom line */}
      <motion.span
        animate={{
          rotate: open ? -45 : 0,
          y: open ? -6 : 0,
        }}
        className="absolute w-7 h-[2px] bg-black"
      />
    </button>
  );
}
