import { motion } from "framer-motion";
import { Award, Users, Shield, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function DifferenceSection() {
  const [isTeamDialogOpen, setIsTeamDialogOpen] = useState(false);

  // Team members data
  const teamMembers = [
    {
      name: "Rana Nadeem",
      phone: "+971556444156",
      phoneFormatted: "+971556444156",
      whatsapp: "971556444156",
    },
    {
      name: "Rana Masuood",
      phone: "+971503554207",
      phoneFormatted: "+971503554207",
      whatsapp: "971503554207",
    },
    {
      name: "Rana Shahid",
      phone: "+92 300 8689515",
      phoneFormatted: "+923008689515",
      whatsapp: "923008689515",
    },
  ];

  // Helper function to format phone for display
  const formatPhoneDisplay = (phone: string) => {
    return phone;
  };

  // Helper function to get WhatsApp URL
  const getWhatsAppUrl = (phone: string) => {
    return `https://wa.me/${phone}`;
  };
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
              <div className="pt-2">
                <Button
                  onClick={() => setIsTeamDialogOpen(true)}
                  className="bg-[var(--brand-gold)] text-black font-semibold hover:bg-[rgba(var(--brand-gold-rgb),0.9)] text-sm px-4 py-2"
                >
                  Talk to the Team
                </Button>
              </div>
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

      {/* Team Contact Dialog */}
      <Dialog open={isTeamDialogOpen} onOpenChange={setIsTeamDialogOpen}>
        <DialogContent className="bg-gradient-to-br from-gray-900 to-black border-white/10 text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-[var(--brand-gold)]" />
              Talk to Our Team
            </DialogTitle>
            <DialogDescription className="text-white/70">
              Reach out to our team members via phone or WhatsApp
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <h3 className="font-semibold text-lg text-white mb-2">{member.name}</h3>
                <p className="text-white/80 mb-3 text-sm">{formatPhoneDisplay(member.phone)}</p>
                <div className="flex gap-2">
                  <a
                    href={`tel:${member.phoneFormatted}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors text-sm font-medium"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href={getWhatsAppUrl(member.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-md transition-colors text-sm font-medium"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
