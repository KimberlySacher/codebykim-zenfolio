import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="min-h-[60vh] relative overflow-hidden bg-background px-8 py-24">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="ml-auto w-full max-w-3xl text-right">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-foreground tracking-tight mb-6">
              Projects.
            </h2>
            <p className="text-foreground/50 font-light mb-8">
              Practical work across design, frontend, and backend development.
            </p>
            <div className="flex justify-end">
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="rounded-full px-8 py-5 text-xs tracking-[0.15em] uppercase border-foreground/30 hover:border-primary hover:text-primary"
              >
                Contact
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
