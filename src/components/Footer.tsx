import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 mt-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/logo/logo-mark.png"
            alt="Mystic Moments"
            width={70}
            height={70}
          />
        </div>

        {/* Brand Name */}
        <h2 className="text-2xl font-serif font-bold">
          Mystic <span className="text-[#C9A24D]">Moments</span>
        </h2>

        {/* Tagline */}
        <p className="mt-3 text-sm text-gray-400">
          Where Every Celebration Feels Magical
        </p>

        {/* Copyright */}
        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Mystic Moments Events. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
