import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function ProjectCard3({}: Props) {
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
            src="Apple Stock.png" alt=""/>
            <div className="p-0 md:pd-0">
                
                <h4 className="text-4xl font-bold "><Link href="Fraud Detection ML">
                <button className= "https://github.com/ifitsmanu/FRAUD-DETECTION-USING-ML"> Apple Stock Price App using Streamlit </button>
                </Link> </h4>
                
                <div className="flex space-2 my-2">
                    <img className ="h-12 w-12 rounded full p-1 " src="python.svg" alt=" " />
                    <img className ="h-12 w-12 rounded full p-1 " src="sklearn.png" alt=" " />
                    <img className ="h-12 w-12 rounded full p-1 " src="pandas.png" alt=" " />
                    <img className ="h-12 w-12 rounded full p-1 " src="comet.png" alt=" " />
                </div>
                <p className="text-lg text-gray-400">This project aims to build a web application that displays the current and historical stock prices of Apple Inc.</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Real-time Data: The application displays the current stock price of Apple Inc. in real-time and updates it automatically.</li>
                    <li>Historical Data: The user can view the historical stock prices of Apple Inc. for a specified date range and visualize the data using line charts and candlestick charts.</li>
                    <li>User-friendly Interface: The application has a user-friendly interface that is easy to use and navigate. The user can select the date range, change the type of chart, and view the stock prices with a few clicks.</li>
                    <li>Data Source: The stock price data is fetched from a reliable source, such as the Alpha Vantage API, ensuring the accuracy of the data displayed in the application.</li>
                </ul>
            </div>
        </article>
    )
}