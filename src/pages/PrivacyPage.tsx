import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivacyPage = () => {
  return (
    <Layout>
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <p className="leading-relaxed">
                  When you contact us for an estimate or service, we collect information such as your name, email address, phone number, vehicle information, and details about your repair needs. This information is used solely to provide you with our services and communicate with you about your vehicle.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="leading-relaxed">
                  We use the information we collect to process your repair requests, communicate with you about your vehicle's status, coordinate with insurance companies on your behalf, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at (919) 553-4999 or visit our shop at 810 Loop Road, Clayton, NC 27527.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="accent" asChild>
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPage;