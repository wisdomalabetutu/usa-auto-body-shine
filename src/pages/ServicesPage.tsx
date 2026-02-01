import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Car, CircleDot, Truck, Shield, Award, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Major & Minor Collision Repair",
    description: "From fender benders to high-impact collisions, our I-CAR certified technicians utilize state-of-the-art frame straightening equipment and precision repair techniques. We restore your vehicle's structural integrity to manufacturer specifications.",
    features: [
      "Computer-assisted frame straightening",
      "Unibody and full-frame repair",
      "Structural panel replacement",
      "Suspension and alignment correction",
      "Complete structural analysis",
    ],
  },
  {
    icon: Car,
    title: "Auto Body Work & Refinishing",
    description: "Our expert paint technicians deliver flawless finishes using computerized color matching technology. From minor touch-ups to complete vehicle refinishing, we restore your car's original beauty.",
    features: [
      "Computerized color matching",
      "Scratch and scuff repair",
      "Full panel repainting",
      "Clear coat restoration",
      "Custom paint work",
    ],
  },
  {
    icon: CircleDot,
    title: "Dent Repair & PDR",
    description: "Our paintless dent repair (PDR) specialists remove dents without affecting your factory finish. This cost-effective technique is perfect for hail damage, door dings, and minor dents.",
    features: [
      "Paintless dent removal (PDR)",
      "Hail damage repair",
      "Door ding removal",
      "Minor crease repair",
      "Original paint preservation",
    ],
  },
  {
    icon: Truck,
    title: "Towing & Emergency Assistance",
    description: "In an accident? We coordinate with trusted local towing partners to get your vehicle safely to our shop. Just give us a call and we'll take care of the rest.",
    features: [
      "24/7 towing coordination",
      "Local and long-distance towing",
      "Secure vehicle storage",
      "Insurance claim initiation",
      "Emergency response support",
    ],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Comprehensive Services
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Expert collision repair and auto body services backed by 37+ years of experience and a commitment to excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-border/50">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className={`p-8 md:p-12 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-lg bg-accent/10 text-accent">
                          <service.icon className="h-10 w-10" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="accent" asChild>
                        <Link to="/contact" className="flex items-center gap-2">
                          Request Estimate
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className={`bg-secondary p-8 md:p-12 flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="text-center">
                        <service.icon className="h-32 w-32 text-accent/20 mx-auto mb-4" />
                        <p className="text-muted-foreground text-sm">
                          Professional {service.title.toLowerCase()} services
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose USA Auto Body?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Lifetime Warranty</h3>
              <p className="text-muted-foreground">We stand behind every repair with our comprehensive lifetime warranty on workmanship.</p>
            </div>
            <div className="text-center p-6">
              <Award className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Certified Technicians</h3>
              <p className="text-muted-foreground">Our team maintains current certifications and ongoing training in the latest repair techniques.</p>
            </div>
            <div className="text-center p-6">
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Insurance Approved</h3>
              <p className="text-muted-foreground">We work directly with all major insurance companies to streamline your claim process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-accent-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate on your repair needs.
          </p>
          <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/contact">Get Your Free Estimate</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;