import ScrollReveal from "./ScrollReveal";
import CustomButton from "./CustomButton";

const HowProjectsStart = () => {
  const quotes = [
    "We need a website that clearly shows what we do.",
    "We're doing a lot of this manually.",
    "We know what we want, but not how to structure it yet.",
    "This works — but it feels more complicated than it should.",
    "We need someone to take care of this properly.",
  ];

  return (
    <section id="how-projects-start" className="min-h-screen bg-background px-6 sm:px-12 md:px-16 lg:px-24 py-24 sm:py-32">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-24 sm:mb-32">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
              How projects often start.
            </h2>
          </ScrollReveal>
        </div>

        {/* Quotes - Simple list */}
        <ScrollReveal delay={100}>
          <div className="space-y-6 mb-20">
            {quotes.map((quote, index) => (
              <p key={index} className="text-base sm:text-lg font-normal text-foreground/70 leading-relaxed">
                "{quote}"
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* Conclusion & CTA */}
        <ScrollReveal delay={200}>
          <div className="border-t border-foreground/10 pt-12 space-y-10">
            <p className="text-base sm:text-lg font-normal text-foreground max-w-3xl">
              Most projects don't start clear — they become clear.
            </p>
            
            <CustomButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="primary"
              showArrow
            >
              Contact
            </CustomButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowProjectsStart;
