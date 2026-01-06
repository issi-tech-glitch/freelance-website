import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Copy, Check, Mail, Info, ChevronRight } from "lucide-react"; // ChevronRight für Icons in der Flow-Sektion

const Demo = () => {
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

                    {/* Header & Navigation */}
                    <div className="mb-10">
                        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Zurück zur Übersicht
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                            Live Demo: <span className="text-primary">KI-Bestellverarbeitung</span>
                        </h1>
                    </div>

                    {/* Anleitung & Email-Draft Section */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16"> {/* Mehr Abstand zum Dashboard */}
            <div className="space-y-6">
              <div className="bg-card border border-border p-6 rounded-2xl">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[12px] text-primary-foreground">1</span>
                  Probiere es selbst aus
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Schicke eine E-Mail an <strong className="text-foreground">{emailTarget}</strong>. 
                  Such dir dafür im Lagerbestand unten <strong className="text-foreground">SKUs</strong> aus und schicke sie mit der <strong className="text-foreground">gewünschten Menge</strong> und deinem <strong className="text-foreground">Vornamen</strong> in einer Freitext-E-Mail.
                  Eine KI extrahiert diese Daten automatisch. Du wirst die Bestellung dann nach kurzer Zeit im Dashboard sehen.
                  Schreibe deine eigene Email oder kopiere einfach den bereitgestellten Entwurf.
                </p>
                <div className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10 text-sm text-muted-foreground">
                  <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <p>Keine Sorge: Es werden nur Vorname und Bestelldaten angezeigt. Alle Daten werden nach 24h automatisch gelöscht. Die Bestellung dient ausschließlich zu Demonstrationszwecken - es werden keine echten Produkte.</p>
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

                    {/* SEKTION: Wie es funktioniert mit Icons8 */}
                    <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-xl mt-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                            So funktioniert's: Volle Automatisierung
                        </h2>
                        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                            Jede E-Mail wird intelligent verarbeitet, ohne manuelles Zutun.
                            Hier siehst du den automatischen Workflow, der im Hintergrund abläuft.
                        </p>

                        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-4">

                            {/* Step 1: Email */}
                            <div className="flex flex-col items-center text-center max-w-[200px]">
                                <div className="w-20 h-20 flex items-center justify-center mb-4 p-2 bg-primary/5 rounded-2xl">
                                    <img src="https://img.icons8.com/fluency/96/mail.png" alt="Email Icon" title="Icons8" />
                                </div>
                                <h3 className="font-semibold mb-2">1. E-Mail Eingang</h3>
                                <p className="text-sm text-muted-foreground">Du schickst eine E-Mail mit deiner Bestellung.</p>
                            </div>

                            <ChevronRight className="w-8 h-8 text-muted-foreground/30 rotate-90 lg:rotate-0 flex-shrink-0" />

                            {/* Step 2: Make.com */}
                            <div className="flex flex-col items-center text-center max-w-[200px]">
                                <div className="w-20 h-20 flex items-center justify-center mb-4 p-2 bg-primary/5 rounded-2xl">
                                    <img src="https://img.icons8.com/fluency/96/workflow.png" alt="Make Workflow Icon" title="Icons8" />
                                </div>
                                <h3 className="font-semibold mb-2">2. Automatisierung</h3>
                                <p className="text-sm text-muted-foreground">Make.com registriert den Eingang sofort per Webhook.</p>
                            </div>

                            <ChevronRight className="w-8 h-8 text-muted-foreground/30 rotate-90 lg:rotate-0 flex-shrink-0" />

                            {/* Step 3: Gemini / AI */}
                            <div className="flex flex-col items-center text-center max-w-[200px]">
                                <div className="w-20 h-20 flex items-center justify-center mb-4 p-2 bg-primary/5 rounded-2xl">
                                    <img src="https://img.icons8.com/color/48/bard--v1.png" alt="AI Icon" title="Icons8" />
                                </div>
                                <h3 className="font-semibold mb-2">3. KI-Extraktion</h3>
                                <p className="text-sm text-muted-foreground">Gemini liest den Freitext und strukturiert die Daten.</p>
                            </div>

                            <ChevronRight className="w-8 h-8 text-muted-foreground/30 rotate-90 lg:rotate-0 flex-shrink-0" />

                            {/* Step 4: Supabase */}
                            <div className="flex flex-col items-center text-center max-w-[200px]">
                                <div className="w-20 h-20 flex items-center justify-center mb-4 p-2 bg-primary/5 rounded-2xl">
                                    <img src="https://img.icons8.com/fluency/96/database.png" alt="Database Icon" title="Icons8" />
                                </div>
                                <h3 className="font-semibold mb-2">4. Datenbank</h3>
                                <p className="text-sm text-muted-foreground">Sichere Speicherung der Bestellung in Supabase.</p>
                            </div>

                            <ChevronRight className="w-8 h-8 text-muted-foreground/30 rotate-90 lg:rotate-0 flex-shrink-0" />

                            {/* Step 5: Dashboard */}
                            <div className="flex flex-col items-center text-center max-w-[200px]">
                                <div className="w-20 h-20 flex items-center justify-center mb-4 p-2 bg-primary/5 rounded-2xl">
                                    <img src="https://img.icons8.com/nolan/64/control-panel.png" alt="Dashboard Icon" title="Icons8" />
                                </div>
                                <h3 className="font-semibold mb-2">5. Live-Ansicht</h3>
                                <p className="text-sm text-muted-foreground">Aktualisierung des Dashboards in Echtzeit.</p>
                            </div>

                        </div>


                    </div>

                </div>
            </main>
        </div>
    );
};

export default Demo;