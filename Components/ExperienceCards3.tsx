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
        src="PACE_S.png" alt=""/>
        <div className="p-0 md:pd-0">
            <h4 className="text-4xl font-light ">Student Intern </h4>
            <p className="font-bold text-2xl mt-1 ">Pace University Summer STEM Institute</p>
            <div className="flex space-2 my-2">
                <img className ="h-12 w-12 rounded full p-1 " src="python.svg" alt=" " />
                <img className ="h-12 w-12 rounded full p-1 " src="javascript.svg" alt=" " />
                <img className ="h-12 w-12 rounded full p-1" src="Github.png" alt=" " />
                <img className ="h-12 w-12 rounded full p-1" src="git.png" alt=" " />
                {/* Tech Used*/}
                {/* Tech Used*/}
                {/* Tech Used*/}
                {/* Tech Used*/}
            </div>
            <p className='uppercase py-5 text-gray-300'>June 2022–August 2022</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Mentored high school students on data science topics including Python, Google Collab, Data Science, & Machine Learning,
                leading Agile development activities to manage the Billion Oyster Project dataset, reducing project completion time by 50%.</li>
                <li> Applied predictive analytics & data mining techniques, enabling students to forecast oyster population within an established
                timeline with 94% accuracy.</li>
            </ul>
        </div>
    </article>
    )
}