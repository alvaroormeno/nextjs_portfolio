import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";



// IMAGES
import udemyClone from "@/public/images/udemyclone.png"
import frontendChallenge1 from "@/public/images/frontEndChallenge1.png"
import corpcommentImg from "@/public/images/corpcomment.png";
import rmtdevImg from "@/public/images/rmtdev.png";
import wordanalyticsImg from "@/public/images/wordanalytics.png";
import dentalxpImg from "@/public/images/dentalXP.png"
import dpsImage from "@/public/images/dentalProductShopper.png"
import dentalLearningImg from "@/public/images/dentalLearning.png"
import imsCmsImg from "@/public/images/imsContentManagement.png"

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
        description: "Attended 8 month bootcamp and graduated with a new set of tools to reinforce my web development skills",
        icon: React.createElement(LuGraduationCap),
        date: "2021",
    },
    {
        title: "Bootcamp Teacher Assistant",
        location: "University of Arizona",
        description: "Assisted in delivering lectures and hands-on coding class sessions on full stack web development technologies and frameworks including HTML, CSS, JS, React, Node.js, SQL, MongoDB.",
        icon: React.createElement(CgWorkAlt),
        date: "2022",
    },
    {
        title: "Junior Full-Stack Developer",
        location: "Integrated Media Services",
        description: "Collaborated with a cross functional team implementing agile method to maintain and develop 5 custom high traffic web applications for education and shopping purposes for the health sector.",
        icon: React.createElement(CgWorkAlt),
        date: "2022 - present",
    },
] as const;

export const fullstackProjectsData = [
    {
        title: "CorpComment",
        description: "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        bullets: [],
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
        liveDemo: '',
        githubRepo:''
    },
    {
        title: "rmtDev",
        description: "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        bullets: [],
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
        liveDemo: '',
        githubRepo:''
    },
    {
        title: "Word Analytics",
        description: "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        bullets: [],
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
        liveDemo: '',
        githubRepo:''
    },
] 


export const designProjectsData = [
    {
        title: "Udemy Clone Landing Page",
        description: "A responsive clone of Udemy main landing page. Uses JSON data file to populate information of courses.",
        bullets: [],
        tags: ["React", "CSS", "Tailwind", "HeroIcons"],
        imageUrl: udemyClone,
        liveDemo: 'https://alvaroormeno.github.io/udemy-clone-landing-page/',
        githubRepo:'https://github.com/alvaroormeno/udemy-clone-landing-page'
    },
    {
        title: "Figma to React Frontend Challenge",
        description:  "A Frontend Mentor challenge. Built with React from a Figma design",
        bullets: [],
        tags: ["React", "Tailwind"],
        imageUrl: frontendChallenge1,
        liveDemo: 'https://alvaro-frontend-mentor-projects.github.io/skilled-e-learning-landing-page/',
        githubRepo:'https://github.com/alvaro-frontend-mentor-projects/skilled-e-learning-landing-page?tab=readme-ov-file'
    },
] 


export const workProjectsData = [
    {
        title: "DentalXP",
        description: "Leading provider of online dental education, offering a wide range of courses and programs to dental professionals worldwide.",
        bullets: [],
        tags: ["React", "Next.JS", "TypeScript", "CSS", "Prisma", "Stripe", "SendGrid"],
        imageUrl: dentalxpImg,
        liveDemo: 'https://www.dentalxp.com',
        githubRepo:''
    },
    {
        title: "IMS Content Management System",
        description:  "Full Content Management System for all IMS platforms, DXP, DPS, DL",
        bullets: [],
        tags: ["React", "Next.JS", "CSS", "MUI", "Redux", "Axios", "JWT", ],
        imageUrl: imsCmsImg,
        liveDemo: '',
        githubRepo:''
    },
    {
        title: "Dental Product Shopper",
        description:  "Leading provider of practical, unbiased product information. Our peer to peer product reviews help you select the best products for your practice.",
        bullets: [],
        tags: ["React", "Next.JS", "CSS", "Redux", "Axios",  ],
        imageUrl: dpsImage,
        liveDemo: 'https://www.dentalproductshopper.com',
        githubRepo:''
    },
    {
        title: "Dental Learning",
        description:  "Leading provider of practical, unbiased product information. Our peer to peer product reviews help you select the best products for your practice.",
        bullets: [],
        tags: ["React", "Next.JS", "CSS", "Redux", "Axios",  ],
        imageUrl: dentalLearningImg,
        liveDemo: 'https://www.dentallearning.net/',
        githubRepo:''
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
    "MUI",
    "JWT",
    "Axios",
    
] as const;