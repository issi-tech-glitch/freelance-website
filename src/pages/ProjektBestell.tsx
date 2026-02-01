import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Copy, Check, Mail, Info, ChevronRight, Cpu, BarChart3, Database, Zap } from "lucide-react"; // ChevronRight für Icons in der Flow-Sektion

const ProjektBestell = () => {
    const [copied, setCopied] = useState(false);

    const emailTarget = "demo@clarissa-heinemann.de";
    const emailBody = `Hallo,

ich würde gerne folgende Produkte bestellen:
P002: 5 mal
P003: 2 mal

Viele Grüße
Max Mustermann`; // Habe Max Mustermann hinzugefügt, damit es klarer ist

    const copyToClipboard = () => {
        navigator.clipboard.writeText(emailBody);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-background">
            <main className="w-full px-4 pt-16 pb-16"> {/* Mehr Padding unten */}
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
                    <div className="mb-16 flex flex-col items-center text-center">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 max-w-5xl">
                            Live Demo: <span className="text-primary">KI-Bestellverarbeitung</span>
                        </h1>

                        {/* Einleitung zum Case - Zentriert */}
                        <div className="max-w-5xl mx-auto">
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                               Wir automatisieren den Weg von der E-Mail direkt in die Datenbank. Eine KI analysiert Freitext-Bestellungen und überführt sie in strukturierte Datensätze. Das Ergebnis ist eine <span className="text-foreground font-medium">nahtlose Lager-Synchronisation</span> ohne manuelle Reibungsverluste.</p>
                        </div>
                    </div>

                    {/* Anleitung & Email-Draft Section */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16"> {/* Mehr Abstand zum Dashboard */}
                        <div className="space-y-6">
                            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm">
                                <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[13px] text-primary-foreground font-mono">1</span>
                                    Probiere es selbst aus
                                </h2>

                                {/* Strukturierte Schritte statt Fließtext */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex gap-3">
                                        <div className="mt-1 bg-primary/10 p-1 rounded-md h-fit">
                                            <Mail className="w-4 h-4 text-primary" />
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Schicke eine Freitext E-Mail an: <br />
                                            <strong className="text-foreground font-semibold">{emailTarget}</strong>
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="mt-1 bg-primary/10 p-1 rounded-md h-fit">
                                            <Database className="w-4 h-4 text-primary" />
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Nenne darin eine <strong className="text-foreground">SKU</strong> (siehe Lagerbestand im Dashboard),
                                            die <strong className="text-foreground">Menge</strong> und deinen <strong className="text-foreground">Vornamen</strong>.
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="mt-1 bg-primary/10 p-1 rounded-md h-fit">
                                            <Zap className="w-4 h-4 text-primary" />
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Die Email wird automatisiert verarbeitet. Klicke nach ca. 1-2 Min. auf
                                            <strong className="text-foreground font-medium"> "Daten aktualisieren"</strong> im Dashboard.
                                        </p>
                                    </div>
                                </div>

                                {/* Info-Box mit klarer Trennung */}
                                <div className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10 text-[13px] text-muted-foreground leading-snug">
                                    <Info className="w-5 h-5 text-blue-500 shrink-0" />
                                    <div className="space-y-1">
                                        <p><strong className="text-blue-700/80">Datenschutz:</strong> Nur Vorname und Bestelldaten werden angezeigt. Löschung erfolgt automatisch nach 24h.</p>
                                        <p><strong className="text-blue-700/80">Hinweis:</strong> Dies ist eine reine Demo. Es werden keine echten Waren versendet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border border-border p-6 rounded-2xl relative">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[12px] text-primary-foreground">2</span>
                                E-Mail Entwurf kopieren
                            </h2>
                            <div className="relative group">
                                <pre className="bg-muted p-5 rounded-xl text-sm font-mono text-foreground leading-relaxed overflow-x-auto border border-border">
                                    {emailBody}
                                </pre>
                                <button
                                    onClick={copyToClipboard}
                                    className="absolute top-3 right-3 p-2 rounded-md bg-background border border-border hover:bg-secondary transition-all flex items-center gap-2 shadow-sm"
                                >
                                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                    <span className="text-xs font-medium">{copied ? "Kopiert!" : "Kopieren"}</span>
                                </button>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <a
                                    href={`mailto:${emailTarget}?subject=Bestellung Demo&body=${encodeURIComponent(emailBody)}`}
                                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                                    target="_blank" // Öffnet im neuen Tab
                                    rel="noopener noreferrer" // Sicherstellen für target="_blank"
                                >
                                    <Mail className="w-4 h-4" /> Direkt im Mail-Programm öffnen
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Container */}
                    <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden mb-16"> {/* Abstand zur neuen Sektion */}
                        <div className="bg-muted/30 border-b border-border px-4 py-3 flex items-center justify-between">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                            </div>
                            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">Live Dashboard View</p>
                            <div className="w-12" />
                        </div>

                        <div className="relative w-full h-[80vh] min-h-[600px] bg-white">
                            <iframe
                                src="https://demo-order-dashboard-heinemann.streamlit.app/?embed=true"
                                className="absolute top-0 left-0 w-full h-full border-none"
                                title="Bestell Dashboard Demo"
                                allow="clipboard-read; clipboard-write"
                            />
                        </div>
                    </div>

                    {/* SEKTION: Wie es funktioniert (Clean Layout) */}
                    <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-xl mt-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                            So funktioniert's: Vollständige Automatisierung
                        </h2>
                        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                            Jede E-Mail wird intelligent verarbeitet, ohne manuelles Zutun.
                            Hier siehst du den automatischen Workflow, der im Hintergrund abläuft.
                        </p>

                        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-4">

                            {/* Step 1: Mail */}
                            <div className="flex flex-col items-center text-center max-w-[200px] group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                    <Mail className="w-8 h-8 text-primary" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">1. Eingang</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Erhalt der Bestellung per E-Mail (unstrukturiert).
                                </p>
                            </div>

                            <ChevronRight className="hidden lg:block w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-[-40px]" />

                            {/* Step 2: Make */}
                            <div className="flex flex-col items-center text-center max-w-[200px] group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                    <Zap className="w-8 h-8 text-primary" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">2. Trigger</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Make.com erkennt die Mail und startet den Prozess.
                                </p>
                            </div>

                            <ChevronRight className="hidden lg:block w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-[-40px]" />

                            {/* Step 3: AI */}
                            <div className="flex flex-col items-center text-center max-w-[200px] group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                    <Cpu className="w-8 h-8 text-primary" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">3. Analyse</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    KI (Gemini) extrahiert Daten aus dem Freitext.
                                </p>
                            </div>

                            <ChevronRight className="hidden lg:block w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-[-40px]" />

                            {/* Step 4: Database */}
                            <div className="flex flex-col items-center text-center max-w-[200px] group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                    <Database className="w-8 h-8 text-primary" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">4. Storage</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Speicherung der Datensätze in Supabase.
                                </p>
                            </div>

                            <ChevronRight className="hidden lg:block w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-[-40px]" />

                            {/* Step 5: Dashboard */}
                            <div className="flex flex-col items-center text-center max-w-[200px] group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                    <BarChart3 className="w-8 h-8 text-primary" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider">5. Live</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Visualisierung im Streamlit-Dashboard.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold mb-6 text-balance">
                            Bereit für deine eigene Automatisierung?
                        </h3>

                        {/* Button-Container: Auf Mobile untereinander, auf Desktop nebeneinander */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <Link to="/#kontakt">
                                <Button
                                    variant="hero"
                                    size="xl"
                                    className="group w-full sm:w-auto"
                                >
                                    Jetzt Kontakt aufnehmen
                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>

                            {/* NEU: Button für Leistungen */}
                            <Link to="/#leistungen">
                                <Button
                                    variant="hero-outline" // Nutzt den Outline-Stil für weniger Dominanz als der Haupt-Button
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

export default ProjektBestell;
