import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  rating: number;
  review: string;
  city?: string;
}

export const TestimonialCard = ({ name, rating, review, city }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
            />
          ))}
        </div>
        <p className="text-sm mb-4 text-foreground/90">{review}</p>
        <div className="text-sm">
          <p className="font-semibold">{name}</p>
          {city && <p className="text-muted-foreground">{city}</p>}
        </div>
      </CardContent>
    </Card>
  );
};