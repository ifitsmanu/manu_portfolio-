import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCards({}: Props) {
    return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer 
    transition-opacity duration-200 overflow-hidden">
        <motion.img 
        initial={{
            y: 100, 
            opacity: 0,}} 
        transition={{
            duration: 1.2,}}
        whileInView={{
            y: 0,
            opacity: 1,}}
        viewport={{
            once: true,}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="RTU.png" alt=""/>
        <div className="p-0 md:pd-0">
            <h4 className="text-4xl font-light ">Research Intern </h4>
            <p className="font-bold text-2xl mt-1 ">Road to Uni.</p>
            <div className="flex space-2 my-2">
                <img className ="h-12 w-12 rounded full p-1 " src="react-2.svg" alt=" " />
                <img className ="h-12 w-12 rounded full p-1 " src="javascript.svg" alt=" " />
                <img className ="h-12 w-12 rounded full p-1" src="Github.png" alt=" " />
                <img className ="h-12 w-12 rounded full p-1" src="mysql.svg" alt=" " />
                <img className ="h-12 w-12 rounded full p-1" src="Notion.png" alt=" " />
                
            </div>
            <p className='uppercase py-5 text-gray-300'>July-2022 to Feb-2023</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Designed interactive web application using React 16.8, allowing high school students to prepare for & track college
                applications, optimizing design by reducing code by 30% to improve application speed.</li>
                <li>Developed backend database using MySQL, organizing dataset of high school information using Notion, researching
                college preparatory high schools throughout the nation to inform web functionality.
                </li>
            </ul>
        </div>
    </article>
    )
}