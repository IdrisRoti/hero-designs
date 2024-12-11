"use client"

import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react";
import { navlinks } from "./Header";

export const transition = {duration: 1, ease: [0.75, 0, 0.24, 1]}

const height = {
    initial: {
        height: 0,
    },
    animate: {
        height: "100vh",
        transition
    },
    exit: {
        height: 0,
        transition
    },
}

const text = {
    hide: {
        y: "100%"
    },
    show: (delay: number) => ({
        y: "0%",        
        transition: {...transition, delay}
    }),
    exit: (delay: number) => ({
        y: "100%",        
        transition: {...transition, delay}
    }),
}

type TMenu = {
    showMenu: boolean; 
    setShowMenu: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({setShowMenu}: TMenu) => {
  return (
    <>
            <motion.div
                variants={height}
                initial="initial"
                animate="animate"
                exit="exit" 
                className="absolute w-screen text-white top-0 left-0 bg-[#1e1e1e] overflow-hidden px-10 h-screen flex flex-col z-[999]"
            >
                {
                    navlinks.map((link) => (
                        <button key={link} className=" first-of-type:mt-10 text-4xl md:text-7xl leading-[1.5] md:leading-[1.2] uppercase flex overflow-hidden opacity-80 hover:opacity-100 transition">
                            {
                                link.split("").map((char,i) => 
                                <motion.span
                                    variants={text}
                                    custom={i*0.03}
                                    initial="hide"
                                    animate="show"
                                    exit="exit"
                                    key={i}
                                >
                                    {char}
                                </motion.span>)
                            }
                        </button>
                    ))
                }
                <button onClick={() => setShowMenu(false)} className="overflow-hidden absolute bottom-6 md:text-2xl left-1/2 -translate-x-1/2 uppercase flex justify-center">
                            {
                                "close".split("").map((char,i) => 
                                <motion.span
                                    variants={text}
                                    custom={i*0.03}
                                    initial="hide"
                                    animate="show"
                                    exit="exit"
                                    key={i}
                                >
                                    {char}
                                </motion.span>)
                            }
                </button>
            </motion.div>
    </>
  )
}

export default Menu