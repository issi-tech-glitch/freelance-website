import { Button } from "@/components/ui/button";
import { Mail, Copy, Check, MessageCircle, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [copiedMail, setCopiedMail] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(false);
  const email = "kontakt@clarissa-heinemann.de";
  const whatsappNumber = "+4915222389418";

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopiedMail(true);
    setTimeout(() => setCopiedMail(false), 2000);
  };

  const handleCopyNumber = async () => {
    await navigator.clipboard.writeText(whatsappNumber);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  return (
    <section id="kontakt" className="section-padding">
      <div className="container-section">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-mono text-primary mb-3">KONTAKT</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lass uns über dein Projekt sprechen
          </h2>

          <p className="text-lg text-muted-foreground mb-12">
            Du hast einen Prozess, der automatisiert werden könnte?
            Oder bist unsicher, ob Automatisierung für euch Sinn macht?
            Schreib mir – ich schaue mir das gern unverbindlich an.
          </p>

          {/* Contact options */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">

            {/* EMAIL */}
            <div className="p-6 text-left">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">E-Mail</h3>
              </div>

              {/* Copy row */}
              <button
                onClick={handleCopyEmail}
                className="
      group mb-6
      flex items-center gap-2
      text-sm text-muted-foreground
      hover:text-foreground
      transition-colors
    "
              >
                {copiedMail ? (
                  <Check className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span className="select-all">{email}</span>
              </button>

              <Button variant="hero" asChild className="w-[70%]">
                <a href={`mailto:${email}`}>Schreiben
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </div>


            {/* WHATSAPP */}
            <div className="p-6 text-left">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">WhatsApp</h3>
              </div>

              {/* Copy row */}
              <button
                onClick={handleCopyNumber}
                className="
      group mb-6
      flex items-center gap-2
      text-sm text-muted-foreground
      hover:text-foreground
      transition-colors
    "
              >
                {copiedNumber ? (
                  <Check className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span className="select-all">+49 1522 2389418</span>
              </button>

              <Button variant="hero" asChild className="w-[70%]">
                <a
                  href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat starten
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* After contact info */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Was passiert nach deiner Anfrage?
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Kurzes Erstgespräch (15–30 Min)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Klare Einschätzung & Empfehlung</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Kein Verkaufsdruck</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
