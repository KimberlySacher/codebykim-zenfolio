import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Use refs for smooth animation
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const ringPosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    // Smooth animation using requestAnimationFrame
    const animate = () => {
      const ring = ringRef.current;
      const dot = dotRef.current;
      
      if (!ring || !dot) return;

      // Smooth interpolation for ring (easing factor)
      const ringEase = 0.15;
      ringPosition.current.x += (targetPosition.current.x - ringPosition.current.x) * ringEase;
      ringPosition.current.y += (targetPosition.current.y - ringPosition.current.y) * ringEase;

      // Update ring position
      ring.style.left = `${ringPosition.current.x}px`;
      ring.style.top = `${ringPosition.current.y}px`;

      // Update dot position (slightly faster for more responsive feel)
      const dotEase = 0.25;
      dotPosition.current.x += (ringPosition.current.x - dotPosition.current.x) * dotEase;
      dotPosition.current.y += (ringPosition.current.y - dotPosition.current.y) * dotEase;
      
      dot.style.left = `${dotPosition.current.x}px`;
      dot.style.top = `${dotPosition.current.y}px`;

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Initialize positions
    if (typeof window !== 'undefined') {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      ringPosition.current = { x: centerX, y: centerY };
      dotPosition.current = { x: centerX, y: centerY };
      targetPosition.current = { x: centerX, y: centerY };
      animate();
    }

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Add hover listeners after a short delay to ensure DOM is ready
    const timeout = setTimeout(addHoverListeners, 100);

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeout);
      observer.disconnect();
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <div
        ref={ringRef}
        className={`fixed pointer-events-none z-[9999] rounded-full border border-primary/50 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease-out, height 0.3s ease-out, opacity 0.2s ease-out',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className={`fixed pointer-events-none z-[9999] rounded-full bg-primary ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovering ? 8 : 4,
          height: isHovering ? 8 : 4,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease-out, height 0.2s ease-out, opacity 0.15s ease-out',
        }}
      />
    </>
  );
};

export default CustomCursor;
