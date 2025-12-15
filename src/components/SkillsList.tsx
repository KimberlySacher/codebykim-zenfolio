const skills = [
  "App Entwicklung",
  "Datenbanken",
  "Front-End Design (eg. Figma)",
  "Front-End Development",
  "Backend Development",
];

const SkillsList = () => {
  return (
    <div className="border border-primary/40 rounded-3xl p-6 max-w-md">
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="border-b border-foreground/30 pb-2 last:border-b-0 last:pb-0">
            <span className="text-foreground font-light text-sm md:text-base">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
