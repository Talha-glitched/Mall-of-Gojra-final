import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import IdealForSection from "@/components/IdealForSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import DifferenceSection from "@/components/DifferenceSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FloorPlanSection />
      <GallerySection />
      <IdealForSection />
      <InfrastructureSection />
      <DifferenceSection />

      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
