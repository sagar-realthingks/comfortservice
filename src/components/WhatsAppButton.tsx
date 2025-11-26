import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";

export const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I would like to know more about your AC services.");
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};