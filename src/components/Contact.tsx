import { Button } from "@/components/ui/button";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "kontakt@clarissa-heinemann.de";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // optional: fallback / error handling
    }
  };

  return (
    <section id="kontakt" className="section-padding bg-card">
      <div className="container-section">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-mono text-primary mb-3">KONTAKT</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lass uns über dein Projekt sprechen
          </h2>

          <p className="text-lg text-muted-foreground mb-10">
            Du hast einen Prozess, der automatisiert werden könnte?
            Oder bist unsicher, ob Automatisierung für euch Sinn macht?
            Schreib mir – ich schaue mir das gern unverbindlich an.
          </p>

          {/* Primary CTA */}
          <div className="flex justify-center mb-3">
            <Button
              variant="hero"
              size="xl"
              asChild
              className="group"
            >
              <a href={`mailto:${email}`}>
                <Mail className="w-5 h-5" />
                E-Mail schreiben
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>

          {/* Copy Email */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="
        group relative
        flex items-center justify-center
        w-10 h-10
        rounded-full
        border border-border
        bg-background/60
        text-muted-foreground
        transition-all
        hover:bg-background hover:text-foreground
        hover:scale-105
      "
              >
                {copied ? (
                  <Check className="w-4 h-4 text-accent" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}

                {/* Tooltip */}
                <span
                  className="
          pointer-events-none
          absolute -bottom-8
          text-xs
          px-2 py-1
          rounded-md
          bg-muted
          text-muted-foreground
          opacity-0
          group-hover:opacity-100
          transition-opacity
          whitespace-nowrap
        "
                >
                  {copied ? "Kopiert" : "E-Mail kopieren"}
                </span>
              </button>

              {/* Email text */}
              <span className="text-sm text-muted-foreground select-all">
                {email}
              </span>
            </div>
          </div>

          {/* Additional info */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Was passiert nach der Anfrage?
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Kurzes Erstgespräch (15–30 Min)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Erste Einschätzung & Empfehlung</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Kein Verkaufsdruck, versprochen</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
