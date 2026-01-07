import ScrollReveal from "./ScrollReveal";

const HowIWork = () => {
  const steps = [
    {
      number: "01",
      title: "Understand & plan",
      description: "I start by understanding what you actually need and agreeing on a clear structure.",
    },
    {
      number: "02",
      title: "Build & iterate",
      description: "Work moves forward in small steps, with regular checks along the way.",
    },
    {
      number: "03",
      title: "Deliver & maintain",
      description: "The result should be clear, well designed, and easy to build on later.",
    },
  ];

  return (
    <section id="how-i-work" className="min-h-screen bg-background px-6 sm:px-12 md:px-16 lg:px-24 py-24 sm:py-32">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-24 sm:mb-32">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
              How I work.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-foreground max-w-3xl">
              I keep projects clear, focused, and moving.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps Grid */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
            {steps.map((step) => (
              <div key={step.title}>
                <div className="text-4xl sm:text-5xl font-extralight text-foreground/30 mb-6">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-light text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base font-normal text-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Footer Note */}
        <ScrollReveal delay={300}>
          <div className="border-t border-foreground/10 pt-12 mt-24 sm:mt-32">
            <p className="text-sm sm:text-base font-normal text-foreground/70">
              I work independently or within existing teams — depending on what fits best.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowIWork;
