"use client"

import { motion } from "framer-motion";
import { GoArrowDown } from "react-icons/go";
import { textVariant } from "./animationVariants";

const About = () => {
  return (
    <div className="flex items-center h-screen bg-stone-100 mt-20 sticky top-0">
        <div className="w-full bottom-10 mt-10 font-extrabold">
            <h2 className="uppercase text-gray-500 text-5xl md:text-7xl text-center w-full flex justify-center overflow-hidden">
                {
                    "creative".split("").map((char, i) => (
                    <motion.span
                        custom={i*0.03} 
                        variants={textVariant} 
                        initial="exit" 
                        whileInView="enter"
                        viewport={{
                            margin: "-100px"
                        }}
                        key={i}
                    >
                        {char}
                    </motion.span>
                    ))
                }
            </h2>
            <div className="h-[1px] my-5 bg-black/10"/>
            <div className="flex flex-col md:flex-row items-center gap-6 max-md:text-center">
                <span className="uppercase text-5xl md:text-7xl md:text-right w-full flex justify-center md:justify-end overflow-hidden">
                    {
                        "product".split("").map((char, i) => (
                        <motion.span
                            custom={i*0.03} 
                            variants={textVariant} 
                            initial="exit" 
                            whileInView="enter"
                            viewport={{
                                margin: "-100px"
                            }}
                            key={i}
                        >
                            {char}
                        </motion.span>
                        ))
                    }
                </span>
                <div className="w-full">
                    <h3 className="text-xl">Hello! I&apos;m Stevenson</h3>
                    <p className="opacity-50 w-[90%] max-md:mx-auto md:w-full lg:w-2/3">Product designer harnessing the power of design to acheive online goals.</p>
                </div>
            </div>
            <div className="h-[1px] my-5 bg-black/10"/>
            <h2 className="uppercase text-rose-600 text-5xl md:text-7xl text-center flex justify-center overflow-hidden">
                    {
                                "designer".split("").map((char, i) => (
                                    <motion.span
                                        custom={i*0.03} 
                                        variants={textVariant} 
                                        initial="exit" 
                                        whileInView="enter"
                                        viewport={{
                                            margin: "-100px"
                                        }}
                                        key={i}
                                    >
                                        {char}
                                    </motion.span>
                                ))
                    }
            </h2>
            <button className="mt-10 flex items-center gap-2 font-semibold mx-auto">
                <span>Find out More</span>
                <GoArrowDown />
            </button>
        </div>
    </div>
  )
}

export default About