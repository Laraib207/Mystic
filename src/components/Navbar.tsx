
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Lock body scroll when menu open
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "unset";
//   }, [open]);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Gallery", href: "/gallery" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           scrolled || open
//             ? "bg-black/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] py-3"
//             : "bg-black/40 backdrop-blur-lg py-4"
//         }`}
//       >
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between gap-6">
//             {/* LOGO TEXT */}
//             <Link
//               href="/"
//               className="relative z-50 flex items-center group select-none"
//             >
//               <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
//                 <p className="text-[11px] tracking-[0.28em] uppercase text-[#C9A24D]/80">
//                   Event Curators
//                 </p>
//                 <p className="text-xl sm:text-2xl -mt-1 font-serif text-white">
//                   Mystic{" "}
//                   <span className="text-[#C9A24D] drop-shadow-[0_0_16px_rgba(201,162,77,0.65)]">
//                     Moments
//                   </span>
//                 </p>
//               </div>
//               <span className="absolute -inset-3 rounded-full bg-[#C9A24D]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
//             </Link>

//             {/* DESKTOP NAV */}
//             <div className="hidden lg:flex items-center gap-10">
//               <ul className="flex items-center gap-8 xl:gap-10 text-sm font-medium">
//                 {navLinks.map((link) => (
//                   <li key={link.href} className="relative">
//                     <Link
//                       href={link.href}
//                       className="relative text-[13px] tracking-wide text-slate-100/80 hover:text-[#C9A24D] transition-colors duration-300 group"
//                     >
//                       {link.name}
//                       <span className="pointer-events-none absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-[#C9A24D] via-amber-400 to-white group-hover:w-full transition-all duration-300" />
//                     </Link>
//                   </li>
//                 ))}
//               </ul>

//               {/* DESKTOP CTA */}
//               <button className="group relative inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/60 bg-[#C9A24D]/90 px-6 py-2 text-xs font-semibold tracking-wide text-black shadow-[0_0_25px_rgba(201,162,77,0.55)] transition-all duration-300 hover:bg-[#F5E3B5] hover:shadow-[0_0_40px_rgba(201,162,77,0.85)]">
//                 <span>Book Event</span>
//                 <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[10px]">
//                   →
//                 </span>
//                 <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#C9A24D] via-white/30 to-[#C9A24D] opacity-0 blur-xl group-hover:opacity-100" />
//               </button>
//             </div>

//             {/* MOBILE HAMBURGER */}
//             <button
//               onClick={() => setOpen((p) => !p)}
//               className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
//               aria-label="Toggle navigation"
//             >
//               <span
//                 className={`h-[2px] w-6 rounded-full bg-[#F5E3B5] transition-all duration-300 ${
//                   open ? "translate-y-[6px] rotate-45" : ""
//                 }`}
//               />
//               <span
//                 className={`h-[2px] w-6 rounded-full bg-[#F5E3B5] transition-all duration-300 ${
//                   open ? "opacity-0" : ""
//                 }`}
//               />
//               <span
//                 className={`h-[2px] w-6 rounded-full bg-[#F5E3B5] transition-all duration-300 ${
//                   open ? "-translate-y-[6px] -rotate-45" : ""
//                 }`}
//               />
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* MOBILE MENU OVERLAY */}
//       <div
//         className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
//           open ? "visible opacity-100" : "invisible opacity-0"
//         }`}
//       >
//         {/* Backdrop */}
//         <div
//           className={`absolute inset-0 bg-gradient-to-br from-black/95 via-slate-900/95 to-black/95 backdrop-blur-2xl transition-opacity duration-500 ${
//             open ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setOpen(false)}
//         />

//         {/* Menu content */}
//         <div
//           className={`relative h-full flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
//             open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
//           }`}
//         >
//           <ul className="flex flex-col items-center gap-6 mb-6">
//             {navLinks.map((link, i) => (
//               <li
//                 key={link.href}
//                 className={`transition-all duration-500 ${
//                   open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
//                 }`}
//                 style={{ transitionDelay: `${i * 80}ms` }}
//               >
//                 <Link
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className="text-2xl sm:text-3xl font-light tracking-wide text-slate-100 hover:text-[#C9A24D] transition-colors"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile CTA */}
//           <button
//             onClick={() => setOpen(false)}
//             className="group relative inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/70 bg-[#C9A24D] px-10 py-3 text-sm font-semibold tracking-wide text-black shadow-[0_0_30px_rgba(201,162,77,0.8)] transition-all duration-300 hover:bg-[#F5E3B5]"
//           >
//             <span>Book Event</span>
//             <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[10px]">
//               →
//             </span>
//             <span className="absolute inset-0 -z-10 rounded-full bg-[#C9A24D]/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
//           </button>

//           {/* Decorative circles */}
//           <div className="pointer-events-none absolute top-16 left-10 h-28 w-28 rounded-full bg-[#C9A24D]/25 blur-3xl" />
//           <div className="pointer-events-none absolute bottom-10 right-8 h-32 w-32 rounded-full bg-purple-500/25 blur-3xl" />
//         </div>
//       </div>

//       {/* Spacer so content not hidden */}
//       <div className="h-20" />
//     </>
//   );
// }






// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "unset";
//   }, [open]);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Gallery", href: "/gallery" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           scrolled || open
//             ? "bg-black/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] py-3"
//             : "bg-black/70 backdrop-blur-lg py-4"
//         }`}
//       >
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between gap-6">
//             {/* LOGO TEXT */}
//             <Link
//               href="/logo/logo-mark.png"
//               className="relative z-50 flex items-center group select-none"
//             >
//               <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md">
//                 <p className="text-[10px] sm:text-[11px] tracking-[0.26em] uppercase text-white/70">
//                   Luxury Event Curators
//                 </p>
//                 <p className="text-[20px] sm:text-[22px] md:text-[24px] -mt-0.5 font-serif text-white">
//                   Mystic{" "}
//                   <span className="text-[#C9A24D] drop-shadow-[0_0_14px_rgba(201,162,77,0.8)]">
//                     Moments
//                   </span>
//                 </p>
//               </div>
//               <span className="absolute -inset-3 rounded-full bg-[#C9A24D]/18 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
//             </Link>

//             {/* DESKTOP NAV */}
//             <div className="hidden lg:flex items-center gap-10">
//               <ul className="flex items-center gap-8 xl:gap-10 text-[13px] font-medium">
//                 {navLinks.map((link) => (
//                   <li key={link.href} className="relative">
//                     <Link
//                       href={link.href}
//                       className="relative text-white/85 hover:text-white tracking-[0.14em] uppercase transition-colors duration-300 group"
//                     >
//                       {link.name}
//                       <span className="pointer-events-none absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-[#C9A24D] via-amber-200 to-white group-hover:w-full transition-all duration-300" />
//                     </Link>
//                   </li>
//                 ))}
//               </ul>

//               {/* DESKTOP CTA */}
//               <button className="group relative inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/80 bg-[#C9A24D]/95 px-7 py-2.5 text-[12px] font-semibold tracking-[0.18em] text-black shadow-[0_0_28px_rgba(201,162,77,0.8)] transition-all duration-300 hover:bg-[#F5E3B5] hover:shadow-[0_0_40px_rgba(201,162,77,1)]">
//                 <span>BOOK EVENT</span>
//                 <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[10px]">
//                   →
//                 </span>
//                 <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#C9A24D] via-white/40 to-[#C9A24D] opacity-0 blur-xl group-hover:opacity-100" />
//               </button>
//             </div>

//             {/* MOBILE TOGGLE */}
//             <button
//               onClick={() => setOpen((v) => !v)}
//               className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
//               aria-label="Toggle navigation"
//             >
//               <span
//                 className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
//                   open ? "translate-y-[6px] rotate-45" : ""
//                 }`}
//               />
//               <span
//                 className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
//                   open ? "opacity-0" : ""
//                 }`}
//               />
//               <span
//                 className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
//                   open ? "-translate-y-[6px] -rotate-45" : ""
//                 }`}
//               />
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* MOBILE OVERLAY MENU */}
//       <div
//         className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
//           open ? "visible opacity-100" : "invisible opacity-0"
//         }`}
//       >
//         <div
//           className={`absolute inset-0 bg-gradient-to-br from-black/95 via-slate-900/95 to-black/95 backdrop-blur-2xl transition-opacity duration-500 ${
//             open ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setOpen(false)}
//         />

//         <div
//           className={`relative h-full flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
//             open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
//           }`}
//         >
//           <ul className="flex flex-col items-center gap-7 mb-4">
//             {navLinks.map((link, i) => (
//               <li
//                 key={link.href}
//                 className={`transition-all duration-500 ${
//                   open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
//                 }`}
//                 style={{ transitionDelay: `${i * 90}ms` }}
//               >
//                 <Link
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className="text-2xl sm:text-[26px] font-light tracking-[0.2em] uppercase text-white hover:text-[#C9A24D] transition-colors"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <button
//             onClick={() => setOpen(false)}
//             className="group relative inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/80 bg-[#C9A24D] px-10 py-3 text-[13px] font-semibold tracking-[0.2em] text-black shadow-[0_0_34px_rgba(201,162,77,0.9)] transition-all duration-300 hover:bg-[#F5E3B5]"
//           >
//             <span>BOOK EVENT</span>
//             <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[10px]">
//               →
//             </span>
//             <span className="absolute inset-0 -z-10 rounded-full bg-[#C9A24D]/45 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
//           </button>

//           {/* Decorative glows */}
//           <div className="pointer-events-none absolute top-20 left-8 h-24 w-24 rounded-full bg-[#C9A24D]/25 blur-3xl" />
//           <div className="pointer-events-none absolute bottom-10 right-10 h-28 w-28 rounded-full bg-purple-500/25 blur-3xl" />
//         </div>
//       </div>

//       {/* Spacer so content not hidden */}
//       <div className="h-20" />
//     </>
//   );
// }






// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;
    
//     const onScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [mounted]);

//   useEffect(() => {
//     if (!mounted) return;
//     document.body.style.overflow = open ? "hidden" : "unset";
//   }, [open, mounted]);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Gallery", href: "/gallery" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const scrollingTexts = [
//     "✨ Creating Unforgettable Moments",
//     "🎉 Luxury Event Planning",
//     "💎 Where Dreams Come Alive",
//     "🌟 Elegance in Every Detail",
//     "🎊 Making Memories Forever",
//   ];


//   // Prevent hydration mismatch by using consistent initial state
//   const headerClasses = mounted 
//     ? `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         scrolled || open
//           ? "bg-black/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
//           : "bg-black/80 backdrop-blur-lg"
//       }`
//     : "fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-black/80 backdrop-blur-lg";

//   return (
//     <>
//       <header
//         className={headerClasses}
//       >
//         {/* Main Navbar */}
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between gap-6">
//             {/* LOGO with Image - Enhanced Size */}
//             <Link
//               href="/"
//               className="relative z-50 flex items-center gap-4 group select-none"
//             >
//               {/* Logo Image - Bigger & More Visible */}
//               <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
//                 <div className="absolute inset-0 rounded-full bg-[#C9A24D]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#C9A24D]/20 to-transparent p-1">
//                   <Image
//                     src="/logo/logo.png"
//                     alt="Mystic Moments"
//                     width={80}
//                     height={80}
//                     className="relative z-10 rounded-full object-contain w-full h-full"
//                     priority
//                   />
//                 </div>
//               </div>

//               {/* Logo Text - Enhanced */}
//               <div className="hidden sm:block">
//                 <p className="text-[10px] tracking-[0.35em] uppercase text-white/70 leading-tight mb-0.5">
//                   Luxury Event Curators
//                 </p>
//                 <p className="text-2xl md:text-3xl font-serif text-white leading-tight">
//                   Mystic{" "}
//                   <span className="text-[#C9A24D] drop-shadow-[0_0_16px_rgba(201,162,77,0.9)]">
//                     Moments
//                   </span>
//                 </p>
//               </div>
//             </Link>

//             {/* DESKTOP NAV */}
//             <div className="hidden lg:flex items-center gap-10">
//               <ul className="flex items-center gap-8 xl:gap-10 text-[13px] font-medium">
//                 {navLinks.map((link) => (
//                   <li key={link.href} className="relative">
//                     <Link
//                       href={link.href}
//                       className="relative text-white/85 hover:text-white tracking-[0.14em] uppercase transition-colors duration-300 group"
//                     >
//                       {link.name}
//                       <span className="pointer-events-none absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-[#C9A24D] via-amber-200 to-white group-hover:w-full transition-all duration-300" />
//                     </Link>
//                   </li>
//                 ))}
//               </ul>

//               {/* DESKTOP CTA */}
//               <button className="group relative inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/80 bg-[#C9A24D]/95 px-7 py-2.5 text-[12px] font-semibold tracking-[0.18em] text-black shadow-[0_0_28px_rgba(201,162,77,0.8)] transition-all duration-300 hover:bg-[#F5E3B5] hover:shadow-[0_0_40px_rgba(201,162,77,1)]">
//                 <span>BOOK EVENT</span>
//                 <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[10px]">
//                   →
//                 </span>
//                 <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#C9A24D] via-white/40 to-[#C9A24D] opacity-0 blur-xl group-hover:opacity-100" />
//               </button>
//             </div>

//             {/* MOBILE TOGGLE */}
//             <button
//               onClick={() => setOpen((v) => !v)}
//               className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
//               aria-label="Toggle navigation"
//             >

//               <span
//                 className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
//                   mounted && open ? "translate-y-[6px] rotate-45" : ""
//                 }`}
//               />
//               <span
//                 className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
//                   mounted && open ? "opacity-0" : ""
//                 }`}
//               />
//               <span
//                 className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
//                   mounted && open ? "-translate-y-[6px] -rotate-45" : ""
//                 }`}
//               />
//             </button>
//           </div>
//         </nav>

//         {/* Animated Scrolling Text Bar - Instagram Story Style */}
//         <div className="relative bg-gradient-to-r from-[#C9A24D]/10 via-[#C9A24D]/5 to-[#C9A24D]/10 border-t border-[#C9A24D]/20 overflow-hidden py-4">
//           {/* Scrolling Text Container */}
//           <div className="animate-scroll-infinite flex whitespace-nowrap">
//             {/* Repeat texts multiple times for seamless loop */}
//             {[...Array(3)].map((_, setIndex) => (
//               <div key={setIndex} className="flex items-center gap-8 px-8">
//                 {scrollingTexts.map((text, index) => (
//                   <h1
//                     key={`${setIndex}-${index}`}
//                     className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C9A24D] to-white animate-flip inline-block"
//                     style={{
//                       animationDelay: `${index * 0.3}s`,
//                     }}
//                   >
//                     {text}
//                   </h1>
//                 ))}
//               </div>
//             ))}
//           </div>

//           {/* Gradient Fade Edges */}
//           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
//           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
//         </div>
//       </header>


//       {/* MOBILE OVERLAY MENU */}
//       <div
//         className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
//           mounted && open ? "visible opacity-100" : "invisible opacity-0"
//         }`}
//       >
//         <div
//           className={`absolute inset-0 bg-gradient-to-br from-black/95 via-slate-900/95 to-black/95 backdrop-blur-2xl transition-opacity duration-500 ${
//             mounted && open ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setOpen(false)}
//         />

//         <div
//           className={`relative h-full flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
//             mounted && open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
//           }`}
//         >

//           <ul className="flex flex-col items-center gap-7 mb-4">
//             {navLinks.map((link, i) => (
//               <li
//                 key={link.href}
//                 className={`transition-all duration-500 ${
//                   mounted && open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
//                 }`}
//                 style={{ transitionDelay: `${i * 90}ms` }}
//               >
//                 <Link
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className="text-2xl sm:text-[26px] font-light tracking-[0.2em] uppercase text-white hover:text-[#C9A24D] transition-colors"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <button
//             onClick={() => setOpen(false)}
//             className="group relative inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/80 bg-[#C9A24D] px-10 py-3 text-[13px] font-semibold tracking-[0.2em] text-black shadow-[0_0_34px_rgba(201,162,77,0.9)] transition-all duration-300 hover:bg-[#F5E3B5]"
//           >
//             <span>BOOK EVENT</span>
//             <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[10px]">
//               →
//             </span>
//             <span className="absolute inset-0 -z-10 rounded-full bg-[#C9A24D]/45 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
//           </button>

//           {/* Decorative glows */}
//           <div className="pointer-events-none absolute top-20 left-8 h-24 w-24 rounded-full bg-[#C9A24D]/25 blur-3xl" />
//           <div className="pointer-events-none absolute bottom-10 right-10 h-28 w-28 rounded-full bg-purple-500/25 blur-3xl" />
//         </div>
//       </div>

//       {/* Spacer - Increased for scrolling text */}
//       <div className="h-[160px]" />

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes scroll-infinite {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.33%);
//           }
//         }

//         @keyframes flip {
//           0%, 100% {
//             transform: perspective(400px) rotateY(0deg);
//             opacity: 1;
//           }
//           50% {
//             transform: perspective(400px) rotateY(180deg);
//             opacity: 0.8;
//           }
//         }

//         .animate-scroll-infinite {
//           animation: scroll-infinite 40s linear infinite;
//         }

//         .animate-flip {
//           animation: flip 6s ease-in-out infinite;
//           display: inline-block;
//         }

//         /* Hover pause */
//         .animate-scroll-infinite:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.body.style.overflow = open ? "hidden" : "unset";
    }
  }, [open, mounted]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const scrollingTexts = [
    "✨ Creating Unforgettable Moments",
    "🎉 Luxury Event Planning",
    "💎 Where Dreams Come Alive",
    "🌟 Elegance in Every Detail",
    "🎊 Making Memories Forever",
  ];

  if (!mounted) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes flip {
          0%, 100% {
            transform: perspective(400px) rotateY(0deg);
            opacity: 1;
          }
          50% {
            transform: perspective(400px) rotateY(180deg);
            opacity: 0.8;
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 40s linear infinite;
        }

        .animate-flip {
          animation: flip 6s ease-in-out infinite;
          display: inline-block;
        }

        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-black/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            : "bg-black/80 backdrop-blur-lg"
        }`}
      >
        {/* Main Navbar */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* LOGO with Image - Enhanced Size */}
            <Link
              href="/"
              className="relative z-50 flex items-center gap-4 group select-none"
            >
              {/* Logo Image - Bigger & More Visible */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#C9A24D]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#C9A24D]/20 to-transparent p-1">
                  <Image
                    src="/logo/logo.png"
                    alt="Mystic Moments"
                    width={80}
                    height={80}
                    className="relative z-10 rounded-full object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>

              {/* Logo Text - Enhanced */}
              <div className="hidden sm:block">
                <p className="text-[10px] tracking-[0.35em] uppercase text-white/70 leading-tight mb-0.5">
                  Luxury Event Curators
                </p>
                <p className="text-2xl md:text-3xl font-serif text-white leading-tight">
                  Mystic{" "}
                  <span className="text-[#C9A24D] drop-shadow-[0_0_16px_rgba(201,162,77,0.9)]">
                    Moments
                  </span>
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex items-center gap-8 xl:gap-10 text-[13px] font-medium">
                {navLinks.map((link) => (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      className="relative text-white/85 hover:text-white tracking-[0.14em] uppercase transition-colors duration-300 group"
                    >
                      {link.name}
                      <span className="pointer-events-none absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-[#C9A24D] via-amber-200 to-white group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* DESKTOP CTA */}
              <button className="group relative inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/80 bg-[#C9A24D]/95 px-7 py-2.5 text-[12px] font-semibold tracking-[0.18em] text-black shadow-[0_0_28px_rgba(201,162,77,0.8)] transition-all duration-300 hover:bg-[#F5E3B5] hover:shadow-[0_0_40px_rgba(201,162,77,1)]">
                <span>BOOK EVENT</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[10px]">
                  →
                </span>
                <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#C9A24D] via-white/40 to-[#C9A24D] opacity-0 blur-xl group-hover:opacity-100" />
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Animated Scrolling Text Bar - Instagram Story Style */}
        <div className="relative bg-gradient-to-r from-[#C9A24D]/10 via-[#C9A24D]/5 to-[#C9A24D]/10 border-t border-[#C9A24D]/20 overflow-hidden py-4">
          {/* Scrolling Text Container */}
          <div className="animate-scroll-infinite flex whitespace-nowrap">
            {/* Repeat texts multiple times for seamless loop */}
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-8 px-8">
                {scrollingTexts.map((text, index) => (
                  <h1
                    key={`${setIndex}-${index}`}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C9A24D] to-white animate-flip inline-block"
                    style={{
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    {text}
                  </h1>
                ))}
              </div>
            ))}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
        </div>
      </header>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br from-black/95 via-slate-900/95 to-black/95 backdrop-blur-2xl transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`relative h-full flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-7 mb-4">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl sm:text-[26px] font-light tracking-[0.2em] uppercase text-white hover:text-[#C9A24D] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(false)}
            className="group relative inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/80 bg-[#C9A24D] px-10 py-3 text-[13px] font-semibold tracking-[0.2em] text-black shadow-[0_0_34px_rgba(201,162,77,0.9)] transition-all duration-300 hover:bg-[#F5E3B5]"
          >
            <span>BOOK EVENT</span>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[10px]">
              →
            </span>
            <span className="absolute inset-0 -z-10 rounded-full bg-[#C9A24D]/45 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Decorative glows */}
          <div className="pointer-events-none absolute top-20 left-8 h-24 w-24 rounded-full bg-[#C9A24D]/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 right-10 h-28 w-28 rounded-full bg-purple-500/25 blur-3xl" />
        </div>
      </div>

      {/* Spacer - Increased for scrolling text */}
      <div className="h-[160px]" />
    </>
  );
}