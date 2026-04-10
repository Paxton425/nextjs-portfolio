"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 gap-2 list-disc pl-2">
        <li>JavaScript / React</li>
        <li>Node.js / Next.js</li>
        <li>Java (Core)</li>
        <li>.NET Core (C#)</li>
        <li>SQL</li>
        <li>PHP (Laravel)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>Durban University Of Technology (Dip ICT)</li>
        <li>Simplilearn (Full Stack)</li>
        <li>Ndlela Secondary School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    certs: [
      { name: "Java Programming For beginners", path: "/certs/Cerificate_Java_Programming_For_Beginners.pdf" },
      { name: "Full-Stack E-commerce Development", path: "/certs/ecommerce-cert.pdf" },
    ],
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [activePreview, setActivePreview] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const togglePreview = (certName) => {
    setActivePreview(activePreview === certName ? null : certName);
  };

  return (
    <section className="text-white scroll-mt-24" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative aspect-square">
          <Image 
            src="/images/about-image.png" 
            fill 
            className="object-cover rounded-xl"
            alt="About Me" 
          />
        </div>
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-slate-300">
            I am Sphelele, a dedicated React and Next.js Full-Stack Web Developer. 
            I enjoy building interactive and responsive web applications, working with 
            both frontend and backend technologies to create seamless user experiences.
          </p>

          <div className="flex flex-row justify-start mt-8 gap-2">
            {["skills", "education", "certifications"].map((t) => (
              <TabButton 
                key={t}
                selectTab={() => handleTabChange(t)} 
                active={tab === t}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </TabButton>
            ))}
          </div>

          <div className="mt-8 min-h-[200px]">
            {tab === "certifications" ? (
              <ul className="list-none pl-0 space-y-4">
                {TAB_DATA.find((t) => t.id === "certifications").certs.map((cert) => (
                  <li key={cert.name} className="border-b border-white/10 pb-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <span className="font-medium text-purple-400"># {cert.name}</span>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => togglePreview(cert.name)}
                          className="text-xs bg-neutral-900 hover:bg-neutral-800 border border-purple-500/50 px-4 py-2 rounded-lg transition-colors"
                        >
                          {activePreview === cert.name ? "Close" : "Preview"}
                        </button>
                        <a 
                          href={cert.path} 
                          download 
                          className="text-xs bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                    
                    {activePreview === cert.name && (
                      <div className="mt-4 w-full h-[400px] border border-white/10 rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                        <iframe 
                          src={`${cert.path}#view=FitH`} 
                          className="w-full h-full bg-white"
                          title={cert.name}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="animate-in fade-in duration-500">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;