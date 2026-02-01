import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Car, CircleDot, Truck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Major & Minor Collision Repair",
    description: "From fender benders to high-impact collisions, our certified technicians handle frame straightening, panel replacement, and complete structural repairs with precision.",
    features: ["Frame straightening", "Panel replacement", "Structural repairs"],
  },
  {
    icon: Car,
    title: "Auto Body Work",
    description: "Expert scratch repair, computerized color matching, and full vehicle refinishing to restore your car's original beauty.",
    features: ["Scratch repair", "Color matching", "Full refinishing"],
  },
  {
    icon: CircleDot,
    title: "Dent Repair",
    description: "Paintless dent repair (PDR) and traditional smoothing techniques to remove dents while preserving your original finish.",
    features: ["Paintless dent repair", "Hail damage repair", "Door ding removal"],
  },
  {
    icon: Truck,
    title: "Towing Assistance",
    description: "Need a tow? We're only a call away. We coordinate with trusted towing partners to get your vehicle safely to our shop.",
    features: ["24/7 coordination", "Local towing", "Insurance assistance"],
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Comprehensive Auto Body Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From minor scratches to major collisions, we have the expertise and equipment to restore your vehicle to its pre-accident condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover-lift border-border/50 overflow-hidden"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="link" className="p-0 h-auto text-accent" asChild>
                      <Link to="/services" className="flex items-center gap-1">
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;