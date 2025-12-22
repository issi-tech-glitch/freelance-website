import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Layers, Cpu, Zap } from "lucide-react";

const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
};

const Pricing = () => {
    const packages = [
        {
            title: "Workflow Basis",
            description: "Automatisierung eines klar definierten Standard-Prozesses.",
            price: "ab 1.500€",
            features: [
                "1 Kern-Prozess (linear)",
                "Nutzung von Standard-APIs",
                "Umsetzung in Make oder Python",
                "Technische Dokumentation",
                "1 Woche Go-Live Support (Hypercare)"
            ],
            icon: <Zap className="w-5 h-5 text-primary" />,
        },
        {
            title: "Advanced KI",
            description: "Komplexere Abläufe mit Logik-Verzweigungen und KI-Integration.",
            price: "ab 4.500€",
            features: [
                "Bis zu 3 vernetzte Workflows",
                "KI-gestützte Datenverarbeitung",
                "Eigene Python-Skripte & Logik",
                "Fehler-Handling & Monitoring",
                "2 Wochen Go-Live Support (Hypercare)"
            ],
            icon: <Cpu className="w-5 h-5 text-primary" />,
        },
        {
            title: "Custom Solution",
            description: "Individuelle Architekturen für Legacy-Systeme oder große Datenmengen.",
            price: "ab 9.500€",
            features: [
                "Anbindung von Legacy-Systemen (RPA)",
                "Custom API- oder DB-Entwicklung",
                "Skalierbare Infrastruktur",
                "Intensive Team-Einweisung",
                "4 Wochen Go-Live Support (Hypercare)"
            ],
            icon: <Layers className="w-5 h-5 text-primary" />,
        },
    ];

    return (
        <section id="pricing" className="section-padding bg-background">
            <div className="container-section max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Preise & Pakete</h2>
                    <p className="text-lg text-muted-foreground">
                        Die Preise und Paketinhalte dienen als Orientierung. Jedes Projekt ist individuell –
                        ich erstelle gerne ein maßgeschneidertes Angebot basierend auf euren Anforderungen.
                    </p>
                </div>

                {/* Packages */}
                <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <article
                            key={pkg.title}
                            className="relative p-8 md:p-10 rounded-2xl border border-border bg-card flex flex-col h-full opacity-0 animate-fade-in"
                            style={{ animationDelay: `${0.1 + index * 0.15}s` }}
                        >
                            {/* Heading inside the box (icon + title) */}
                            <div className="flex items-center gap-3 mb-4">
                                {pkg.icon}
                                <h3 className="text-lg md:text-xl font-semibold">{pkg.title}</h3>
                            </div>

                            {/* Description */}
                            <p className="text-md text-muted-foreground mb-4 min-h-[3rem]">{pkg.description}</p>

                            {/* Price */}
                            <p className="text-3xl font-bold mb-8 text-foreground">{pkg.price}</p>

                            {/* Features */}
                            <ul className="space-y-4 text-md text-muted-foreground flex-grow">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                        <span className="leading-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                {/* Wartungs-Hinweis */}
                <div className="mt-12 p-6 rounded-xl border border-dashed border-border bg-muted/30 max-w-3xl mx-auto text-center">
                    <p className="text-sm md:text-base text-muted-foreground">
                        <span className="font-semibold text-foreground">Nach dem Projekt:</span> Die oben genannten Pakete enthalten eine intensive Go-Live Begleitung. Für die langfristige Sicherheit biete ich flexible <strong>Wartungs-Kontingente</strong> an. So bleiben deine Automatisierungen auch bei API-Updates oder Systemänderungen stabil, ohne dass du dich um das Hosting oder Monitoring kümmern musst.
                    </p>
                </div>
            </div>

            {/* Call-to-action */}
            <div className="mt-12 flex flex-col items-center gap-4">
                <Button
                    variant="hero"
                    size="xl"
                    onClick={scrollToContact}
                    className="group"
                >
                    Unverbindlich anfragen
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 ml-2" />
                </Button>
            </div>
        </section>
    );
};

export default Pricing;