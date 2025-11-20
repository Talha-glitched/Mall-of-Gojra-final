import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router";
import websiteLogo from "@/Assets/Website-Logo.png";
import buildingMark from "@/Assets/Building Logo copy.png";

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
      className="fixed top-0 left-0 right-0 z-50 border-b border-black/40 bg-black/60 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[90px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <Link to="/" className="inline-flex items-center gap-3 sm:gap-4">
              <img
                src={buildingMark}
                alt="Mall of Gojra Icon"
                className="h-20 w-20 object-contain sm:h-16 sm:w-16 lg:h-[5.6rem] lg:w-[5.6rem]"
              />
              <img
                src={websiteLogo}
                alt="Mall of Gojra"
                className="h-14 sm:h-12 lg:h-16 w-auto max-w-[200px] sm:max-w-none"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-xs text-white hover:text-[var(--brand-gold)] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("infrastructure")}
              className="text-xs text-white hover:text-[var(--brand-gold)] transition-colors"
            >
              Infrastructure
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-xs text-white hover:text-[var(--brand-gold)] transition-colors"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-xs text-white hover:text-[var(--brand-gold)] transition-colors"
            >
              Contact
            </button>
            <Link
              to="/vision"
              className="text-xs text-white hover:text-[var(--brand-gold)] transition-colors"
            >
              Vision
            </Link>
            <Button
              onClick={() => scrollToSection("contact")}
              className="text-xs bg-[var(--brand-gold)] text-black font-semibold hover:bg-[rgba(var(--brand-gold-rgb),0.9)]"
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
              className="block w-full text-left text-xs text-white hover:text-[var(--brand-gold)] transition-colors py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("infrastructure")}
              className="block w-full text-left text-xs text-white hover:text-[var(--brand-gold)] transition-colors py-2"
            >
              Infrastructure
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="block w-full text-left text-xs text-white hover:text-[var(--brand-gold)] transition-colors py-2"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-xs text-white hover:text-[var(--brand-gold)] transition-colors py-2"
            >
              Contact
            </button>
            <Link
              to="/vision"
              className="block w-full text-left text-xs text-white hover:text-[var(--brand-gold)] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Vision
            </Link>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full text-xs bg-[var(--brand-gold)] text-black font-semibold hover:bg-[rgba(var(--brand-gold-rgb),0.9)]"
            >
              Get Brochure
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}