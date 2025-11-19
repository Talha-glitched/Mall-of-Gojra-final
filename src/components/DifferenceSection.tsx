import { motion } from "framer-motion";
import { Award, Users, Shield } from "lucide-react";

export default function DifferenceSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[rgba(var(--brand-gold-rgb),0.1)] via-purple-500/10 to-[rgba(var(--brand-gold-rgb),0.1)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-gradient-to-br from-[rgba(var(--brand-gold-rgb),0.1)] to-purple-600/10 border border-[rgba(var(--brand-gold-rgb),0.3)] rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Why This is{" "}
            <span className="text-[var(--brand-gold)]">
              Different
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            This is not just another commercial building.<br />
            This is Gojra's first true metro-grade flagship property.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[rgba(var(--brand-gold-rgb),0.2)] to-[rgba(var(--brand-gold-rgb),0.2)] flex items-center justify-center">
                <Award className="w-8 h-8 text-[var(--brand-gold)]" />
              </div>
              <h3 className="text-lg font-bold text-white">UAE-Based Family</h3>
              <p className="text-white/70">Developed by a business family rooted in Gojra</p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[rgba(var(--brand-gold-rgb),0.2)] to-[rgba(var(--brand-gold-rgb),0.2)] flex items-center justify-center">
                <Users className="w-8 h-8 text-[var(--brand-gold)]" />
              </div>
              <h3 className="text-lg font-bold text-white">Professional Management</h3>
              <p className="text-white/70">Clean leasing with real support</p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[rgba(var(--brand-gold-rgb),0.2)] to-[rgba(var(--brand-gold-rgb),0.2)] flex items-center justify-center">
                <Shield className="w-8 h-8 text-[var(--brand-gold)]" />
              </div>
              <h3 className="text-lg font-bold text-white">Selective Partnership</h3>
              <p className="text-white/70">Choosing brands ready to lead</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
