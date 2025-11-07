import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Strategically{" "}
            <span className="text-yellow-400">
              Located
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Prime Location</h3>
                  <p className="text-white/70">Main Pensara Road, Gojra</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white/80">500m from Ghaffar Park Chowk</span>
                </li>
                <li className="flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white/80">Next to Sharif Petroleum</span>
                </li>
                <li className="flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white/80">20 ft wide commercial road (Expandable to 40 ft)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white/80">Dual access from front & back</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 h-[400px] flex items-center justify-center"
          >
            <div className="text-center space-y-4">
              <div className="text-6xl">🗺️</div>
              <p className="text-white/70 text-lg">Interactive Map Coming Soon</p>
              <p className="text-white/50 text-sm">Main Pensara Road, Gojra</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
