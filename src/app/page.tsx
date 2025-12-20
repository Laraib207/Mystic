import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AlertServicesSection from "@/components/AlertServicesSection";
import FestivalEventsPage from "./festival-events/page";
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
      <FestivalEventsPage />
      <GalleryPreview />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
