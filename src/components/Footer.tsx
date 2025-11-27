import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";

export const Footer = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I have a question.");
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{CONTACT_INFO.companyName}</h3>
            <p className="text-sm mb-4 opacity-90">
              Professional AC service provider in Pune & PCMC. {CONTACT_INFO.experienceText}.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="opacity-90">{CONTACT_INFO.address}</span>
              </div>
              {CONTACT_INFO.gstin && (
                <p className="opacity-75 text-xs">GSTIN: {CONTACT_INFO.gstin}</p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/amc" className="hover:text-primary transition-colors">AMC Plans</Link></li>
              <li><Link to="/service-areas" className="hover:text-primary transition-colors">Service Areas</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/faqs" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                {CONTACT_INFO.phone}
              </a>
              {CONTACT_INFO.phone2 && (
                <a href={`tel:${CONTACT_INFO.phone2}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  {CONTACT_INFO.phone2}
                </a>
              )}
              <button onClick={handleWhatsApp} className="flex items-center gap-2 hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </button>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                {CONTACT_INFO.email}
              </a>
              <p className="opacity-90 pt-2">{CONTACT_INFO.workingHours}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-6 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} {CONTACT_INFO.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};