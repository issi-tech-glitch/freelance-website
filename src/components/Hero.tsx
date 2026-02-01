import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, PlayCircle } from "lucide-react"; // PlayCircle für die Demo hinzugefügt
import { Link } from "react-router-dom"; // Wichtig für die Navigation zur Demo-Seite

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient & Glow - unverändert */}
      <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-40" style={{ background: "var(--gradient-glow)" }} />

      <div className="container-section relative z-10">
        <div className="relative max-w-6xl">
          
          {/* OBERER TEASER: Live Demo Badge */}
          <div className="flex flex-wrap gap-3 mb-8 mt-20 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium font-mono">Freelance Entwicklerin</span>
            </div>
            
            {/* NEU: Auffälliges Demo-Badge */}
            <Link to="/projekte/bestell-lager-automatisierung" className="group">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all cursor-pointer shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-sm font-medium font-mono group-hover:underline">Live Demo ansehen</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>

          <div className="relative">
            <div className="relative z-10 pr-0 lg:pr-60 max-w-full lg:max-w-6xl">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 opacity-0 animate-fade-in text-balance" style={{ animationDelay: "0.2s" }}>
                Ich <span className="gradient-text">automatisiere</span> Prozesse
                – stabil, wartbar und messbar.
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                KI-gestützte Prozessautomatisierung, API-Integration und Workflow-Optimierung
                für KMUs, Agenturen und Startups, die <span className="text-foreground font-medium">Zeit sparen </span>
                und Prozesse sauber <span className="text-foreground font-medium">automatisieren</span> wollen.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button variant="hero" size="xl" onClick={scrollToContact} className="group w-full sm:w-auto">
                  Projekt besprechen
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                {/* NEU: Sekundärer Demo-Link mit Icon */}
                <Link to="/projekte/bestell-lager-automatisierung" className="group flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors">
                  <PlayCircle className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
                  <div className="flex flex-col items-start leading-none">
                    <span>Live-Case ansehen</span>
                    <span className="text-[10px] text-muted-foreground font-mono mt-1">KI & Dashboard Demo</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Hero image layer - unverändert */}
            <div className="hidden lg:block absolute top-1/2 right-[-6rem] -translate-y-1/2 z-0">
              <img src="/images/hero-heinemann-banner.png" alt="Profilbild" className="h-[520px] w-auto object-cover" />
            </div>
          </div>

          {/* Trust indicators - unverändert */}
          <div className="mt-16 mb-10 pt-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="w-[50%] border-t-2 border-border/100 mb-4 rounded-full"></div>
            <p className="text-sm text-muted-foreground mb-4">Fokus auf messbare Ergebnisse:</p>
            <div className="flex flex-wrap gap-6 md:gap-10">
              {["Zeitersparnis", "Weniger manuelle Arbeit", "Saubere Prozesse", "Wartbare Lösungen"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;