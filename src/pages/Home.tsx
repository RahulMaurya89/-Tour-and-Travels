import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  Shield,
  IndianRupee,
  MapPin,
  MessageCircle,
  Phone,
  ChevronRight,
  Star,
  Users,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CarCard from "@/components/CarCard";
import { cars, businessInfo, phoneNumbers } from "@/data/cars";
import { generateWhatsAppLink, generateCallLink } from "@/utils/contact";

const Home = () => {
  const [selectedCar, setSelectedCar] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");

  const featuredCars = cars.slice(0, 3);

  const handleBooking = () => {
    const car = cars.find((c) => c.id === selectedCar);
    if (car) {
      window.open(
        generateWhatsAppLink(car.name, car.pricePerKm, pickupDate, pickupLocation),
        "_blank"
      );
    } else {
      window.open(generateWhatsAppLink(), "_blank");
    }
  };

  const trustBadges = [
    { icon: Clock, label: "24/7 उपलब्ध", sublabel: "Available" },
    { icon: Shield, label: "प्रमाणित चालक", sublabel: "Experienced Driver" },
    { icon: IndianRupee, label: "कम कीमत, बेहतर सेवा", sublabel: "Best Rates" },
    { icon: MapPin, label: "लोकल सर्विस", sublabel: "Local Service" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
        </div>

        <div className="container relative z-10 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Hero Text */}
            <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold border border-gold/30">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">Trusted Local Service</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                {businessInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
                {businessInfo.tagline}
              </p>
              <p className="text-lg text-primary-foreground/80">
                {businessInfo.taglineEnglish}
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href={generateWhatsAppLink()}>
                  <Button
                    size="lg"
                    className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2 text-lg px-8"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp पर बुक करें
                  </Button>
                </a>
                <a href={generateCallLink(phoneNumbers.primary)}>
                  <Button
                    size="lg"
                    variant="outline"
                    className=""
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call करें</span> {/* Wrap text in span */}
                  </Button>
                </a>
              </div>
            </div>

            {/* Quick Booking Form */}
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-border animate-fade-in-up stagger-2">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Quick Booking - तुरंत बुकिंग
                </h2>
                <p className="text-muted-foreground mt-1">
                  Fill details and book on WhatsApp
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="car" className="text-foreground">
                    Select Car - गाड़ी चुनें
                  </Label>
                  <Select value={selectedCar} onValueChange={setSelectedCar}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose your car..." />
                    </SelectTrigger>
                    <SelectContent>
                      {cars.map((car) => (
                        <SelectItem key={car.id} value={car.id}>
                          {car.name} - ₹{car.pricePerKm}/km
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="date" className="text-foreground">
                    Pickup Date - तारीख
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="location" className="text-foreground">
                    Pickup Location - पिकअप स्थान
                  </Label>
                  <Input
                    id="location"
                    placeholder="Enter location..."
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Button
                  onClick={handleBooking}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg py-6"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book on WhatsApp
                </Button>

                <a
                  href={generateCallLink(phoneNumbers.primary)}
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    या Call करें: {phoneNumbers.primary}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold text-foreground text-center">
                  {badge.label}
                </span>
                <span className="text-xs text-muted-foreground">
                  {badge.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              हमारी गाड़ियाँ - Our Cars
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of well-maintained, comfortable vehicles for
              your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCars.map((car, index) => (
              <div
                key={car.id}
                className={`animate-fade-in-up stagger-${index + 1}`}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/car-rates">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
              >
                सभी गाड़ियाँ देखें - View All Cars
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              हमें क्यों चुनें? - Why Choose Us?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                सुरक्षित यात्रा
              </h3>
              <p className="text-muted-foreground">
                Safe Travel - Experienced drivers, well-maintained vehicles,
                your safety is our priority
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <IndianRupee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                किफ़ायती दाम
              </h3>
              <p className="text-muted-foreground">
                Affordable Rates - Best prices in the area, no hidden charges,
                transparent billing
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                परिवार की तरह
              </h3>
              <p className="text-muted-foreground">
                Family Service - We treat every customer like family, personal
                attention guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <Car className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            आज ही बुक करें!
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book Today! WhatsApp या Call करके अपनी यात्रा की शुरुआत करें
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={generateWhatsAppLink()}>
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2 text-lg px-8"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: {phoneNumbers.primary}
              </Button>
            </a>
            <a href={generateCallLink(phoneNumbers.secondary)}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground gap-2 text-lg px-8 hover:bg-transparent hover:text-primary-foreground transition-none"
              >
                <Phone className="w-5 h-5" />
                Call: {phoneNumbers.secondary}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Home;
