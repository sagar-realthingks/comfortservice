import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
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

  // Placeholder images if database is empty
  const placeholderImages = [
    {
      id: "1",
      title: "Split AC Installation",
      image_url: "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=800&auto=format&fit=crop",
      description: "Professional split AC installation"
    },
    {
      id: "2",
      title: "AC Deep Cleaning",
      image_url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop",
      description: "Thorough AC deep cleaning service"
    },
    {
      id: "3",
      title: "AC Repair Service",
      image_url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop",
      description: "Expert AC repair and troubleshooting"
    },
    {
      id: "4",
      title: "Commercial AC Service",
      image_url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop",
      description: "Office and commercial AC maintenance"
    },
    {
      id: "5",
      title: "AC Gas Refilling",
      image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
      description: "Professional gas refilling service"
    },
    {
      id: "6",
      title: "Refrigerator Repair",
      image_url: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&auto=format&fit=crop",
      description: "Fridge repair and maintenance"
    }
  ];

  const displayImages = images && images.length > 0 ? images : placeholderImages;

  return (
    <div className="min-h-screen section-padding">
      <div className="container-wide">
        <div className="text-center mb-8">
          <h1 className="mb-2">Our Work Gallery</h1>
          <p className="text-muted-foreground text-sm">
            See our professional AC installation, servicing, and repair work
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-sm">Loading gallery...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedImage({ url: image.image_url, title: image.title || "Gallery Image" })}
              >
                <img
                  src={image.image_url}
                  alt={image.title || "AC Service"}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end">
                  <div className="p-3 text-background">
                    <h3 className="font-medium text-sm">{image.title}</h3>
                    {image.description && (
                      <p className="text-xs opacity-80">{image.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-background hover:text-background/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-3xl max-h-[90vh] flex flex-col items-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-background mt-3 text-center text-sm">{selectedImage.title}</p>
            </div>
          </div>
        )}

        {images && images.length === 0 && (
          <div className="text-center py-8 bg-accent rounded-lg">
            <p className="text-muted-foreground text-sm">
              Gallery coming soon! We're updating our portfolio with recent work.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
