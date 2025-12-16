import { Button } from "./ui/button";

const Projects = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[60vh] relative overflow-hidden bg-background px-8 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-end text-right">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-foreground tracking-tight mb-6">
            Projects.
          </h2>
          <p className="text-foreground/50 font-light max-w-md mb-8">
            Practical work across design, frontend, and backend development.
          </p>
          <Button 
            variant="outline" 
            onClick={scrollToContact}
            className="rounded-full px-8 py-5 text-xs tracking-[0.15em] uppercase border-foreground/30 hover:border-primary hover:text-primary"
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
