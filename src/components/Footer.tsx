import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background px-6 sm:px-12 md:px-16 lg:px-24 py-12 border-t border-foreground/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-foreground/40 text-sm font-light">
            © 2025 codeby.kim
          </p>
          <div className="flex gap-8">
            <Link 
              to="/impressum" 
              className="text-foreground/40 text-sm font-light hover:text-foreground transition-opacity hover:opacity-60"
            >
              Impressum
            </Link>
            <Link 
              to="/datenschutz" 
              className="text-foreground/40 text-sm font-light hover:text-foreground transition-opacity hover:opacity-60"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
