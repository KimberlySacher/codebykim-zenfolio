import { Button } from "./ui/button";
import Capabilities from "./Capabilities";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-8 py-12">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-end animate-fade-in">
        <span className="text-foreground/60 text-sm tracking-widest uppercase">codeby.kim</span>
      </nav>
      
      {/* Main content */}
      <div className="relative z-10 flex min-h-[calc(100vh-6rem)]">
        {/* Capabilities card - floating left */}
        <div className="hidden lg:flex items-center animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <Capabilities />
        </div>
        
        {/* Hero content - right aligned */}
        <div className="flex-1 flex flex-col items-end justify-center text-right">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-foreground tracking-tight mb-4 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Kim Sacher
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-foreground/70 tracking-wide mb-4 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Software Engineering & Web Development
          </h2>
          <p className="text-sm text-foreground/50 font-light max-w-md mb-8 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            Focused on clean design, structured systems, and reliable implementation.
          </p>
          <Button 
            variant="outline" 
            onClick={scrollToContact}
            className="rounded-full px-8 py-5 text-xs tracking-[0.15em] uppercase border-foreground/30 hover:border-primary hover:text-primary animate-fade-in"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            Contact
          </Button>
        </div>
      </div>
      
      {/* Mobile capabilities */}
      <div className="lg:hidden relative z-10 mt-12 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
        <Capabilities />
      </div>
    </section>
  );
};

export default Hero;
