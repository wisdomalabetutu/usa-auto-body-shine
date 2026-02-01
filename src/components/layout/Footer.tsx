import { Link } from "react-router-dom";
import { Car, Phone, MapPin, Clock, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Car className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">USA Auto Body</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Family owned & operated since 1987. Your trusted partner for quality collision repair in Clayton, NC.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-navy-light hover:bg-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@usaautobody.com"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-navy-light hover:bg-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">Home</Link>
              <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Services</Link>
              <Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">About Us</Link>
              <Link to="/faq" className="text-primary-foreground/70 hover:text-accent transition-colors">FAQ</Link>
              <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Collision Repair</Link>
              <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Auto Body Work</Link>
              <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Dent Repair</Link>
              <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Towing Assistance</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=810+Loop+Road,+Clayton,+NC+27527"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>810 Loop Road<br />Clayton, NC 27527</span>
              </a>
              <a
                href="tel:9195534999"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>(919) 553-4999</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon - Thu: 8:00 AM - 5:00 PM</p>
                  <p>Fri: 8:00 AM - 12:00 PM</p>
                  <p>Sat - Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2025 USA Auto Body. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;