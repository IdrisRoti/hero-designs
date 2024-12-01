"use client"

import Image from "next/image"
import ImageCarousels from "./ImageCarousels"
import { motion } from "framer-motion"

const text = "OUR PHOTOGRAPHY MASTER CLASS GETS YOU INSPIRED & PREPARED FOR THE INDUSTRY"
const letters = text.split("");

const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }
  
  const item = {
    hidden: { opacity: .5 },
    show: { opacity: 1 }
  }

const Photography = () => {
  return (
    <>
        <div className="max-w-[75rem] mx-auto p-4">
            <motion.nav 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5}}
                className="flex items-center justify-between py-4">
                <div className="h-6 aspect-square bg-white rounded-full" />
                <Image
                    src="/photography/menu.png"
                    width={100}
                    height={20}alt="Menu Icon"
                    className="w-14"
                />
            </motion.nav>
            <motion.h2
                variants={textContainer} 
                initial="hidden" 
                animate="show"
                className="mt-10 md:mt-16 text-4xl md:text-5xl w-full md:w-3/4 lg:w-2/3">
                    {letters.map((letter, i) => <motion.span variants={item} key={i}>{letter}</motion.span>)}
                </motion.h2>
            <motion.p 
                initial={{ opacity: 0,  }}
                animate={{ opacity: 1,  }}
                transition={{ duration: .5, delay: 1}}
                className="mt-8 opacity-70 tracking-widest font-extralight">WORKS BY STUDENT</motion.p>
        </div>
        <ImageCarousels />
    </>
  )
}

export default Photography