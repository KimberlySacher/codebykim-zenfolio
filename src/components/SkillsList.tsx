const skills = [
  "App Entwicklung",
  "Datenbanken",
  "Front-End Design (eg. Figma)",
  "Front-End Development",
  "Backend Development",
];

const SkillsList = () => {
  return (
    <div className="border border-primary/30 rounded-2xl p-5 max-w-xs">
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="border-b border-foreground/15 pb-2 last:border-b-0 last:pb-0">
            <span className="text-foreground/80 font-light text-sm">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
