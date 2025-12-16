const Capabilities = () => {
  const capabilities = [
    "Application Development",
    "Databases",
    "Front-End Design (e.g. Figma)",
    "Front-End Development",
    "Backend Development"
  ];

  return (
    <div className="border border-primary/30 rounded-2xl p-6 bg-background/50 backdrop-blur-sm">
      <ul className="space-y-0">
        {capabilities.map((capability, index) => (
          <li 
            key={capability}
            className={`py-3 text-foreground/80 font-light text-sm ${
              index !== capabilities.length - 1 ? 'border-b border-foreground/10' : ''
            }`}
          >
            {capability}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Capabilities;
