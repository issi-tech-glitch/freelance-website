import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, ArrowRight, ChevronRight,
  Bot, MessageCircle, Cpu, Zap, Server, Mail, Wrench, Info,
} from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Streaming API (fetch + ReadableStream)"],
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "OpenAI SDK", "Gemini 2.5 Flash (Google AI Studio)", "Agentic Tool-Calling"],
  },
  {
    category: "Automatisierung & Infra",
    items: ["n8n (self-hosted)", "Netcup VPS · Deutschland", "E-Mail-Integration"],
  },
];

const ProjektPia = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="w-full px-4 pt-16 pb-16">
        <div className="max-w-[1400px] mx-auto">

          {/* Navigation */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Zurück zur Übersicht
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12 flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 max-w-5xl">
              Pia – <span className="text-primary">KI-Chatbot & Agent</span> 
            </h1>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Pia beantwortet Fragen zu meinem Lebenslauf und meiner Projekterfahrung {" "}
                <span className="text-foreground font-medium">rund um die Uhr</span>, erfasst Kontaktdaten automatisch und dokumentiert Wissenslücken – vollständig agentenbasiert.
              </p>
            </div>
          </div>

          {/* GitHub Link */}
          <div className="mb-10 text-center">
            <a
              href="https://github.com/issi-tech-glitch/cv-bot-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>FastAPI-Code auf GitHub</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Live-Demo Card */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col items-center text-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-md"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Bot className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Pia direkt ausprobieren</h2>
                <p className="text-sm text-muted-foreground">
                  Pia läuft live auf dieser Website. Stell ihr eine Frage zu Leistungen, Projekten oder Preisen.
                </p>
              </div>
              <Link to="/pia">
                <Button variant="hero" size="lg" className="group">
                  Chat mit Pia öffnen
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Agentenbasiertes Tool-Calling</h3>
                  <p className="text-muted-foreground text-sm">
                    Gemini 2.5 Flash entscheidet autonom, wann und welches Tool aufgerufen wird – keine feste Logik, sondern situationsabhängige Entscheidungen des Modells basierend auf dem Gesprächskontext.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Echtzeit-Streaming</h3>
                  <p className="text-muted-foreground text-sm">
                    Antworten werden token-weise per <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">StreamingResponse</code> über FastAPI geliefert und im Frontend live gerendert – ohne Wartezeit auf die vollständige Antwort.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automatische Kontakterfassung</h3>
                  <p className="text-muted-foreground text-sm">
                    Gibt ein Besucher seine E-Mail-Adresse im Chat an, löst Pia eigenständig ein n8n-Tool aus: Die Kontaktdaten werden gespeichert und per E-Mail weitergeleitet – vollautomatisch, ohne manuellen Eingriff.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Lernfähiges System</h3>
                  <p className="text-muted-foreground text-sm">
                    Fragen, die Pia nicht beantworten kann, werden über ein zweites n8n-Tool automatisch dokumentiert und per E-Mail gemeldet. So entstehen kontinuierlich Hinweise, wo der Chatbot oder das Angebot weiterentwickelt werden kann.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Tech Stack</h2>
            <p className="text-muted-foreground text-center mb-10 text-sm">
              Vollständig selbst entwickelt und auf eigenem Server betrieben.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {techStack.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-sm bg-muted border border-border rounded-full text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* So funktioniert's */}
          <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              So funktioniert's
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Vom Tastendruck bis zur Antwort – der vollständige Ablauf im Hintergrund.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-4">

              <div className="flex flex-col items-center text-center max-w-[180px] group">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <MessageCircle className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">1. Nachricht</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Nutzer stellt eine Frage im Chat-Widget oder auf /pia.
                </p>
              </div>

              <ChevronRight className="hidden lg:block w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-[-40px]" />

              <div className="flex flex-col items-center text-center max-w-[180px] group">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Server className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">2. FastAPI</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Backend empfängt den vollständigen Gesprächsverlauf und leitet ihn weiter.
                </p>
              </div>

              <ChevronRight className="hidden lg:block w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-[-40px]" />

              <div className="flex flex-col items-center text-center max-w-[180px] group">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Cpu className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">3. Gemini</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Gemini 2.5 Flash antwortet und entscheidet autonom über Tool-Aufrufe.
                </p>
              </div>

              <ChevronRight className="hidden lg:block w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-[-40px]" />

              <div className="flex flex-col items-center text-center max-w-[180px] group">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Zap className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">4. n8n Tool</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bei Bedarf: n8n-Workflow speichert Daten und schickt E-Mail-Benachrichtigung.
                </p>
              </div>

              <ChevronRight className="hidden lg:block w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-[-40px]" />

              <div className="flex flex-col items-center text-center max-w-[180px] group">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <MessageCircle className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">5. Stream</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Antwort wird token-weise live an den Browser gestreamt.
                </p>
              </div>

            </div>
          </div>

          {/* Info Box */}
          <div className="flex items-start gap-3 p-6 bg-blue-500/5 rounded-xl border border-blue-500/10 mb-16">
            <Info className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-sm font-semibold text-blue-700/80">Datenschutz & Hosting</p>
              <p className="text-sm text-muted-foreground">
                FastAPI-Backend und n8n laufen auf einem eigenen VPS bei Netcup (Deutschland). Einzige Drittlandübermittlung ist die LLM-Verarbeitung über Google AI Studio (USA) – abgesichert durch das EU-US Data Privacy Framework. Details in der{" "}
                <Link to="/datenschutz" className="underline hover:text-foreground transition-colors">Datenschutzerklärung</Link>.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-6 text-balance">
              Einen eigenen KI-Agenten für dein Unternehmen?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link to="/#kontakt">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/#leistungen">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Leistungen entdecken
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Kostenloses Erstgespräch • 100% unverbindlich
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ProjektPia;
