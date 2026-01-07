import React from "react";
import { ArrowRight } from "lucide-react";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  href?: string;
  variant?: "primary" | "outline" | "dark";
  showArrow?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  href,
  variant = "outline",
  showArrow = false,
  className = "",
  icon,
}) => {
  const baseClasses = "inline-flex items-center gap-2.5 group relative text-body font-light px-7 py-4 transition-all duration-300";
  
  const variantClasses = {
    primary: "text-background bg-foreground hover:bg-foreground/90",
    outline: "text-foreground border border-foreground/20 hover:border-foreground/40 overflow-hidden",
    dark: "text-white bg-[#1a1a1a] hover:bg-[#2a2a2a]",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight 
          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
          strokeWidth={1.5} 
        />
      )}
      {variant === "outline" && (
        <div className="absolute inset-0 bg-foreground/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default CustomButton;

