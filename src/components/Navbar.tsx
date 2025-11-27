import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/config/contact";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCall = () => {
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  };
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I would like to know more about your AC services.");
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, "_blank");
  };
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Pricing",
    path: "/pricing"
  }, {
    name: "AMC Plans",
    path: "/amc"
  }, {
    name: "Service Areas",
    path: "/service-areas"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "FAQs",
    path: "/faqs"
  }, {
    name: "Gallery",
    path: "/gallery"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <nav className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-12">
          <Link to="/" className="text-lg font-bold text-primary hover:text-primary/80 transition-colors whitespace-nowrap">
            {CONTACT_INFO.companyName}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {navLinks.map(link => <Link key={link.path} to={link.path} className="px-2 py-1.5 font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap text-base">
                {link.name}
              </Link>)}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2 whitespace-nowrap">
            <Button onClick={handleCall} variant="outline" size="sm" className="gap-1.5 h-8 px-3 text-xs whitespace-nowrap">
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </Button>
            <Button onClick={handleWhatsApp} size="sm" className="gap-1.5 h-8 px-3 text-xs bg-[#25D366] hover:bg-[#20BA5A] text-white whitespace-nowrap">
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <div className="lg:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors">
                {link.name}
              </Link>)}
            <div className="pt-3 space-y-2">
              <Button onClick={handleCall} variant="outline" className="w-full gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              <Button onClick={handleWhatsApp} className="w-full gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};