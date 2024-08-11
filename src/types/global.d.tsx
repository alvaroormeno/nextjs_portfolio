
import { links } from "@/src/utils/data";
import { ReactElement } from "react";

export { };

declare global {

    type SectionName = (typeof links)[number]["name"];

    type ProjectsType = 'fullstack' | 'frontend' | 'workProjects'

    type SingleExpProjectObj = {
        title: string;
        description: string;
        bullets: string[];
        tags: string[];
        imageUrl: any;
        liveDemo: string;
        githubRepo: string;
    }
    

}