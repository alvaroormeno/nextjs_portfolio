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
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" id='home'ref={ref}>
        <div className='flex items-center justify-center'>
            <div className='relative'>
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
                        className='h-24 w-24 rounded-full object-cover border=[0.35rem] border-white shadow-x1'
                    />
                </motion.div>
                
                <motion.span 
                    className='absolute bottom-0 right-0 text-4xl '
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

        <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Welcome! My name is Alvaro Ormeno.</span> {" "} 
            I'm a <span className="font-bold">Full-Stack Developer</span> with{" "}
            <span className="font-bold">2+ years</span> of work experience. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
        </motion.h1>

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
                href='/aoz_cv_24.pdf'
                download={true}
            >
                Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
            </a>

            <a
                className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                href='https://www.linkedin.com/in/alvaroormeno'
                target='_blank'
            >
                <BsLinkedin/>
            </a>

            <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href='https://www.github.com/alvaroormeno'
                target='_blank'
            >
                <FaGithubSquare/>
            </a>
        </motion.div>


    </section>
  )
}
