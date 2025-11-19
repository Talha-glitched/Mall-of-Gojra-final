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
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import {
  buildLandingStructuredData,
  getCanonicalUrl,
  siteMetadata,
} from "@/seo/metadata";
import { allFloorPlanImageSources } from "@/data/floor-plan-images";

export default function Landing() {
  const pageTitle = `${siteMetadata.siteName} | ${siteMetadata.brandTagline}`;
  const pageDescription = siteMetadata.description;
  const canonicalUrl = getCanonicalUrl("/");
  const keywords = siteMetadata.keywords.join(", ");
  const structuredData = buildLandingStructuredData();

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={siteMetadata.siteName} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Gojra, Punjab, Pakistan" />
        <meta name="geo.position" content="31.156977774382423;72.6837145756678" />
        <meta name="ICBM" content="31.156977774382423, 72.6837145756678" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-PK" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
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
        {allFloorPlanImageSources.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${siteMetadata.siteUrl}#organization`,
              name: siteMetadata.siteName,
              legalName: siteMetadata.siteName,
              alternateName: ["MOG", "Mall of Gojra Commercial Plaza"],
              url: siteMetadata.siteUrl,
              logo: {
                "@type": "ImageObject",
                url: siteMetadata.socialImage,
                name: `${siteMetadata.siteName} Logo`,
              },
              description: siteMetadata.description,
              foundingLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Gojra",
                  addressRegion: "Punjab",
                  addressCountry: "PK",
                },
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: siteMetadata.businessAddress.streetAddress,
                addressLocality: siteMetadata.businessAddress.addressLocality,
                addressRegion: siteMetadata.businessAddress.addressRegion,
                postalCode: siteMetadata.businessAddress.postalCode,
                addressCountry: siteMetadata.businessAddress.addressCountry,
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Sales",
                email: "info@mallofgojra.com",
                telephone: "+923008689515",
                areaServed: "PK",
                availableLanguage: "en-PK",
              },
              sameAs: [siteMetadata.siteUrl],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${siteMetadata.siteUrl}#local-business`,
              name: siteMetadata.siteName,
              image: siteMetadata.socialImage,
              logo: siteMetadata.socialImage,
              description: siteMetadata.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteMetadata.businessAddress.streetAddress,
                addressLocality: siteMetadata.businessAddress.addressLocality,
                addressRegion: siteMetadata.businessAddress.addressRegion,
                postalCode: siteMetadata.businessAddress.postalCode,
                addressCountry: siteMetadata.businessAddress.addressCountry,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: siteMetadata.geo.latitude,
                longitude: siteMetadata.geo.longitude,
              },
              telephone: "+923008689515",
              email: "info@mallofgojra.com",
              url: siteMetadata.siteUrl,
              priceRange: "$$",
              areaServed: {
                "@type": "City",
                name: "Gojra",
                addressRegion: "Punjab",
                addressCountry: "PK",
              },
            }),
          }}
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
      <WhatsAppButton />
    </div>
  );
}
