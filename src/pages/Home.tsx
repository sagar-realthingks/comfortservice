import { Link } from "react-router-dom";
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CONTACT_INFO, SERVICES } from "@/config/contact";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Home = () => {
  const handleCall = () => {
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I would like to book an AC service.");
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, "_blank");
  };

  const { data: testimonials } = useQuery({
    queryKey: ["testimonials-home"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("show_on_home", true)
        .limit(3);
      if (error) throw error;
      return data;
    }
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Fast, Reliable AC Service in Pune & PCMC
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Same-day service • Experienced technicians • Transparent pricing • Service warranty
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">Book Service</Link>
              </Button>
              <Button onClick={handleCall} variant="outline" size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
              <Button onClick={handleWhatsApp} size="lg" className="gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id} className="animate-slide-up">
                <ServiceCard
                  name={service.name}
                  description={service.description}
                  startingPrice={service.startingPrice}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Comfort Technical Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Experienced Team</h3>
              <p className="text-sm text-muted-foreground">{CONTACT_INFO.experienceText}</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">On-Time Service</h3>
              <p className="text-sm text-muted-foreground">Same-day and next-day appointments available</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-sm text-muted-foreground">Clear quotes before work, no hidden charges</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Service Warranty</h3>
              <p className="text-sm text-muted-foreground">Quality guaranteed with service warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Book Online or Call", desc: "Schedule via website or phone" },
              { step: "2", title: "Technician Visits", desc: "Expert arrives at your location" },
              { step: "3", title: "Diagnosis & Quote", desc: "Issue identified, quote provided" },
              { step: "4", title: "Service Complete", desc: "Work done efficiently & cleanly" }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-16 bg-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="animate-slide-up">
                  <TestimonialCard
                    name={testimonial.name}
                    rating={testimonial.rating}
                    review={testimonial.review_text}
                    city={testimonial.city || undefined}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your AC Service?</h2>
          <p className="text-lg mb-8 opacity-90">Get fast, professional service today. Call or WhatsApp us now!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button onClick={handleWhatsApp} size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;