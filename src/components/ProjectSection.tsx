"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import Project from "./SingleProject";
import { projectsData } from "../utils/data";

function ProjectSection() {
    return (
        <section>
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