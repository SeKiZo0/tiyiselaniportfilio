"use client"
import React from 'react'
import HeroPage from "./components/HeroPage"
import AboutPage from "./components/AboutPage"
import SkillsPage from "./components/SkillsPage"

function page() {
  return (
    <div>
        <div id="hero" className="h-screen w-full flex place-content-center place-items-center object-contain overflow-x-hidden relative">
            <HeroPage />
            <p className='absolute font-sans text-8xl'>Hi, My name is Morris Mofamadi</p>
        </div>
        <div id="about" className="w-full flex justify-center">
            <AboutPage />
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