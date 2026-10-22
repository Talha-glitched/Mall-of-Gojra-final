import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import buildingMark from "@/Assets/Building Logo copy.png";
import egsLogo from "@/Assets/EGS-Logo.png";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="pt-2">
              <div className="flex items-start gap-4">
                <img
                  src={buildingMark}
                  alt="Mall of Gojra Icon"
                  className="h-20 sm:h-28 w-auto object-contain flex-shrink-0"
                />
                <p className="text-white/60 text-sm leading-relaxed">
                  <strong className="text-white">Mall of Gojra</strong> - Gojra's first metro-grade flagship commercial property, built to the highest standard and delivered with pride.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Contact - Rana Shahid</h4>

            <div className="space-y-3 text-white/80 text-sm">
              <a href="tel:+923000000000" className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-s  tracking-wide text-white/50">Call or WhatsApp</span>
                  +92 300 8689515
                </span>
              </a>
              <a href="mailto:info@mallofgojra.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-white/50">Email</span>
                  info@mallofgojra.com
                </span>
              </a>
            </div>
          </div>
        </div>



        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Mall of Gojra. All rights reserved. Built with care, delivered with pride.
          </p>
          <a
            href="https://exhibitgraphicsign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors group"
          >
            <span>Brought to you by</span>
            <img
              src={egsLogo}
              alt="Exhibit Graphic Sign"
              className="h-8 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all"
            />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}