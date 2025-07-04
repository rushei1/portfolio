import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Python", level: 90, category: "programming" },
  { name: "Java", level: 80, category: "programming" },
  { name: "JavaScript", level: 80, category: "programming" },
  { name: "C++", level: 80, category: "programming" },
  { name: "HTML/CSS", level: 90, category: "programming" },
  { name: "React", level: 85, category: "programming" },
  { name: "Tailwind CSS", level: 80, category: "programming" },

  // Frameworks & Libraries
  { name: "Django", level: 70, category: "framework" },
  { name: "Flask", level: 70, category: "framework" },
  { name: "FastAPI", level: 70, category: "framework" },
  { name: "NLP", level: 75, category: "framework" },
  { name: "AI/ML", level: 80, category: "framework" },

  // Cloud & LLMs
  { name: "OpenAI APIs", level: 80, category: "llms" },
  { name: "Hugging Face Transformers", level: 70, category: "llms" },
  { name: "IBM Cloud (Watsonx)", level: 70, category: "llms" },

   // Tools & Platforms
  { name: "MySQL", level: 70, category: "tools" },
  { name: "Power BI", level: 75, category: "tools" },
  { name: "Google Colab", level: 85, category: "tools" },
  { name: "Jupyter Notebooks", level: 85, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "Visual Studio", level: 95, category: "tools" },

  // Documentation & Engineering
  { name: "Prompt Engineering", level: 80, category: "documentation" },
  { name: "Problem Statement Writing", level: 85, category: "documentation" },
  { name: "Solution Structuring", level: 80, category: "documentation" },
];

const categories = ["all", "programming", "framework", "llms", "tools", "documentation"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};