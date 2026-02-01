import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - ready for backend integration
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", vehicle: "", message: "" });
    }, 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to restore your vehicle? Fill out the form below or give us a call. We'll respond promptly with a detailed estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-xl">Request an Estimate</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="h-16 w-16 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We've received your message and will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(919) 555-0123"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicle">Vehicle Make/Model</Label>
                      <Input
                        id="vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        placeholder="2022 Honda Accord"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about the damage *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe the damage to your vehicle and any other relevant details..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-secondary border-border/50">
                <CardContent className="p-5">
                  <Phone className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <a href="tel:9195534999" className="text-accent hover:underline font-medium">
                    (919) 553-4999
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-secondary border-border/50">
                <CardContent className="p-5">
                  <MapPin className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                  <p className="text-muted-foreground text-sm">
                    810 Loop Road<br />Clayton, NC 27527
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-secondary border-border/50">
              <CardContent className="p-5">
                <Clock className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Monday - Thursday: 8:00 AM - 5:00 PM</p>
                  <p>Friday: 8:00 AM - 12:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="overflow-hidden border-border/50">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.789!2d-78.4541!3d35.6478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a4c9c5b5b5b%3A0x0!2s810%20Loop%20Rd%2C%20Clayton%2C%20NC%2027527!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="USA Auto Body Location"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;