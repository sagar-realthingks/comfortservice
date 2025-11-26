import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";

const ServiceAreas = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const { data: areas, isLoading } = useQuery({
    queryKey: ["service-areas"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("service_areas")
        .select("*")
        .eq("is_active", true)
        .order("city", { ascending: true })
        .order("area_name", { ascending: true });
      if (error) throw error;
      return data;
    }
  });

  const cities = [...new Set(areas?.map((area) => area.city))];
  const filteredAreas = selectedCity
    ? areas?.filter((area) => area.city === selectedCity)
    : areas;

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to check if you service my area.");
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Service Areas</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We proudly serve homes and businesses across Pune and Pimpri Chinchwad.
          </p>
        </div>

        {/* City Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-slide-up">
          <Button
            variant={selectedCity === null ? "default" : "outline"}
            onClick={() => setSelectedCity(null)}
          >
            All Areas
          </Button>
          {cities.map((city) => (
            <Button
              key={city}
              variant={selectedCity === city ? "default" : "outline"}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </Button>
          ))}
        </div>

        {/* Areas List */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading service areas...</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 justify-center animate-fade-in">
            {filteredAreas?.map((area) => (
              <Badge key={area.id} variant="secondary" className="px-4 py-2 text-sm">
                {area.area_name}
              </Badge>
            ))}
          </div>
        )}

        {/* Not Listed Section */}
        <div className="mt-12 bg-accent/5 rounded-lg p-8 text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Don't See Your Area?</h2>
          <p className="text-muted-foreground mb-6">
            We're constantly expanding our service coverage. Contact us on WhatsApp to check if we can serve your location.
          </p>
          <Button onClick={handleWhatsApp} className="gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white">
            <MessageCircle className="w-5 h-5" />
            Check Availability on WhatsApp
          </Button>
        </div>

        {/* Coverage Note */}
        <div className="mt-8 text-center text-sm text-muted-foreground animate-fade-in">
          <p>
            <strong>Note:</strong> We also provide services to nearby areas not listed above.
            Contact us for confirmation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;