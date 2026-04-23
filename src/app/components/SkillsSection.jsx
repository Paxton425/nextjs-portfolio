"use client";
import React, { useEffect, useRef, useState } from "react";

// Individual Skill Bar Component for cleaner logic
const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setWidth(level); // Trigger animation when visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the bar is visible
    );

    if (barRef.current) observer.observe(barRef.current);
    
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={barRef}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-200 font-medium">{name}</span>
        <span className="text-xs text-slate-400">{level}%</span>
      </div>
      <div className="w-full bg-[#2A2B32] rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-purple-600 via-purple-400 to-white h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }} 
        />
      </div>
    </div>
  );
};

const SKILLS_DATA = [
  {
    category: "Core Frontend",
    icon: "💻",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Tailwind CSS / HTML", level: 75 },
    ],
  },
  {
    category: "Backend & Systems",
    icon: "⚙️",
    skills: [
      { name: "Java (Core)", level: 90 },
      { name: "Node.js", level: 60 },
      { name: "C# .NET Core MVC", level: 70 },
      { name: "PHP (Laravel)", level: 50 },
    ],
  },
  {
    category: "Database & Tools",
    icon: "💾",
    skills: [
      { name: "SQL (MySQL/Server)", level: 75 },
      { name: "MongoDB", level: 65 },
      { name: "Git / Version Control", level: 80 },
      { name: "Oracle Technologies", level: 65 },
      { name: "REST APIs", level: 85 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-12 px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">My Technical Stack</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((group, groupIndex) => (
            <div 
              key={groupIndex} 
              className="bg-[#18191E] border border-[#33353F] p-8 rounded-2xl shadow-xl transition-all duration-300 hover:border-purple-500 hover:shadow-purple-900/10"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-[#33353F] pb-4">
                <span className="text-3xl">{group.icon}</span>
                <h3 className="text-2xl font-bold text-white">
                  {group.category}
                </h3>
              </div>
              
              <div className="space-y-6">
                {group.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;