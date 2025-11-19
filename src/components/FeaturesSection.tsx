import { motion } from "framer-motion";
import { Building2, Zap, Shield, Wifi, Car, TrendingUp } from "lucide-react";
import patternBg from "../Assets/Pattern copy.png";
const features = [
  {
    icon: Building2,
    title: "24,710 sq ft Infrastructure",
    description: "High-grade commercial space with fully customizable floor plates",
  },
  {
    icon: Zap,
    title: "3-Phase Power Ready",
    description: "200 KVA transformer with generator backup capability",
  },
  {
    icon: Shield,
    title: "Complete Safety Systems",
    description: "Fire safety, CCTV, earthquake-resistant structure",
  },
  {
    icon: Wifi,
    title: "Fiber-Optic Ready",
    description: "High-speed internet connectivity infrastructure in place",
  },
  {
    icon: Car,
    title: "22-Car Parking",
    description: "Ample parking with dual access from front & back",
  },
  {
    icon: TrendingUp,
    title: "Prime Location",
    description: "Main Pensara Road, 500m from Ghaffar Park Chowk",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[rgba(var(--brand-gold-rgb),0.1)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Gojra's Most Visible{" "}
            <span className="text-[var(--brand-gold)]">
              Commercial Landmark
            </span>
          </h2>
          <p className="text-2xl text-white/100 max-w-3xl mx-auto">
            Gojra's largest, most premium commercial property, built to the highest standard
          </p>
        </motion.div>
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 mt-12 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url(${patternBg})`,
            backgroundSize: "520px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-[0_25px_60px_-20px_rgba(var(--brand-gold-rgb),0.2)]">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgba(var(--brand-gold-rgb),0.2)] to-[rgba(var(--brand-gold-rgb),0.2)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-[var(--brand-gold)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
