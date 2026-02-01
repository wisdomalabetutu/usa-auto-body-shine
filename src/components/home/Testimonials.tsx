import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amber",
    text: "They cut my bill in half while making my hitch assembly twice as strong as before! Incredible work and honest pricing.",
    rating: 5,
  },
  {
    name: "Michael R.",
    text: "After a major collision, I was worried about my car ever looking the same. USA Auto Body exceeded my expectations. You can't even tell there was ever any damage!",
    rating: 5,
  },
  {
    name: "Sarah L.",
    text: "The team was professional, kept me updated throughout the process, and dealt with my insurance company directly. Stress-free experience!",
    rating: 5,
  },
  {
    name: "David T.",
    text: "Been bringing my vehicles here for 10+ years. Wouldn't trust anyone else with my family's cars. True professionals who stand behind their work.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what the Clayton community has to say about our work.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-primary-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    name: string;
    text: string;
    rating: number;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <Card className="bg-navy-light border-navy-light h-full">
    <CardContent className="p-6 flex flex-col h-full">
      <Quote className="h-8 w-8 text-accent mb-4" />
      <p className="text-primary-foreground/90 flex-1 mb-4 leading-relaxed">
        "{testimonial.text}"
      </p>
      <div>
        <div className="flex gap-1 mb-2">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
        <p className="font-semibold text-primary-foreground">- {testimonial.name}</p>
      </div>
    </CardContent>
  </Card>
);

export default Testimonials;