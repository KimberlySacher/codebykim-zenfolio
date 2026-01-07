import { SECTION_CONTAINER_CLASS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-background px-8 py-8">
      <div className={SECTION_CONTAINER_CLASS}>
        <div className="border-t border-foreground/10 pt-8">
          <p className="text-foreground/40 text-sm font-light">
            codeby.kim
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
