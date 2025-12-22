import { MapPin, Mail, Phone, Scale } from "lucide-react";

const Impressum = () => {
  return (
    <section id = "impressum" className="section-padding">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-mono text-primary mb-3">RECHTLICHES</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Impressum
            </h1>
            <p className="text-lg text-muted-foreground">
              Angaben gemäß § 5 TMG
            </p>
          </div>

          {/* Content Card */}
          <div className="space-y-10">

            {/* Anbieter */}
            <div className="p-6 rounded-xl border border-border bg-background">
              <h2 className="font-semibold mb-4">Anbieterin</h2>

              <p className="font-medium">Clarissa Heinemann</p>
              <p className="text-muted-foreground mt-1">
                Softwareentwicklung, Prozessautomatisierung, KI-gestützte Automatisierung,
                API-Integration, Social-Media-Content, Handel mit digitalen Produkten
                (z. B. Templates, Guides, Downloads) sowie Verweise auf Affiliate-Links
              </p>

              <div className="flex items-start gap-3 mt-4 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>
                  Ampfingstraße 44<br />
                  81671 München<br />
                  Deutschland
                </span>
              </div>
            </div>

            {/* Kontakt */}
            <div className="p-6 rounded-xl border border-border bg-background">
              <h2 className="font-semibold mb-4">Kontakt</h2>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+49 1522 2389418</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>kontakt@clarissa-heinemann.de</span>
                </div>
              </div>
            </div>

            {/* Beruf */}
            <div className="p-6 rounded-xl border border-border bg-background">
              <h2 className="font-semibold mb-2">Berufsbezeichnung</h2>
              <p className="text-sm text-muted-foreground">
                Freiberufliche Softwareentwicklerin, Content Creatorin, Social Media Coaching
              </p>
            </div>

            {/* Redaktionell */}
            <div className="p-6 rounded-xl border border-border bg-background">
              <h2 className="font-semibold mb-2">
                Redaktionell verantwortlich (§ 18 MStV)
              </h2>
              <p className="text-sm text-muted-foreground">
                Clarissa Heinemann<br />
                Ampfingstraße 44<br />
                81671 München
              </p>
            </div>

            {/* Streitbeilegung */}
            <div className="p-6 rounded-xl border border-border bg-background">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-4 h-4 text-primary" />
                <h2 className="font-semibold">Streitbeilegung</h2>
              </div>

              <p className="text-sm text-muted-foreground mb-3">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>

              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-primary hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>

              <p className="text-sm text-muted-foreground mt-4">
                Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
