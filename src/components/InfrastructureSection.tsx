import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const infrastructure = [
  "Modern 6×7 ft elevator & dual staircases",
  "Drive-in/drop-off area with wide accessibility",
  "Attractive façade with display windows",
  "HVAC-compatible setup",
  "Dedicated loading area for deliveries",
  "22-car parking capacity",
  "Wheelchair ramp enabled",
];

const power = [
  "Dedicated 200 KVA Transformer",
  "3-phase commercial electricity",
  "Generator-ready wiring",
  "Electrical panels for load management",
  "Fiber-optic connectivity ready",
];

const safety = [
  "Fire exits and extinguishers",
  "CCTV installation points",
  "Guard room and monitoring area",
  "Secure waste and drainage systems",
  "Earthquake-resistant structure",
  "Municipality & Civil Defence compliant",
];

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            World-Class{" "}
            <span className="text-[var(--brand-gold)]">
              Infrastructure
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-[var(--brand-gold)] mb-6">🏗️ Infrastructure</h3>
            <ul className="space-y-4">
              {infrastructure.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Power & Connectivity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-[var(--brand-gold)] mb-6">⚡ Power & Connectivity</h3>
            <ul className="space-y-4">
              {power.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Safety & Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-[var(--brand-gold)] mb-6">🔐 Safety & Compliance</h3>
            <ul className="space-y-4">
              {safety.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
