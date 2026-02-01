import { Award, Users, ThumbsUp, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "Est. 1987", label: "Serving Clayton" },
  { icon: Users, value: "Locally Owned", label: "Family Business" },
  { icon: ThumbsUp, value: "100%", label: "Satisfaction Guaranteed" },
  { icon: Award, value: "37+ Years", label: "Of Excellence" },
];

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experience, Expertise &<br />
              <span className="text-accent">Exceptional Service</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                For over 37 years, USA Auto Body has been the trusted choice for collision repair in Clayton and the surrounding communities. As a family-owned and operated business, we treat every customer like family.
              </p>
              <p className="leading-relaxed">
                Our certified technicians combine decades of experience with state-of-the-art equipment to deliver repairs that meet or exceed manufacturer specifications. We focus on safety, precision, and getting you back on the road quickly.
              </p>
              <p className="leading-relaxed">
                We work with most major insurance companies to streamline your claim process. From the initial estimate to the final polish, we're committed to making your repair experience as smooth as possible.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-secondary hover:bg-accent/10 transition-colors group"
              >
                <stat.icon className="h-10 w-10 text-accent mb-4" />
                <p className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;