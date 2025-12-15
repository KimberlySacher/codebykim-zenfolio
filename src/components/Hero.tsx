import { ArrowDown, Languages } from "lucide-react";
import SkillsList from "./SkillsList";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Top left "code" */}
      <div className="absolute top-8 left-8">
        <span className="text-foreground text-lg font-light">code</span>
      </div>
      
      {/* Top right "by" */}
      <div className="absolute top-8 right-8">
        <span className="text-foreground text-lg font-light">by</span>
      </div>
      
      {/* Center content */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-4">
            codeby.kim
          </h1>
          <p className="text-lg md:text-xl text-foreground font-light">
            Selbstständige Programmiererin
          </p>
        </div>
      </div>
      
      {/* Bottom right "kim" */}
      <div className="absolute bottom-8 right-8">
        <span className="text-foreground text-lg font-light">kim</span>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-8 py-16">
      {/* Language switcher top right */}
      <div className="absolute top-8 right-8">
        <Languages className="text-foreground/60 w-6 h-6" />
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 lg:gap-24">
        {/* Left side - Skills list */}
        <div className="flex flex-col items-center">
          <SkillsList />
          
          {/* My Approach */}
          <div className="flex items-center gap-2 mt-8 text-foreground">
            <ArrowDown className="w-4 h-4" />
            <span className="text-sm font-light tracking-wider">MY APPROACH</span>
          </div>
        </div>
        
        {/* Right side - Projects heading */}
        <div className="text-center lg:text-left">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-4">
            Projects.
          </h2>
          <p className="text-foreground/80 font-light mb-6">
            would love to learn even more!
          </p>
          <Button variant="outline" className="rounded-full px-8">
            CONTACT
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero as default, SkillsSection };