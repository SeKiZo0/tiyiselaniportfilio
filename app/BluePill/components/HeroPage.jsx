import React, { useEffect, useState } from 'react'
import { shape1, shape1_morphed, shape2, shape2_morphed, shape3, shape3_morphed, shape4, shape4_morphed, shape5, shape5_morphed } from './paths'
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import { interpolate } from 'flubber';

function HeroPage() {
  //#2424c7
  //#004fdc
  //#0071ea
  //#1e90f3
  //#4facf7
  return (
    <div className="h-screen w-full object-contain overflow-x-hidden -z-10">
      <svg id="visual" viewBox="0 0 1920 1080" className='h-full w-full object-fill' preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
        <SVGMorph paths={[shape1, shape1_morphed, shape1]} fill="#2c77d8"/> 
        <SVGMorph paths={[shape2, shape2_morphed, shape2]} fill="#3d5893" />
        <SVGMorph paths={[shape3, shape3_morphed, shape3]} fill="#1a3a90" />
        <SVGMorph paths={[shape4, shape4_morphed, shape4]} fill="#18336c" />
        <SVGMorph paths={[shape5, shape5_morphed, shape5]} fill="#12264d" />
      </svg>
    </div>
  )
}

export default HeroPage

function SVGMorph({ paths, fill }) {

  const [indexOfPath, setIndexOfPath] = useState(0);
  const progress = useMotionValue(0)
  const getIndex = paths.map((_, i) => i);

  const path = useTransform(progress, getIndex, paths, {
    mixer: (a,b) => interpolate(a, b)
  })

  // useEffect(() => {
  //   console.log(indexOfPath)
  //   animate(progress, indexOfPath, {
  //     duration: 100,
  //     delay: 0,
  //     onComplete: () => {
  //       if (indexOfPath === paths.length - 1) {
  //         setIndexOfPath(0)
  //         progress.set(0)
  //       } else {
  //         setIndexOfPath(indexOfPath + 1)
  //       }
  //     }
  //   })
  // }, [indexOfPath])

  return (
    <motion.path d={path} fill={fill} />
  )
}