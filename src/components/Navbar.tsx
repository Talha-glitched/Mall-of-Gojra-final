import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <Link to="/" className="inline-flex items-center">
              <img
                src="https://harmless-tapir-303.convex.cloud/api/storage/3ed0ac66-f978-4944-ae20-157f8694aa24"
                alt="Mall of Gojra"
                className="h-14 sm:h-16"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-white/80 hover:text-[var(--brand-gold)] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("infrastructure")}
              className="text-white/80 hover:text-[var(--brand-gold)] transition-colors"
            >
              Infrastructure
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-white/80 hover:text-[var(--brand-gold)] transition-colors"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-[var(--brand-gold)] transition-colors"
            >
              Contact
            </button>
            <Link
              to="/vision"
              className="text-white/80 hover:text-[var(--brand-gold)] transition-colors"
            >
              Vision
            </Link>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:from-yellow-500 hover:to-yellow-700"
            >
              Get Brochure
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-3"
          >
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-white/80 hover:text-[var(--brand-gold)] transition-colors py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("infrastructure")}
              className="block w-full text-left text-white/80 hover:text-[var(--brand-gold)] transition-colors py-2"
            >
              Infrastructure
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="block w-full text-left text-white/80 hover:text-[var(--brand-gold)] transition-colors py-2"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-white/80 hover:text-[var(--brand-gold)] transition-colors py-2"
            >
              Contact
            </button>
            <Link
              to="/vision"
              className="block w-full text-left text-white/80 hover:text-[var(--brand-gold)] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Vision
            </Link>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold"
            >
              Get Brochure
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}