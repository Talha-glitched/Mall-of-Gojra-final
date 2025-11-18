type PostalAddress = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: string;
};

type GeoCoordinates = {
  latitude: number;
  longitude: number;
};

type SiteMetadata = {
  siteName: string;
  brandTagline: string;
  description: string;
  keywords: string[];
  siteUrl: string;
  socialImage: string;
  businessAddress: PostalAddress;
  geo: GeoCoordinates;
};

export const siteMetadata: SiteMetadata = {
  siteName: "Mall of Gojra",
  brandTagline: "Flagship Commercial Plaza in Gojra",
  description:
    "Mall of Gojra is the city’s first metro-grade commercial development offering 24,710 sq ft of ready-to-operate flagship retail and corporate space on Main Pensara Road.",
  keywords: [
    "Mall of Gojra",
    "Gojra commercial property",
    "Pensara Road plaza",
    "flagship retail space Pakistan",
    "commercial shops Gojra",
    "investment property Gojra",
  ],
  siteUrl: "https://mallofgojra.com",
  socialImage: "https://mallofgojra.com/Website-Logo.png",
  businessAddress: {
    streetAddress: "Main Pensara Road",
    addressLocality: "Gojra",
    addressRegion: "Punjab",
    postalCode: "36050",
    addressCountry: "PK",
  },
  geo: {
    latitude: 31.156977774382423,
    longitude: 72.6837145756678,
  },
};

export const getCanonicalUrl = (path = "/") => {
  try {
    return new URL(path, siteMetadata.siteUrl).toString();
  } catch {
    return siteMetadata.siteUrl;
  }
};

export const buildLandingStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ShoppingCenter",
  "@id": `${siteMetadata.siteUrl}#shopping-center`,
  name: siteMetadata.siteName,
  url: siteMetadata.siteUrl,
  description: siteMetadata.description,
  image: siteMetadata.socialImage,
  slogan: siteMetadata.brandTagline,
  address: {
    "@type": "PostalAddress",
    ...siteMetadata.businessAddress,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteMetadata.geo.latitude,
    longitude: siteMetadata.geo.longitude,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Gojra, Punjab, Pakistan",
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "24,710 sq ft total build-up",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Dual access frontage",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "22-car dedicated parking",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Fiber internet and 3-phase power ready",
      value: true,
    },
  ],
});

