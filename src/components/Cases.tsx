const cases = [
  {
    problem: "Ein Agentur-Team verbrachte jeden Tag 2+ Stunden damit, Daten aus E-Mails manuell in ihr CRM zu übertragen.",
    solution: "Automatischer E-Mail-Parser mit KI-Extraktion und direkter CRM-Integration via Make.",
    result: "90% Zeitersparnis bei der Dateneingabe. Team kann sich auf Kundenbeziehungen konzentrieren.",
    tags: ["E-Mail Parsing", "CRM Integration", "Make"],
  },
  {
    problem: "Ein Startup musste wöchentlich Reportings aus 5 verschiedenen Tools manuell zusammenstellen.",
    solution: "Automatisierter Reporting-Workflow mit API-Anbindungen und automatischer PDF-Generierung.",
    result: "Von 4 Stunden auf 15 Minuten. Reports gehen jetzt automatisch jeden Montag raus.",
    tags: ["API Integration", "Automatisches Reporting", "PDF Generation"],
  },
  {
    problem: "Ein KMU hatte keinen Überblick über Bestellstatus und Lagerbestände – alles lief über Excel und E-Mail.",
    solution: "Verknüpfung von Shop-System, Lagerverwaltung und Versanddienstleister mit automatischen Status-Updates.",
    result: "Echtzeit-Transparenz, weniger Kundennachfragen, schnellere Bearbeitung.",
    tags: ["E-Commerce", "Lagerverwaltung", "Prozessintegration"],
  },
];

const Cases = () => {
  return (
    <section id="beispiele" className="section-padding">
      <div className="container-section">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-primary mb-3">BEISPIELE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Problem → Lösung → Ergebnis
          </h2>
          <p className="text-lg text-muted-foreground">
            Konkrete Automatisierungsprojekte und ihre messbaren Auswirkungen.
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-8">
          {cases.map((caseItem, index) => (
            <article 
              key={index}
              className="relative p-8 md:p-10 rounded-2xl border border-border bg-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Case number */}
              <div className="absolute -top-4 left-8 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-mono font-medium">
                Case {String(index + 1).padStart(2, "0")}
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-destructive" />
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Problem</h3>
                  </div>
                  <p className="text-foreground">{caseItem.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Lösung</h3>
                  </div>
                  <p className="text-foreground">{caseItem.solution}</p>
                </div>

                {/* Result */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Ergebnis</h3>
                  </div>
                  <p className="text-foreground font-medium">{caseItem.result}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
                {caseItem.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;