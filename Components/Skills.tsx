import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import Skill1 from './skill1'
import Skill2 from './skill2'
import Skill3 from './skill3'
import Skill4 from './skill4'
import Skill5 from './skill5'
import Skill6 from './skill6'
import Skill7 from './skill7'
import Skill12 from './skill12'
import Skill11 from './skill11'
import Skill8 from './skill8'
import Skill10 from './skill10'
import Skill9 from './skill9'
import Skill13 from './skill13'
import Skill14 from './skill14'
import Skill15 from './skill15'
import Skill16 from './skill16'
import Skill17 from './skill17'
import Skill18 from './skill18'
import Skill19 from './Skill19'

type Props = {}

export default function Skills({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 1.5, }}
            className="h-screen flex relative flex-col text-center md:text-left xl:flex-row
    max-w[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <div >
                <h3
                    className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                    Skills
                </h3>
                <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for current proficiency</h3>
            </div>
            <div className="grid grid-cols-4 gap-5 text-center">
                <Skill />
                <Skill1 />
                <Skill2 />
                <Skill3 />
                <Skill4 />
                <Skill5 />
                <Skill6 />
                <Skill7 />
                <Skill8 />
                <Skill9 />
                <Skill10 />
                <Skill11 />
                <Skill12 />
                <Skill13 />
                <Skill14 />
                <Skill15 />
                <Skill16 />
                <Skill17 />
                <Skill18 />
                <Skill19 />
            </div>
        </motion.div>
    )
}