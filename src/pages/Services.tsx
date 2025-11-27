import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES, AMC_PLANS, CONTACT_INFO } from "@/config/contact";
import { Link } from "react-router-dom";

const Services = () => {
  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedMessage}`, "_blank");
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

  const amcFaqs = [
    { q: "What is AMC and why do I need it?", a: "Annual Maintenance Contract (AMC) ensures regular servicing and maintenance of your AC units, reducing breakdowns and extending equipment life." },
    { q: "Can I upgrade my AMC plan later?", a: "Yes, you can upgrade your AMC plan at any time. The price difference will be calculated on a pro-rata basis." },
    { q: "What happens if my AC needs major repairs?", a: "Minor repairs are covered in Standard and Premium plans. Major repairs are provided at discounted rates for AMC customers." }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AC services for homes and offices in Pune & PCMC with warranty and professional support.
          </p>
        </div>

        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="amc">AMC Plans</TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, index) => (
                <div key={service.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ServiceCard
                    name={service.name}
                    description={service.description}
                    startingPrice={service.startingPrice}
                  />
                </div>
              ))}
            </div>
            <div className="mt-12 bg-accent/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Additional Services Available</h2>
              <p className="text-muted-foreground mb-4">
                We also provide specialized services including duct cleaning, thermostat installation, preventive maintenance, and emergency repairs.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Final pricing is confirmed after inspection. No work is done without your approval.
              </p>
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="animate-fade-in">
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
                              <Button size="sm" variant="ghost" onClick={() => handleWhatsApp(`Hi! I'd like to know more about pricing for ${item.name}.`)}>
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
              <div className="bg-accent/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Pricing Notes</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Prices may vary based on AC condition and location</li>
                  <li>• Parts and materials charged separately if needed</li>
                  <li>• Free inspection for all services</li>
                  <li>• No work done without your approval</li>
                  <li>• AMC customers get priority support</li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">GST Invoice Available</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  We are a GST registered business and provide proper GST invoices for all services.
                </p>
                <p className="text-sm text-muted-foreground">
                  GSTIN: <span className="font-mono text-foreground">{CONTACT_INFO.gstin}</span>
                </p>
              </div>
            </div>
          </TabsContent>

          {/* AMC Tab */}
          <TabsContent value="amc" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {AMC_PLANS.map((plan, index) => (
                <Card
                  key={index}
                  className={`animate-slide-up ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.subtitle}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.visits}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button asChild className="flex-1">
                      <Link to="/contact">Enquire Now</Link>
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => handleWhatsApp(`Hi! I'm interested in the ${plan.name} AMC plan.`)}>
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="bg-accent/5 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">AMC Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary" /> Regular preventive maintenance</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary" /> Priority scheduling for service calls</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary" /> Reduced breakdown frequency</li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary" /> Extended AC equipment life</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary" /> Discounted repair rates</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary" /> Dedicated support team</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">AMC FAQs</h2>
              <Accordion type="single" collapsible className="w-full">
                {amcFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;