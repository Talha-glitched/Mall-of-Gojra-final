import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { getCanonicalUrl, siteMetadata } from "@/seo/metadata";

export default function NotFound() {
  const pageTitle = `Page Not Found | ${siteMetadata.siteName}`;
  const canonicalUrl = getCanonicalUrl("/404");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={siteMetadata.siteName} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
      </Helmet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto relative px-4">
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-lg text-gray-600">Page Not Found</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
