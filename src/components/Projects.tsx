import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[60vh] relative overflow-hidden bg-background px-8 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-end">
          <ScrollReveal>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-foreground tracking-tight mb-6 text-right">
              Projects.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-foreground/50 font-light max-w-md mb-8 text-right">
              Practical work across design, frontend, and backend development.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button 
              variant="outline" 
              onClick={scrollToContact}
              className="rounded-full px-8 py-5 text-xs tracking-[0.15em] uppercase border-foreground/30 hover:border-primary hover:text-primary"
            >
              Contact
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;
