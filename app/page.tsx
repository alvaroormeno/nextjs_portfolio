import Image from "next/image";

import IntroSection from "@/src/components/IntroSection";
import SectionDivider from "@/src/components/SectionDivider";
import AboutSection from "@/src/components/AboutSection";
import ProjectSection from "@/src/components/ProjectSection";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
        <IntroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProjectSection />
        </main>
    );
}
