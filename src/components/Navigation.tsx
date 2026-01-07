import { Link, useLocation } from "react-router-dom";
import { scrollToElementById } from "@/lib/scroll";

const Navigation = () => {
  const location = useLocation();

  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      if (id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollToElementById(id);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-foreground/10">
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-6">
        <div className="flex items-center justify-between max-w-[1600px] mx-auto">
          <button
            onClick={() => handleNavClick("hero")}
            className="text-base font-light text-foreground hover:opacity-60 transition-opacity"
          >
            Start
          </button>

          <div className="flex items-center gap-8 sm:gap-12">
            <button
              onClick={() => handleNavClick("how-i-work")}
              className="text-base font-light text-foreground hover:opacity-60 transition-opacity"
            >
              Work
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="text-base font-light text-foreground hover:opacity-60 transition-opacity"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-base font-light text-foreground hover:opacity-60 transition-opacity"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

