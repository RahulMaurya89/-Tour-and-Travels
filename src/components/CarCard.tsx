import { Users, Snowflake, Star, Crown, MessageCircle, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car } from "@/data/cars";
import { generateWhatsAppLink, generateCallLink } from "@/utils/contact";
import { phoneNumbers } from "@/data/cars";

interface CarCardProps {
  car: Car;
  showActions?: boolean;
}

const CarCard = ({ car, showActions = true }: CarCardProps) => {
  return (
    <Card className="group overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-secondary">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {car.isPopular && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gold text-gold-foreground text-xs font-semibold">
              <Star className="w-3 h-3" />
              Popular
            </span>
          )}
          {car.isPremium && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              <Crown className="w-3 h-3" />
              Premium
            </span>
          )}
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
          
        </div>
      </div>

      <CardContent className="p-4 md:p-6">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-foreground">{car.name}</h3>
          <p className="text-sm text-primary font-medium">{car.nameHindi}</p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
            <Users className="w-4 h-4" />
            {car.seats} Seater
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
            <Snowflake className="w-4 h-4" />
            AC
          </span>
          <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
            {car.type}
          </span>
        </div>

        {/* Features List */}
        <div className="flex flex-wrap gap-1 mb-4">
          {car.featuresHindi.map((feature, index) => (
            <span
              key={index}
              className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        {showActions && (
          <div className="flex flex-col sm:flex-row gap-2">
            <a href={generateWhatsAppLink(car.name, car.pricePerKm)} className="flex-1">
              <Button className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Book
              </Button>
            </a>
            <a href={generateCallLink(phoneNumbers.primary)} className="flex-1">
              <Button variant="outline" className="w-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CarCard;
