import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { SECTION_CONTAINER_CLASS, SECTION_PADDING_CLASS } from "@/lib/constants";
import HeadingWithHover from "./HeadingWithHover";
import photoImage from "@/assets/images/Kim_Sacher.jpg";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "kontakt@codeby.kim";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section
      id="contact"
      className={`min-h-screen relative overflow-hidden bg-background ${SECTION_PADDING_CLASS}`}
    >
      <div className={SECTION_CONTAINER_CLASS}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <ScrollReveal>
            <div className="aspect-[4/5] max-w-sm mx-auto md:mx-0 rounded-2xl border border-white/20 overflow-hidden">
              <img
                src={photoImage}
                alt="Kim Sacher"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Contact info */}
          <div>
            <ScrollReveal delay={100}>
              <HeadingWithHover className="heading-main text-foreground mb-6">
                Contact.
              </HeadingWithHover>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-foreground/60 font-light text-sm leading-relaxed mb-6 max-w-md">
                Got a project idea or a question? Feel free to reach out.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="space-y-4">
                {/* Email row */}
                <div className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <a
                      href={`mailto:${email}`}
                      className="group flex items-center gap-3 text-foreground font-light"
                    >
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-white/20 bg-white/5">
                        <Mail className="w-4 h-4 text-foreground/80" />
                      </span>

                      <span className="flex flex-col">
                        <span className="text-xs tracking-[0.15em] uppercase text-foreground/50">
                          Email
                        </span>
                        <span className="text-sm text-foreground/90 group-hover:text-primary transition-colors">
                          {email}
                        </span>
                      </span>
                    </a>

                    <button
                      onClick={copyToClipboard}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/20 text-xs text-foreground/70 hover:text-foreground hover:border-white/40 transition-all"
                      aria-label="Copy email address"
                      type="button"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
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