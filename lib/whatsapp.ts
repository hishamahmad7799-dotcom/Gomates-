import { siteConfig } from '@/config/site'

/**
 * Generates an encoded WhatsApp link to contact the agency with a pre-filled trip inquiry.
 * @param tripName Optional name of the trip the user is inquiring about
 * @param customMsg Optional override message
 */
export function getWhatsAppUrl(tripName?: string, customMsg?: string): string {
  let cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '')
  
  // Prepend India country code 91 if 10-digit number provided
  if (cleanNumber.length === 10) {
    cleanNumber = `91${cleanNumber}`
  }
  
  let message = customMsg
  if (!message) {
    if (tripName) {
      message = `Hi! 👋 I'm interested in joining the *${tripName}* group trip. Could you please share the detailed itinerary and booking process?`
    } else {
      message = `Hi! 👋 I'd like to inquire about your upcoming group trips across India. Please share more details!`
    }
  }

  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`
}
