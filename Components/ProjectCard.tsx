import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Cursor } from 'react-simple-typewriter'

type Props = {}

export default function ProjectCard({}: Props) {
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
            src="fraud.jpeg" alt=""/>
            <div className="p-0 md:pd-0">
                
                <h4 className="text-4xl font-bold "><Link href="Fraud Detection ML">
                <button className= "https://github.com/ifitsmanu/FRAUD-DETECTION-USING-ML">FRAUD DETECTION </button>
                </Link> </h4>
                
                <div className="flex space-2 my-2">
                    <img className ="h-12 w-12 rounded full p-1 " src="python.svg" alt=" " />
                    <img className ="h-12 w-12 rounded full p-1 " src="sklearn.png" alt=" " />
                    <img className ="h-12 w-12 rounded full p-1 " src="pandas.png" alt=" " />
                    <img className ="h-12 w-12 rounded full p-1 " src="comet.png" alt=" " />
                </div>
                <p className="text-lg text-gray-400">A Machine Learning model to detect fraud in credit card transactions.</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Developed machine learning model to detect fraudulent credit card transactions using Python and various libraries (Comet, Pandas, Numpy, Sklearn).</li>
                    <li>Applied feature engineering techniques to extract relevant information from raw data and fed it into the model.</li>
                    <li>Tested model's performance on separate dataset and evaluated accuracy, precision, and recall.</li>
                    <li>Achieved strong performance in detecting fraudulent transactions and demonstrated potential as a valuable tool for detecting fraudulent activity.</li>
                </ul>
            </div>
        </article>
        )
    }
    
