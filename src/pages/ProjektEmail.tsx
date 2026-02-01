import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Mail, Info, ChevronRight, Cpu, Shield, Zap, Filter } from "lucide-react";

const ProjektEmail = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="w-full px-4 pt-16 pb-16">
        <div className="max-w-[1400px] mx-auto">

          {/* Navigation - Linksbündig */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Zurück zur Übersicht
            </Link>
          </div>

          {/* Header & Einleitung - Zentriert */}
          <div className="mb-8 flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 max-w-5xl">
              E-Mail Automatisierung mit <span className="text-primary">KI & n8n</span>
            </h1>

            {/* Einleitung zum Case - Zentriert */}
            <div className="max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Manuelle E-Mail-Bearbeitung führt zu Chaos in deinem CRM. Ich automatisiere diesen Prozess: E-Mails werden smart gefiltert, Leads priorisiert und direkt in Odoo erstellt – <span className="text-foreground font-medium">DSGVO-konform mit europäischer KI</span>.
              </p>
            </div>
          </div>

          {/* GitHub Link */}
          <div className="mb-8 text-center">
            <a
              href="https://github.com/issi-tech-glitch/n8n_odoo_demo_workflow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Demo Workflow auf GitHub</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* YouTube Video Section */}
          <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden mb-16 max-w-4xl mx-auto">
            <div className="bg-muted/30 border-b border-border px-4 py-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">Video Demo</p>
              <div className="w-12" />
            </div>

            <div className="relative w-full bg-black">
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/_mB2PhRla74"
                  title="E-Mail Automatisierung Demo"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Filter className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automatische Lead-Erstellung</h3>
                  <p className="text-muted-foreground text-sm">
                    E-Mails werden automatisch geparst, Spam gefiltert und neue Leads direkt im Odoo CRM erstellt. Keine manuellen Dateneinträge mehr.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Intelligente Priorisierung</h3>
                  <p className="text-muted-foreground text-sm">
                    Die KI bewertet Anfragen automatisch (Priorität: Hoch/Mittel/Niedrig), damit sich dein Team auf die wichtigsten Leads konzentriert.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">DSGVO-Konformität</h3>
                  <p className="text-muted-foreground text-sm">
                    Self-hosted KI-Modelle in Europa. Keine Datenweitergabe an externe Server – Deine Kundendaten bleiben bei dir.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">n8n Integration</h3>
                  <p className="text-muted-foreground text-sm">
                    Vollständige Automatisierung mit n8n – erweiterbar auf dein ganzes Tech-Stack. Webhooks, APIs, Odoo, und mehr.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SEKTION: Wie es funktioniert */}
          <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-xl mt-16 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              So funktioniert's: Vollständige Automatisierung
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Jede E-Mail wird intelligently verarbeitet. Hier siehst du den automatischen Workflow, der im Hintergrund abläuft.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-4">

              {/* Step 1: Mail */}
              <div className="flex flex-col items-center text-center max-w-[200px] group">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">1. Eingang</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Kundenanfrage per E-Mail (unstrukturiert).
                </p>
              </div>

              <ChevronRight className="hidden lg:block w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-[-40px]" />

              {/* Step 2: Filter */}
              <div className="flex flex-col items-center text-center max-w-[200px] group">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Filter className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">2. Filterung</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  n8n erkennt Spam und interne E-Mails, filtert diese aus.
                </p>
              </div>

              <ChevronRight className="hidden lg:block w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-[-40px]" />

              {/* Step 3: AI */}
              <div className="flex flex-col items-center text-center max-w-[200px] group">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Cpu className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">3. KI Analyse</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Self-hosted KI extrahiert Daten & priorisiert (Hoch/Mittel/Niedrig).
                </p>
              </div>

              <ChevronRight className="hidden lg:block w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-[-40px]" />

              {/* Step 4: CRM */}
              <div className="flex flex-col items-center text-center max-w-[200px] group">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Zap className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">4. Odoo</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Lead wird automatisch in deinem CRM erstellt (mit Priority-Tag).
                </p>
              </div>

              <ChevronRight className="hidden lg:block w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-[-40px]" />

              {/* Step 5: Dashboard */}
              <div className="flex flex-col items-center text-center max-w-[200px] group">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Shield className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">5. Fertig</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Dein Team arbeitet mit sauberen, priorisierten Daten.
                </p>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="flex items-start gap-3 p-6 bg-blue-500/5 rounded-xl border border-blue-500/10 mb-16">
            <Info className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-sm font-semibold text-blue-700/80">Datenschutz & Sicherheit</p>
              <p className="text-sm text-muted-foreground">
                Diese Lösung läuft auf deinen eigenen Servern oder mit EU-zertifizierten Providern. Alle Kundendaten bleiben bei dir – DSGVO-konform ohne Kompromisse.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-6 text-balance">
              Bereit, deine E-Mails zu automatisieren?
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link to="/#kontakt">
                <Button
                  variant="hero"
                  size="xl"
                  className="group w-full sm:w-auto"
                >
                  Unverbindliches Erstgespräch
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link to="/#leistungen">
                <Button
                  variant="hero-outline"
                  size="xl"
                  className="w-full sm:w-auto"
                >
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

export default ProjektEmail;
