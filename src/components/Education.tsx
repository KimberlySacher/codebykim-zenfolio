import ScrollReveal from "./ScrollReveal";

const Education = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-8 py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12 mb-20">
            <div>
              <p className="text-foreground/40 text-xs tracking-[0.2em] uppercase mb-2">Degree</p>
              <p className="text-foreground text-xl md:text-2xl font-light">
                Media Informatics <span className="text-foreground/50">– LMU Munich</span>
              </p>
            </div>
            <div className="hidden md:block h-12 w-px bg-foreground/20" />
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-foreground tracking-tight">
              Education.
            </h2>
          </div>
        </ScrollReveal>

        {/* Spectrum labels */}
        <ScrollReveal delay={100}>
          <div className="flex justify-between max-w-3xl mx-auto mb-6">
            <span className="text-foreground/50 text-xs tracking-[0.15em] uppercase">Media</span>
            <div className="flex-1 mx-6 border-b border-foreground/20 self-center" />
            <span className="text-foreground/50 text-xs tracking-[0.15em] uppercase">Computer Science</span>
          </div>
        </ScrollReveal>

        {/* Three column cards */}
        <ScrollReveal delay={200}>
          <div className="grid md:grid-cols-3 gap-0 max-w-3xl mx-auto">
            <div className="border border-foreground/20 rounded-l-2xl p-6">
              <ul className="space-y-3">
                <li className="text-foreground/80 font-light text-sm">Layouts</li>
                <li className="text-foreground/80 font-light text-sm">Heuristics</li>
                <li className="text-foreground/80 font-light text-sm">Psychology</li>
              </ul>
            </div>

            <div className="border border-primary/40 p-6 bg-primary/5 -my-3 rounded-2xl relative z-10 flex items-center justify-center">
              <p className="text-foreground font-light text-sm text-center">UX Programming</p>
            </div>

            <div className="border border-foreground/20 rounded-r-2xl p-6">
              <ul className="space-y-3">
                <li className="text-foreground/80 font-light text-sm">Project Management</li>
                <li className="text-foreground/80 font-light text-sm">Java</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Education;
