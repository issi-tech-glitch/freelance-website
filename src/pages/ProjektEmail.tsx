import { Link } from "react-router-dom";

const ProjektEmail = () => {
  return (
    <main className="container-section py-20">
      <h1 className="text-3xl font-bold mb-4">KI-gestützte E-Mail Kundendaten-Erfassung</h1>
      <p className="mb-6 text-muted-foreground">Ein Agentur-Team verbringt jeden Tag 2+ Stunden damit, Daten aus E-Mails manuell in ihr CRM zu übertragen.</p>

      <section className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Problem</h3>
          <p className="mt-2">Manuelle Dateneingabe aus E-Mails führt zu Zeitverlust und Fehlern.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Lösung</h3>
          <p className="mt-2">Automatischer E-Mail-Parser mit KI-Extraktion und direkter CRM-Integration via n8n.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Ergebnis</h3>
          <p className="mt-2 font-medium">90% Zeitersparnis bei der Dateneingabe. Team kann sich auf Kundenbeziehungen konzentrieren.</p>
        </div>
      </section>

      <div className="mt-8">
        <Link to="/" className="text-primary hover:underline">← Zurück zur Startseite</Link>
      </div>
    </main>
  );
};

export default ProjektEmail;
