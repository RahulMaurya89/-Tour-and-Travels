import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessInfo, phoneNumbers } from "@/data/cars";
import { generateCallLink } from "@/utils/contact";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", labelHindi: "होम" },
    { path: "/car-rates", label: "Car Rates", labelHindi: "गाड़ी रेट्स" },
    { path: "/about", label: "About", labelHindi: "हमारे बारे में" },
    { path: "/contact", label: "Contact", labelHindi: "संपर्क" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <Car className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-base font-bold text-primary leading-tight">
                {businessInfo.name}
              </h1>
              <p className="text-xs text-muted-foreground">
                {businessInfo.taglineEnglish}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center gap-2">
            <a href={generateCallLink(phoneNumbers.primary)}>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-1"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{phoneNumbers.primary}</span>
                <span className="sm:hidden">Call</span>
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.labelHindi} - {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
