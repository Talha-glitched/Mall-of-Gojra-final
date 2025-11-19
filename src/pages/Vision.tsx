import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Target, TrendingUp, Trophy } from "lucide-react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { getCanonicalUrl, siteMetadata } from "@/seo/metadata";

const textReveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i },
  }),
};

export default function VisionPage() {
  const pageTitle = `Vision & Story | ${siteMetadata.siteName}`;
  const pageDescription =
    "Understand the mission, values, and long-term ambition powering Mall of Gojra’s metro-grade commercial development.";
  const canonicalUrl = getCanonicalUrl("/vision");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteMetadata.siteName} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={siteMetadata.socialImage} />
        <meta property="og:image:alt" content="Mall of Gojra crest" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={siteMetadata.socialImage} />
      </Helmet>
      <Navbar />

      <main className="relative pt-28 pb-24">
        <div className="absolute inset-x-0 top-32 -z-10 flex justify-center">
          <div className="h-[480px] w-[480px] rounded-full bg-[rgba(var(--brand-gold-rgb),0.1)] blur-3xl" />
        </div>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-[rgba(var(--brand-gold-rgb),0.8)]">
                <Sparkles size={18} />
                Purpose Driven Development
              </p>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Crafted for the Dreamers of Gojra
              </h1>
              <p className="mt-6 text-lg text-white/75 leading-relaxed">
                Mall of Gojra is a landmark ambition to raise the skyline, empower local enterprise, and create a home for brands that want
                to change the city together. Our story is rooted in lifting the city with architecture that inspires confidence and
                opportunity.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/">
                  <Button variant="ghost" className="text-white hover:text-[var(--brand-gold)]">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                  </Button>
                </Link>
                <Button asChild className="bg-[var(--brand-gold)] text-black font-semibold hover:bg-[rgba(var(--brand-gold-rgb),0.9)]">
                  <Link to="/#contact">Talk to the Team</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={textReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 text-[rgba(var(--brand-gold-rgb),0.9)]">
                <Trophy className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-[0.25em] uppercase">Why It Exists</span>
              </div>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                We’ve created a market-defining property that enables serious businesses to launch faster, operate smarter, and lead without
                compromise — right here in Gojra.
              </p>
              <ul className="mt-6 space-y-3 text-white/70">
                <li className="flex gap-2 text-sm">
                  <span className="text-[var(--brand-gold)]">•</span>
                  Flagship-grade retail, surrounded by the city’s highest footfall.
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-[var(--brand-gold)]">•</span>
                  Architecture that signals ambition and invites premium brands.
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-[var(--brand-gold)]">•</span>
                  Built with a promise of longevity, integrity, and partnership.
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-3">
            <motion.div
              variants={textReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 text-[rgba(var(--brand-gold-rgb),0.9)]">
                <Target className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-[0.25em] uppercase">Vision</span>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-white/80">
                To uplift Gojra by building a landmark commercial space where ambitious brands can grow, leave a mark, and inspire the
                city’s future.
              </p>
            </motion.div>

            <motion.div
              variants={textReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 text-[rgba(var(--brand-gold-rgb),0.9)]">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-[0.25em] uppercase">Mission</span>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-white/80">
                To support dreamers, doers, and legacy-builders with a flagship-grade space that reflects their ambition — built with care,
                delivered with pride, and backed by trust.
              </p>
            </motion.div>

            <motion.div
              variants={textReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              className="rounded-[32px] border border-[rgba(var(--brand-gold-rgb),0.4)] bg-gradient-to-r from-[rgba(var(--brand-gold-rgb),0.1)] to-[rgba(var(--brand-gold-rgb),0.1)] p-8 backdrop-blur-xl"
            >
              <p className="text-lg text-white/85 leading-relaxed">
                Mall of Gojra is how we signal that Gojra’s future is worth investing in — a platform where legacy and modern ambition meet.
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[rgba(var(--brand-gold-rgb),0.8)]">Lead Without Compromise</p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


