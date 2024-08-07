'use client'
import React from 'react'
import SectionHeader from './SectionHeader'
import { useSectionInView } from '../utils/hooks';
import { FaPaperPlane } from "react-icons/fa";
import { motion } from 'framer-motion';
import { sendEmail } from '../utils/actions';


function ContactSection() {

    const { ref } = useSectionInView("Contact");



    return (
        <motion.section
            ref={ref}
            className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
            id='contact'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
        >
            <SectionHeader>Contact Me</SectionHeader>
            <p
                className='text-gray-700 -mt-6'
            > Please contact me directly at <a className='underline' href="mailto:alvaro@gmail.com">alvaro@ormeno.org</a> or through this form.</p>
        
            <form 
                className="mt-10 flex flex-col"
                action={async (formData)=> {
                    console.log(formData.get('senderEmail'))
                    await sendEmail(formData)
                }}
            >
                <input
                    name='senderEmail'
                    type="email" 
                    className='h-14 px-4 rounded-lg borderBlack ' 
                    placeholder='Your Email'
                    required={true}
                    maxLength={500}
                />
                <textarea 
                    name='message'
                    id="" 
                    className='h-52 my-3 rounded-lg borderBlack p-4 '
                    placeholder='Your Message...'
                ></textarea>
                <button 
                    className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 '
                >
                    Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>
                </button>
            </form>
        
        </motion.section>
    )
}

export default ContactSection