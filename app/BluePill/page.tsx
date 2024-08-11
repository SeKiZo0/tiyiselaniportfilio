"use client"
import React from 'react'
import HeroPage from "./components/HeroPage"

function page() {
  return (
    <div>
        <div id="hero" className="h-screen w-full flex place-content-center place-items-center">
            <HeroPage/>
        </div>
        <div id="about" className="w-full flex justify-center">
            This is all about me
        </div>
        <div id="skills" className="w-full flex justify-center">
            These are my skills
        </div>
        <div id="contact" className="w-full flex justify-center">
            insert some logos here
        </div>
    </div>
  )
}

export default page