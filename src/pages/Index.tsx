import Hero, { SkillsSection } from "@/components/Hero";
import Projects from "@/components/Projects";
import MyApproach from "@/components/MyApproach";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <SkillsSection />
      <MyApproach />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
