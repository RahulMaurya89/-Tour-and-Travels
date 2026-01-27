// Car data for the website
export interface Car {
  id: string;
  name: string;
  nameHindi: string;
  type: string;
  pricePerKm: number;
  seats: number;
  features: string[];
  featuresHindi: string[];
  image: string;
  isPopular?: boolean;
  isPremium?: boolean;
}

export const cars: Car[] = [
  {
    id: "hatchback-sedan",
    name: "Hatchback / Sedan",
    nameHindi: "हैचबैक / सेडान",
    type: "Economy",
    pricePerKm: 10,
    seats: 4,
    features: ["AC", "Comfortable", "Fuel Efficient"],
    featuresHindi: ["एसी", "आरामदायक", "किफ़ायती"],
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
    isPopular: true,
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    nameHindi: "मारुति अर्टिगा",
    type: "7-Seater",
    pricePerKm: 12,
    seats: 7,
    features: ["7 Seater", "Family Trip", "Spacious"],
    featuresHindi: ["7 सीटर", "परिवार यात्रा", "विशाल"],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    isPopular: true,
  },
  {
    id: "carens",
    name: "Kia Carens",
    nameHindi: "किआ कैरेंस",
    type: "Premium 7-Seater",
    pricePerKm: 14,
    seats: 7,
    features: ["7 Seater", "Premium Interior", "Modern"],
    featuresHindi: ["7 सीटर", "प्रीमियम इंटीरियर", "आधुनिक"],
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
  },
  {
    id: "innova",
    name: "Innova Crysta",
    nameHindi: "इनोवा क्रिस्टा",
    type: "Luxury",
    pricePerKm: 16,
    seats: 7,
    features: ["7 Seater", "Luxury", "Captain Seats"],
    featuresHindi: ["7 सीटर", "लक्ज़री", "कैप्टन सीट"],
    image: "https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=800&q=80",
    isPremium: true,
  },
  {
    id: "fortuner-scorpio",
    name: "Fortuner / Scorpio",
    nameHindi: "फॉर्च्यूनर / स्कॉर्पियो",
    type: "SUV Royal",
    pricePerKm: 40,
    seats: 7,
    features: ["SUV", "Royal Travel", "Premium"],
    featuresHindi: ["एसयूवी", "शाही सफ़र", "प्रीमियम"],
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    isPremium: true,
  },
];

export const phoneNumbers = {
  primary: "9140105344",
  secondary: "9721381541",
};

export const whatsappNumber = "919140105344";

export const businessInfo = {
  name: "महालक्ष्मी Tour and Travels",
  nameEnglish: "Mahalaxmi Tour and Travels",
  tagline: "आपकी सफ़र, हमारी ज़िम्मेदारी",
  taglineEnglish: "Your Journey, Our Responsibility",
  ownerName: "चंदन रॉय",
  ownerNameEnglish: "Chandan Rai",
  serviceAreas: "Local & Outstation Services",
  serviceAreasHindi: "लोकल और आउटस्टेशन सेवाएं",
  workingHours: "24/7 Available",
  workingHoursHindi: "24/7 उपलब्ध",
};

export const trustBadges = [
  { icon: "Clock", label: "24/7 Available", labelHindi: "24/7 उपलब्ध" },
  { icon: "Shield", label: "Safe Driver", labelHindi: "सुरक्षित ड्राइवर" },
  { icon: "IndianRupee", label: "Best Rates", labelHindi: "बेहतरीन दाम" },
  { icon: "MapPin", label: "Local Service", labelHindi: "लोकल सर्विस" },
];
