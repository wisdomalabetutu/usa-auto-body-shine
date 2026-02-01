import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer warranties?",
    answer: "Yes, we stand behind our quality with a comprehensive warranty on all repair services. Our lifetime warranty covers workmanship and paint for as long as you own your vehicle.",
  },
  {
    question: "Do you work with insurance companies?",
    answer: "Absolutely! We work with the majority of insurance companies to streamline your claim process. Our team can communicate directly with your insurer, handle the paperwork, and ensure you receive fair compensation for repairs.",
  },
  {
    question: "How long do repairs typically take?",
    answer: "Timeline varies depending on the extent of the damage. Minor repairs may take 1-3 days, while major collision work could take 1-2 weeks. We provide detailed time estimates upfront and keep you informed throughout the process.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we provide free, no-obligation estimates for all repair work. You can stop by our shop, or contact us to schedule a convenient appointment time.",
  },
  {
    question: "Can you match my car's original paint color?",
    answer: "Yes! We use computerized color matching technology to ensure a perfect match with your vehicle's original factory finish. Our refinishing work is virtually undetectable.",
  },
  {
    question: "Do you offer towing services?",
    answer: "While we don't operate our own tow trucks, we coordinate with trusted local towing partners. Just give us a call and we'll help arrange to get your vehicle safely to our shop.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We've got answers. If you don't see what you're looking for, feel free to give us a call.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
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
      </div>
    </section>
  );
};

export default FAQ;