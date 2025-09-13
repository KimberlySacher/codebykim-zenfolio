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

export default Hero;