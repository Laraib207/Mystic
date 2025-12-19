import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AlertServicesSection from "@/components/AlertServicesSection";
import GalleryPreview from "@/components/GalleryPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AlertServicesSection />
      <GalleryPreview />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
