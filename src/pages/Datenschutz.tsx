import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SECTION_CONTAINER_CLASS } from "@/lib/constants";

const Datenschutz = () => {
  return (
    <main className="min-h-screen bg-background px-4 sm:px-8 py-8 sm:py-16">
      <div className={SECTION_CONTAINER_CLASS}>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-foreground/60 text-sm hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-foreground mb-12">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-foreground/50 text-sm mb-12">Stand: 18. Dezember 2025</p>

          <section className="mb-10">
            <h2 className="text-xl font-light text-foreground mb-4">1. Verantwortlicher</h2>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-foreground/70 font-light text-sm leading-relaxed mt-4">
              Kim Sacher<br />
              codeby.kim<br />
              Belgradstraße 33<br />
              80796 München<br />
              Deutschland
            </p>
            <p className="text-foreground/70 font-light text-sm leading-relaxed mt-4">
              E-Mail: kontakt@codeby.kim
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-light text-foreground mb-4">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang verarbeitet. Eine Weitergabe an Dritte erfolgt ausschließlich im Rahmen der gesetzlichen Vorgaben.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-light text-foreground mb-4">3. Zugriffsdaten und Hosting</h2>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch Informationen erfasst (sogenannte Server-Logfiles). Diese umfassen insbesondere:
            </p>
            <ul className="text-foreground/70 font-light text-sm leading-relaxed mt-4 list-disc list-inside space-y-1">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>aufgerufene Seite bzw. Datei</li>
              <li>Browsertyp und -version</li>
              <li>verwendetes Betriebssystem</li>
            </ul>
            <p className="text-foreground/70 font-light text-sm leading-relaxed mt-4">
              Die Verarbeitung dieser Daten erfolgt zur Sicherstellung eines reibungslosen Verbindungsaufbaus, zur Systemsicherheit sowie zur technischen Optimierung der Website.
            </p>
            <p className="text-foreground/70 font-light text-sm leading-relaxed mt-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
            <p className="text-foreground/70 font-light text-sm leading-relaxed mt-4">
              Die Logfiles werden für maximal 30 Tage gespeichert und anschließend gelöscht oder anonymisiert.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-light text-foreground mb-4">4. Übermittlung von personenbezogenen Daten</h2>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Personenbezogene Daten werden an Dritte nur insoweit übermittelt, wie dies zur Bereitstellung und zum Betrieb dieser Website erforderlich ist (z. B. an den Hosting-Anbieter).
            </p>
            <p className="text-foreground/70 font-light text-sm leading-relaxed mt-4">
              Eine weitergehende Übermittlung findet nicht statt.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-light text-foreground mb-4">5. Datenübermittlung in Drittländer</h2>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Eine Übermittlung personenbezogener Daten in Länder außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR) findet derzeit nicht statt.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-light text-foreground mb-4">6. Cookies</h2>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Diese Website verwendet keine Cookies zu Analyse-, Tracking- oder Marketingzwecken.
            </p>
            <p className="text-foreground/70 font-light text-sm leading-relaxed mt-4">
              Es können technisch notwendige Cookies eingesetzt werden, die für den Betrieb und die Sicherheit der Website erforderlich sind. Diese Cookies erfordern keine Einwilligung.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-light text-foreground mb-4">7. Rechte der betroffenen Personen</h2>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Sie haben folgende Rechte gemäß DSGVO:
            </p>
            <ul className="text-foreground/70 font-light text-sm leading-relaxed mt-4 list-disc list-inside space-y-1">
              <li>Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
              <li>Recht auf Berichtigung unrichtiger Daten</li>
              <li>Recht auf Löschung Ihrer Daten, sofern keine gesetzlichen Aufbewahrungspflichten bestehen</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-light text-foreground mb-4">8. Datensicherheit</h2>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Diese Website nutzt eine TLS-/SSL-Verschlüsselung (HTTPS), um die Sicherheit der Datenübertragung zu gewährleisten.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-light text-foreground mb-4">9. Aktualisierung der Datenschutzerklärung</h2>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Diese Datenschutzerklärung wird angepasst, sobald Änderungen an der Website oder an den rechtlichen Vorgaben dies erforderlich machen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Datenschutz;





