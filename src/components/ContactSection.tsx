import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName") as string,
      company: formData.get("company") as string,
      contactNumber: formData.get("contactNumber") as string,
      email: formData.get("email") as string,
    };

    try {
      await axios.post("/api/leads", data);
      toast.success("Thank you! We'll reach out within 24 hours.", {
        description: "Check your inbox for the brochure & floor plan.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Lead submission failed", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgba(var(--brand-gold-rgb),0.1)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Expand{" "}
              <span className="text-[var(--brand-gold)]">
                Without the Pain
              </span>{" "}
              of Construction?
            </h2>
            <p className="text-xl text-white/70">Your flagship launch in Gojra starts here.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-white">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-white">Company / Brand *</Label>
                <Input
                  id="company"
                  name="company"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contactNumber" className="text-white">Contact Number *</Label>
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  placeholder="+92 300 1234567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[var(--brand-gold)] text-black font-bold text-lg py-6 hover:bg-[rgba(var(--brand-gold-rgb),0.9)] cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Brochure & Schedule Visit"
              )}
            </Button>

            <p className="text-sm text-white/50 text-center">
              📝 You'll receive: Brochure • Floor Plan • Site Tour Options
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
