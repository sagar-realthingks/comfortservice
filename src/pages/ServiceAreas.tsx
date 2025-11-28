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
    <div className="min-h-screen section-padding">
      <div className="container-wide">
        <div className="text-center mb-8">
          <h1 className="mb-2">Service Areas</h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            We proudly serve homes and businesses across Pune and Pimpri Chinchwad.
          </p>
        </div>

        {/* City Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Button
            variant={selectedCity === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCity(null)}
          >
            All Areas
          </Button>
          {cities.map((city) => (
            <Button
              key={city}
              variant={selectedCity === city ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </Button>
          ))}
        </div>

        {/* Areas List */}
        {isLoading ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-sm">Loading service areas...</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 justify-center">
            {filteredAreas?.map((area) => (
              <Badge key={area.id} variant="secondary" className="px-3 py-1.5 text-xs">
                {area.area_name}
              </Badge>
            ))}
          </div>
        )}

        {/* Not Listed Section */}
        <div className="mt-10 bg-accent rounded-lg p-6 text-center">
          <h2 className="mb-2">Don't See Your Area?</h2>
          <p className="text-muted-foreground text-sm mb-4">
            We're constantly expanding our service coverage. Contact us on WhatsApp to check if we can serve your location.
          </p>
          <Button onClick={handleWhatsApp} className="gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white">
            <MessageCircle className="w-4 h-4" />
            Check Availability
          </Button>
        </div>

        {/* Coverage Note */}
        <div className="mt-6 text-center text-xs text-muted-foreground">
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
