import React from "react";

// ICONS
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
// IMAGES
import udemyClone from "@/public/images/udemyclone.png"
import frontendChallenge1 from "@/public/images/frontEndChallenge1.png"
import dentalxpImg from "@/public/images/dentalXP.png"
import dpsImage from "@/public/images/dentalProductShopper.png"
import dentalLearningImg from "@/public/images/dentalLearning.png"
import imsCmsImg from "@/public/images/imsContentManagement.png"
import quickExpense from "@/public/images/quickExpenseTracker.png"
import landingPage from "@/public/images/landingPageTemplate.png"

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
        title: "Quick Expense Tracker",
        description: "An easy and quick expense tracker for any budget",
        bullets: [
            'Use of new Next.Js server side actions',
            'Hosting Postgress Database on Neon',
            'Authentication and login for each user'
        ],
        tags: ["React", "Next.js", "CSS", "Prisma", "PostgreSQL", "Neon", "Vercel", "Clerk"],
        imageUrl: quickExpense,
        liveDemo: 'https://nextjs-quick-expense-tracker.vercel.app/',
        githubRepo:'https://github.com/alvaroormeno/nextjs-expense-tracker'
    },



    {
        title: "DentalXP",
        description: "Leading provider of online dental education, offering a wide range of courses and programs to dental professionals worldwide.",
        bullets: [
            'Redeveloped and redesigned platform from scratch enhancing design, performance, scalability for larger user and education material base',
            'Implemented new payment processor architecture while migrating old accounts.',
            'Developed fellowship section to offer online CE courses through videos, lectures, quizzes and final exams.'
        ],
        tags: ["React", "Next.JS", "TypeScript", "CSS", "Prisma", "Stripe", "SendGrid"],
        imageUrl: dentalxpImg,
        liveDemo: 'https://www.dentalxp.com',
        githubRepo:''
    },
    {
        title: "IMS Content Management System",
        description:  "Full Content Management System for all IMS platforms, DXP, DPS, DL",
        bullets: [
            'Implemented new content management section for DentalXP',
            'Updated application for all platform new needs',
        ],
        tags: ["React", "Next.JS", "CSS", "MUI", "Redux", "Axios", "JWT", ],
        imageUrl: imsCmsImg,
        liveDemo: '',
        githubRepo:''
    },
    {
        title: "Dental Product Shopper",
        description:  "Leading provider of practical, unbiased product information. Our peer to peer product reviews help you select the best products for your practice.",
        bullets: [
            'Tested and analyzed communication between client and server to efficiently improve loading times.',
            'Implemented additional informative sections such as forums and newsfeed.',
            'Maintained content management system with new additions.'
        ],
        tags: ["React", "Next.JS", "CSS", "Redux", "Axios",  ],
        imageUrl: dpsImage,
        liveDemo: 'https://www.dentalproductshopper.com',
        githubRepo:''
    },
] 


export const designProjectsData = [
    {
        title: "Landing Page Template",
        description: "A simple but engaging SAAS Landing Page including hero, pricing, testimonials and call to action sections.",
        bullets: [],
        tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
        imageUrl: landingPage,
        liveDemo: 'https://nextjs-landing-page-project.vercel.app/',
        githubRepo:'https://github.com/alvaroormeno/nextjs-landing-page-project'
    },
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
        bullets: [
            'Redeveloped and redesigned platform from scratch enhancing design, performance, scalability for larger user and education material base',
            'Implemented new payment processor architecture while migrating old accounts.',
            'Developed fellowship section to offer online CE courses through videos, lectures, quizzes and final exams.'
        ],
        tags: ["React", "Next.JS", "TypeScript", "CSS", "Prisma", "Stripe", "SendGrid"],
        imageUrl: dentalxpImg,
        liveDemo: 'https://www.dentalxp.com',
        githubRepo:''
    },
    {
        title: "IMS Content Management System",
        description:  "Full Content Management System for all IMS platforms, DXP, DPS, DL",
        bullets: [
            'Implemented new content management section for DentalXP',
            'Updated application for all platform new needs',
        ],
        tags: ["React", "Next.JS", "CSS", "MUI", "Redux", "Axios", "JWT", ],
        imageUrl: imsCmsImg,
        liveDemo: '',
        githubRepo:''
    },
    {
        title: "Dental Product Shopper",
        description:  "Leading provider of practical, unbiased product information. Our peer to peer product reviews help you select the best products for your practice.",
        bullets: [
            'Tested and analyzed communication between client and server to efficiently improve loading times.',
            'Implemented additional informative sections such as forums and newsfeed.',
            'Maintained content management system with new additions.'
        ],
        tags: ["React", "Next.JS", "CSS", "Redux", "Axios",  ],
        imageUrl: dpsImage,
        liveDemo: 'https://www.dentalproductshopper.com',
        githubRepo:''
    },
    {
        title: "Dental Learning",
        description:  "Leading provider of practical, unbiased product information. Our peer to peer product reviews help you select the best products for your practice.",
        bullets: [
            'Implemented additional blog, webinars sections to both client and content management system',
            'Updated mobile rendering using pure CSS.'
        ],
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