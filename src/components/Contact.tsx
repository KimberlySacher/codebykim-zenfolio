import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import photoImage from "@/assets/images/Kim_Sacher.jpg";
import { Mail } from "lucide-react";

const Contact = () => {
  const email = "kontakt@codeby.kim";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    // Dispatch custom event to update cursor
    window.dispatchEvent(new CustomEvent('cursorTextChange', { detail: { text: 'copied' } }));
    
    setTimeout(() => {
      setCopied(false);
      window.dispatchEvent(new CustomEvent('cursorTextChange', { detail: { text: 'click' } }));
    }, 2000);
  };

  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-background px-6 sm:px-12 md:px-16 lg:px-24 py-24 sm:py-32"
      >
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="mb-24 sm:mb-32">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
                About.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg sm:text-xl md:text-2xl font-normal text-foreground max-w-3xl">
                Some context behind how I work.
              </p>
            </ScrollReveal>
          </div>

          {/* Two column layout - same as hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: Text content */}
            <ScrollReveal delay={200}>
              <div className="space-y-10">
                <div>
                  <h3 className="text-lg sm:text-xl font-light text-foreground mb-4">
                    Where it comes from
                  </h3>
                  <div className="space-y-4">
                    <p className="text-sm sm:text-base font-normal text-foreground leading-relaxed">
                      I've been drawn to making things for as long as I can remember.
                      Art was always part of that — first intuitively, later more deliberately.
                    </p>
                    <p className="text-sm sm:text-base font-normal text-foreground leading-relaxed">
                      At the same time, I was equally fascinated by structure.
                      Math gave me a different kind of satisfaction: clarity, logic, and precision.
                    </p>
                    <p className="text-sm sm:text-base font-normal text-foreground leading-relaxed">
                      Over time, I realized that I wasn't interested in choosing one over the other.
                      I was interested in the space where both meet.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-light text-foreground mb-4">
                    Between structure and intuition
                  </h3>
                  <div className="space-y-4">
                    <p className="text-sm sm:text-base font-normal text-foreground leading-relaxed">
                      Studying informatics and design felt natural because it allowed me to work in that overlap.
                      To think logically, but build things that people actually interact with.
                    </p>
                    <p className="text-sm sm:text-base font-normal text-foreground leading-relaxed">
                      One thing I've learned along the way is that good work often means letting go.
                      Ideas that once felt right sometimes don't hold up — and that's part of the process.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Image & Education */}
            <ScrollReveal delay={300}>
              <div className="space-y-10">
                <div className="aspect-[3/4] w-full max-w-sm overflow-hidden">
                  <img
                    src={photoImage}
                    alt="Kim Sacher"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="border-t border-foreground/10 pt-8 space-y-4 max-w-sm">
                  <p className="text-base font-normal text-foreground/70">
                    Bachelor of Science — Media Informatics
                  </p>
                  <p className="text-base font-normal text-foreground/60">
                    Ludwig Maximilian University of Munich
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-cursor-emoji="📧"
        className="min-h-[60vh] bg-background px-6 sm:px-12 md:px-16 lg:px-24 py-24 sm:py-32 border-t border-foreground/10"
      >
        <div className="max-w-[1600px] mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
                Contact.
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-normal text-foreground max-w-3xl">
                If any of this resonates, feel free to get in touch.
              </p>
            </div>

            <div className="space-y-8">
              <div className="group relative inline-block">
                <button
                  onClick={copyToClipboard}
                  data-cursor-text={copied ? "copied" : "click"}
                  className="inline-flex items-center gap-3 text-xl sm:text-2xl font-light text-foreground hover:text-foreground/70 transition-colors duration-300 cursor-pointer bg-transparent border-none p-0"
                >
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                  <span>{email}</span>
                </button>
              </div>

              <p className="text-sm sm:text-base font-normal text-foreground/60 mt-8">
                Based in Munich, Germany — Working with clients worldwide
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
