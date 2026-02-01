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

  // ✅ FIXED: Always sends FULL DETAILS
  const handleBooking = () => {
    const car = cars.find((c) => c.id === selectedCar);

    const carName = car ? car.name : "Not Selected";
    const carPrice = car ? `₹${car.pricePerKm}/km` : "N/A";
    const date = pickupDate || "Not Selected";
    const location = pickupLocation || "Not Provided";

    const message = `
🚗 *New Cab Booking Request*

📍 Pickup Location: ${location}
📅 Pickup Date: ${date}
🚘 Car: ${carName}
💰 Price: ${carPrice}

Please confirm availability.
`;

    const whatsappUrl = `https://wa.me/${phoneNumbers.primary}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const trustBadges = [
    { icon: Clock, label: "24/7 उपलब्ध", sublabel: "Available" },
    { icon: Shield, label: "प्रमाणित चालक", sublabel: "Experienced Driver" },
    { icon: IndianRupee, label: "कम कीमत", sublabel: "Best Rates" },
    { icon: MapPin, label: "लोकल सर्विस", sublabel: "Local Service" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
        </div>

        <div className="container relative z-10 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold border border-gold/30">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">
                  Trusted Local Service
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
                {businessInfo.name}
              </h1>

              <p className="text-xl text-primary-foreground/90">
                {businessInfo.tagline}
              </p>

              <p className="text-lg text-primary-foreground/80">
                {businessInfo.taglineEnglish}
              </p>

              <div className="flex gap-4 justify-center lg:justify-start">
                {/* Generic WhatsApp */}
                <a href={generateWhatsAppLink()}>
                  <Button
                    size="lg"
                    className="bg-whatsapp hover:bg-whatsapp/90 gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp पर बुक करें
                  </Button>
                </a>

                <a href={generateCallLink(phoneNumbers.primary)}>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Phone className="w-5 h-5" />
                    Call करें
                  </Button>
                </a>
              </div>
            </div>

            {/* QUICK BOOKING FORM */}
            <div className="bg-card/95 backdrop-blur-md rounded-2xl p-8 border border-border shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Quick Booking
                </h2>
                <p className="text-muted-foreground">
                  Fill details & book instantly
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Select Car</Label>
                  <Select value={selectedCar} onValueChange={setSelectedCar}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose car" />
                    </SelectTrigger>
                    <SelectContent>
                      {cars.map((car) => (
                        <SelectItem key={car.id} value={car.id}>
                          {car.name} – ₹{car.pricePerKm}/km
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Pickup Date</Label>
                  <Input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label>Pickup Location</Label>
                  <Input
                    placeholder="Enter pickup location"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="mt-1"
                  />
                </div>

                {/* ✅ ONLY THIS BUTTON OPENS WHATSAPP */}
                <Button
                  onClick={handleBooking}
                  className="w-full bg-primary text-primary-foreground gap-2 py-6 text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book on WhatsApp
                </Button>

                <a href={generateCallLink(phoneNumbers.primary)}>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call: {phoneNumbers.primary}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-10 bg-secondary">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-card text-center hover:shadow-md transition"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="mt-2 font-bold">{item.label}</p>
              <p className="text-xs text-muted-foreground">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CARS */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/car-rates">
              <Button variant="outline" size="lg" className="gap-2">
                View All Cars
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Home;
