import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-16">
          Projects.
        </h1>
        
        <div className="relative max-w-5xl">
          {/* Grid layout for left side */}
          <div className="grid grid-cols-2 grid-rows-2 gap-6 max-w-3xl">
            {/* Websites - spans full width top */}
            <div className="col-span-2">
              <ProjectCard title="Websites" className="h-40" />
            </div>
            
            {/* Front-End - bottom left */}
            <div>
              <ProjectCard title="Front-End" className="h-40" />
            </div>
            
            {/* Backend - bottom right */}
            <div>
              <ProjectCard title="Backend" className="h-40" />
            </div>
          </div>
          
          {/* Datenbanken - positioned on the right */}
          <div className="absolute top-0 right-0 w-80">
            <ProjectCard title="Datenbanken" className="h-96" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;