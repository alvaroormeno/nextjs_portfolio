'use client'
import React from 'react'
import SectionHeader from './SectionHeader'
import { motion } from "framer-motion";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { experiencesData, certificationsData } from '../utils/data';
import { useSectionInView } from '../utils/hooks';

import { useTheme } from '../contexts/ThemeContext'



function ExperienceSection() {

    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();


    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            },
        }),
    };


    return (
        <>
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeader>My experience</SectionHeader>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement
                        visible={true}
                        contentStyle={{
                            background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                        }}
                        contentArrowStyle={{
                            borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background:
                            theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                            fontSize: "1.5rem",
                        }}
                    >
                        <h3 className="font-semibold capitalize">{item.title}</h3>
                        <p className="font-normal !mt-0">{item.location}</p>
                        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                </React.Fragment>
                ))}
            </VerticalTimeline>


            
        </section>

        <section className="scroll-mt-28 mb-28 sm:mb-40 gap-y-4 w-full">
            <SectionHeader>Certifications</SectionHeader>

            <ul className="flex flex-wrap justify-center sm:w-full lg:px-20 gap-2 text-[20px] text-gray-800">
            {certificationsData.map((data, index) => (
                <motion.li
                    className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 w-full"
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                    once: true,
                    }}
                    custom={index}
                >
                    <a
                        className="font-bold text-20px"
                        href={data.url}
                        target='_blank'
                    >
                        {data.name}
                    </a>
                    <p className='font-semibold'>{data.issuingOrganization}</p>
                    <p className='text-[15px]'>{data.description}</p>
                    <ul className="flex flex-wrap mt-6 gap-2 sm:mt-4">
                        {/* <p>Skills:</p> */}
                        {
                            data.skills.map((skill, index) => (
                                <li key={index}
                                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                >
                                    {skill}
                                    {/* {index !== data.skills.length - 1 && <span className="ml-2">, </span>} */}
                                    {/* <span>, </span>  */}
                                </li>
                            ))
                        }
                    </ul>
                </motion.li>
            ))}
            </ul>
        </section>
        </>
    );
}

export default ExperienceSection