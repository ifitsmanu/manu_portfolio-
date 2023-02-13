import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCards from './ExperienceCards';
import ExperienceCards2 from './ExperienceCards2';
import ExperienceCards3 from './ExperienceCards3';
import ExperienceCards4 from './ExperienceCards4';
import ExperienceCards5 from './ExperienceCards5';
type Props = {}

export default function Experience({}: Props) {
    return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    transition={{
        duration: 1.5,
    }}
    whileInView={{
        opacity: 1,}}
    className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full p-10 justify-evenly mx-auto items-center
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"> 
        Experience</h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            < ExperienceCards />
            < ExperienceCards2 />
            < ExperienceCards3 />
            < ExperienceCards4 />
            < ExperienceCards5 />

        </div>
    </motion.div>
    )
}