import { useState, useEffect } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { scrollToElementById } from "@/lib/scroll";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate first
      window.location.href = `/#${id}`;
    } else {
      scrollToElementById(id);
    }
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { label: "Home", action: handleHomeClick },
    { label: "How I Work", action: () => handleNavClick("how-i-work") },
    { label: "What I Build", action: () => handleNavClick("what-i-build") },
    { label: "How Projects Start", action: () => handleNavClick("how-projects-start") },
    { label: "About", action: () => handleNavClick("about") },
    { label: "Contact", action: () => handleNavClick("contact") },
  ];

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-background border border-foreground/20 flex items-center justify-center hover:border-foreground hover:bg-foreground/10 transition-all duration-300 active:scale-95"
        aria-label="Open menu"
      >
        <MenuIcon className="w-5 h-5 text-foreground/70" />
      </button>

      {/* Full Page Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-background transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="fixed top-6 right-6 z-[101] w-12 h-12 rounded-full bg-background border border-foreground/20 flex items-center justify-center hover:border-foreground hover:bg-foreground/10 transition-all duration-300 active:scale-95"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 text-foreground/70" />
        </button>

        {/* Menu Content */}
        <div className="flex flex-col items-center justify-center min-h-screen px-8">
          <nav className="flex flex-col items-center gap-8">
            {menuItems.map((item, index) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-3xl sm:text-4xl md:text-5xl font-extralight text-foreground hover:opacity-70 transition-all duration-300 transform hover:scale-105"
                style={{
                  fontFamily: '"Hiragino Kaku Gothic StdN", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  animationDelay: `${index * 0.1}s`,
                  animation: isOpen ? "fadeInUp 0.6s ease-out forwards" : "none",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Footer Links */}
          <div className="absolute bottom-8 flex gap-6">
            <Link
              to="/impressum"
              onClick={() => setIsOpen(false)}
              className="text-foreground/50 text-sm font-light hover:text-foreground hover:underline underline-offset-4 transition-colors"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              onClick={() => setIsOpen(false)}
              className="text-foreground/50 text-sm font-light hover:text-foreground hover:underline underline-offset-4 transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

