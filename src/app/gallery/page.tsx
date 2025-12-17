"use client";
import { useState } from "react";

const galleryCategories = [
  { id: "all", name: "All Events", icon: "✨" },
  { id: "weddings", name: "Weddings", icon: "💍" },
  { id: "corporate", name: "Corporate", icon: "🏢" },
  { id: "cultural", name: "Cultural", icon: "🎶" },
  { id: "parties", name: "Parties", icon: "🎂" },
  { id: "decoration", name: "Decoration", icon: "🎨" },
];


const galleryImages = [
  { id: 1, category: "weddings", title: "Royal Wedding Ceremony", image: "/gallery/1.jpg", color: "from-pink-500 to-rose-500" },
  { id: 2, category: "corporate", title: "Corporate Conference", image: "/gallery/2.jpg", color: "from-blue-500 to-cyan-500" },
  { id: 3, category: "cultural", title: "Traditional Festival", image: "/gallery/3.jpg", color: "from-purple-500 to-indigo-500" },
  { id: 4, category: "weddings", title: "Elegant Reception", image: "/gallery/4.jpg", color: "from-pink-500 to-rose-500" },
];


export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Floating Decorative Shapes */}
      <div className="absolute top-40 right-20 w-20 h-20 border-4 border-amber-400/30 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 border-4 border-purple-400/30 rotate-45 animate-pulse"></div>

      <section className="relative py-32 max-w-7xl mx-auto px-6 z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-full shadow-lg mb-8">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span>Our Best Work</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Event
            </span>
            <span className="block bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent mt-2">
              Gallery
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our collection of spectacular events —{" "}
            <span className="text-amber-600 font-semibold">where every moment becomes a masterpiece</span> ✨
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-amber-400 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {galleryCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/50'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-500 hover:text-amber-600'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </span>
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              )}
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {[
            { number: "500+", label: "Events Captured", icon: "📸" },
            { number: "1000+", label: "Happy Moments", icon: "😊" },
            { number: "50+", label: "Venues Covered", icon: "🏛️" },
            { number: "10+", label: "Years of Excellence", icon: "🏆" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >

              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Actual Image */}
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to gradient placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback Gradient Placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${image.color} flex items-center justify-center hidden`}>
                  <div className="text-white text-center p-8">
                    <div className="text-6xl mb-4">📷</div>
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-80">Image placeholder</p>
                  </div>
                </div>

                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6`}>
                  <h3 className="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>View Details</span>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>

                {/* Scale Effect */}
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500"></div>
              </div>

              {/* Floating Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${image.color} opacity-0 group-hover:opacity-20 blur-2xl -z-10 rounded-3xl transform scale-95 group-hover:scale-105 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-gray-600 text-lg mb-6">
            Want to see more of our amazing work?
          </p>
          <button className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Load More Events
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
        </div>

        {/* CTA Section */}
        <div className="mt-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 md:p-16 text-center shadow-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-3xl mx-auto">
            Let us capture your special moments and turn them into unforgettable memories
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Book Your Event
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>

            <button className="group px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                Contact Us
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}