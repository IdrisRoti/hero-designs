"use client"

import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { textVariant } from './animationVariants'
import { useRef } from 'react'

const Hero = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
  })

  const heightValue = useTransform(scrollYProgress, [0, 1], [50, 100]);
  const opacity = useTransform(scrollYProgress, [0, .5], [1, 0]);
  const yValue = useTransform(scrollYProgress, [0, .5], [0, 50]);

  const height = useMotionTemplate`${heightValue}vh`
  const y = useMotionTemplate`${yValue}%`

  return (
    <div ref={containerRef} className='max-w-[75rem] mx-auto px-4 h-[200vh]'>
        <h1 className="text-[3rem] md:text-[7rem] leading-[1] flex flex-col justify-start uppercase mt-28 tracking-wider">
            <motion.span className='flex overflow-hidden'>
              {
                "sandra".split("").map((char, i) => (
                  <motion.span
                    custom={i*0.03} 
                    variants={textVariant} 
                    initial="exit" 
                    animate="enter" 
                    key={i}
                  >
                        {char}
                  </motion.span>
                ))
              }
            </motion.span>
            <span className='flex overflow-hidden'>
              {
                "stevenson".split("").map((char, i) => (
                  <motion.span  
                    custom={i*0.03} 
                    variants={textVariant} 
                    initial="exit" 
                    animate="enter" 
                    key={i}>{char}</motion.span>
                ))
              }
            </span>
        </h1>
        <motion.div
          style={{
            height,
            // opacity,
            y
          }}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ delay: .5, duration: .8}}
          className="relative mt-10 w-full">
            <Image
                src="/portfolio/sandra.jpg"
                alt="Photo of Sandra"
                fill
                className='object-cover'
            />
        </motion.div>
    </div>
  )
}

export default Hero