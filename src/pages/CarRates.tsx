import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CarCard from "@/components/CarCard";
import { cars, businessInfo, phoneNumbers } from "@/data/cars";
import { generateWhatsAppLink, generateCallLink } from "@/utils/contact";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Car, CheckCircle } from "lucide-react";
import desireImg from "@/assets/44.jpeg";
import ertigaImg from "@/assets/55.jpeg";
import innovaOldImg from "@/assets/555.jpeg";
import fortunerImg from "@/assets/222.jpeg";
import traveller12Img from "@/assets/111.jpeg";
import traveller17Img from "@/assets/66.jpeg";
import audiImg from "@/assets/77.jpeg";
import mercedesImg from "@/assets/666.jpeg";
import bmwImg from "@/assets/99.jpeg";
import jaguarImg from "@/assets/88.jpeg";
import busImg from "@/assets/bus.jpeg";

const CarRates = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Car className="w-5 h-5" />
            <span className="font-medium">Premium Vehicles</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            गाड़ी रेट्स - Car Rates
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Choose from our range of comfortable, well-maintained vehicles. 
            All rates are per kilometer with experienced drivers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={generateWhatsAppLink()}>
              <Button className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp पर बुक करें
              </Button>
            </a>
            <a href={generateCallLink(phoneNumbers.primary)}>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
                <Phone className="w-5 h-5" />
                Call: {phoneNumbers.primary}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Rate Features */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Experienced Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">AC Vehicles</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">24/7 Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* All Cars Grid */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cars.map((car, index) => (
              <div
                key={car.id}
                className={`animate-fade-in-up stagger-${Math.min(index + 1, 5)}`}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Table - Alternative View */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Rate Chart - रेट चार्ट
          </h2>
          
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full bg-card rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-4 py-4 text-left font-semibold">Car Type</th>
                  <th className="px-4 py-4 text-center font-semibold">Seats</th>
                  <th className="px-4 py-4 text-right font-semibold">Rate/km</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car, index) => (
                  <tr
                    key={car.id}
                    className={`border-b border-border ${
                      index % 2 === 0 ? "bg-card" : "bg-secondary/30"
                    }`}
                  >
                    <td className="px-4 py-4">
                      <div>
                        <p className="font-semibold text-foreground">{car.name}</p>
                        <p className="text-sm text-muted-foreground">{car.nameHindi}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">
                        {car.seats}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="text-xl font-bold text-primary">₹{car.pricePerKm}</span>
                      <span className="text-sm text-muted-foreground">/km</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-muted-foreground mt-6 text-sm">
            * Rates may vary based on trip distance and conditions. Contact us for exact quote.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            अभी बुक करें! - Book Now!
          </h2>
          <p className="text-lg opacity-90 mb-6">
            WhatsApp या Call करके अपनी पसंद की गाड़ी बुक करें
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={generateWhatsAppLink()}>
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: {phoneNumbers.primary}
              </Button>
            </a>
            <a href={generateCallLink(phoneNumbers.secondary)}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2"
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

export default CarRates;
