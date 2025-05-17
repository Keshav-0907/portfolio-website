'use client'
import Image from "next/image";
import './globals.css';
import Hero from "@/components/sections/Hero";
import Experiance from "@/components/sections/Experiance";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import { useEffect } from "react";

export default function Home() {



useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://tap-feedback.vercel.app/embed/cmasp9qu3000bulds21g6uya3";
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);
  
  
  return (
    <div className="flex gap-2 md:pb-8 pb-4 flex-col">
      <Hero />
      <div className='w-full md:my-4 my-2 h-[1px] bg-[#363635]'></div>
      <TechStack />
      <div className='w-full md:my-4 my-2 h-[1px] bg-[#363635]'></div>
      <Experiance />
      <div className='w-full md:my-4 my-2 h-[1px] bg-[#363635]'></div>
      <Projects />
      <div className='w-full md:my-4 my-2 h-[1px] bg-[#363635]'></div>
    </div>
  );
}
