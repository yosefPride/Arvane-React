import { SITE_CONFIG } from "@/config/site";

export function getWhatsAppLink(message) {
  const number = (SITE_CONFIG.contact.whatsapp ?? "").replace(/\D/g, "");
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${query}`;
}
