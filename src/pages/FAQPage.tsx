import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Services & Repairs",
    questions: [
      {
        question: "What types of vehicles do you repair?",
        answer: "We repair all makes and models of cars, trucks, and SUVs. Our experienced technicians are trained to work on domestic and foreign vehicles, from economy cars to luxury brands.",
      },
      {
        question: "Do you handle major collision damage?",
        answer: "Yes, we specialize in both minor and major collision repairs. This includes frame straightening, unibody repair, structural panel replacement, and complete vehicle restoration.",
      },
      {
        question: "What is paintless dent repair (PDR)?",
        answer: "Paintless dent repair is a technique that removes dents without affecting your vehicle's original factory finish. It's ideal for hail damage, door dings, and minor dents, and is typically faster and more cost-effective than traditional repair methods.",
      },
      {
        question: "Can you match my car's original paint color?",
        answer: "Absolutely! We use computerized color matching technology to precisely match your vehicle's original factory finish. The result is seamless and virtually undetectable.",
      },
    ],
  },
  {
    category: "Insurance & Payment",
    questions: [
      {
        question: "Do you work with insurance companies?",
        answer: "Yes, we work with the majority of insurance companies to streamline your claim process. Our team can communicate directly with your insurer, handle the necessary paperwork, and ensure you receive fair compensation for repairs.",
      },
      {
        question: "Can I choose my own repair shop?",
        answer: "Yes! Under North Carolina law, you have the right to choose any licensed repair facility. You are not required to use a shop recommended by your insurance company. We encourage you to choose the shop you trust most.",
      },
      {
        question: "Do you offer free estimates?",
        answer: "Yes, we provide free, no-obligation estimates for all repair work. You can stop by our shop during business hours, or contact us to schedule a convenient appointment time.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, checks, and all major credit cards. For insurance claims, we work directly with your provider to handle payment seamlessly.",
      },
    ],
  },
  {
    category: "Warranty & Quality",
    questions: [
      {
        question: "Do you offer warranties on your repairs?",
        answer: "Yes, we stand behind our quality with a comprehensive lifetime warranty on workmanship and paint for as long as you own your vehicle. We're confident in the quality of our work and want you to have complete peace of mind.",
      },
      {
        question: "Are your technicians certified?",
        answer: "Yes, our technicians maintain current certifications and undergo continuous training to stay up-to-date with the latest vehicle technologies and repair techniques. This ensures your vehicle receives expert care.",
      },
      {
        question: "What kind of parts do you use?",
        answer: "We use OEM (Original Equipment Manufacturer) parts, high-quality aftermarket parts, or recycled OEM parts based on your preference and insurance requirements. We always discuss options with you before proceeding.",
      },
    ],
  },
  {
    category: "Timeline & Process",
    questions: [
      {
        question: "How long do repairs typically take?",
        answer: "Timeline varies depending on the extent of the damage. Minor repairs may take 1-3 days, while major collision work could take 1-2 weeks. We provide detailed time estimates upfront and keep you informed throughout the repair process.",
      },
      {
        question: "Can you arrange towing for my vehicle?",
        answer: "Yes! While we don't operate our own tow trucks, we coordinate with trusted local towing partners. Just give us a call and we'll arrange to get your vehicle safely to our shop.",
      },
      {
        question: "Will you keep me updated on the repair progress?",
        answer: "Absolutely. We believe in transparent communication. You'll receive updates throughout the repair process, and you're always welcome to call or visit to check on your vehicle's status.",
      },
      {
        question: "Do you offer rental car assistance?",
        answer: "We can help coordinate rental car services and work with your insurance company if rental coverage is included in your policy. Ask us about this when you drop off your vehicle.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services, insurance process, warranties, and more.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {section.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${sectionIndex}-${index}`}
                      className="bg-card rounded-lg border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:text-accent hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our friendly team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:9195534999">Call (919) 553-4999</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;