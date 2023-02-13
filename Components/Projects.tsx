import { MotionConfig } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectCard2 from './ProjectCard2'
import ProjectCard3 from './ProjectCard3'
import ProjectCard4 from './ProjectCard4'

type Props = {}

    export default function Projects({}: Props) {
        const projects = [1, 2, 3, 4, 5]
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
    className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full p-10 justify-evenly mx-auto items-center">
        <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"> 
        PROJECTS</h3>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            < ProjectCard />
            < ProjectCard2 />
            < ProjectCard3 />
            < ProjectCard4 />
            

        </div>
        
                <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
            </motion.div>
    )
}