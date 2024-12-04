"use client"

import Image from "next/image";

import { motion } from "framer-motion";
import { TfiLayoutColumn2Alt } from "react-icons/tfi";
import { BsTelephoneFill } from "react-icons/bs";

import Ticker from "./Ticker";

const navlinks = ["About", "works", "services", "team", "contact"]

const Studios = () => {
  return (
    <div className="relative h-screen overflow-hidden">
        <motion.h1 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{ duration: 1 }} 
            className=" text-white text-[13.4vw] tracking-tight font-bold leading-[.8] w-full text-justify after:inline-block after:w-full absolute z-10">ADVANCED STUDIOS</motion.h1>
        <div className="mt-[6vh] md:mt-[10vh] lg:mt-[25vh] w-screen">
            <Ticker />
            <div className="flex flex-col md:flex-row gap-3 items-center justify-between mt-6 max-w-[90rem] px-4 mx-auto">
                <motion.p 
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}} 
                    transition={{ duration: 1, delay: 1.8 }}
                    className="text-white/70 md:w-[20%]">Dive deep into interactive environments, unravel the science behind Mars&apos; exploration, and feel the thrill of discovery as you navigate this extraordinary extraterrestrial world.</motion.p>
                <ul className="flex flex-col items-end self-end">
                    {
                        ["london", "lagos", "new york", "milan"].map((place) => (
                            <li className="uppercase text-white/70 flex overflow-hidden" key={place}>
                                {
                                    place.split("").map((letter, i) => <motion.span initial={{y: 20}} animate={{y: 0}} transition={{ duration: i*0.2, delay:1.8}} key={i}>{letter}</motion.span>)
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <motion.nav 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{ duration: 1, delay: 2.3 }}
            className="absolute bottom-10 left-0 w-full flex justify-center z-[999]">
            <div className="flex items-center justify-between gap-6 px-4 md:px-6 py-3 md:py-4 rounded-full bg-white/60 backdrop-blur-lg max-md:w-[90vw]">
                <span className="bg-[#1e1e1e] w-6 aspect-square rounded-full grid place-items-center">
                    <TfiLayoutColumn2Alt className="text-white size-3" />
                </span>
                <div className="hidden md:flex items-center gap-8">
                    {
                        navlinks.map((link) => (
                            <button key={link} className="font-semibold text-[#1e1e1e] uppercase">{link}</button>
                        ))
                    }
                </div>
                <button className="flex items-center bg-[#36F85C] gap-2 p-3 rounded-full group">
                    <span className="uppercase font-semibold">request demo</span>
                    <span className="bg-white rounded-full grid place-items-center w-5 aspect-square group-hover:rotate-180 transition duration-500">
                        <BsTelephoneFill className="text-[#1e1e1e] size-3" />
                    </span>
                </button>
            </div>
        </motion.nav>
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute w-full bottom-0 flex justify-center">
            <Image
                src="/studios/robot.png"
                alt="dark armoured robot"
                width={1024}
                height={1024}
                className="object-cover lg:w-[50%] h-[80vh] md:h-[90vh]"
            />
        </motion.div>
    </div>
  )
}

export default Studios;