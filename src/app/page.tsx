import About from "@/components/About";
import Experiances from "@/components/Experiances";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#111111] h-fit text-[#CAC8C5] font-inika flex justify-center">
      <div className="md:w-1/2 md:px-3 px-10">
        <Header />
        <Hero />
        <div className="w-full h-[1px] my-5 bg-[#CAC8C5] opacity-20"></div>
        <div className="flex flex-col gap-10">
          <About />
          <TechStack />
          <Projects/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
