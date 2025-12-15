import { Languages, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-8 py-16">
      {/* Language switcher top right */}
      <div className="absolute top-8 right-8">
        <Languages className="text-foreground/60 w-6 h-6" />
      </div>

      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 md:gap-16">
        {/* Photo placeholder */}
        <div className="w-64 h-80 md:w-72 md:h-96 bg-muted rounded-3xl flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Your Photo</span>
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="text-6xl md:text-8xl font-light text-foreground mb-4">
            Contact.
          </h2>
          <p className="text-foreground/80 font-light mb-8 max-w-md">
            Got a project idea, a question, or just want to say hi? Drop me a message!
          </p>

          {/* Email button */}
          <a href="mailto:kontakt@codeby.kim" className="block mb-4">
            <Button variant="outline" className="rounded-full px-8 py-6 text-base w-full md:w-auto">
              Email: <span className="font-semibold ml-1">kontakt@codeby.kim</span>
            </Button>
          </a>

          {/* LinkedIn link */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
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
