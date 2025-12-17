"use client";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { number: "500+", label: "Events Delivered", icon: "🎉" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐" },
    { number: "50+", label: "Team Members", icon: "👥" },
    { number: "10+", label: "Years Experience", icon: "🏆" },
  ];

  const values = [
    {
      title: "Perfection in Every Detail",
      desc: "Har chhoti se chhoti detail par dhyan, kyunki perfection hi humara passion hai.",
      icon: "✨",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Customer-Centric Approach",
      desc: "Aapki requirements, aapki wishes — humari priority. Your vision, our mission.",
      icon: "🎯",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Creative Excellence",
      desc: "Innovative themes, unique decorations, aur magical moments — creativity hai humari soul.",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Timely Execution",
      desc: "On-time delivery with zero compromise on quality. Punctuality aur perfection saath-saath.",
      icon: "⏰",
      color: "from-emerald-500 to-teal-500"
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-full shadow-lg mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span>Know Our Story</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8 animate-slide-up">
            <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              About
            </span>
            <span className="block bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent mt-2">
              Mystic Moments
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-amber-400 rounded-full"></div>
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full"></div>
          </div>

          {/* Story Text */}
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-delay">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Mystic Moments was born from a <span className="text-amber-600 font-semibold">vision</span>: to turn every
              celebration into a <span className="text-amber-600 font-semibold">story worth remembering</span>. ✨
            </p>
            
            <div className="relative bg-gradient-to-r from-amber-50 via-white to-purple-50 p-10 rounded-3xl shadow-xl border border-amber-100">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-6xl text-amber-400/30">"</div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic relative z-10">
                Whether it's a <span className="text-amber-600 font-semibold">wedding</span>, a <span className="text-purple-600 font-semibold">corporate gathering</span>, or a <span className="text-pink-600 font-semibold">private celebration</span> — 
                we execute every detail with <span className="text-amber-600 font-bold">perfection</span>. 
                <br/><br/>
                Aapki khushi, aapki pasand, aur aapke sapne — sab kuch humara dhyaan hai. 
                <span className="text-amber-600 font-semibold"> Hum sirf events nahi banate, memories banate hain.</span> 💫
              </p>
              <div className="absolute bottom-6 right-6 text-6xl text-amber-400/30">"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br/>
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Mystic Moments?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kyunki har event ek kahani hai, aur hum usey perfect banate hain ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`,
                opacity: 0
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <span className="text-3xl">{value.icon}</span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-amber-500 group-hover:bg-clip-text transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${value.color} group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Promise Section */}
      <section className="relative py-28 bg-gradient-to-br from-amber-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white shadow-lg rounded-full mb-8">
            <span className="text-2xl">🤝</span>
            <span className="font-semibold text-gray-800">Our Promise</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            We Work According to{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Your Requirements
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "💬", title: "Tell Us Your Vision", desc: "Aapke ideas, aapki requirements — sab kuch share karein" },
              { icon: "🎨", title: "We Design Magic", desc: "Creative planning aur customized themes jo perfect ho" },
              { icon: "✅", title: "Flawless Execution", desc: "On-time delivery with 100% perfection guarantee" },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`,
                  opacity: 0
                }}
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16">
            <button className="group relative px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Planning Your Event
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}