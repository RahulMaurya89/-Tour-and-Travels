import { Link } from "react-router-dom";
import { Car, Phone, MapPin, Clock, Heart } from "lucide-react";
import { businessInfo, phoneNumbers } from "@/data/cars";
import { generateCallLink, generateWhatsAppLink } from "@/utils/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{businessInfo.name}</h3>
                <p className="text-sm opacity-80">{businessInfo.tagline}</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              {businessInfo.taglineEnglish} - Trust, Safety, and Comfort in every journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Home - होम
              </Link>
              <Link to="/car-rates" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Car Rates - गाड़ी रेट्स
              </Link>
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                About Us - हमारे बारे में
              </Link>
              <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Contact - संपर्क
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us - संपर्क करें</h4>
            <div className="space-y-3">
              <a
                href={generateCallLink(phoneNumbers.primary)}
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                {phoneNumbers.primary}
              </a>
              <a
                href={generateCallLink(phoneNumbers.secondary)}
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                {phoneNumbers.secondary}
              </a>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <MapPin className="w-4 h-4" />
                {businessInfo.serviceAreasHindi}
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Clock className="w-4 h-4" />
                {businessInfo.workingHoursHindi}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Book Now - अभी बुक करें</h4>
            <p className="text-sm opacity-80">
              WhatsApp या Call करके तुरंत बुकिंग करें!
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={generateWhatsAppLink()}
                className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                WhatsApp पर बुक करें
              </a>
              <a
                href={generateCallLink(phoneNumbers.primary)}
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Call करें
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>
              © {currentYear} {businessInfo.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 fill-current" /> for safe travels
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
