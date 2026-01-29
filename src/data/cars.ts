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

export const cars: Car[] =  [
  {
    id: "desire",
    name: "Maruti Desire",
    nameHindi: "मारुति डिज़ायर",
    type: "Sedan",
    seats: 4,
    features: ["AC", "Comfort Ride", "Fuel Efficient"],
    featuresHindi: ["एसी", "आरामदायक सफ़र", "किफ़ायती"],
    image: desireImg,
    isPopular: true,
  },

  {
    id: "ertiga",
    name: "Maruti Ertiga",
    nameHindi: "मारुति अर्टिगा",
    type: "7-Seater",
    seats: 7,
    features: ["Family Trip", "Spacious", "AC"],
    featuresHindi: ["परिवार यात्रा", "विशाल", "एसी"],
    image: ertigaImg,
    isPopular: true,
  },

  {
    id: "innova-old",
    name: "Innova (Old)",
    nameHindi: "इनोवा (पुराना मॉडल)",
    type: "7-Seater",
    seats: 7,
    features: ["Reliable", "Comfort", "AC"],
    featuresHindi: ["भरोसेमंद", "आरामदायक", "एसी"],
    image: innovaOldImg,
  },

  {
    id: "innova-crysta",
    name: "Innova Crysta",
    nameHindi: "इनोवा क्रिस्टा",
    type: "Premium 7-Seater",
    seats: 7,
    features: ["Luxury", "Captain Seats", "Premium AC"],
    featuresHindi: ["लक्ज़री", "कैप्टन सीट", "प्रीमियम एसी"],
    image: innovaOldImg,
    isPremium: true,
  },

  {
    id: "fortuner",
    name: "Toyota Fortuner",
    nameHindi: "टोयोटा फॉर्च्यूनर",
    type: "Luxury SUV",
    seats: 7,
    features: ["Royal Travel", "Powerful", "Premium"],
    featuresHindi: ["शाही सफ़र", "ताक़तवर", "प्रीमियम"],
    image: fortunerImg,
    isPremium: true,
  },

  {
    id: "scorpio",
    name: "Mahindra Scorpio",
    nameHindi: "महिंद्रा स्कॉर्पियो",
    type: "SUV",
    seats: 7,
    features: ["Strong Build", "Highway King", "AC"],
    featuresHindi: ["मज़बूत", "हाईवे किंग", "एसी"],
    image: fortunerImg,
    isPremium: true,
  },

  // 🚐 Travellers
  {
    id: "traveller-12",
    name: "Traveller 12 Seater",
    nameHindi: "ट्रैवलर 12 सीटर",
    type: "Mini Bus",
    seats: 12,
    features: ["Group Travel", "Comfort Seats", "AC"],
    featuresHindi: ["ग्रुप यात्रा", "आरामदायक सीट", "एसी"],
    image: traveller12Img,
  },
  {
    id: "traveller-17",
    name: "Traveller 17 Seater",
    nameHindi: "ट्रैवलर 17 सीटर",
    type: "Mini Bus",
    seats: 17,
    features: ["Tour Trips", "Spacious", "AC"],
    featuresHindi: ["टूर यात्रा", "विशाल", "एसी"],
    image: traveller17Img,
  },
  {
    id: "traveller-26",
    name: "Traveller 26 Seater",
    nameHindi: "ट्रैवलर 26 सीटर",
    type: "Bus",
    seats: 26,
    features: ["Large Group", "Comfort Ride", "AC"],
    featuresHindi: ["बड़ा ग्रुप", "आरामदायक सफ़र", "एसी"],
    image: traveller17Img,
  },

  // 🚘 Luxury Cars
  {
    id: "audi",
    name: "Audi",
    nameHindi: "ऑडी",
    type: "Luxury",
    seats: 4,
    features: ["Luxury Ride", "Premium Interior"],
    featuresHindi: ["लक्ज़री सफ़र", "प्रीमियम इंटीरियर"],
    image: audiImg,
    isLuxury: true,
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz",
    nameHindi: "मर्सिडीज़ बेंज़",
    type: "Luxury",
    seats: 4,
    features: ["Ultra Luxury", "Elite Travel"],
    featuresHindi: ["अल्ट्रा लक्ज़री", "एलिट सफ़र"],
    image: mercedesImg,
    isLuxury: true,
  },
  {
    id: "bmw",
    name: "BMW",
    nameHindi: "बीएमडब्ल्यू",
    type: "Luxury",
    seats: 4,
    features: ["Sporty", "Premium Comfort"],
    featuresHindi: ["स्पोर्टी", "प्रीमियम आराम"],
    image: bmwImg,
    isLuxury: true,
  },
  {
    id: "jaguar",
    name: "Jaguar",
    nameHindi: "जगुआर",
    type: "Luxury",
    seats: 4,
    features: ["Royal Feel", "Premium Ride"],
    featuresHindi: ["शाही एहसास", "प्रीमियम सफ़र"],
    image: jaguarImg,
    isLuxury: true,
  },

  // 🚘 Vintage & Bus
  {
    id: "vintage",
    name: "Vintage Car",
    nameHindi: "विंटेज कार",
    type: "Royal Classic",
    seats: 4,
    features: ["Wedding Special", "Royal Look"],
    featuresHindi: ["शादी स्पेशल", "शाही लुक"],
    image: vintageImg,
  },
  {
    id: "bus",
    name: "All Type Buses",
    nameHindi: "सभी प्रकार की बसें",
    type: "Bus Service",
    seats: 40,
    features: ["Tours", "School", "Corporate"],
    featuresHindi: ["टूर", "स्कूल", "कॉर्पोरेट"],
    image: busImg,
  },
];

export const phoneNumbers = {
  primary: "9140105344",
  secondary: "9721381541",
};

export const whatsappNumber = "919140105344";

export const businessInfo = {
  name: "माँलक्ष्मी Tour and Travels",
  nameEnglish: "Maalaxmi Tour and Travels",
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
