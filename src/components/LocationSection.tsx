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
            <span className="text-[var(--brand-gold)]">
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
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <iframe
              title="Mall of Gojra Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.2989765174516!2d72.6837145756678!3d31.156977774382423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39230193665a1ee3%3A0x630cf172e8d78c89!2sMall%20of%20Gojra!5e0!3m2!1sen!2sae!4v1763386152044!5m2!1sen!2sae"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
