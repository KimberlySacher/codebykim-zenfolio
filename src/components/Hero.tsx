const Hero = () => {
  return (
    <section 
      id="hero" 
      className="h-screen bg-background px-6 sm:px-12 md:px-16 lg:px-24 pt-32 pb-12 flex flex-col justify-center"
    >
      {/* Main hero grid - two columns on desktop */}
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 lg:mb-32">
          {/* Left: Name - HEADER SIZE */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-foreground leading-none tracking-tight">
              Kim Sacher
            </h1>
          </div>

          {/* Right: Description - SUBHEADER SIZE */}
          <div className="space-y-6">
            <div className="text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              <span className="font-bold" style={{ fontFamily: '"Hiragino Kaku Gothic StdN", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>Software Engineering & Interface Design</span>
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              <span className="font-light" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>specialized in </span>
              <span className="font-bold" style={{ fontFamily: '"Hiragino Kaku Gothic StdN", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>websites</span>
              <span className="font-light" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}> and </span>
              <span className="font-bold" style={{ fontFamily: '"Hiragino Kaku Gothic StdN", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>digital systems</span>
            </div>
          </div>
        </div>

        {/* Bottom: Two info blocks - TEXT SIZE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left block */}
          <div>
            <p className="text-base sm:text-lg font-normal text-foreground leading-relaxed">
              I design and build digital solutions that feel clear, structured, and reliable. 
              Always with a focus on usability, thoughtful detail, and creating work that connects 
              people to systems in a meaningful way.
            </p>
          </div>

          {/* Right block */}
          <div>
            <p className="text-base sm:text-lg font-normal text-foreground leading-relaxed">
              Based in Munich, currently working with clients across Europe, 
              helping individuals and companies bring clarity to their digital presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
