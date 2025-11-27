import { useState } from "react";
import { Users, Award, Clock, ThumbsUp, Building2, FileText, Shield, X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { CONTACT_INFO } from "@/config/contact";

const About = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const { data: images, isLoading } = useQuery({
    queryKey: ["gallery-images"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    }
  });

  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Users, label: "AC Units Serviced", value: "10,000+" },
    { icon: ThumbsUp, label: "Corporate Clients", value: "50+" },
    { icon: Clock, label: "Average Rating", value: "4.8/5" }
  ];

  const placeholderImages = [
    { id: "1", title: "AC Installation", image_url: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=800&auto=format&fit=crop", description: "Professional split AC installation" },
    { id: "2", title: "AC Servicing", image_url: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&auto=format&fit=crop", description: "Deep cleaning service" },
    { id: "3", title: "Technician at Work", image_url: "https://images.unsplash.com/photo-1581092160607-ee67d62eabde?w=800&auto=format&fit=crop", description: "Expert technician working" },
    { id: "4", title: "Commercial Service", image_url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop", description: "Office AC maintenance" }
  ];

  const displayImages = images && images.length > 0 ? images : placeholderImages;

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">About {CONTACT_INFO.companyName}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for professional air conditioning services in Pune & PCMC
          </p>
          {CONTACT_INFO.ownerName && (
            <p className="text-muted-foreground mt-2">Proprietor: <span className="font-semibold text-foreground">{CONTACT_INFO.ownerName}</span></p>
          )}
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="bg-accent/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {CONTACT_INFO.companyName} has been providing professional AC services in the Pune region
                for several years. {CONTACT_INFO.experienceText}, delivering reliable installation,
                maintenance, and repair services.
              </p>
              <p>
                Our team of skilled technicians is committed to providing fast, efficient, and
                transparent service. We understand the importance of a well-functioning air conditioning
                system for your comfort, especially in Pune's climate.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-lg border border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                We never compromise on the quality of our work.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focused</h3>
              <p className="text-sm text-muted-foreground">
                Your satisfaction is our priority.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Honest pricing and clear communication.
              </p>
            </div>
          </div>
        </div>

        {/* Business Registration */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">Registered & Verified Business</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Building2 className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">GSTIN Registered</h3>
              <p className="text-sm text-muted-foreground font-mono">{CONTACT_INFO.gstin}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">PAN Verified</h3>
              <p className="text-sm text-muted-foreground font-mono">{CONTACT_INFO.pan}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">GST Invoices</h3>
              <p className="text-sm text-muted-foreground">Proper GST invoices for all services</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">Our Work Gallery</h2>
          <p className="text-center text-muted-foreground mb-8">
            See our professional AC installation, servicing, and repair work
          </p>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading gallery...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayImages.slice(0, 8).map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage({ url: image.image_url, title: image.title || "Gallery Image" })}
                >
                  <img
                    src={image.image_url}
                    alt={image.title || "AC Service"}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-4xl max-h-[90vh] flex flex-col items-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <p className="text-white mt-4 text-center">{selectedImage.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;