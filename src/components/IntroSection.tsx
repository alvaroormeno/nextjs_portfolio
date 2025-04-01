'use client'
import React, {useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {motion} from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '../contexts/ActiveSectionContext'

import handleGAClicks from '../utils/GoogleAnalytics/eventClicks'

import myself from "@/public/images/myself.jpg"

export default function IntroSection() {

    const {ref, inView } = useInView({
        threshold: 0.5
    })

    const { 
        activeSection, 
        setActiveSection, 
        setTimeOfLastClick 
    } = useActiveSectionContext();

    useEffect(() => {
        if (inView) {
            setActiveSection('Home')
        }
    }, [inView, setActiveSection])



    return (
        <section 
            id='home'
            ref={ref}
            className="
                h-screen w-[100%] flex flex-col justify-center text-center  
                lg:flex-row lg:w-[80%]
            "
        >
            {/* LEFT COLUMN */}
            <div className='
                flex items-center justify-center
                lg:w-[30%]
            '
            >
                <div className='relative'>
                    {/* MY IMAGE */}
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity:1, scale: 1}}
                        transition={{
                            type: 'tween',
                            duration: 0.2
                        }}
                    >
                        <Image 
                            src={myself} 
                            alt='alvaro' 
                            width={200} 
                            height={200} 
                            quality={95}
                            priority={true}
                            className='
                                h-24 w-24 rounded-full object-cover border=[0.35rem] border-white shadow-x1
                                sm:h-[280px] sm:w-[280px]
                            '
                        />
                    </motion.div>
                    {/* HAND EMOJI */}
                    <motion.span 
                        className='
                            absolute bottom-0 right-0 text-4xl 
                            sm:text-7xl
                        '
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity:1, scale: 1}}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.5,
                            duration: 0.7,
                        }}
                    >
                    👋
                    </motion.span>
                </div>
            </div>
            
            {/* RIGHT COLUMN */}
            <div
                className='
                    flex flex-col items-center justify-center w-[100%]
                    lg:w-[70%]
                '
            >
                <motion.div
                    className='
                            flex flex-col items-center justify-center w-[100%] text-2xl font-medium !leading-[1.5] 
                            sm:text-4xl sm:pl-4
                        '
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1>Welcome!</h1>
                    <h1>My name is <span className="font-bold">Alvaro Ormeno</span>.</h1>
                    <h1>I'm a <span className="font-bold">Full-Stack Developer</span></h1>
                    <h1>with <span className="font-bold">3 years</span>  of work experience.</h1>
                    <h1>My focus is <span className="font-bold">React + Next.Js</span> </h1>
                </motion.div>



                <motion.div 
                    className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium '
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5
                    }}
                >
                    <Link
                        href={'#contact'}
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                        onClick={() => {
                            setActiveSection('Contact')
                            setTimeOfLastClick(Date.now())
                        }}
                    >
                        Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
                    </Link>

                    <a
                        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                        href='/pdfs/aoz_cv_24.pdf'
                        download={true}
                        onClick={() => {handleGAClicks('intro_section_button_click', {button_name: 'download_cv'})}}
                    >
                        Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
                    </a>

                    <a
                        className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                        href='https://www.linkedin.com/in/alvaroormeno'
                        target='_blank'
                        onClick={() => {handleGAClicks('intro_section_button_click', {button_name: 'linkedin_redirect'})}}
                    >
                        <BsLinkedin/>
                    </a>

                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href='https://www.github.com/alvaroormeno'
                        target='_blank'
                        onClick={() => {handleGAClicks( 'intro_section_button_click', {button_name: 'github_redirect'})}}
                    >
                        <FaGithubSquare/>
                    </a>
                </motion.div>





            </div>
            

            


        </section>
    )
}
