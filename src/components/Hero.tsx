import { Button } from "./ui/button";
import { scrollToElementById } from "@/lib/scroll";
import { SECTION_CONTAINER_CLASS } from "@/lib/constants";
import HeadingWithHover from "./HeadingWithHover";

const Hero = () => {
  const scrollToContact = () => {
    scrollToElementById("contact");
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-8 py-16">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-background via-transparent to-primary/3 opacity-50" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-end animate-fade-in mb-16">
        <span className="text-foreground/60 text-sm tracking-widest uppercase">codeby.kim</span>
      </nav>

      {/* Main content */}
      <div className={`relative z-10 ${SECTION_CONTAINER_CLASS}`}>
        <div className="flex min-h-[calc(100vh-8rem)] items-center justify-end">
          {/* Hero content - right aligned */}
          <div className="flex flex-col items-end justify-center text-right max-w-2xl">
            <HeadingWithHover className="heading-main text-foreground mb-6">
              Kim Sacher
            </HeadingWithHover>
            <p className="text-2xl md:text-3xl font-light text-foreground/70 tracking-wide mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              Software Engineering & Interface Design
            </p>
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="rounded-full px-10 py-6 text-xs tracking-[0.15em] uppercase border-foreground/30 hover:border-primary hover:text-primary animate-fade-in transition-all duration-300 hover:scale-105"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
