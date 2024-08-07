'use client'
import React from 'react'
import SectionHeader from './SectionHeader'
import { useSectionInView } from '../utils/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '../utils/actions';
import SubmitBtn from './SubmitBtn';
import toast from "react-hot-toast";


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
                className='text-gray-700 -mt-6 dark:text-white/80'
            > Please contact me directly at <a className='underline' href="mailto:alvaro@gmail.com">alvaro@ormeno.org</a> or through this form.</p>
        
            <form 
                className="mt-10 flex flex-col dark:text-black"
                action={async (formData)=> {
                    const {data, error} = await sendEmail(formData)
                    if (error) {
                        toast.error(error);
                        return;
                    }
            
                    toast.success("Email sent successfully!");
                }}
            >
                <input
                    name='senderEmail'
                    type="email" 
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    placeholder='Your Email'
                    required={true}
                    maxLength={500}
                />
                <textarea 
                    name='message'
                    id="" 
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    placeholder='Your Message...'
                    maxLength={5000}
                ></textarea>
                <SubmitBtn />
            </form>
        
        </motion.section>
    )
}

export default ContactSection