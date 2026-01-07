import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SECTION_CONTAINER_CLASS } from "@/lib/constants";

const Impressum = () => {
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
          Impressum
        </h1>

        <div className="prose prose-invert prose-sm max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-light text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Kim Sacher<br />
              codeby.kim<br />
              Belgradstraße 33<br />
              80796 München<br />
              Deutschland
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-light text-foreground mb-4">Kontakt</h2>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              E-Mail: kontakt@codeby.kim
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-light text-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Kim Sacher<br />
              Belgradstraße 33<br />
              80796 München
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-light text-foreground mb-4">Haftungsausschluss</h2>
            
            <h3 className="text-lg font-light text-foreground/90 mb-3 mt-6">Haftung für Inhalte</h3>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
            </p>

            <h3 className="text-lg font-light text-foreground/90 mb-3 mt-6">Haftung für Links</h3>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss besteht. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
            </p>

            <h3 className="text-lg font-light text-foreground/90 mb-3 mt-6">Urheberrecht</h3>
            <p className="text-foreground/70 font-light text-sm leading-relaxed">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Impressum;





