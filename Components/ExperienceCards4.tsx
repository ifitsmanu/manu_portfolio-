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
        src="NYCG.png" alt=""/>
        <div className="p-0 md:pd-0">
            <h4 className="text-4xl font-light ">Salesforce Developer </h4>
            <p className="font-bold text-2xl mt-1 ">THE NYCG</p>
            <div className="flex space-2 my-2">
                <img className ="h-12 w-12 rounded full p-1 " src="tableau.svg" alt=" " />
                <img className ="h-12 w-12 rounded full p-1 " src="administrator.png" alt=" " />
                <img className ="h-12 w-12 rounded full p-1" src="developer.png" alt=" " />
                <img className ="h-12 w-12 rounded full p-1" src="excel.png" alt=" " />
                {/* Tech Used*/}
                {/* Tech Used*/}
                {/* Tech Used*/}
                {/* Tech Used*/}
            </div>
            <p className='uppercase py-5 text-gray-300'>January 2021 - December 2021 </p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Customized Salesforce CRM platforms for business clients, translating ER models into functional database & creating SQL
                    queries in adherence with IT Change Management process, sorting data using Tableau to provide business insights.</li>
                <li> Liaised between software support team and clients to customize Salesforce CRM solutions for business management. </li>
                <li>Using Tableau, implemented advanced filtering, grouping, & sorting techniques to meet specific business requirements.</li>
            </ul>
        </div>
    </article>
    )
}