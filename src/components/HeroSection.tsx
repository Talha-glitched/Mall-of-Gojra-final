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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-400/10 to-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
              <span className="text-yellow-400 font-semibold">🏆 Gojra's Premier Commercial Space</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Secure Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
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

            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24,710</div>
                <div className="text-sm text-white/60">sq ft Total Area</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">108 ft</div>
                <div className="text-sm text-white/60">Frontage</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">22</div>
                <div className="text-sm text-white/60">Car Parking</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Building Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="group relative rounded-[32px] overflow-hidden border border-white/15 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)]">
              <img
                src={frontImage}
                alt="Mall of Gojra"
                className="w-full h-full object-cover aspect-[16/10] lg:aspect-[16/9] transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-[32px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
