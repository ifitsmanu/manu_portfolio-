import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function ProjectCard4({}: Props) {
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
            className="w-70 h-40  xl:w-[400px] xl:h-[200px] object-cover object-center"
            src="Roadtouni.png" alt=""/>
            <div className="p-0 md:pd-0">
                
                <h4 className="text-4xl font-bold "><Link href="Fraud Detection ML">
                <button className= "https://github.com/ifitsmanu/FRAUD-DETECTION-USING-ML">Road To Uni. </button>
                </Link> </h4>
                
                <div className="flex space-2 my-2">
                    <img className ="h-12 w-12 rounded full p-1 " src="react-2.svg" alt=" " />
                    <img className ="h-12 w-12 rounded full p-1 " src="tailwind-css-2.svg" alt=" " />
                    <img className ="h-12 w-12 rounded full p-1 " src="git.png" alt=" " />
                    <img className ="h-12 w-12 rounded full p-1 " src="html5.svg" alt=" " />
                </div>
                <p className="text-lg text-gray-400">This project aims to build a web application that helps students keep track of their college applications.</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>User Management: Users can sign up and log in to access the application. Each user will have their own dashboard to manage their college applications.</li>
                    <li>Application Tracker: Users can add, edit, and delete their college applications, including the name of the college, the status of the application, and the deadline. The application will also have a calendar view to see all the deadlines in one place.</li>
                    <li>Document Uploads: Users can upload and store important documents related to their college applications, such as transcripts, test scores, and essays.</li>
                    <li>Notifications: The application will send reminders and notifications to users to keep them on track with their college applications.</li>
                    <li>Reporting: Users can generate reports on their college applications, including a summary of the application status and a timeline of the application process.</li>
                </ul>
            </div>
        </article>
    )
}