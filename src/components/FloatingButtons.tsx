import { MessageCircle, Phone } from "lucide-react";
import { phoneNumbers } from "@/data/cars";
import { generateWhatsAppLink, generateCallLink } from "@/utils/contact";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-between items-end pointer-events-none md:left-auto md:right-6 md:flex-col md:gap-3">
      {/* Call Button - Left on mobile, hidden on desktop unless needed */}
      <a
        href={generateCallLink(phoneNumbers.primary)}
        className="pointer-events-auto flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-call text-call-foreground shadow-lg hover:scale-110 transition-transform md:hidden"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 md:w-7 md:h-7" />
      </a>

      {/* WhatsApp Button - Right */}
      <a
        href={generateWhatsAppLink()}
        className="pointer-events-auto flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg hover:scale-105 transition-transform animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        <span className="hidden sm:inline font-medium">WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
