import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import frontImage from "@/Assets/front_nightshot.jpg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/MOG.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <track kind="captions" />
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Animated Background Gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-400/10 to-purple-600/10 rounded-full blur-3xl" />
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
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30"
            >
              <span className="text-[var(--brand-gold)] font-semibold">🏆 Gojra's Premier Commercial Space</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Secure Your{" "}
              <span className="text-[var(--brand-gold)]">
                Flagship Outlet
              </span>{" "}
              in Gojra's Prime Commercial Plaza
            </h1>

            <p className="text-xl text-white/70 leading-relaxed">
              Move in. Stand out. Lead the market — with a metro-grade, ready-to-operate retail space designed for serious brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg px-8 py-6 hover:from-yellow-500 hover:to-yellow-700 shadow-lg shadow-yellow-500/50 cursor-pointer"
              >
                Get Brochure & Schedule Visit
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
