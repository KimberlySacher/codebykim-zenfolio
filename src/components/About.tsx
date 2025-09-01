import { Code2, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Node.js, Python, PostgreSQL, MongoDB"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      description: "RESTful APIs, GraphQL, WebSockets"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "React Native, Flutter, Progressive Web Apps"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate full stack developer with expertise in modern web technologies. 
            I love creating efficient, scalable solutions that deliver exceptional user experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-glow/20"
            >
              <div className="text-primary mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;