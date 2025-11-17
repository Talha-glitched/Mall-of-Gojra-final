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

        <div className="mt-10">
          <h4 className="text-white font-semibold mb-4 text-center">Visit Us</h4>
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)]">
            <iframe
              title="Mall of Gojra Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.2989765174516!2d72.6837145756678!3d31.156977774382423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39230193665a1ee3%3A0x630cf172e8d78c89!2sMall%20of%20Gojra!5e0!3m2!1sen!2sae!4v1763386152044!5m2!1sen!2sae"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] border-0"
            />
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