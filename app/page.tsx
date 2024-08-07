import Image from "next/image";

import IntroSection from "@/src/components/IntroSection";
import SectionDivider from "@/src/components/SectionDivider";
import AboutSection from "@/src/components/AboutSection";
import ProjectSection from "@/src/components/ProjectSection";
import SkillsSection from "@/src/components/SkillsSection";
import ExperienceSection from "@/src/components/ExperienceSection";
import ContactSection from "@/src/components/ContactSection";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
        <IntroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProjectSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <ExperienceSection />
        <ContactSection />
        </main>
    );
}
