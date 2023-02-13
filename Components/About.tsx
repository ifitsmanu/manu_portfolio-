import React from 'react';
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
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
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

        <motion.img
        initial={{
            x: -200, 
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        viewport={{
            once: true,
        }}
        src="if.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className="text-4xl font-semibold">
                Here is a <span className="underline decoration-[#F7AB0A]">little</span> background
            </h4>
            <p className='text-base'>
            Hi, my name is Manu, and I'm a Data Scientist with a MS in Information Systems concentration in Data Science and Database Programming. 
            I'm passionate about uncovering insights, discovering patterns, and leveraging my technical expertise to solve business challenges. 
            My education and experience have enabled me to develop a comprehensive understanding of data science, database programming, and machine learning. 
            I'm confident that I can be a valuable asset to any team by leveraging my drive, creativity, and passion for problem-solving. My skills in data engineering, data analysis, data visualization, and data mining are bolstered by my knowledge of Python, R, SQL, Tableau, and Power BI. 
            My ultimate goal is to use my skills to make an impact in the world of data.
            </p>
        </div>
    </motion.div>
    )
} 