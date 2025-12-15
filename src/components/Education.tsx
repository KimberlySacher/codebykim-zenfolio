import { Languages } from "lucide-react";

const Education = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-8 py-16">
      {/* Language switcher top right */}
      <div className="absolute top-8 right-8">
        <Languages className="text-foreground/60 w-6 h-6" />
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-16">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-foreground/60 text-lg font-light">Studiengang</p>
              <p className="text-foreground text-2xl md:text-3xl font-medium">Medien-Informatik <span className="font-light">LMU</span></p>
            </div>
            <div className="hidden md:block h-16 w-px bg-foreground/30" />
          </div>
          <h2 className="text-6xl md:text-8xl font-light text-foreground">
            Education.
          </h2>
        </div>

        {/* Spectrum labels */}
        <div className="flex justify-between max-w-4xl mx-auto mb-4">
          <span className="text-foreground/60 text-sm">Medien</span>
          <div className="flex-1 mx-4 border-b border-foreground/30 self-center" />
          <span className="text-foreground/60 text-sm">Informatik</span>
        </div>

        {/* Three column cards */}
        <div className="grid md:grid-cols-3 gap-0 max-w-4xl mx-auto">
          {/* Left - Medien side */}
          <div className="border border-foreground/30 rounded-l-3xl p-6 md:p-8">
            <ul className="space-y-4">
              <li className="text-foreground font-light">Layouts</li>
              <li className="text-foreground font-light">Heuristics</li>
              <li className="text-foreground font-light">Psychologie</li>
            </ul>
          </div>

          {/* Center - UX Programming (highlighted) */}
          <div className="border border-foreground/30 p-6 md:p-8 bg-card/30 -my-4 rounded-3xl relative z-10">
            <p className="text-foreground text-center font-light">UX Programming</p>
          </div>

          {/* Right - Informatik side */}
          <div className="border border-foreground/30 rounded-r-3xl p-6 md:p-8">
            <ul className="space-y-4">
              <li className="text-foreground font-light">Project Management</li>
              <li className="text-foreground font-light">Java</li>
            </ul>
          </div>
        </div>

        {/* Script tagline */}
        <p className="text-center text-4xl md:text-6xl font-script italic text-foreground/80 mt-16">
          best out of both worlds
        </p>
      </div>
    </section>
  );
};

export default Education;
