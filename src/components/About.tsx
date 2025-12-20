import { Code2, Lightbulb, Target, Wrench } from "lucide-react";

const qualities = [
  {
    icon: Code2,
    title: "Technischer Fokus",
    description: "Ich verstehe, was unter der Haube passiert – und baue Lösungen, die stabil laufen.",
  },
  {
    icon: Target,
    title: "Prozessdenken",
    description: "Bevor ich automatisiere, verstehe ich den Prozess. Die beste Automatisierung ist oft die einfachste.",
  },
  {
    icon: Lightbulb,
    title: "Pragmatische Umsetzung",
    description: "Keine Over-Engineering. Keine unnötige Komplexität. Lösungen, die funktionieren.",
  },
  {
    icon: Wrench,
    title: "Wartbare Systeme",
    description: "Alles, was ich baue, kann auch von anderen verstanden und angepasst werden.",
  },
];

const About = () => {
  return (
    <section id="ueber-mich" className="section-padding bg-card">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div>
            <p className="text-sm font-mono text-primary mb-3">ÜBER MICH</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Entwicklerin mit Fokus auf echte Ergebnisse
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Ich bin Entwicklerin und spezialisiert auf Prozessautomatisierung. 
                Was mich antreibt: Technik soll Arbeit abnehmen, nicht neue Probleme schaffen.
              </p>
              <p>
                Ich habe einen Master in Information Systems mit Schwerpunkten Softwareentwicklung und KI. Meine Stärke ist 
                die Schnittstelle zwischen Technik und echten Business-Prozessen. 
                Ich verstehe sowohl die technischen Möglichkeiten als auch die 
                praktischen Anforderungen im Arbeitsalltag.
              </p>
              <p>
                Mit Tools wie <span className="text-foreground font-medium font-mono">Make</span> und <span className="text-foreground font-medium font-mono">UiPath</span> baue ich 
                Automatisierungen, die stabil laufen und von Teams ohne tiefes 
                technisches Know-how genutzt werden können.
              </p>
            </div>
          </div>

          {/* Qualities Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {qualities.map((quality, index) => (
              <div 
                key={quality.title}
                className="p-6 rounded-xl border border-border bg-background opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <quality.icon className="w-5 h-5 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{quality.title}</h3>
                <p className="text-sm text-muted-foreground">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;