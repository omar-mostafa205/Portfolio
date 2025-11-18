import NavBar from "@/components/NavBar";
import { Hero } from "@/components/sections/Hero";
import MovingImages from "@/components/MovingImages";
import ProjectsPortfolio from "@/components/sections/ProjectsPortfolio";
import TechArsenal from "@/components/sections/TechArsenal";
import ContactSection from "@/components/sections/Contact";
import Approach from "@/components/sections/Approach";
import Features from "@/components/sections/Features";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-cente">
      <NavBar /> 
      <Hero />
      <MovingImages />  
      <Features />
      <ProjectsPortfolio /> 
      <Approach />
      <TechArsenal />
      <ContactSection />
   
    </main>
  );
}
