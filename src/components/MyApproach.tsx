import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";

const MyApproach = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-8 py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <ScrollReveal>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-foreground tracking-tight mb-6">
              My Approach.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-foreground/50 text-xs tracking-[0.2em] uppercase">
              Flexible · Communicative · Open
            </p>
          </ScrollReveal>
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Independent Projects */}
          <ScrollReveal delay={200}>
            <div className="space-y-4">
              <p className="text-foreground/50 text-xs tracking-[0.15em] uppercase mb-6">
                Independent Projects
              </p>
              
              <div className="border border-foreground/20 rounded-2xl p-6">
                <p className="text-foreground/40 text-xs tracking-[0.15em] uppercase mb-3">Your Situation</p>
                <p className="text-foreground/80 font-light text-sm leading-relaxed">
                  You have a project that needs to be built or completed.
                </p>
              </div>
              
              <div className="border border-primary/40 rounded-2xl p-6 bg-primary/5">
                <p className="text-foreground/40 text-xs tracking-[0.15em] uppercase mb-3">My Role</p>
                <p className="text-foreground/80 font-light text-sm leading-relaxed">
                  I analyse requirements, define next steps, and take responsibility for the implementation while keeping you informed throughout the process.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Team Integration */}
          <ScrollReveal delay={300}>
            <div className="space-y-4">
              <p className="text-foreground/50 text-xs tracking-[0.15em] uppercase mb-6">
                Team Integration
              </p>
              
              <div className="border border-foreground/20 rounded-2xl p-6">
                <p className="text-foreground/40 text-xs tracking-[0.15em] uppercase mb-3">Your Situation</p>
                <p className="text-foreground/80 font-light text-sm leading-relaxed">
                  You are starting a new project or already have one in progress and need support with specific parts.
                </p>
              </div>
              
              <div className="border border-primary/40 rounded-2xl p-6 bg-primary/5">
                <p className="text-foreground/40 text-xs tracking-[0.15em] uppercase mb-3">My Role</p>
                <p className="text-foreground/80 font-light text-sm leading-relaxed">
                  I integrate smoothly into existing workflows and collaborate closely with your team through clear communication.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal delay={400}>
          <div className="mt-16 flex justify-center">
            <Button 
              variant="outline" 
              onClick={scrollToContact}
              className="rounded-full px-8 py-5 text-xs tracking-[0.15em] uppercase border-foreground/30 hover:border-primary hover:text-primary"
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
