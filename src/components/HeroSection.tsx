import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import frontImage from "@/Assets/front_nightshot.jpg";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setPrefersReducedMotion(event.matches);
    };

    handleChange(mediaQuery);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // ignored: autoplay may fail on some browsers until user interaction
      });
    }
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        {!prefersReducedMotion ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/MOG.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={frontImage}
            aria-hidden="true"
            title="Night-time exterior of Mall of Gojra"
          >
            <track kind="captions" />
          </video>
        ) : (
          <img
            src={frontImage}
            alt="Night-time exterior of Mall of Gojra"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        <noscript>
          <img
            src={frontImage}
            alt="Night-time exterior of Mall of Gojra"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </noscript>
      </div>

      {/* Animated Background Gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[rgba(var(--brand-gold-rgb),0.2)] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[rgba(var(--brand-gold-rgb),0.1)] to-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-5 py-2 rounded-full bg-black/60 border border-white/20 backdrop-blur-md shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]"
            >
              <span style={{ fontFamily: "Top Luxury" }} className="text-[var(--brand-gold)] font-semibold">🏆 Gojra's Premier Commercial Space</span>
            </motion.div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight"
            >
              <span className="sm:whitespace-nowrap">
                Secure Your{" "}
                <span className="text-[var(--brand-gold)]">
                  Flagship Outlet
                </span>
              </span>{" "}
              <span className="sm:whitespace-nowrap">
                in Gojra's Prime Commercial Plaza
              </span>
            </h1>

            <p className="text-white/100 leading-relaxed text-[1.6rem] sm:text-[1.6rem] font-light">
              <span className="text-[var(--brand-gold)] font-semibold">
                Move in. Stand out. Lead the market with
              </span>
              <br /> a metro-grade, ready-to-operate retail space <br /> designed for serious brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="default"
                className="bg-[var(--brand-gold)] text-black font-medium text-base px-6 py-4 hover:bg-[rgba(var(--brand-gold-rgb),0.9)] shadow-lg shadow-[0_20px_60px_-20px_rgba(var(--brand-gold-rgb),0.4)] cursor-pointer"
              >
                Get Brochure & Floor Plans
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Building Image */}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--brand-gold)]">24,710</div>
            <div className="text-sm text-white/60">sq ft Total Area</div>
          </div>
          <div className="h-12 w-px bg-white/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--brand-gold)]">108 ft</div>
            <div className="text-sm text-white/60">Frontage</div>
          </div>
          <div className="h-12 w-px bg-white/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--brand-gold)]">22</div>
            <div className="text-sm text-white/60">Car Parking</div>

          </div>
          <div className="h-12 w-px bg-white/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--brand-gold)]">Dual access</div>
            <div className="text-sm text-white/60">Front & Back</div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
