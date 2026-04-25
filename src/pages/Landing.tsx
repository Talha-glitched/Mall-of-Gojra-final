import { useState } from "react";
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
import { PlayCircle } from "lucide-react";
import {
  buildLandingStructuredData,
  getCanonicalUrl,
  siteMetadata,
} from "@/seo/metadata";
import { allFloorPlanImageSources } from "@/data/floor-plan-images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const youtubeVideoId = "gSfk5tbBYUI";
const youtubeEmbedUrl = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

export default function Landing() {
  const [isVideoOpen, setIsVideoOpen] = useState(true);

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

      <button
        type="button"
        onClick={() => setIsVideoOpen(true)}
        className="fixed bottom-6 left-4 z-50 inline-flex min-h-12 max-w-[calc(100vw-2rem)] items-center gap-3 rounded-full border border-white/15 bg-white px-4 py-3 text-sm font-semibold text-black shadow-2xl shadow-black/40 transition hover:-translate-y-0.5 hover:bg-[var(--brand-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)] focus:ring-offset-2 focus:ring-offset-black sm:left-6 sm:min-h-14 sm:px-5"
        aria-label="Watch the Mall of Gojra video"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-[var(--brand-gold)]">
          <PlayCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="whitespace-nowrap">Watch Video</span>
      </button>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="w-[calc(100vw-1.5rem)] gap-0 overflow-hidden border-white/10 bg-[#050505] p-0 text-white shadow-[0_30px_100px_rgba(0,0,0,0.75)] sm:max-w-5xl">
          <DialogHeader className="border-b border-white/10 px-4 py-4 pr-12 text-left sm:px-6">
            <DialogTitle className="text-lg font-bold text-white sm:text-xl">
              Mall of Gojra Video Tour
            </DialogTitle>
            <DialogDescription className="sr-only">
              Welcome to Mall of Gojra — here is a quick video introduction.
            </DialogDescription>
            <p className="text-sm leading-relaxed text-white/70">
              See the frontage, location, and retail space highlights in a quick video introduction.
            </p>
          </DialogHeader>
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            {isVideoOpen && (
              <iframe
                width="1280"
                height="720"
                src={youtubeEmbedUrl}
                title="Mall of Gojra video tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
