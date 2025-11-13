import NavBar from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import MovingImages from "@/components/MovingImages";
import Example from "@/components/Example";
import ProjectsPortfolio from "@/components/ProjectsPortfolio";
import TechArsenal from "@/components/TechArsenal";
import { Contact } from "lucide-react";
import ContactSection from "@/components/Contact";
import Approach from "@/components/Approach";
import { Footer } from "@/components/t";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-cente">
      <NavBar /> 
      <section id="#hero">
        <Hero />
      </section>
      <MovingImages />  
      <Example />
      <ProjectsPortfolio /> 
      <Approach />
      <TechArsenal />
      <ContactSection />
   
    </main>
  );
}
