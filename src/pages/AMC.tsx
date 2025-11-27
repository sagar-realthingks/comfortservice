import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AMC_PLANS, CONTACT_INFO } from "@/config/contact";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AMC = () => {
  const handleWhatsApp = (planName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${planName} AMC plan. Please provide more details.`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, "_blank");
  };

  const amcFaqs = [
    {
      q: "What is AMC and why do I need it?",
      a: "Annual Maintenance Contract (AMC) ensures regular servicing and maintenance of your AC units, reducing breakdowns and extending equipment life. It's cost-effective for homes and offices with multiple units."
    },
    {
      q: "Can I upgrade my AMC plan later?",
      a: "Yes, you can upgrade your AMC plan at any time. The price difference will be calculated on a pro-rata basis."
    },
    {
      q: "What happens if my AC needs major repairs?",
      a: "Minor repairs are covered in Standard and Premium plans. Major repairs are provided at discounted rates for AMC customers."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Annual Maintenance Plans</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keep your AC running efficiently year-round with our comprehensive AMC plans.
            Save money on repairs and enjoy priority support.
          </p>
        </div>

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
                <Button variant="outline" size="icon" onClick={() => handleWhatsApp(plan.name)}>
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-accent/5 rounded-lg p-8 mb-12 animate-fade-in">
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

        <div className="animate-fade-in">
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
      </div>
    </div>
  );
};

export default AMC;