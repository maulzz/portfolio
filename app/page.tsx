import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}
