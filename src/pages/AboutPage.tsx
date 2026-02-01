import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, ThumbsUp, Calendar, Shield, Wrench, Heart, MapPin } from "lucide-react";

const stats = [
  { icon: Calendar, value: "1987", label: "Established" },
  { icon: Users, value: "Family", label: "Owned & Operated" },
  { icon: ThumbsUp, value: "1000s", label: "Happy Customers" },
  { icon: Award, value: "37+", label: "Years Experience" },
];

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We never cut corners. Every repair meets or exceeds manufacturer specifications.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "We treat every customer like family, with honest communication and fair pricing.",
  },
  {
    icon: Wrench,
    title: "Expert Craftsmanship",
    description: "Our certified technicians take pride in delivering flawless, lasting repairs.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About USA Auto Body
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Family owned since 1987, we've built our reputation on quality work, honest service, and treating every customer like family.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <stat.icon className="h-10 w-10 text-accent mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  USA Auto Body was founded in 1987 with a simple mission: provide Clayton and the surrounding communities with honest, high-quality collision repair services.
                </p>
                <p className="leading-relaxed">
                  Over the past 37 years, we've grown from a small family shop into one of the most trusted auto body facilities in Johnston County. But one thing hasn't changed – our commitment to treating every customer like family.
                </p>
                <p className="leading-relaxed">
                  Today, we combine decades of hands-on experience with state-of-the-art equipment and techniques. Our certified technicians undergo continuous training to stay current with the latest vehicle technologies and repair methods.
                </p>
                <p className="leading-relaxed">
                  When you choose USA Auto Body, you're choosing a team that genuinely cares about your safety and satisfaction. We're not just fixing cars – we're building lasting relationships with our neighbors.
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-xl p-8 md:p-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 text-accent mb-6">
                  <span className="text-3xl font-bold">37+</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Years of Excellence</h3>
                <p className="text-muted-foreground">
                  Since 1987, we've been restoring vehicles and building trust in the Clayton community. Our legacy is built on quality work and honest service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do at USA Auto Body.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift border-border/50">
                <CardContent className="p-8">
                  <value.icon className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proudly Serving Clayton & Beyond
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conveniently located to serve Clayton, Smithfield, Garner, Raleigh, and the surrounding Johnston County communities.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 text-accent mb-4">
              <MapPin className="h-6 w-6" />
              <span className="text-lg font-semibold">810 Loop Road, Clayton, NC 27527</span>
            </div>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Get Directions & Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Experience the USA Auto Body Difference
          </h2>
          <p className="text-accent-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Ready to see why thousands of customers trust us with their vehicles? Contact us today.
          </p>
          <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/contact">Get Your Free Estimate</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;