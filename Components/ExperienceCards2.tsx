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
        src="PACE.png" alt=""/>
        <div className="p-0 md:pd-0">
            <h4 className="text-4xl font-light ">Peer Tutor </h4>
            <p className="font-bold text-2xl mt-1 ">PACE UNIVERSITY</p>
            <div className="flex space-2 my-2">
                <img className ="h-12 w-12 rounded full p-1 " src="python.svg" alt=" " />
                <img className ="h-12 w-12 rounded full p-1 " src="javascript.svg" alt=" " />
                <img className ="h-12 w-12 rounded full p-1" src="Github.png" alt=" " />
                <img className ="h-12 w-12 rounded full p-1" src="mysql.svg" alt=" " />
                <img className ="h-12 w-12 rounded full p-1" src="html5.svg" alt=" " />
                {/* Tech Used*/}
                {/* Tech Used*/}
                {/* Tech Used*/}
                {/* Tech Used*/}
            </div>
            <p className='uppercase py-5 text-gray-300'>SEPTEMBER-2022 to Present</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Instruct approximately 12 students per week in programming languages including C++, JavaScript, SQL, Python, & R, Database
Management Systems (DBMS), Data Science & Machine Learning algorithms, & Advanced Spreadsheets in Excel.</li>
                <li> Design & implement coding assignments to enhance students' programming, data science, & machine learning capabilities,
defining pre- & post-conditions, mentoring students & boosting skill development by 50% as measured by system.
                </li>
            </ul>
        </div>
    </article>
    )
}