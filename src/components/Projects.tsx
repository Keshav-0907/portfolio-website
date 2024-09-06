"use client";
import React from "react";
import ProjectData from "@/data/ProjectData";
import { useState } from "react";
import ProjectCategories from "@/data/ProjectCategories";
import Link from "next/link";
import StackIcon from "tech-stack-icons";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const colorMode = "dark";

  const handleCategory = (category: any): void => {
    setActiveCategory(category);
  };

  const filteredProjects =
    activeCategory === "all"
      ? ProjectData
      : ProjectData.filter((project) =>
          project.category.includes(activeCategory)
        );

  console.log(activeCategory);

  return (
    <div id="projects" className="md:px-6 px-3">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-semibold">~ Projects</div>
        <Link href={"/projects"} className="flex underline gap-1 items-center">
          <ExternalLink size={20} /> All Projects
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        {ProjectData.slice(0, 4).map((project) => {
          return (
            <div
              key={project.id}
              className="p-4 rounded-md gap-5 flex md:flex-row flex-col border-2 border-[#2C2B2A] bg-[#1B1B1D]"
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

              <div className="flex flex-col gap-3 bg-[#1B1B1D] flex-grow">
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-[#1B1B1D] mb-1">
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
                    className="bg-[#2E2E30] flex gap-2 text-[#8e8d8b] px-3 py-2 rounded-md items-center"
                  >
                    <span className="bg-[#2E2E30]">Github Repo</span>
                  </Link>
                  <Link
                    href={project.url}
                    target="_blank"
                    className="bg-[#2E2E30] text-[#8e8d8b] px-3 py-2 rounded-md flex items-center gap-3"
                  >
                    <div className="flex items-center gap-2 bg-[#2E2E30]">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-70"></span>
                      <div className="h-3 w-3 bg-green-600 rounded-full"></div>
                    </div>
                    <div className="bg-[#2E2E30]">Live Demo</div>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2 bg-[#1B1B1D]">
                  {project.stack.map((stack, id) => {
                    return (
                      <div
                        key={id}
                        className="px-2 py-1 text-sm rounded-md bg-[#2E2E30] text-gray-400 cursor-pointer"
                      >
                        {stack}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex justify-center mt-4">
          <Link href={"/projects"} className="flex border-2 border-[#2C2B2A] px-4 py-2 rounded-md bg-[#1B1B1D] w-fit">
            View More
          </Link>
        </div>
        <div className="mt-4">
          <span> {`>>>`} </span>
          <span> You can see my more projects on</span>{" "}
          <Link
            href={"https://github.com/Keshav-0907"}
            target="_blank"
            className="font-bold hover:underline"
          >
            {" "}
            github.com/@keshav-0907
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;