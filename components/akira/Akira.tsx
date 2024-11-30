"use client"

import { NextFont } from "next/dist/compiled/@next/font"
import Navbar from "./Navbar"
import Image from "next/image"
import { motion } from "framer-motion"

const images = [
    {
        id: 1,
        label: "skin products",
        image: "/akira/face1.png"
    }, 
    {
        id: 2,
        label: "hair products",
        image: "/akira/face2.png"
    }, 
    {
        id: 3,
        label: "Lipsticks and gloss",
        image: "/akira/face3.png"
    }
]

const text = "Refined Natural Beauty"
const letters = text.split("");

const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delay: .8
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

const Akira = ({dmserif}:{dmserif: NextFont}) => {
  return (
    <div className="bg-[#F5F5EC]">
        <Navbar />
        <section className="text-center mt-12 md:mt-16 flex flex-col items-center justify-center px-4">
            <motion.h3 initial={{opacity: 0}} animate={{opacity: [0, 1], y: [-20, 0]}} transition={{duration: 1}} className="uppercase tracking-[0.3rem] text-[#6D6F65] font-medium">Introducing</motion.h3>
            <motion.h1 variants={textContainer} initial="hidden" animate="show" className={`text-[#37392E] text-5xl md:text-7xl py-4 ${dmserif.className}`}>{letters.map((letter, i) => <motion.span variants={item} key={i}>{letter}</motion.span>)}</motion.h1>
            <motion.p initial={{opacity: 0}} animate={{opacity: [0, 1]}} transition={{duration: .8, delay: 3}} className="md:w-[75%] lg:w-[50%] text-[#6D6F65] md:text-xl lg:text-2xl">Discover the power of clean beauty, where purity meets performance. Feel good about what you put on your skin—because you deserve products that are as kind to you as they are to the planet.</motion.p>
            <motion.div initial={{opacity: 0}} animate={{opacity: [0, 1]}} transition={{duration: .8, delay: 3}} className="flex items-center justify-center gap-4 mt-6">
                <button className="px-5 md:px-8 py-3 lg:py-5 text-sm md:text-base text-[#37392E] border-[1.5px] border-[#37392E] rounded-full uppercase font-medium hover:opacity-65 transition">get samples</button>
                <button className="px-5 md:px-8 py-3 lg:py-5 text-sm md:text-base text-white bg-[#37392E] border-[1.5px] border-[#37392E] rounded-full uppercase font-medium hover:opacity-65 transition">Shop now</button>
            </motion.div>
        </section>
        <motion.section initial={{opacity: 0}} animate={{opacity: [0, 1], y: [20, 0]}} transition={{delay: 3.5, duration: .8}} className="w-screen md:w-full max-w-[100rem] mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 items-center overflow-hidden">
            {
                images.map(({id, label, image}) => (
                    <div key={id} className="relative w-full h-[15rem] lg:h-[20rem] row-span-1 overflow-hidden group">
                        <Image
                            src={image}
                            alt="Beauty Face"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-500"
                        />
                        <p className="absolute left-4 bottom-4 uppercase tracking-widest text-lg opacity-75 text-white">{label}</p>
                    </div>
                ))
            }
        </motion.section>
    </div>
  )
}

export default Akira