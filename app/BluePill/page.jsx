"use client"
import React, { use, useRef } from 'react'
import HeroPage from "./components/HeroPage"
import AboutPage from "./components/AboutPage"
import SkillsPage from "./components/SkillsPage"
import { useScroll, useTransform, motion } from 'framer-motion'
import Lenis from 'lenis'

function page() {

    const container = useRef();

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -10]);
    const scale2 = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [-5, 0]);

    return (
        <div className=''>
            <div className='relative h-[calc(200vh)] snap-y snap-mandatory' ref={container}>
                <motion.div
                    style = {{ scale: scale1, rotate: rotate1 }}
                    id="hero"
                    className="sticky top-0 h-screen w-full flex place-content-center place-items-center object-contain overflow-x-hidden snap-always snap-center">
                    <HeroPage />
                    <p className='absolute font-sans text-8xl'>Hi, My name is Morris Mofamadi</p>
                </motion.div>
                <motion.div 
                id="about" 
                className="relative h-[calc(100vh)] w-full flex justify-center snap-always snap-center"
                style = {{ scale: scale2, rotate: rotate2 }}>
                    <AboutPage />
                </motion.div>
            </div>

            <div id="skills" className="h-screen w-full flex justify-center">

                <SkillsPage />
            </div>
            <div id="contact" className="w-full flex justify-center">
                insert some logos here
            </div>
        </div>
    )
}

export default page