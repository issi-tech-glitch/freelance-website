import { Bot, Link2, Workflow, Users } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "KI-gestützte Lösungen",
    description: "Smarte Extraktion, Text- und Dokumentenverarbeitung und Textgenerierung mit gängigen KI-Modellen, um Prozesse noch effizienter machen.",
    result: "Weniger Routinearbeit, mehr Zeit für Kernaufgaben.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Workflow,
    title: "Prozessanalyse & Automatisierung",
    description: "Schwachstellen erkennen und Abläufe verbessern – repetitive Aufgaben automatisieren mit Python, Make oder UiPath.",
    result: "Schnellere Durchlaufzeiten, weniger Fehler.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Link2,
    title: "API-Integration & Tool-Verknüpfung",
    description: "Nahtlose Verbindung zwischen euren bestehenden Tools. CRM, ERP, Marketing-Tools, Custom Software.",
    result: "Keine Datensilos mehr, alles fließt automatisch.",
    color: "bg-accent-lime/10 text-accent-lime",
  },
  {
    icon: Users,
    title: "Daten & Reporting",
    description: "Automatisierte Reports, Dashboards und Datenaufbereitung für klare Insights (SQL, Python, Streamlit, BI Tools).",
    result: "Daten automatisiert verstehen und nutzen.",
    color: "bg-accent-purple/10 text-accent-purple",
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="section-padding bg-card">
      <div className="container-section">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-primary mb-3">LEISTUNGEN</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Automatisierung, die wirklich funktioniert
          </h2>
          <p className="text-lg text-muted-foreground">
            Ich baue keine Demo-KI oder Spielereien, sondern stabile, 
            produktionsnahe Automatisierungen für den echten Arbeitsalltag.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <article 
              key={service.title}
              className="group p-8 rounded-2xl border border-border bg-background card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl ${service.color} mb-6`}>
                <service.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              {/* Result */}
              <div className="flex items-start gap-2 pt-4 border-t border-border/50">
                <span className="text-sm font-medium text-accent">→</span>
                <p className="text-sm font-medium text-foreground">{service.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;