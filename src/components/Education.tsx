import ScrollReveal from "./ScrollReveal";
import { SECTION_CONTAINER_CLASS, SECTION_PADDING_CLASS } from "@/lib/constants";
import HeadingWithHover from "./HeadingWithHover";

const Education = () => {
  return (
    <section
      className={`min-h-screen relative overflow-hidden bg-background ${SECTION_PADDING_CLASS}`}
    >
      <div className={SECTION_CONTAINER_CLASS}>
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12 mb-24">
            <div className="flex flex-col">
              <p className="text-foreground/60 text-sm font-light mb-1">
                Bachelor of Science
              </p>
              <a
                href="https://www.lmu.de/de/studium/studienangebot/alle-studienfaecher-und-studiengaenge/medieninformatik-bachelor-hauptfach-2942.html"
                target="_blank"
                rel="noopener noreferrer"
                className="
    text-foreground text-xl md:text-2xl font-light mb-1 inline-block
    underline underline-offset-4 decoration-white/40
    transition-all duration-300
    hover:text-primary hover:decoration-primary
  "
              >
                Media Informatics
              </a>
              <p className="text-foreground/60 text-sm font-light">
                Ludwig Maximilian University of Munich (LMU)
              </p>
            </div>

            {/* Vertical divider */}
            <div className="hidden md:block h-full w-px bg-white/20 self-stretch" />

            <HeadingWithHover className="heading-main text-foreground md:ml-auto">
              Education
            </HeadingWithHover>
          </div>
        </ScrollReveal>

        {/* Spectrum labels */}
        <ScrollReveal delay={100}>
          <div className="flex justify-between max-w-3xl mx-auto mb-6">
            <span className="text-foreground/50 text-xs tracking-[0.15em] uppercase">
              Media
            </span>
            <div className="flex-1 mx-6 border-b border-white/20 self-center" />
            <span className="text-foreground/50 text-xs tracking-[0.15em] uppercase">
              Informatics
            </span>
          </div>
        </ScrollReveal>

        {/* Three column cards */}
        <ScrollReveal delay={200}>
          <div className="grid md:grid-cols-3 gap-0 max-w-3xl mx-auto">
            {/* Media side */}
            <div className="border border-white/20 rounded-l-2xl p-6">
              <p className="text-foreground/50 text-xs tracking-[0.15em] uppercase mb-4">
                Media
              </p>
              <ul className="space-y-3">
                <li className="text-foreground/80 font-light text-sm">
                  Layouts and visual hierarchy
                </li>
                <li className="text-foreground/80 font-light text-sm">
                  Usability heuristics and interface evaluation
                </li>
                <li className="text-foreground/80 font-light text-sm">
                  Human perception and psychology
                </li>
                <li className="text-foreground/80 font-light text-sm">
                  Design principles for digital media
                </li>
              </ul>
            </div>

            {/* Center - Overlap */}
            <div className="border border-white/30 p-6 bg-white/5 -my-3 rounded-2xl relative z-10">
              <p className="text-foreground/50 text-xs tracking-[0.15em] uppercase mb-4 text-center">
                Overlap
              </p>
              <ul className="space-y-3">
                <li className="text-foreground font-light text-sm text-center">
                  UX programming <br />(interactive interfaces)
                </li>
                <li className="text-foreground font-light text-sm text-center">
                  Multimedia and web systems
                </li>
                <li className="text-foreground font-light text-sm text-center">
                  Human–computer interaction (HCI)
                </li>
              </ul>
            </div>

            {/* Informatics side */}
            <div className="border border-white/20 rounded-r-2xl p-6">
              <p className="text-foreground/50 text-xs tracking-[0.15em] uppercase mb-4">
                Informatics
              </p>
              <ul className="space-y-3">
                <li className="text-foreground/80 font-light text-sm">
                  Software development fundamentals
                </li>
                <li className="text-foreground/80 font-light text-sm">
                  Algorithms and data structures
                </li>
                <li className="text-foreground/80 font-light text-sm">
                  System architecture
                </li>
                <li className="text-foreground/80 font-light text-sm">
                  Databases
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Education;