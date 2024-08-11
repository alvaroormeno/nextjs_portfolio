"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";



export default function Project({
    title,
    description,
    bullets,
    tags,
    imageUrl,
    liveDemo,
    githubRepo
}: SingleExpProjectObj) {

    
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
        <section className="bg-gray-100 max-w-[52rem] border border-black/5 rounded-lg overflow-hidden relative sm:min-h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="py-6 px-6 gap-2  sm:max-w-[60%] flex flex-col h-full  sm:min-h-[20rem] sm:group-even:ml-[auto]">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className=" leading-relaxed text-gray-700 dark:text-white/70">
                    {description}
                </p>

                {/* Bullet Points */}
                <ul className="ml-4">
                    {bullets && bullets.map((text, index) => (
                        <li key={`bullet-${index}`} className="text-[14px] list-disc text-gray-700 dark:text-white/70">
                            {text}
                        </li>
                    ))}
                </ul>

                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {tags.map((tag, index) => (
                    <li
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                        key={index}
                    >
                        {tag}
                    </li>
                    ))}
                </ul>
            </div>

            {/* LINKS POP UP */}
            {githubRepo || liveDemo ? (<div
                className="hidden z-40 justify-center items-center gap-5 absolute bottom-0 w-[100%] bg-white/60 h-[60px] group-hover:flex  dark:bg-black/80"
            >
                {githubRepo ? (
                    <a
                        className="bg-white px-2 py-1 text-gray-700 flex items-center text-[1rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/100"
                        href={githubRepo}
                        target='_blank' 
                    >
                        Github Repo
                    </a>
                ): (null)}
                
                {liveDemo ? (
                    <a
                        className="bg-white px-2 py-1 text-gray-700 flex items-center text-[1rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/100"
                        href={liveDemo}
                        target='_blank'
                    >
                        Live Demo
                    </a>
                ): (null)}
            </div>) : (null)}

            <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={95}
                className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                transition 
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2

                group-even:right-[initial] group-even:-left-40"
            />

            
        </section>
        </motion.div>
    );
}