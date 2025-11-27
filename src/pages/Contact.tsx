import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { CONTACT_INFO, SERVICES } from "@/config/contact";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    acType: "",
    units: "1",
    preferredDate: "",
    preferredTimeSlot: "",
    address: "",
    city: "",
    pincode: "",
    preferredContactMode: "Call",
    notes: ""
  });

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I would like to book an AC service.");
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.serviceType || !formData.acType || !formData.address || !formData.city) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("service_bookings").insert([
        {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || null,
          service_type: formData.serviceType,
          ac_type: formData.acType,
          units: parseInt(formData.units),
          preferred_date: formData.preferredDate || null,
          preferred_time_slot: formData.preferredTimeSlot || null,
          address: formData.address.trim(),
          city: formData.city.trim(),
          pincode: formData.pincode.trim() || null,
          preferred_contact_mode: formData.preferredContactMode,
          notes: formData.notes.trim() || null
        }
      ]);

      if (error) throw error;

      toast.success("Booking submitted successfully! We will contact you shortly.");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        acType: "",
        units: "1",
        preferredDate: "",
        preferredTimeSlot: "",
        address: "",
        city: "",
        pincode: "",
        preferredContactMode: "Call",
        notes: ""
      });
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Failed to submit booking. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Contact Us & Book Service</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch or book your AC service online
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Reach us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-sm text-muted-foreground">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm text-primary hover:underline">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">WhatsApp</p>
                    <button onClick={handleWhatsApp} className="text-sm text-primary hover:underline">
                      Chat on WhatsApp
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-primary hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Working Hours</p>
                    <p className="text-sm text-muted-foreground">{CONTACT_INFO.workingHours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Enquiry</CardTitle>
                <CardDescription>Prefer WhatsApp?</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For quick questions or immediate assistance, reach us on WhatsApp.
                </p>
                <Button onClick={handleWhatsApp} className="w-full gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white">
                  <MessageCircle className="w-5 h-5" />
                  Open WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Card>
              <CardHeader>
                <CardTitle>Book a Service</CardTitle>
                <CardDescription>Fill in the details and we'll get back to you</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Mobile Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit number"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((service) => (
                          <SelectItem key={service.id} value={service.name}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="acType">AC Type *</Label>
                      <Select value={formData.acType} onValueChange={(value) => setFormData({ ...formData, acType: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Split">Split AC</SelectItem>
                          <SelectItem value="Window">Window AC</SelectItem>
                          <SelectItem value="Cassette">Cassette AC</SelectItem>
                          <SelectItem value="Central">Central AC</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="units">Number of Units *</Label>
                      <Input
                        id="units"
                        type="number"
                        min="1"
                        value={formData.units}
                        onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTimeSlot">Time Slot</Label>
                      <Select value={formData.preferredTimeSlot} onValueChange={(value) => setFormData({ ...formData, preferredTimeSlot: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Morning">Morning (9AM - 12PM)</SelectItem>
                          <SelectItem value="Afternoon">Afternoon (12PM - 4PM)</SelectItem>
                          <SelectItem value="Evening">Evening (4PM - 8PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Full address with landmarks"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g., Pune"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        placeholder="6-digit pincode"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="preferredContactMode">Preferred Contact Mode *</Label>
                    <Select value={formData.preferredContactMode} onValueChange={(value) => setFormData({ ...formData, preferredContactMode: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Call">Phone Call</SelectItem>
                        <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any specific requirements or issues..."
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Booking"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;