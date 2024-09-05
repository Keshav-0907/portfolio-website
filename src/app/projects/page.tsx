"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import Hero from "@/components/Hero";
import ProjectData from "@/data/ProjectData";
import Link from "next/link";
import Footer from "@/components/Footer";

const ProjectCategories = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Frontend",
    value: "frontend",
  },
  {
    name: "Fullstack",
    value: "fullstack",
  },
  {
    name: "Blockchain",
    value: "blockchain",
  },
  {
    name: "Generative AI",
    value: "generativeAI",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter projects based on the selected category
  const filteredProjects = ProjectData.filter((project) =>
    selectedCategory === "all"
      ? true
      : project.category.includes(selectedCategory)
  );

  return (
    <div className="text-[#CAC8C5] font-inika flex justify-center">
      <div className="md:w-1/2 w-full px-2">
        {/* <div className="flex flex-col">
          <Header />
          <Hero />
        </div> */}
        <div className="w-full h-[1px] my-5 bg-[#CAC8C5] opacity-20"></div>
        <div className="flex flex-col gap-3">
          <div className="text-2xl w-1/2">~ All Projects</div>
          <div className="flex gap-4 overflow-scroll">
            {ProjectCategories.map((category) => (
              <div
                onClick={() => setSelectedCategory(category.value)}
                key={category.value}
                className={`px-2 flex items-center max-h-10 cursor-pointer  border-[#CAC8C5] border-[1px] rounded-lg ${
                  selectedCategory === category.value
                    ? "bg-[#CAC8C5] text-[#111111]"
                    : "hover:bg-[#373736]"
                }`}
              >
                {category.name}
              </div>
            ))}
          </div>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-3 rounded-md gap-4 flex md:flex-row flex-col border-2 border-[#2C2B2A] bg-[#1B1B1D]"
            >
              <div className="flex items-center">
                {project.img ? (
                  <img
                    src={project.img}
                    className="md:w-56 w-full md:h-32 h-40 rounded-sm object-cover"
                    alt={project.title}
                  />
                ) : (
                  <div className="bg-[#2C2B2A] w-56 h-32 rounded-sm"></div>
                )}
              </div>

              <div className="flex flex-col gap-2 bg-[#1B1B1D]">
                <div className="flex flex-col ">
                  <span className="text-xl font-bold bg-[#1B1B1D]">
                    {project.title}
                  </span>
                  <span className="text-[#8e8d8b] text-sm bg-[#1B1B1D]">
                    {project.desc}
                  </span>
                </div>
                <div className="flex gap-4 bg-[#1B1B1D]">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="bg-[#2E2E30] flex gap-2 text-[#8e8d8b] px-2 py-1 rounded-md items-center"
                  >
                    <span className="bg-[#2E2E30]">Github Repo</span>
                  </Link>
                  <Link
                    href={project.url}
                    target="_blank"
                    className="bg-[#2E2E30] text-[#8e8d8b] px-2 py-1 rounded-md flex items-center gap-3"
                  >
                    <div className="flex items-center gap-2 bg-[#2E2E30] ">
                      <span className="animate-ping 2s absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-70 transform"></span>
                      <div className="h-3 w-3 bg-green-600 rounded-full"></div>
                    </div>
                    <div className="bg-[#2E2E30]">Live Demo</div>
                  </Link>
                </div>
                <div className="flex gap-3 bg-[#1B1B1D] ">
                  {project.stack.map((stack, id) => (
                    <div
                      key={id}
                      className="p-1 text-sm rounded-sm bg-[#1B1B1D] text-gray-400 cursor-pointer"
                    >
                      <div className="bg-[#1B1B1D]">{stack}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
