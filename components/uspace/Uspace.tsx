"use client"

import { SiSamsung, SiLogitech, SiAmazongames } from "react-icons/si";

import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Uspace = () => {
    const backgroundImage = "url('/astronaut2.jpg')"
  return (
    <div 
        style={{                 
            background: backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
         }}
        className="relative w-screen h-screen text-white after:absolute after:inset-0 after:w-full after:h-full after:bg-black/30">
            <div className="absolute left-0 right-0 h-full max-w-[75rem] mx-auto px-4 pt-4 pb-6 z-50 flex flex-col justify-between">
                <Navbar />
                <div>
                    <motion.h1 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: .5, ease: "easeIn"}} className="text-4xl md:text-6xl">Exploring Mars, <br />Digital experience.</motion.h1>
                    <motion.hr
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: .5, ease: "easeIn", delay: .8}} className="bg-white w-[60%] lg:w-[40%] mt-6 mb-8" />
                    <motion.p 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: .5, ease: "easeIn", delay: .3}} className="text-white/70 md:w-[60%] lg:w-[40%] text-sm">Dive deep into interactive environments, unravel the science behind Mars&apos; exploration, and feel the thrill of discovery as you navigate this extraordinary extraterrestrial world. The future of space exploration is at your fingertips.</motion.p>
                    <motion.button 
                        initial={{opacity: 0, scale: .8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{ duration: .3, ease: "easeIn", delay: .5}} className="mt-10 px-3 py-1.5 rounded-full font-semibold text-black bg-white text-sm">Get Started</motion.button>
                </div>
                <motion.div 
                    initial={{y: 30, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{ duration: .5, ease: "easeIn"}} className="flex items-center gap-6">
                    <SiSamsung className="size-20 text-white" />
                    <SiLogitech className="size-6 text-white" />
                    <SiAmazongames className="size-8 text-white" />
                </motion.div>
            </div>
    </div>
  )
}

export default Uspace