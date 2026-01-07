import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light"; // Default to light
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-12 h-12 rounded-full bg-background border border-foreground/20 flex items-center justify-center hover:border-foreground hover:bg-foreground/10 transition-all duration-300 active:scale-95"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 rounded-full overflow-hidden">
        {/* Circle split - left half white, right half filled */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            theme === "dark"
              ? "bg-foreground/70"
              : "bg-foreground/20"
          }`}
          style={{
            clipPath: theme === "dark" ? "inset(0 50% 0 0)" : "inset(0 0 0 50%)",
          }}
        />
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            theme === "dark"
              ? "bg-transparent"
              : "bg-foreground/70"
          }`}
          style={{
            clipPath: theme === "dark" ? "inset(0 0 0 50%)" : "inset(0 50% 0 0)",
          }}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;

