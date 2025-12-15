import Hero, { SkillsSection } from "@/components/Hero";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <SkillsSection />
      <Projects />
    </main>
  );
};

export default Index;
