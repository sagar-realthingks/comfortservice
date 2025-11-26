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
      title: "AC Installation",
      image_url: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=800&auto=format&fit=crop",
      description: "Professional split AC installation"
    },
    {
      id: "2",
      title: "AC Servicing",
      image_url: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&auto=format&fit=crop",
      description: "Deep cleaning service"
    },
    {
      id: "3",
      title: "Technician at Work",
      image_url: "https://images.unsplash.com/photo-1581092160607-ee67d62eabde?w=800&auto=format&fit=crop",
      description: "Expert technician working"
    },
    {
      id: "4",
      title: "Commercial Service",
      image_url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop",
      description: "Office AC maintenance"
    }
  ];

  const displayImages = images && images.length > 0 ? images : placeholderImages;

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Our Work Gallery</h1>
          <p className="text-lg text-muted-foreground">
            See our professional AC installation, servicing, and repair work
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading gallery...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage({ url: image.image_url, title: image.title || "Gallery Image" })}
              >
                <img
                  src={image.image_url}
                  alt={image.title || "AC Service"}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold">{image.title}</h3>
                    {image.description && (
                      <p className="text-sm opacity-90">{image.description}</p>
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

        {images && images.length === 0 && (
          <div className="text-center py-12 bg-accent/5 rounded-lg animate-fade-in">
            <p className="text-muted-foreground">
              Gallery coming soon! We're updating our portfolio with recent work.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;