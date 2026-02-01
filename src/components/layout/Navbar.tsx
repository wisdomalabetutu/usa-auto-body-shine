import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary shadow-lg"
          : "bg-primary/95"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Car className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-primary-foreground leading-tight">
                USA Auto Body
              </span>
              <span className="text-xs text-primary-foreground/70 hidden sm:block">
                Est. 1987 • Clayton, NC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:9195534999" className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">(919) 553-4999</span>
            </a>
            <Button variant="accent" asChild>
              <Link to="/contact">Get an Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-primary border-l-primary">
              <div className="flex flex-col h-full pt-8">
                <div className="flex items-center gap-2 mb-8">
                  <Car className="h-8 w-8 text-accent" />
                  <span className="text-xl font-bold text-primary-foreground">USA Auto Body</span>
                </div>

                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        isActive(link.href)
                          ? "bg-accent text-accent-foreground"
                          : "text-primary-foreground hover:bg-navy-light"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pb-8 space-y-4">
                  <a
                    href="tel:9195534999"
                    className="flex items-center gap-3 px-4 py-3 text-primary-foreground hover:text-accent transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-medium">(919) 553-4999</span>
                  </a>
                  <Button variant="accent" size="lg" className="w-full" asChild>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get an Estimate
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;