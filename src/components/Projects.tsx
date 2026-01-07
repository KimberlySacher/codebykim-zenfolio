import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";
import Capabilities from "./Capabilities";
import { scrollToElementById } from "@/lib/scroll";
import { SECTION_CONTAINER_CLASS, SECTION_PADDING_CLASS } from "@/lib/constants";
import HeadingWithHover from "./HeadingWithHover";

const Projects = () => {
  const scrollToContact = () => {
    scrollToElementById("contact");
  };

  return (
    <section
      id="projects"
      className={`min-h-[60vh] relative overflow-hidden bg-background ${SECTION_PADDING_CLASS}`}
    >
      <div className={SECTION_CONTAINER_CLASS}>
        <ScrollReveal>
          <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] gap-12 items-start">
            {/* Text side */}
            <div>
            <p className="text-foreground/50 text-xs tracking-[0.2em] uppercase mb-4">
  Experience
</p>
<HeadingWithHover className="heading-main text-foreground mb-8">
  Project Domains.
</HeadingWithHover>
<p className="text-foreground/60 font-light text-sm leading-relaxed max-w-md mb-12">
  The areas and domains I have worked in across past projects and professional
  environments, covering design, frontend, and backend development with a focus
  on structured solutions and reliable implementation.
</p>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="rounded-full px-8 py-5 text-xs tracking-[0.15em] uppercase border-foreground/30 hover:border-primary hover:text-primary transition-all"
              >
                Contact
              </Button>
            </div>

            {/* Capabilities card side */}
            <div className="max-w-md md:ml-auto">
              <Capabilities />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
