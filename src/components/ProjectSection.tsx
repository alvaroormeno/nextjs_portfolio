"use client";

import React, {useEffect} from "react";
import SectionHeader from "./SectionHeader";
import Project from "./SingleProject";
import { projectsData } from "../utils/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../contexts/ActiveSectionContext";
import { useSectionInView } from "../utils/hooks";

function ProjectSection() {

    const { ref } = useSectionInView("Projects", 0.5);


    return (
        <section
            className="scroll-mt-28"
            id="projects"
            ref={ref}
        >
            <SectionHeader>Projects</SectionHeader>
            <div>
                {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
                ))}
            </div>
        </section>
        
    )
}

export default ProjectSection