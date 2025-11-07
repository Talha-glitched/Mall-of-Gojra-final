import { motion } from "framer-motion";
import { ShoppingCart, Building, Shirt, Hospital, Smartphone, Coffee } from "lucide-react";

const businesses = [
  { icon: ShoppingCart, title: "Supermarkets & Grocery Chains", color: "from-green-400 to-green-600" },
  { icon: Building, title: "Flagship Bank Branches", color: "from-blue-400 to-blue-600" },
  { icon: Shirt, title: "Fashion & Personal Care Retailers", color: "from-pink-400 to-pink-600" },
  { icon: Hospital, title: "Hospital & Diagnostic Centers", color: "from-red-400 to-red-600" },
  { icon: Smartphone, title: "Electronics & Lifestyle Brands", color: "from-purple-400 to-purple-600" },
  { icon: Coffee, title: "QSRs, Cafés, Restaurants", color: "from-orange-400 to-orange-600" },
];

export default function IdealForSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ideal For{" "}
            <span className="text-yellow-400">
              High-Growth Brands
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${business.color} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <business.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{business.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
