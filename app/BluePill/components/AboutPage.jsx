import React from 'react'
import styles from './styles.module.scss'
import { sea_floor } from './paths'

function AboutPage() {
  return (
    <div className={styles.bluebackground + " h-screen w-full"}>
      <div>
        <p>I am a BCom informatics student who studies ath the University of Pretoria. I am an software devolper who tries to find new and creative solutions to problems. I am also a archer who aspires to be competitive in the olympic recurve division
        </p>
        <p>I grew up in Centurion</p>
        <p>I am a programmer</p>
        <p>I am a Archer</p>
        <p>I am a car lover</p>
        
      </div>
      <div className={styles.seabackground +" h-40"}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='w-screen object-fill' preserveAspectRatio="none" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g className='w-screen'><path fill="#000000" className='w-screen' d={sea_floor} /></g>
        </svg> */}

      </div>
    </div>
  )
}

export default AboutPage