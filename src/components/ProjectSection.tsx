"use client";

import React, {useEffect, useState} from "react";
import SectionHeader from "./SectionHeader";
import Project from "./SingleProject";
import { fullstackProjectsData, designProjectsData, workProjectsData } from "../utils/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../contexts/ActiveSectionContext";
import { useSectionInView } from "../utils/hooks";


function ProjectSection() {

    const { ref } = useSectionInView("Projects", 0.5);

    const [projectType, setProjectType] = useState<ProjectsType>('workProjects')
    const [projectsToMap, setProjectsToMap] = useState<SingleExpProjectObj[]>([])


    useEffect(() => {
        if (projectType === 'fullstack') {
            setProjectsToMap(fullstackProjectsData)
        } else if (projectType === 'frontend') {
            setProjectsToMap(designProjectsData)
        } else if (projectType === 'workProjects') {
            setProjectsToMap(workProjectsData)
        }
    }, [projectType])


    return (
        <section
            className="scroll-mt-28 mb-28"
            id="projects"
            ref={ref}
            onClick={() => {

            }}
        >
            <SectionHeader>Projects</SectionHeader>

            <div className="flex justify-center items-center gap-5 max-w-[48rem] mb-5">
                <p 
                    className={projectType === 'workProjects' ? "bg-black/[0.7] px-3 py-1 text-[0.9rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 cursor-pointer " : "text-[0.9rem] uppercase tracking-wider cursor-pointer"}
                    onClick={() => setProjectType('workProjects')}
                >
                    Work Projects
                </p>
                <p 
                    className={projectType === 'fullstack' ? "bg-black/[0.7] px-3 py-1 text-[0.9rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 cursor-pointer" : "text-[0.9rem] uppercase tracking-wider cursor-pointer"}
                    onClick={() => setProjectType('fullstack')}
                >
                    Full Stack
                </p>
                <p 
                    className={projectType === 'frontend' ? "bg-black/[0.7] px-3 py-1 text-[0.9rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 cursor-pointer " : "text-[0.9rem] uppercase tracking-wider cursor-pointer"}
                    onClick={() => setProjectType('frontend')}
                >
                    Front End
                </p>
            </div>
            <div>
                {projectsToMap && projectsToMap.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
                ))}
            </div>
        </section>
        
    )
}

export default ProjectSection