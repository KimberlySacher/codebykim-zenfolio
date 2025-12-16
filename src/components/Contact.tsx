import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen relative overflow-hidden bg-background px-8 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Photo placeholder */}
          <ScrollReveal>
            <div className="aspect-[4/5] rounded-2xl border border-foreground/20 bg-foreground/5 flex items-center justify-center">
              <span className="text-foreground/30 text-sm">Photo</span>
            </div>
          </ScrollReveal>

          {/* Contact info */}
          <div>
            <ScrollReveal delay={100}>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-foreground tracking-tight mb-8">
                Contact.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-foreground/60 font-light text-lg leading-relaxed mb-10">
                Got a project idea or a question? Feel free to get in touch.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="space-y-4">
                <Button 
                  variant="outline"
                  asChild
                  className="w-full md:w-auto rounded-full px-8 py-5 text-xs tracking-[0.15em] uppercase border-foreground/30 hover:border-primary hover:text-primary justify-start gap-3"
                >
                  <a href="mailto:kontakt@codeby.kim">
                    <Mail className="w-4 h-4" />
                    kontakt@codeby.kim
                  </a>
                </Button>
                
                <div>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/50 text-sm hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
