import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import MyApproach from "@/components/MyApproach";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <MyApproach />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
