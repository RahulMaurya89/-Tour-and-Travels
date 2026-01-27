import { whatsappNumber, phoneNumbers } from "@/data/cars";

export const generateWhatsAppLink = (
  carName?: string,
  pricePerKm?: number,
  pickupDate?: string,
  pickupLocation?: string
) => {
  let message = `नमस्ते महालक्ष्मी Tour and Travels! 🙏\n\n`;
  
  if (carName && pricePerKm) {
    message += `मुझे गाड़ी बुक करनी है:\n`;
    message += `🚗 Car: ${carName}\n`;
    message += `💰 Rate: ₹${pricePerKm}/km\n`;
    if (pickupDate) message += `📅 Date: ${pickupDate}\n`;
    if (pickupLocation) message += `📍 Pickup: ${pickupLocation}\n`;
    message += `\nPlease confirm availability.`;
  } else {
    message += `मुझे गाड़ी बुक करनी है। कृपया संपर्क करें।`;
  }
  
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const generateCallLink = (phoneNumber?: string) => {
  return `tel:${phoneNumber || phoneNumbers.primary}`;
};

export const generateSMSLink = (phoneNumber?: string, message?: string) => {
  const defaultMessage = "नमस्ते, मुझे गाड़ी बुक करनी है।";
  return `sms:${phoneNumber || phoneNumbers.primary}?body=${encodeURIComponent(message || defaultMessage)}`;
};
