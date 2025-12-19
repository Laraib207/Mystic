// export default function Hero() {
//   return (
//     <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
//       <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
//         Creating <span className="text-[#C9A24D]">Mystic</span>
//         <br />
//         Moments That Last Forever
//       </h1>

//       <p className="mt-6 max-w-2xl text-lg opacity-80">
//         Weddings, corporate events aur private celebrations —  
//         har pal ko hum magic me badal dete hain.
//       </p>

//       <div className="mt-10 flex gap-4">
//         <button className="px-8 py-4 bg-black text-white rounded-full hover:scale-105 transition">
//           Book Your Momentt
//         </button>
//         <button className="px-8 py-4 border rounded-full hover:bg-black hover:text-white transition">
//           View Services
//         </button>
//       </div>
//     </section>
//   );
// }


// 'use client';
// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 4}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
//         {/* Top Badge */}
//         <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in">
//           <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
//           <span className="text-sm font-medium text-white/90">India's Premium Event Curators</span>
//         </div>

//         {/* Main Heading with Gradient */}
//         <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6 animate-slide-up">
//           <span className="block bg-gradient-to-r from-white via-amber-200 to-purple-200 bg-clip-text text-transparent">
//             Creating
//           </span>
//           <span className="block mt-2 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-2xl">
//             Mystic Moments
//           </span>
//           <span className="block mt-2 text-white/95">
//             That Last Forever
//           </span>
//         </h1>

//         {/* Subtitle with Better Typography */}
//         <p className="mt-8 text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in delay-200">
//           Weddings, corporate events aur private celebrations —<br/>
//           <span className="text-amber-300 font-medium">har pal ko hum magic me badal dete hain</span> ✨
//         </p>

//         {/* CTA Buttons with Cool Effects */}
//         <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in delay-300">
//           <button className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50">
//             <span className="relative z-10 flex items-center gap-2">
//               Book Your Moment
//               <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
//           </button>

//           <button className="group px-10 py-5 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 transition-all duration-300 hover:bg-white hover:text-slate-900 hover:scale-105 hover:shadow-xl hover:border-white">
//             <span className="flex items-center gap-2">
//               View Services
//               <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//               </svg>
//             </span>
//           </button>
//         </div>

//         {/* Trust Indicators */}
//         <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/70 text-sm animate-fade-in delay-500">
//           <div className="flex items-center gap-2">
//             <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//             <span>500+ Events Delivered</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//             </svg>
//             <span>100% Client Satisfaction</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
//             </svg>
//             <span>Award-Winning Team</span>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
//           <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
        
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes slide-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .animate-float {
//           animation: float ease-in-out infinite;
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out forwards;
//         }
        
//         .animate-slide-up {
//           animation: slide-up 1s ease-out forwards;
//         }
        
//         .delay-200 {
//           animation-delay: 0.2s;
//         }
        
//         .delay-300 {
//           animation-delay: 0.3s;
//         }
        
//         .delay-500 {
//           animation-delay: 0.5s;
//         }
        
//         .delay-700 {
//           animation-delay: 0.7s;
//         }
        
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </section>
//   );
// }







// "use client";

// import { useEffect, useState } from "react";

// type Particle = {
//   left: string;
//   top: string;
//   delay: string;
//   duration: string;
// };

// export default function Hero() {
//   const [particles, setParticles] = useState<Particle[]>([]);

//   useEffect(() => {
//     // Generate particles ONLY on client
//     const generated = Array.from({ length: 20 }).map(() => ({
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       delay: `${Math.random() * 5}s`,
//       duration: `${3 + Math.random() * 4}s`,
//     }));

//     setParticles(generated);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-black via-neutral-900 to-black overflow-hidden">

//       {/* Soft glowing shapes (STATIC – SAFE) */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-700" />
//       <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

//       {/* Floating particles (CLIENT ONLY) */}
//       <div className="absolute inset-0 pointer-events-none">
//         {particles.map((p, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
//             style={{
//               left: p.left,
//               top: p.top,
//               animationDelay: p.delay,
//               animationDuration: p.duration,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 px-6">
//         <span className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white/90 mb-8">
//           <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
//           India’s Premium Event Curators
//         </span>

//         <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
//           Creating
//           <span className="block mt-2 text-[#C9A24D]">Mystic Moments</span>
//           <span className="block mt-2 text-white/90">That Last Forever</span>
//         </h1>

//         <p className="mt-8 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
//          We turn every  <span className="text-amber-300 font-medium">moment </span> into magic.
//         </p>

//         <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
//           <button className="px-10 py-4 rounded-full bg-[#C9A24D] text-black font-medium hover:bg-white transition">
//             Book Your Event
//           </button>
//           <button className="px-10 py-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition">
//             View Gallery
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { src: "/hero/hero1.jpg", title: "Luxury Weddings" },
  { src: "/hero/hero2.jpg", title: "Corporate Excellence" },
  { src: "/hero/hero3.jpg", title: "Private Celebrations" },
  { src: "/hero/hero4.jpg", title: "Elegant Experiences" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt="Event"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-6 py-2 mb-6 text-sm bg-white/10 backdrop-blur rounded-full text-white tracking-wide">
            India’s Premium Event Curators
          </span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
            Creating
            <span className="block text-[#C9A24D] mt-2">
              Mystic Moments
            </span>
            <span className="block text-white/90 mt-2">
              That Last Forever
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/80">
            We turn every <span className="text-amber-300">moment</span> into magic.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 rounded-full bg-[#C9A24D] text-black font-medium hover:bg-white transition">
              Book Your Event
            </button>
            <button className="px-10 py-4 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition">
              View Gallery
            </button>
          </div>
        </motion.div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-amber-400" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
