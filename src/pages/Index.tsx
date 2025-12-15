import Hero, { SkillsSection } from "@/components/Hero";
import MyApproach from "@/components/MyApproach";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SkillsSection />
      <MyApproach />
      <Education />
      <Contact />
    </main>
  );
};

export default Index;
