import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "@/config/contact";

const Pricing = () => {
  const handleWhatsApp = (service: string) => {
    const message = encodeURIComponent(`Hi! I'd like to know more about pricing for ${service}.`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, "_blank");
  };

  const pricingData = [
    {
      category: "AC Servicing",
      items: [
        { name: "Split AC - Basic Service", price: "₹399" },
        { name: "Split AC - Deep Cleaning", price: "₹799" },
        { name: "Window AC - Basic Service", price: "₹349" },
        { name: "Window AC - Deep Cleaning", price: "₹699" }
      ]
    },
    {
      category: "Installation & Uninstallation",
      items: [
        { name: "Split AC Installation", price: "₹799 - ₹1,499" },
        { name: "Window AC Installation", price: "₹599 - ₹999" },
        { name: "AC Uninstallation", price: "₹499 - ₹799" }
      ]
    },
    {
      category: "Repair & Gas Refill",
      items: [
        { name: "Gas Refilling (per 100g)", price: "₹1,499 - ₹2,499" },
        { name: "PCB Repair", price: "₹799 onwards" },
        { name: "Compressor Repair", price: "₹1,999 onwards" },
        { name: "General Troubleshooting", price: "₹299 onwards" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear, upfront pricing with no hidden charges. Final price confirmed after inspection.
          </p>
        </div>

        <div className="space-y-8">
          {pricingData.map((category, index) => (
            <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
                <CardDescription>Professional service with warranty included</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <span className="font-medium">{item.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-primary font-bold">{item.price}</span>
                        <div className="flex gap-2">
                          <Button asChild size="sm" variant="outline">
                            <Link to="/contact">Book</Link>
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleWhatsApp(item.name)}
                          >
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-accent/5 rounded-lg p-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Pricing Notes</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Prices may vary based on AC condition, location, and accessibility</li>
              <li>• Parts and materials are charged separately if needed</li>
              <li>• Free inspection for all services</li>
              <li>• No work done without your approval</li>
              <li>• All services include warranty</li>
              <li>• AMC customers get priority support and discounted rates</li>
            </ul>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-primary">GST Invoice Available</h2>
            <p className="text-sm text-muted-foreground mb-4">
              We are a GST registered business and provide proper GST invoices for all services.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Official GST invoices for all transactions</li>
              <li>• Claim input tax credit on business expenses</li>
              <li>• Proper documentation for corporate clients</li>
              <li>• GSTIN: <span className="font-mono text-foreground">{CONTACT_INFO.gstin}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;