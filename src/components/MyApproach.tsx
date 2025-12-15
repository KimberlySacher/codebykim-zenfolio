import { User, Users, Handshake, Check, ArrowRight, ArrowDown, ArrowUp, Languages } from "lucide-react";
import { Button } from "./ui/button";

const StepCircle = ({ number, filled = false }: { number: number; filled?: boolean }) => (
  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
    filled 
      ? "bg-primary text-primary-foreground" 
      : "border-2 border-foreground/30 text-foreground"
  }`}>
    {number}
  </div>
);

const IndependentProjects = () => (
  <div className="space-y-6">
    {/* Header pill */}
    <div className="inline-flex items-center gap-2 border border-foreground/30 rounded-full px-4 py-2">
      <User className="w-4 h-4" />
      <span className="text-sm">Independent Projects</span>
    </div>

    {/* Your Profile card */}
    <div className="border border-primary/50 rounded-3xl p-6 bg-card/50">
      <p className="text-sm">
        <span className="font-semibold">Your Profile:</span> You have a project that needs to be built or completed.
      </p>
    </div>

    {/* My Part card */}
    <div className="border border-primary rounded-3xl p-6 bg-primary/10">
      <p className="text-sm mb-6">
        <span className="font-semibold">My Part:</span> I analyse what you need and plan the next steps. I <span className="underline">take care of the entire process</span> and keep you updated regularly until everything is finished.
      </p>
      
      {/* Progress steps */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full border-2 border-foreground/30 flex items-center justify-center">
          <Handshake className="w-5 h-5" />
        </div>
        <ArrowRight className="w-4 h-4 text-foreground/50" />
        <StepCircle number={1} filled />
        <ArrowRight className="w-4 h-4 text-foreground/50" />
        <StepCircle number={2} filled />
        <ArrowRight className="w-4 h-4 text-foreground/50" />
        <StepCircle number={3} filled />
        <ArrowRight className="w-4 h-4 text-foreground/50" />
        <StepCircle number={4} filled />
        <ArrowRight className="w-4 h-4 text-foreground/50" />
        <div className="w-10 h-10 rounded-full border-2 border-foreground/30 flex items-center justify-center">
          <Check className="w-5 h-5" />
        </div>
      </div>
    </div>
  </div>
);

const TeamIntegration = () => (
  <div className="space-y-6">
    {/* Header pill */}
    <div className="inline-flex items-center gap-2 border border-foreground/30 rounded-full px-4 py-2">
      <Users className="w-4 h-4" />
      <span className="text-sm">Team Integration</span>
    </div>

    {/* Your Profile card */}
    <div className="border border-foreground/30 rounded-3xl p-6">
      <p className="text-sm">
        <span className="font-semibold">Your Profile:</span> You are starting a new project or already have one in progress and need support with specific parts.
      </p>
    </div>

    {/* My Part card */}
    <div className="border border-foreground/30 rounded-3xl p-6">
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full border-2 border-foreground/30 flex items-center justify-center">
            <Handshake className="w-5 h-5" />
          </div>
          <ArrowDown className="w-4 h-4 text-foreground/50" />
          <StepCircle number={2} filled />
        </div>
        <p className="text-sm flex-1">
          <span className="font-semibold text-primary">My Part:</span> I <span className="underline">integrate smoothly into your workflow</span> and collaborate with your team. I provide clear, well-documented solutions and ensure good communication throughout the process.
        </p>
      </div>
      
      {/* Progress steps */}
      <div className="flex items-center gap-2 mt-6">
        <StepCircle number={1} />
        <div className="flex items-center gap-1">
          <ArrowDown className="w-3 h-3 text-foreground/50" />
          <ArrowUp className="w-3 h-3 text-foreground/50" />
        </div>
        <StepCircle number={3} />
        <ArrowRight className="w-4 h-4 text-foreground/50" />
        <StepCircle number={4} />
        <ArrowRight className="w-4 h-4 text-foreground/50" />
        <div className="w-10 h-10 rounded-full border-2 border-foreground/30 flex items-center justify-center">
          <Check className="w-5 h-5" />
        </div>
      </div>
    </div>
  </div>
);

const MyApproach = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-8 py-16">
      {/* Language switcher top right */}
      <div className="absolute top-8 right-8">
        <Languages className="text-foreground/60 w-6 h-6" />
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-light text-foreground mb-4">
            My Approach.
          </h2>
          <p className="text-foreground/60 tracking-widest text-sm">
            flexible - communicative - open
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Vertical divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-foreground/20" />
          
          <IndependentProjects />
          <TeamIntegration />
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 border-t border-foreground/20 text-center">
          <p className="text-foreground/80 mb-6">
            Still not sure if it fits? Just contact me and we im very happy to talk about it!
          </p>
          <Button variant="outline" className="rounded-full px-8">
            CONTACT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MyApproach;
