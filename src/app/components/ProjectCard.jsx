import "./components-style.css"
import React, { useState, useRef } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({id, 
  imgUrl, 
  title, 
  description, 
  gitUrl, 
  previewUrl, 
  activeCardId, 
  activeCardHandler }) => {
  
  return (
    <div 
      className="project-card"
      onClick={()=>activeCardHandler(id) /*Mobile*/} 
      onMouseEnter={()=>activeCardHandler(id)}
      onMouseLeave={()=>activeCardHandler(null)}>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden"
        style={{ 
          backgroundImage: `url(${imgUrl})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      >
        {/* Fixed Overlay: Uses an RGBA background color modifier and handles transition smoothly */}
        <div 
          id={id}
          style={(activeCardId == id)?
            ({opacity:'0.8'}):
            ({opacity:'0'})
          }
          className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818]/80 opacity-0">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      
      {/* Small typo fix in your class string here as well: added space between color and padding */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;