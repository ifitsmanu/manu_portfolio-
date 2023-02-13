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
        src="ICT.png" alt=""/>
        <div className="p-0 md:pd-0">
            <h4 className="text-4xl font-light ">Assistant Highway Engineer</h4>
            <p className="font-bold text-2xl mt-1 ">Intercontinental Consultants and Technocrats Pvt. Ltd. </p>
            <div className="flex space-2 my-2">
                <img className ="h-12 w-12 rounded full p-1 " src="python.svg" alt=" " />
                <img className ="h-12 w-12 rounded full p-1 " src="ACAD.png" alt=" " />
                <img className ="h-12 w-12 rounded full p-1" src="3ds.png" alt=" " />
                <img className ="h-12 w-12 rounded full p-1" src="excel.png" alt=" " />
                <img className ="h-12 w-12 rounded full p-1" src="PS.png" alt=" " />
            </div>
            <p className='uppercase py-5 text-gray-300'>July 2020 - December 2021 </p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Served under the direction of Project Manager on engineering development of urban and rural highway/roadway projects.</li>
                <li> Managed team of 15-20 Civil Engineers and Architects to study, plan, and implement 25-kilometer length 6-lane highway. </li>
                <li>Collaborated in creating application using Python to track work routes and determine optimal locations for toll booths. </li>
                <li>Developed design drawings and calculations, including 3D models of roadways and utility networks.</li>
            </ul>
        </div>
    </article>
    )
}