import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";
import { scrollToElementById } from "@/lib/scroll";
import { SECTION_CONTAINER_CLASS, SECTION_PADDING_CLASS } from "@/lib/constants";
import HeadingWithHover from "./HeadingWithHover";

const MyApproach = () => {
  const scrollToContact = () => {
    scrollToElementById("contact");
  };

  return (
    <section id="approach" className={`min-h-screen relative overflow-hidden bg-background ${SECTION_PADDING_CLASS}`}>
      <div className={SECTION_CONTAINER_CLASS}>
        {/* Header */}
        <div className="mb-12 sm:mb-24">
          <ScrollReveal>
            <HeadingWithHover className="heading-main text-foreground mb-6">
              My Approach.
            </HeadingWithHover>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-foreground/50 text-xs tracking-[0.2em] uppercase mb-8">
              Structured · Reliable · Communicative
            </p>
          </ScrollReveal>
          <div className="border-t border-foreground/20 w-full"></div>
        </div>

        {/* Standalone Projects End-to-End */}
        <ScrollReveal delay={200}>
          <div className="mb-12 sm:mb-24">
            <p className="text-lg sm:text-xl md:text-2xl font-light text-foreground mb-6 sm:mb-8 border-b border-foreground/20 pb-4">
              Standalone Projects End-to-End
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <p className="text-foreground/60 text-xs tracking-[0.15em] uppercase mb-3">Your Situation</p>
                <p className="text-foreground/80 font-light text-sm leading-relaxed">
                  You have a project you want to build — whether the idea is already clear or still taking shape. Sometimes the goal is defined, sometimes it needs a bit of structure and direction first.
                </p>
              </div>

              <div>
                <p className="text-foreground/60 text-xs tracking-[0.15em] uppercase mb-3">My Role</p>
                <p className="text-foreground/80 font-light text-sm leading-relaxed">
                  I help turn that starting point into something concrete. I take the time to understand what you're trying to achieve, clarify open questions, and then move step by step from concept to implementation. Throughout the process, I keep communication clear and adapt as things evolve.
                </p>
              </div>
            </div>

            <p className="text-foreground/60 font-light text-sm leading-relaxed italic">
              This way of working is well suited for projects that need both structure and flexibility.
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal separator */}
        <div className="border-t border-foreground/20 w-full mb-12 sm:mb-24"></div>

        {/* Team Collaboration */}
        <ScrollReveal delay={300}>
          <div className="mb-12 sm:mb-24">
            <p className="text-lg sm:text-xl md:text-2xl font-light text-foreground mb-6 sm:mb-8 border-b border-foreground/20 pb-4">
              Team Collaboration
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <p className="text-foreground/60 text-xs tracking-[0.15em] uppercase mb-3">Your Situation</p>
                <p className="text-foreground/80 font-light text-sm leading-relaxed">
                  You already have an existing project, team, or technical setup and need support with specific components or tasks.
                </p>
              </div>

              <div>
                <p className="text-foreground/60 text-xs tracking-[0.15em] uppercase mb-3">My Role</p>
                <p className="text-foreground/80 font-light text-sm leading-relaxed">
                  I collaborate within established workflows and integrate smoothly into existing teams. I focus on delivering reliable implementation, writing maintainable code, and communicating clearly so that my work fits seamlessly into the overall system.
                </p>
              </div>
            </div>

            <p className="text-foreground/60 font-light text-sm leading-relaxed italic">
              This mode of collaboration is suited for environments with defined processes and shared responsibilities.
            </p>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={400}>
          <div className="mt-12 sm:mt-24 text-center">
            <p className="text-foreground/60 font-light text-sm mb-8 leading-relaxed">
              Still not sure if it fits? Just contact me and we're very happy to talk about it!
            </p>
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="rounded-full px-8 py-5 text-xs tracking-[0.15em] uppercase border-foreground/30 hover:border-primary hover:text-primary transition-all"
            >
              Contact
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MyApproach;
