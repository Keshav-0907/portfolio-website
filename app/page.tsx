import Image from "next/image";
import './globals.css';
import Hero from "@/components/sections/Hero";
import Experiance from "@/components/sections/Experiance";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="flex gap-8 pb-8 flex-col">
      <Hero />
      <div className='w-full my-4 h-[1px] bg-[#363635]'></div>
      <TechStack />
      <div className='w-full my-4  h-[1px] bg-[#363635]'></div>
      <Experiance />
      <div className='w-full my-4  h-[1px] bg-[#363635]'></div>
      {/* <Projects /> */}
    </div>
  );
}
