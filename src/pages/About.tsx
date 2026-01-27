import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OwnerImg from "@/assets/Owner.png";
import FloatingButtons from "@/components/FloatingButtons";
import { businessInfo, phoneNumbers } from "@/data/cars";
import { generateWhatsAppLink, generateCallLink } from "@/utils/contact";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Phone,
  Heart,
  Shield,
  Clock,
  Users,
  Star,
  Award,
  MapPin,
  Quote,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "सुरक्षा - Safety",
      description: "Your safety is our top priority. All our drivers are verified and trained.",
    },
    {
      icon: Heart,
      title: "समर्पण - Dedication",
      description: "We are dedicated to providing the best travel experience.",
    },
    {
      icon: Clock,
      title: "समय - Punctuality",
      description: "We value your time. Always on time, every time.",
    },
    {
      icon: Users,
      title: "परिवार - Family Values",
      description: "Every customer is treated like family with personal attention.",
    },
  ];

  const achievements = [
    { number: "10+", label: "Years of Service", labelHindi: "वर्षों का अनुभव" },
    { number: "5000+", label: "Happy Customers", labelHindi: "खुश ग्राहक" },
    { number: "100+", label: "Trips Monthly", labelHindi: "मासिक यात्राएं" },
    { number: "24/7", label: "Available", labelHindi: "उपलब्ध" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Our Story</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              हमारी कहानी - Our Story
            </h1>
            <p className="text-xl text-primary font-medium">
              {businessInfo.tagline}
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              {businessInfo.taglineEnglish}
            </p>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Owner Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                  <img
                    src={OwnerImg}
                    alt="Owner portrait"
                    className="w-full h-full object-cover"
                  />

                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80"
                    alt="Our office"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80"
                    alt="On the road"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80"
                    alt="Happy customers"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Owner Story */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {businessInfo.ownerName}
                  </h2>
                  <p className="text-muted-foreground">
                    Founder & Owner - संस्थापक
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <div className="flex gap-3">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0 rotate-180" />
                  <p className="text-lg italic">
                    "जब मैंने यह सफ़र शुरू किया था, तो मेरा सपना था कि हर यात्री को
                    अपने परिवार की तरह महसूस कराऊं। आज भी वही जज़्बा है।"
                  </p>
                </div>

                <p>
                  <strong className="text-foreground">महालक्ष्मी Tour and Travels</strong> की
                  शुरुआत एक छोटे से सपने से हुई थी - लोगों को सुरक्षित और आरामदायक
                  यात्रा का अनुभव देना।
                </p>

                <p>
                  पिछले कई वर्षों में हमने हज़ारों परिवारों को उनकी यात्राओं में साथ दिया है।
                  चाहे शादी हो, तीर्थ यात्रा हो, या बिज़नेस ट्रिप - हर सफ़र में
                  हमने अपना सर्वश्रेष्ठ दिया है।
                </p>

                <p>
                  हमारी टीम में अनुभवी ड्राइवर हैं जो रास्ते को अच्छी तरह जानते हैं।
                  हमारी गाड़ियाँ हमेशा साफ-सुथरी और अच्छी हालत में रहती हैं।
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={generateCallLink(phoneNumbers.primary)}>
                  <Button className="gap-2 bg-primary hover:bg-primary/90">
                    <Phone className="w-5 h-5" />
                    {phoneNumbers.primary}
                  </Button>
                </a>
                <a href={generateCallLink(phoneNumbers.secondary)}>
                  <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Phone className="w-5 h-5" />
                    {phoneNumbers.secondary}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{item.number}</p>
                <p className="text-sm opacity-90">{item.labelHindi}</p>
                <p className="text-xs opacity-70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              हमारे मूल्य - Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at महालक्ष्मी Tour and Travels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              हमें क्यों चुनें? - Why Choose Us?
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start p-6 rounded-2xl bg-secondary">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    स्थानीय अनुभव - Local Experience
                  </h3>
                  <p className="text-muted-foreground">
                    हम इस क्षेत्र को अच्छी तरह जानते हैं। हमारे ड्राइवर हर गली-मोहल्ले से परिचित हैं।
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 rounded-2xl bg-secondary">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    सुरक्षित यात्रा - Safe Journey
                  </h3>
                  <p className="text-muted-foreground">
                    सभी ड्राइवर वेरिफाइड हैं। गाड़ियों का नियमित मेंटेनेंस होता है।
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 rounded-2xl bg-secondary">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    लोकल और आउटस्टेशन - Local & Outstation
                  </h3>
                  <p className="text-muted-foreground">
                    शहर के अंदर हो या बाहर, हम हर जगह आपके साथ हैं।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            हमसे जुड़ें! - Connect With Us!
          </h2>
          <p className="text-lg opacity-90 mb-6">
            अपनी अगली यात्रा के लिए आज ही संपर्क करें
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={generateWhatsAppLink()}>
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp पर संपर्क करें
              </Button>
            </a>
            <a href={generateCallLink(phoneNumbers.primary)}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2"
              >
                <Phone className="w-5 h-5" />
                Call करें
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

export default About;
