import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Columbia University Software Engineering Bootcamp",
        location: "New York, NY",
        description:
        // "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        "Attended 8 month bootcamp and graduated with a new set of tools to reinforce my web development skills",
        icon: React.createElement(LuGraduationCap),
        date: "2021",
    },
    {
        title: "Bootcamp Teacher Assistant",
        location: "University of Arizona",
        description:
        "Assisted in delivering lectures and hands-on coding class sessions on full stack web development technologies and frameworks including HTML, CSS, JS, React, Node.js, SQL, MongoDB.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Junior Full-Stack Developer",
        location: "Integrated Media Services",
        description:
        "Collaborated with a cross functional team implementing agile method to maintain and develop 5 custom high traffic web applications for education and shopping purposes for the health sector.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "CorpComment",
        description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
    },
    {
        title: "rmtDev",
        description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Word Analytics",
        description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
    },
] 


export const designProjectsData = [
    {
        title: "Udemy Clone Landing Page",
        description:
            "A responsive clone of Udemy main landing page. Uses JSON data file to populate information of courses.",
        tags: ["React", "CSS", "Tailwind", "HeroIcons"],
        imageUrl: corpcommentImg,
    },
    {
        title: "Figma to React Frontend Challenge",
        description:
            "A Frontend Mentor challenge. Built with React from a Figma design",
        tags: ["React", "Tailwind"],
        imageUrl: rmtdevImg,
    },
] 



export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Git",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Heroku",
    "Vercel",
    "Framer Motion",
    "Tailwind",
] as const;