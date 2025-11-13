"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function Hero() {
  return (
    <div className="h-[47rem] w-full bg-[#00031a] flex flex-col items-center justify-center overflow-hidden rounded-md">
            <p className="text-[#ccabff] text-xl mb-6 -mt-40"> 
        Hi! My name is Omar
      </p>
      <h1 className="
  text-5xl         
  sm:text-6xl     
  md:text-7xl       
  lg:text-9xl       
  xl:text-9xl 
  font-bold 
  text-center 
  text-white 
  relative 
  z-20 
  mb-7 
  shadow-2xl 
  max-w-xl
  md:max-w-2xl
  lg:max-w-4xl       
  px-4
  break-words      
">        AI Full Stack Developer
      </h1>

      <div className="w-[70rem] h-46 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#ccabff] to-transparent h-[4px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#ccabff] to-transparent h-[2px] w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#ccabff] to-transparent h-[8px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#ccabff] to-transparent h-[3px] w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-[#00031a] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    <div className="flex flex-row items-center justify-center gap-8">
      <button  
       className="flex cursor-pointer items-center gap-2 rounded-md px-15 py-4 font-medium text-white 
       bg-gradient-to-r from-[#161A31] to-[#06091F] 
       border border-[#22233a] 
       shadow-[inset_0_0_8px_rgba(255,255,255,0.05)] 
       hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] 
       transition-all duration-300
       text-lg
       ">
            See my Work
      </button>
      <button className="bg-[#9456f1] px-15 py-4 text-white rounded-md cursor-pointer text-lg">
            Get in Touch 
      </button> 
      </div>
    </div>
  );
}