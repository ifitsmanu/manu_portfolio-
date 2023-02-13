import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';


type Props = {}

export default function Hero({}: Props) {
    const[ text, count] = useTypewriter({
        words: ["Hi, I am Manu Bhardwaj",
        "techie into fashion!",
        "Data Scientist", 
        "lovecoding.ipynb!!"],
        loop:true,
        delaySpeed: 2000,
    });

    return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-scroll z-0 ">
        <BackgroundCircles />

        <img className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="manu.png"alt="" />

        <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px] ">Data Scientist</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 text-gray-400">
        <span className="mr-3s">{text}</span>
        <Cursor cursorColor="Yellow-600" />
        </h1> 

        <div className="pt-5">

            <Link href="#about">
            <button className="herobutton">About</button>
            </Link >

            <Link href="#experience">
            <button className="herobutton">Experience</button>
            </Link>

            <Link href="#skills">
            <button className="herobutton">Skills</button>
            </Link>

            <Link href="#projects">
            <button className="herobutton">Projects</button>
            </Link>
        </div>
        </div>
        
        
    </div>
    )
}