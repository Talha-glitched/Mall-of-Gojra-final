import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="https://harmless-tapir-303.convex.cloud/api/storage/3ed0ac66-f978-4944-ae20-157f8694aa24" alt="Mall of Gojra" className="h-12" />
            </div>
            <p className="text-white/60 text-sm">
              Gojra's first metro-grade flagship commercial property, built to the highest standard.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Vision</h4>
            <p className="text-white/60 text-sm">
              To uplift Gojra by building a landmark commercial space where ambitious brands can grow, leave a mark, and inspire the city's future.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Mission</h4>
            <p className="text-white/60 text-sm">
              To support dreamers, doers, and legacy-builders with a flagship-grade space that reflects their ambition.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Mall of Gojra. All rights reserved. Built with care, delivered with pride.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}