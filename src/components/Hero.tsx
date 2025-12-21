import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Glow effect */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-40"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="container-section relative z-10">
        <div className="relative max-w-6xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8 mt-20 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium font-mono">Freelance Entwicklerin</span>
          </div>


          <div className="relative">

            {/* Text content */}
            <div className="relative z-10 pr-60 max-w-6xl">

              {/* Headline */}
              <h1
                className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 opacity-0 animate-fade-in text-balance"
                style={{ animationDelay: "0.2s" }}
              >
                Ich automatisiere Prozesse,{" "}
                <span className="gradient-text">damit dein Team</span>{" "}
                sich auf das Wesentliche konzentrieren kann.
              </h1>

              {/* Subline */}
              <p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 opacity-0 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                KI-gestützte Prozessautomatisierung, API-Integration und Workflow-Optimierung
                für <span className="text-foreground font-medium">KMUs</span>, <span className="text-foreground font-medium">Agenturen</span> und <span className="text-foreground font-medium">Startups</span>.
                {/* Keine Spielereien – stabile Lösungen, die im Alltag funktionieren. */}
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <Button
                  variant="hero"
                  size="xl"
                  onClick={scrollToContact}
                  className="group"
                >
                  Projekt besprechen
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="hero-outline"
                  size="xl"
                  onClick={() => document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Leistungen entdecken
                </Button>
              </div>
            </div>

            {/* Hero image layer */}
            <div className="hidden lg:block absolute top-1/2 right-[-6rem] -translate-y-1/2 z-0">
              <img
                src="/images/hero-heinemann-banner.png"
                alt="Profilbild von Clarissa Heinemann"
                className="h-[520px] w-auto object-cover "
              />
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 mb-10 pt-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {/* Border line */}
            <div className="w-[50%] border-t-2 border-border/100 mb-4 rounded-full"></div>
            {/* Text */}
            <p className="text-sm text-muted-foreground mb-4">
              Fokus auf messbare Ergebnisse:
            </p>
            {/* Indicators */}
            <div className="flex flex-wrap gap-6 md:gap-10">
              {[
                "Zeitersparnis",
                "Weniger manuelle Arbeit",
                "Saubere Workflows",
                "Wartbare Lösungen"
              ].map((item) => (
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