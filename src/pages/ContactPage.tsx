import Layout from "@/components/layout/Layout";
import Contact from "@/components/home/Contact";

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Ready to get your vehicle restored? Reach out for a free estimate or stop by our shop in Clayton.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-card p-6 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">1</div>
                <h3 className="font-semibold text-foreground mb-2">Free Estimate</h3>
                <p className="text-muted-foreground text-sm">
                  We'll assess the damage and provide a detailed, no-obligation estimate for your repairs.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">2</div>
                <h3 className="font-semibold text-foreground mb-2">Expert Repair</h3>
                <p className="text-muted-foreground text-sm">
                  Our certified technicians complete the repairs using quality parts and modern techniques.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">3</div>
                <h3 className="font-semibold text-foreground mb-2">Quality Check</h3>
                <p className="text-muted-foreground text-sm">
                  Before delivery, we thoroughly inspect your vehicle to ensure it meets our high standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;