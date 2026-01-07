const Capabilities = () => {
  const capabilities = [
    "Websites and web applications",
    "Application development",
    "Front-end design and development",
    "Backend development",
    "Databases"
  ];

  return (
    <div className="border border-foreground/20 rounded-2xl p-6 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40">
  <ul className="space-y-0">
    {capabilities.map((capability, index) => (
      <li
        key={capability}
        className={`py-3 text-foreground/80 font-light text-body ${
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
