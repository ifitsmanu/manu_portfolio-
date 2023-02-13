import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function ProjectCard2({}: Props) {
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
            src="spotify_analysis.png" alt=""/>
            <div className="p-0 md:pd-0">
                
                <h4 className="text-4xl font-bold "><Link href="Automated Spotify Data-Pipeline with AWS Terraform PostgreSQL">
                <button className= "https://github.com/ifitsmanu/Automated-Spotify-Data-Pipeline-with-AWS-Terraform-PostgreSQL">Automated Spotify Data-Pipeline with AWS Terraform PostgreSQL </button>
                </Link> </h4>
                
                <div className="flex space-2 my-2">
                    <img className ="h-12 w-12 rounded full p-1 " src="python.svg" alt=" " />
                    <img className ="h-12 w-12 rounded full p-1 " src="sklearn.png" alt=" " />
                    <img className ="h-12 w-12 rounded full p-1 " src="pandas.png" alt=" " />
                    
                </div>
                <p className="text-lg text-gray-400"> </p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Built an automated data pipeline to gather and process music streaming data from Spotify using AWS services like S3, Glue, Lambda and EC2. </li>
                    <li>Implemented Terraform to manage and provision infrastructure, allowing for reproducibility and scalability of the pipeline.</li>
                    <li>Stored the processed data in a PostgreSQL database for efficient querying and analysis.</li>
                    <li>Improved data processing and retrieval speed through optimized database design and proper indexing techniques.</li>
                </ul>
            </div>
        </article>
    )
}