const steps = [
  {
    number: "01",
    title: "Analyse",
    description: "Bevor ich Code schreibe, verstehe ich den bestehenden Prozess. Wo sind die Engpässe? Was kostet am meisten Zeit? Was lohnt sich wirklich zu automatisieren?",
  },
  {
    number: "02",
    title: "Konzept",
    description: "Gemeinsam definieren wir den Zielzustand. Klare Anforderungen, realistische Zeitschätzung, transparente Kommunikation über Möglichkeiten und Grenzen.",
  },
  {
    number: "03",
    title: "Umsetzung",
    description: "Pragmatische Entwicklung in überschaubaren Schritten. Regelmäßiges Feedback, iterative Anpassungen, keine bösen Überraschungen am Ende.",
  },
  {
    number: "04",
    title: "Übergabe",
    description: "Dokumentation, Einarbeitung und Support. Die Lösung läuft stabil und euer Team kann sie eigenständig nutzen – ohne permanente Abhängigkeit.",
  },
];

const Process = () => {
  return (
    <section id="arbeitsweise" className="section-padding">
      <div className="container-section">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-primary mb-3">ARBEITSWEISE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Strukturiert, transparent, pragmatisch
          </h2>
          <p className="text-lg text-muted-foreground">
            Mein Ansatz: Analyse vor Automatisierung. Klare Kommunikation. 
            Lösungen, die nachhaltig funktionieren.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative flex gap-8 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Number */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-mono font-bold text-lg">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground max-w-2xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;