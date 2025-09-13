interface ProjectCardProps {
  title: string;
  className?: string;
}

const ProjectCard = ({ title, className = "" }: ProjectCardProps) => {
  return (
    <div className={`border-2 border-foreground/20 rounded-3xl p-6 hover:border-foreground/40 transition-colors duration-300 cursor-pointer ${className}`}>
      <h3 className="text-foreground text-xl font-light">{title}</h3>
    </div>
  );
};

export default ProjectCard;