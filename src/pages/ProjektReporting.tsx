import { Link } from "react-router-dom";

const ProjektReporting = () => {
  return (
    <main className="container-section py-20">
      <h1 className="text-3xl font-bold mb-4">Automatisiertes Wochen-Reporting</h1>
      <p className="mb-6 text-muted-foreground">Ein Startup muss wöchentlich Reportings aus 5 verschiedenen Tools manuell zusammenstellen.</p>

      <section className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Problem</h3>
          <p className="mt-2">Aufwändige, manuelle Zusammenstellung von Reportings aus mehreren Tools.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Lösung</h3>
          <p className="mt-2">Automatisierter Reporting-Workflow mit API-Anbindungen und automatischer PDF-Generierung.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Ergebnis</h3>
          <p className="mt-2 font-medium">Von 4 Stunden auf 15 Minuten. Reports gehen jetzt automatisch jeden Montag raus.</p>
        </div>
      </section>

      <div className="mt-8">
        <Link to="/" className="text-primary hover:underline">← Zurück zur Startseite</Link>
      </div>
    </main>
  );
};

export default ProjektReporting;
