import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/config/contact";

const Services = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Our AC Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive air conditioning services for homes and offices in Pune & PCMC.
            All services come with warranty and professional support.
          </p>
        </div>

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

        <div className="mt-12 bg-accent/5 rounded-lg p-8 text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Additional Services Available</h2>
          <p className="text-muted-foreground mb-4">
            We also provide specialized services including duct cleaning, thermostat installation,
            preventive maintenance, and emergency repairs. Contact us for custom requirements.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> Final pricing is confirmed after inspection. No work is done without your approval.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;