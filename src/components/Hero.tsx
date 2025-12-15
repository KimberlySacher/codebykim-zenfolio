import { ArrowDown } from "lucide-react";
import SkillsList from "./SkillsList";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-8">
      {/* Top left "code" */}
      <div className="absolute top-12 left-12">
        <span className="text-foreground/60 text-sm tracking-widest uppercase">code</span>
      </div>
      
      {/* Top right "by" */}
      <div className="absolute top-12 right-12">
        <span className="text-foreground/60 text-sm tracking-widest uppercase">by</span>
      </div>
      
      {/* Center content */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-extralight text-foreground tracking-tight">
            codeby.kim
          </h1>
          <p className="text-lg text-foreground/60 font-light tracking-wide mt-4">
            Selbstständige Programmiererin
          </p>
        </div>
      </div>
      
      {/* Bottom right "kim" */}
      <div className="absolute bottom-12 right-12">
        <span className="text-foreground/60 text-sm tracking-widest uppercase">kim</span>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-8 py-24">
      {/* Main content */}
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">
          {/* Left side - Skills list */}
          <div className="flex flex-col">
            <SkillsList />
            
            {/* My Approach link */}
            <div className="flex items-center gap-3 mt-12 text-foreground/60 hover:text-foreground transition-colors cursor-pointer group">
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              <span className="text-xs tracking-[0.2em] uppercase">My Approach</span>
            </div>
          </div>
          
          {/* Right side - Projects heading */}
          <div className="lg:text-right">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-foreground tracking-tight">
              Projects.
            </h2>
            <p className="text-foreground/50 font-light mt-4 mb-8">
              would love to learn even more!
            </p>
            <Button variant="outline" className="rounded-full px-8 py-5 text-xs tracking-[0.15em] uppercase border-foreground/30 hover:border-primary hover:text-primary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero as default, SkillsSection };