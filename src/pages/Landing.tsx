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
import { Helmet } from "react-helmet-async";
import {
  buildLandingStructuredData,
  getCanonicalUrl,
  siteMetadata,
} from "@/seo/metadata";

export default function Landing() {
  const pageTitle = `${siteMetadata.siteName} | ${siteMetadata.brandTagline}`;
  const pageDescription = siteMetadata.description;
  const canonicalUrl = getCanonicalUrl("/");
  const keywords = siteMetadata.keywords.join(", ");
  const structuredData = buildLandingStructuredData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={siteMetadata.siteName} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteMetadata.siteName} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={siteMetadata.socialImage} />
        <meta property="og:image:alt" content="Mall of Gojra exterior render" />
        <meta property="og:locale" content="en_PK" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={siteMetadata.socialImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Helmet>

      <a
        href="#main-content"
        className="sr-only focus:not-sr focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content" className="flex flex-col gap-0">
        <HeroSection />
        <FeaturesSection />
        <FloorPlanSection />
        <GallerySection />
        <IdealForSection />
        <InfrastructureSection />
        <DifferenceSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
