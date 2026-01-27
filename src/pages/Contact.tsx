import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { businessInfo, phoneNumbers, cars } from "@/data/cars";
import { generateWhatsAppLink, generateCallLink, generateSMSLink } from "@/utils/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    date: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const car = cars.find((c) => c.id === formData.car);
    let whatsappMessage = `नमस्ते महालक्ष्मी Tour and Travels! 🙏\n\n`;
    whatsappMessage += `मेरा नाम ${formData.name || "ग्राहक"} है।\n`;
    if (formData.phone) whatsappMessage += `📱 Phone: ${formData.phone}\n`;
    whatsappMessage += `\nमुझे गाड़ी बुक करनी है:\n`;
    if (car) {
      whatsappMessage += `🚗 Car: ${car.name}\n`;
      whatsappMessage += `💰 Rate: ₹${car.pricePerKm}/km\n`;
    }
    if (formData.date) whatsappMessage += `📅 Date: ${formData.date}\n`;
    if (formData.location) whatsappMessage += `📍 Pickup: ${formData.location}\n`;
    if (formData.message) whatsappMessage += `\n💬 Message: ${formData.message}\n`;
    whatsappMessage += `\nPlease confirm availability.`;

    window.open(
      `https://wa.me/91${phoneNumbers.primary}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      titleHindi: "व्हाट्सएप",
      value: phoneNumbers.primary,
      action: () => window.open(generateWhatsAppLink(), "_blank"),
      color: "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90",
    },
    {
      icon: Phone,
      title: "Call",
      titleHindi: "कॉल करें",
      value: phoneNumbers.primary,
      action: () => (window.location.href = generateCallLink(phoneNumbers.primary)),
      color: "bg-call text-call-foreground hover:bg-call/90",
    },
    {
      icon: MessageSquare,
      title: "SMS",
      titleHindi: "एसएमएस",
      value: phoneNumbers.primary,
      action: () => (window.location.href = generateSMSLink(phoneNumbers.primary)),
      color: "bg-primary text-primary-foreground hover:bg-primary/90",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Phone className="w-5 h-5" />
            <span className="font-medium">24/7 Available</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            संपर्क करें - Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            हम हमेशा आपकी सेवा में तत्पर हैं। WhatsApp, Call या SMS करें!
          </p>
        </div>
      </section>

      {/* Main Phone Numbers - Prominent Display */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href={generateCallLink(phoneNumbers.primary)}
              className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <Phone className="w-8 h-8" />
              <div>
                <p className="text-sm opacity-80">Primary Number</p>
                <p className="text-2xl md:text-3xl font-bold">{phoneNumbers.primary}</p>
              </div>
            </a>
            <a
              href={generateCallLink(phoneNumbers.secondary)}
              className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <Phone className="w-8 h-8" />
              <div>
                <p className="text-sm opacity-80">Secondary Number</p>
                <p className="text-2xl md:text-3xl font-bold">{phoneNumbers.secondary}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            संपर्क के तरीके - Ways to Contact
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <button
                key={index}
                onClick={method.action}
                className={`flex flex-col items-center gap-4 p-8 rounded-2xl ${method.color} transition-transform hover:scale-105 shadow-lg`}
              >
                <method.icon className="w-12 h-12" />
                <div className="text-center">
                  <p className="text-xl font-bold">{method.titleHindi}</p>
                  <p className="text-sm opacity-90">{method.title}</p>
                  <p className="text-lg font-medium mt-2">{method.value}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Booking Form - बुकिंग फॉर्म
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill the form and send via WhatsApp
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Your Name - नाम</Label>
                    <Input
                      id="name"
                      placeholder="आपका नाम..."
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number - फ़ोन</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="आपका नंबर..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="car">Select Car - गाड़ी चुनें</Label>
                  <Select
                    value={formData.car}
                    onValueChange={(value) =>
                      setFormData({ ...formData, car: value })
                    }
                  >
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

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Pickup Date - तारीख</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Pickup Location - स्थान</Label>
                    <Input
                      id="location"
                      placeholder="पिकअप स्थान..."
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message - संदेश (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="कोई विशेष अनुरोध..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2 py-6 text-lg"
                >
                  <Send className="w-5 h-5" />
                  WhatsApp पर भेजें - Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Business Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Service Area</p>
                      <p className="text-muted-foreground">
                        {businessInfo.serviceAreasHindi}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {businessInfo.serviceAreas}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Working Hours</p>
                      <p className="text-muted-foreground">
                        {businessInfo.workingHoursHindi}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {businessInfo.workingHours}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone Numbers</p>
                      <a
                        href={generateCallLink(phoneNumbers.primary)}
                        className="block text-primary hover:underline"
                      >
                        {phoneNumbers.primary}
                      </a>
                      <a
                        href={generateCallLink(phoneNumbers.secondary)}
                        className="block text-primary hover:underline"
                      >
                        {phoneNumbers.secondary}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Quick Actions - तुरंत संपर्क
                </h3>
                <div className="space-y-3">
                  <a href={generateWhatsAppLink()} className="block">
                    <Button className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Chat
                    </Button>
                  </a>
                  <a href={generateCallLink(phoneNumbers.primary)} className="block">
                    <Button className="w-full bg-call hover:bg-call/90 text-call-foreground gap-2">
                      <Phone className="w-5 h-5" />
                      Call Now - अभी कॉल करें
                    </Button>
                  </a>
                  <a href={generateSMSLink(phoneNumbers.primary)} className="block">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Send SMS - एसएमएस भेजें
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
