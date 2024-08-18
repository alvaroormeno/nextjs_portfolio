"use client";

import React, {useEffect} from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../contexts/ActiveSectionContext";

import { useSectionInView } from "../utils/hooks";

const axios = require('axios');


function AboutSection() {

    const { ref } = useSectionInView("About");
    



  return (
    <motion.section
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        <SectionHeader>About Me</SectionHeader>

        <p className="mb-3">
            Full-Stack Developer, Columbia University Bootcamp graduate with a Hospitality & Sustainable Tourism background and strong work experiences in Marketing and Digital Media. Effective visual communicator with attention to detail and problem solving skills to build engaging web experiences. Known for always having a positive attitude and welcoming new challenges!
        </p>

      {/* <p className="mb-3">
        Full Stack Software Engineer, Columbia University Bootcamp graduate with new and reinforced skills in HTML, CSS, JavaScript, responsive web design frameworks with a passion and focus for React.js.
      </p> */}
      <p className="mb-3">
      Submerged in the technology field from early on and looking forward to the future with web 3.0 and upcoming metaverses, I am passionate about utilizing React & Next.js to develop captivating user web experiences.
      </p>
      <p className="mb-3">
      I apply the entrepreneurial concept of “everything is first consumed by the eye” to all my projects, my goal is to merge both past and present work experiences to integrate a quality web development team to create useful and engaging web applications.
      </p>

    </motion.section>
  )
}

export default AboutSection