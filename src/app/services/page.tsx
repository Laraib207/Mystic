import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <section className="py-28 max-w-7xl mx-auto px-6">
      <h1 className="text-5xl font-serif font-bold text-center mb-16">
        Our <span className="text-[#C9A24D]">Services</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-[#5F5F5F] text-sm">
              {service.desc}
            </p>
          </div>
        ))}
        
      </div>
    </section>
  );
}
