import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, Cpu, Phone } from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
            Trusted Auto Body &<br />
            <span className="text-accent">Collision Repair</span> in Clayton
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Family Owned & Operated Since 1987. Restoring your vehicle's safety and appearance with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Get a Free Estimate</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:9195534999" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call (919) 553-4999
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureItem
              icon={<Shield className="h-8 w-8 text-accent" />}
              title="Lifetime Warranty"
              description="Quality you can trust, backed by our guarantee"
            />
            <FeatureItem
              icon={<FileCheck className="h-8 w-8 text-accent" />}
              title="Insurance Claims Assistance"
              description="We work with all major insurance providers"
            />
            <FeatureItem
              icon={<Cpu className="h-8 w-8 text-accent" />}
              title="State-of-the-Art Technology"
              description="Modern equipment for precision repairs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <div className="flex items-center gap-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="font-semibold text-primary-foreground">{title}</h3>
      <p className="text-sm text-primary-foreground/70">{description}</p>
    </div>
  </div>
);

export default Hero;