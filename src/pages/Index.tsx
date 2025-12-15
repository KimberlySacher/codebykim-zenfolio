import Hero, { SkillsSection } from "@/components/Hero";
import Projects from "@/components/Projects";
import MyApproach from "@/components/MyApproach";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <SkillsSection />
      <MyApproach />
      <Projects />
    </main>
  );
};

export default Index;
