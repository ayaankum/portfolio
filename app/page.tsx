"use client"
import ContactForm from "@/components/Contact";
import ExperienceSection from "@/components/Experience";
import HeroSection  from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/Skills";

export default function Home() {
  return (
    <>
    <HeroSection/> 
    <ExperienceSection/>
    <SkillsSection/>
    <Projects/>
    <ContactForm/>
    </>
  );
}
