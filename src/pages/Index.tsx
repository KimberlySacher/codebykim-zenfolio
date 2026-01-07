import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import WhatIBuild from "@/components/WhatIBuild";
import HowProjectsStart from "@/components/HowProjectsStart";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <main className="min-h-screen bg-background cursor-none">
      <CustomCursor />
      <Navigation />
      <div className="pt-20">
        <Hero />
        <HowIWork />
        <WhatIBuild />
        <HowProjectsStart />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
