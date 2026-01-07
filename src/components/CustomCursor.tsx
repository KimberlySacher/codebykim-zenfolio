import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState<string>("");
  const currentCursorContext = useRef<{
    inSection: string | null;
    onElement: string | null;
  }>({ inSection: null, onElement: null });

  // Use refs for smooth animation
  const dotRef = useRef<HTMLDivElement>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const updateCursorDisplay = () => {
      // Priority: element text > section emoji
      if (currentCursorContext.current.onElement) {
        setCursorText(currentCursorContext.current.onElement);
      } else if (currentCursorContext.current.inSection) {
        setCursorText(currentCursorContext.current.inSection);
      } else {
        setCursorText("");
      }
    };

    const handleCursorTextChange = (e: CustomEvent) => {
      currentCursorContext.current.onElement = e.detail.text;
      updateCursorDisplay();
    };

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const text = el.getAttribute("data-cursor-text");
          if (text) {
            currentCursorContext.current.onElement = text;
            updateCursorDisplay();
          }
          setIsHovering(true);
        });
        el.addEventListener("mouseleave", () => {
          currentCursorContext.current.onElement = null;
          updateCursorDisplay();
          setIsHovering(false);
        });
      });

      // Handle sections/containers with cursor emojis
      const emojiSections = document.querySelectorAll("[data-cursor-emoji]");
      emojiSections.forEach((section) => {
        const emoji = section.getAttribute("data-cursor-emoji");
        section.addEventListener("mouseenter", () => {
          if (emoji) {
            currentCursorContext.current.inSection = emoji;
            updateCursorDisplay();
          }
        });
        section.addEventListener("mouseleave", () => {
          currentCursorContext.current.inSection = null;
          updateCursorDisplay();
        });
      });
    };

    const animate = () => {
      const dot = dotRef.current;

      if (!dot) return;

      // Dot follows cursor with a slight easing for smoothness
      const dotEase = 0.35;
      dotPosition.current.x +=
        (targetPosition.current.x - dotPosition.current.x) * dotEase;
      dotPosition.current.y +=
        (targetPosition.current.y - dotPosition.current.y) * dotEase;

      dot.style.left = `${dotPosition.current.x}px`;
      dot.style.top = `${dotPosition.current.y}px`;

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Initialize positions
    if (typeof window !== "undefined") {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      dotPosition.current = { x: centerX, y: centerY };
      targetPosition.current = { x: centerX, y: centerY };
      animate();
    }

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("cursorTextChange", handleCursorTextChange as EventListener);

    const timeout = setTimeout(addHoverListeners, 100);

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("cursorTextChange", handleCursorTextChange as EventListener);
      clearTimeout(timeout);
      observer.disconnect();
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Dot cursor or Text/Emoji cursor */}
      <div
        ref={dotRef}
        className={`fixed pointer-events-none z-[9999] transition-all duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          cursorText === "📧"
            ? "w-12 h-12 rounded-full bg-[#1a1a1a] dark:bg-white flex items-center justify-center"
            : cursorText === "click" || cursorText === "copied"
            ? "px-6 py-3 rounded-full bg-white border-2 border-black dark:bg-[#1a1a1a] dark:border-white flex items-center justify-center"
            : cursorText
            ? "text-base font-normal"
            : "rounded-full bg-primary shadow-glow"
        }`}
        style={{
          width: cursorText && cursorText !== "📧" && cursorText !== "click" && cursorText !== "copied" ? "auto" : cursorText === "📧" ? 48 : cursorText === "click" || cursorText === "copied" ? "auto" : isHovering ? 16 : 10,
          height: cursorText === "click" || cursorText === "copied" ? "auto" : cursorText && cursorText !== "📧" ? "auto" : cursorText === "📧" ? 48 : isHovering ? 16 : 10,
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.2s ease-out, height 0.2s ease-out, opacity 0.15s ease-out",
        }}
      >
        {cursorText === "📧" ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-white dark:stroke-black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 7 10 6 10-6" />
          </svg>
        ) : cursorText === "click" ? (
          <span className="block whitespace-nowrap text-black dark:text-white text-sm font-normal lowercase">click to copy</span>
        ) : cursorText === "copied" ? (
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-black dark:stroke-white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="block whitespace-nowrap text-black dark:text-white text-sm font-normal lowercase">copied</span>
          </div>
        ) : cursorText ? (
          <span className="block whitespace-nowrap">{cursorText}</span>
        ) : null}
      </div>
    </>
  );
};

export default CustomCursor;