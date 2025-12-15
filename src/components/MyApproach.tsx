import { User, Users, Handshake, Check, ArrowRight, ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const StepCircle = ({ number, filled = false }: { number: number; filled?: boolean }) => (
  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
    filled 
      ? "bg-primary text-primary-foreground" 
      : "border border-foreground/30 text-foreground/70"
  }`}>
    {number}
  </div>
);

const IndependentProjects = () => (
  <div className="space-y-5">
    <div className="inline-flex items-center gap-2 border border-foreground/30 rounded-full px-4 py-2">
      <User className="w-4 h-4 text-foreground/70" />
      <span className="text-sm font-light">Independent Projects</span>
    </div>

    <div className="border border-primary/40 rounded-2xl p-5 bg-primary/5">
      <p className="text-sm font-light leading-relaxed">
        <span className="font-medium">Your Profile:</span> You have a project that needs to be built or completed.
      </p>
    </div>

    <div className="border border-primary/60 rounded-2xl p-5 bg-primary/10">
      <p className="text-sm font-light leading-relaxed mb-5">
        <span className="font-medium">My Part:</span> I analyse what you need and plan the next steps. I <span className="underline decoration-primary/50">take care of the entire process</span> and keep you updated regularly.
      </p>
      
      <div className="flex items-center gap-1.5 flex-wrap">
        <div className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center">
          <Handshake className="w-4 h-4 text-foreground/70" />
        </div>
        <ArrowRight className="w-3 h-3 text-foreground/40" />
        <StepCircle number={1} filled />
        <ArrowRight className="w-3 h-3 text-foreground/40" />
        <StepCircle number={2} filled />
        <ArrowRight className="w-3 h-3 text-foreground/40" />
        <StepCircle number={3} filled />
        <ArrowRight className="w-3 h-3 text-foreground/40" />
        <StepCircle number={4} filled />
        <ArrowRight className="w-3 h-3 text-foreground/40" />
        <div className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center">
          <Check className="w-4 h-4 text-primary" />
        </div>
      </div>
    </div>
  </div>
);

const TeamIntegration = () => (
  <div className="space-y-5">
    <div className="inline-flex items-center gap-2 border border-foreground/30 rounded-full px-4 py-2">
      <Users className="w-4 h-4 text-foreground/70" />
      <span className="text-sm font-light">Team Integration</span>
    </div>

    <div className="border border-foreground/20 rounded-2xl p-5">
      <p className="text-sm font-light leading-relaxed">
        <span className="font-medium">Your Profile:</span> You are starting a new project or already have one in progress and need support with specific parts.
      </p>
    </div>

    <div className="border border-foreground/20 rounded-2xl p-5">
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center">
            <Handshake className="w-4 h-4 text-foreground/70" />
          </div>
          <ArrowDown className="w-3 h-3 text-foreground/40" />
          <StepCircle number={2} filled />
        </div>
        <p className="text-sm font-light leading-relaxed flex-1">
          <span className="font-medium text-primary">My Part:</span> I <span className="underline decoration-primary/50">integrate smoothly into your workflow</span> and collaborate with your team with clear communication.
        </p>
      </div>
      
      <div className="flex items-center gap-1.5 mt-5 flex-wrap">
        <StepCircle number={1} />
        <div className="flex items-center">
          <ArrowDown className="w-3 h-3 text-foreground/40" />
          <ArrowUp className="w-3 h-3 text-foreground/40" />
        </div>
        <StepCircle number={3} />
        <ArrowRight className="w-3 h-3 text-foreground/40" />
        <StepCircle number={4} />
        <ArrowRight className="w-3 h-3 text-foreground/40" />
        <div className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center">
          <Check className="w-4 h-4 text-primary" />
        </div>
      </div>
    </div>
  </div>
);

const MyApproach = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-8 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-foreground tracking-tight">
            My Approach.
          </h2>
          <p className="text-foreground/50 tracking-[0.2em] text-xs uppercase mt-4">
            flexible · communicative · open
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10" />
          <IndependentProjects />
          <TeamIntegration />
        </div>

        <div className="mt-20 pt-10 border-t border-foreground/10 text-center">
          <p className="text-foreground/50 font-light mb-6">
            Still not sure if it fits? Let's talk about it!
          </p>
          <Button variant="outline" className="rounded-full px-8 py-5 text-xs tracking-[0.15em] uppercase border-foreground/30 hover:border-primary hover:text-primary">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MyApproach;
