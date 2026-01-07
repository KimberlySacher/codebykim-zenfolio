import ScrollReveal from "./ScrollReveal";
import { Globe, Code, Search } from "lucide-react";

const WhatIBuild = () => {
  const categories = [
    {
      icon: Globe,
      title: "Websites",
      description: "A website is often where first impressions are formed. I design and build websites that are clearly structured, easy to navigate, and communicate what matters without distraction. They are meant to feel reliable, understandable, and appropriate for their context.",
    },
    {
      icon: Code,
      title: "Software",
      description: "Software is about supporting work, not presenting it. When processes become complex or repetitive, I build software that helps structure and simplify daily workflows. This can include applications, internal tools, or automations.",
    },
    {
      icon: Search,
      title: "Requirements analysis",
      description: "Sometimes the solution isn't clear at the start. If you know something could work better but don't yet know how, I help analyze existing workflows and clarify where digital systems or tools can make a meaningful difference.",
    },
  ];

  return (
    <section id="what-i-build" className="min-h-screen bg-background px-6 sm:px-12 md:px-16 lg:px-24 py-24 sm:py-32">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-24 sm:mb-32">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
              What I build.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-foreground max-w-3xl">
              Solutions shaped by what's actually needed.
            </p>
          </ScrollReveal>
        </div>

        {/* Categories Grid */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />
                    <h3 className="text-lg sm:text-xl font-light text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base font-normal text-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatIBuild;
