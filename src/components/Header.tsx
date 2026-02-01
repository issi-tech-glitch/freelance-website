import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cases from "@/constants/cases";

const navigation = [
  { name: "Leistungen", href: "leistungen" },
  { name: "Projekte", href: "projekte", hasSubmenu: true },
  { name: "Über mich", href: "ueber-mich" },
  { name: "Preise", href: "pricing" },
  { name: "Arbeitsweise", href: "arbeitsweise" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);
  const [showMobileProjects, setShowMobileProjects] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const goTo = (href: string) => {
    setIsMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-section flex items-center justify-between">
        <Link
          to="/"
          className="font-semibold text-lg tracking-tight"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-primary">&lt;</span>
          Clarissa Heinemann
          <span className="text-primary">/&gt;</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => {
            if (item.hasSubmenu) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setShowProjectsMenu(true)}
                  onMouseLeave={() => setShowProjectsMenu(false)}
                >
                  <button
                    onClick={() => setShowProjectsMenu(!showProjectsMenu)}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                    aria-expanded={showProjectsMenu}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {showProjectsMenu && (
                    <div className="absolute top-full left-0 w-96 min-w-[22rem] bg-background border border-border/60 rounded-2xl shadow-2xl p-2">
                      <div className="flex flex-col divide-y divide-border/50 rounded-lg overflow-hidden">
                        {cases.map((p) => (
                          <Link
                            key={p.href}
                            to={p.href}
                            onClick={() => setShowProjectsMenu(false)}
                            className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-muted transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-primary/80" />
                            <span className="truncate">{p.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
              >
                {item.name}
              </button>
            );
          })}
          <Button
            size="sm"
            onClick={() => handleNavClick("kontakt")}
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
            {navigation.map((item) => {
              if (item.hasSubmenu) {
                return (
                  <div key={item.name} className="flex flex-col">
                    <button
                      onClick={() => setShowMobileProjects(!showMobileProjects)}
                      className="flex items-center justify-between py-2 text-left text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {showMobileProjects && (
                      <div className="pl-4 flex flex-col gap-2 mt-2">
                        {cases.map((p) => (
                          <Link
                            key={p.href}
                            to={p.href}
                            onClick={() => { setIsMobileMenuOpen(false); setShowMobileProjects(false); }}
                            className="block py-3 px-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                          >
                            {p.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              );
            })}
            <Button
              className="mt-2"
              onClick={() => handleNavClick("kontakt")}
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