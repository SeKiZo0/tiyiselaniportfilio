"use client"
import React from 'react'
import HeroPage from "./components/HeroPage"

function page() {
  return (
    <div>
        <div id="hero" className="h-screen w-full flex place-content-center place-items-center object-contain overflow-x-hidden relative">
            <HeroPage />
            <p className='absolute font-sans text-8xl'>Hi, My name is Morris Mofamadi</p>
        </div>
        <div id="about" className="w-full flex justify-center">
            This is all about me
        </div>
        <div id="skills" className="h-screen w-full flex justify-center">
            <div>
            My Prefered Techstack 
            <ul>
                <li>.Net</li>
                <li>React(Next.Js)</li>
                <li>PostgreSQL(Through Supabase)</li>
                <li>Git</li>
            </ul>
            </div>
            <div>
                Other tech I'm able to develop with
                <ul>
                    <li>Angular</li>
                    <li>MSSQL</li>
                </ul>
            </div>
            
        </div>
        <div id="contact" className="w-full flex justify-center">
            insert some logos here
        </div>
    </div>
  )
}

export default page