import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "@/config/contact";

interface ServiceCardProps {
  name: string;
  description: string;
  startingPrice: string;
}

export const ServiceCard = ({ name, description, startingPrice }: ServiceCardProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in ${name}. Please provide more details.`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-primary">
          {startingPrice}
          {startingPrice.includes("₹") && <span className="text-sm font-normal text-muted-foreground"> onwards</span>}
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button asChild className="flex-1">
          <Link to="/contact">Book Now</Link>
        </Button>
        <Button variant="outline" size="icon" onClick={handleWhatsApp}>
          <MessageCircle className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};