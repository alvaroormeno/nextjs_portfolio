"use client";

import React, {useEffect, useState} from "react";
import SectionHeader from "./SectionHeader";
import Project from "./SingleProject";
import { projectsData, designProjectsData } from "../utils/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../contexts/ActiveSectionContext";
import { useSectionInView } from "../utils/hooks";

function ProjectSection() {

    const { ref } = useSectionInView("Projects", 0.5);

    const [projectType, setProjectType] = useState('fullstack')


    return (
        <section
            className="scroll-mt-28"
            id="projects"
            ref={ref}
        >
            <SectionHeader>Projects</SectionHeader>

            <div className="flex justify-center items-center gap-2 w-[42rem] mb-5">
                <p 
                    className={projectType === 'fullstack' ? "bg-black/[0.7] px-3 py-1 text-[0.9rem] uppercase tracking-wider text-white rounded-full dark:text-white/70" : "text-[0.9rem] uppercase tracking-wider"}
                    onClick={() => setProjectType('fullstack')}
                >
                    Full Stack</p>
                <p 
                    className={projectType === 'frontend' ? "bg-black/[0.7] px-3 py-1 text-[0.9rem] uppercase tracking-wider text-white rounded-full dark:text-white/70" : "text-[0.9rem] uppercase tracking-wider"}
                    onClick={() => setProjectType('frontend')}
                >
                    Front End</p>
            </div>
            <div>
                {(projectType === 'fullstack' ? projectsData : designProjectsData).map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
                ))}
            </div>
        </section>
        
    )
}

export default ProjectSection