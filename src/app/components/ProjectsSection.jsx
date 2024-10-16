"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "React"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Invoice Generator App",
    description: "A react.js web app that generates invoices for inserted product data.",
    image: "/images/projects/2.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/Paxton425/invoice-generator",
    previewUrl: "https://paxton425.github.io/invoice-generator/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Laravel full-stack e-commerce website.",
    image: "/images/projects/3.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/Paxton425/laravel-ecommerce",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", ".NET MVC"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "IT bussiness website",
    description: "A demo website for an IT bussiness",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Paxton425/netfocalexpress/tree/main",
    previewUrl: "https://paxton425.github.io/netfocalexpress/",
  },
  {
    id: 6,
    title: "Butchery resturant website",
    description: "A website for a local bucthery resturant and shop.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Paxton425/amandlaendodabutcher",
    previewUrl: "https://paxton425.github.io/amandlaendodabutcher/#home",
  },
  {
    id: 7,
    title: "Facebook Clone",
    description: "Customised Facebook Login Page Clone",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Paxton425/facebook",
    previewUrl: "https://paxton425.github.io/facebook/public_html/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React.js"
          isSelected={tag === "React.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="PHP"
          isSelected={tag === "PHP"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name=".NET MVC"
          isSelected={tag === ".NET MVC"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
