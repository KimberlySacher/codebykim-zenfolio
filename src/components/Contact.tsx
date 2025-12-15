import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-8 py-24">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-12 md:gap-20">
        {/* Photo placeholder */}
        <div className="w-56 h-72 md:w-64 md:h-80 bg-muted/50 rounded-2xl flex items-center justify-center border border-foreground/10">
          <span className="text-foreground/30 text-xs tracking-widest uppercase">Photo</span>
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-foreground tracking-tight mb-4">
            Contact.
          </h2>
          <p className="text-foreground/50 font-light mb-10 max-w-sm">
            Got a project idea, a question, or just want to say hi? Drop me a message!
          </p>

          <a href="mailto:kontakt@codeby.kim" className="block mb-5">
            <Button variant="outline" className="rounded-full px-8 py-5 text-sm w-full md:w-auto border-foreground/30 hover:border-primary hover:text-primary">
              <span className="font-light">Email:</span>
              <span className="font-medium ml-1">kontakt@codeby.kim</span>
            </Button>
          </a>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground/40 hover:text-primary transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
