import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Leistungen", href: "#leistungen" },
  { name: "Beispiele", href: "#beispiele" },
  { name: "Über mich", href: "#ueber-mich" },
  { name: "Preise", href: "#pricing" },
  { name: "Arbeitsweise", href: "#arbeitsweise" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container-section flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-semibold text-lg tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-primary">&lt;</span>
          dev
          <span className="text-primary">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              {item.name}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => scrollToSection("#kontakt")}
          >
            Kontakt
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menü öffnen"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <nav className="container-section py-6 flex flex-col gap-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button
              className="mt-2"
              onClick={() => scrollToSection("#kontakt")}
            >
              Kontakt
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;