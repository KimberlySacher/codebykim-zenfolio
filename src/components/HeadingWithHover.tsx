import { ReactNode } from "react";

interface HeadingWithHoverProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

const HeadingWithHover = ({ children, className = "", as: Component = "h2" }: HeadingWithHoverProps) => {
  return (
    <Component className={`heading-hover-effect ${className}`}>
      {children}
    </Component>
  );
};

export default HeadingWithHover;

