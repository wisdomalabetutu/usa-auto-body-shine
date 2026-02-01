import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
          Ready to Get Your Vehicle Restored?
        </h2>
        <p className="text-accent-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
          Don't wait to get your car back to its best. Contact us today for a free estimate and experience the USA Auto Body difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="xl"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link to="/contact" className="flex items-center gap-2">
              Get a Free Estimate
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="xl"
            variant="outline"
            className="border-2 border-accent-foreground text-accent-foreground bg-transparent hover:bg-accent-foreground/10"
            asChild
          >
            <a href="tel:9195534999" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call (919) 553-4999
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;