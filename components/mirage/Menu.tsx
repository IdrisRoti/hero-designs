"use client"

import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react";
import { navlinks } from "./Header";

const transition = {duration: 1, ease: [0.75, 0, 0.24, 1]}

const height = {
    initial: {
        height: 0,
    },
    animate: {
        height: "auto",
        transition
    },
    exit: {
        height: 0,
        transition
    },
}

const background = {
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

const Menu = ({showMenu, setShowMenu}: TMenu) => {
  return (
    <>
            <motion.div
                variants={height}
                initial="initial"
                animate="animate"
                exit="exit" 
                className="absolute w-screen text-[#1e1e1e] top-0 left-0 bg-[#F1CEA8] overflow-hidden px-10 h-screen flex flex-col z-50"
            >
                {
                    navlinks.map((link) => (
                        <button key={link} className="[font-family:Quintessential] first-of-type:mt-10 text-4xl md:text-7xl leading-[1.5] md:leading-[1.2] uppercase flex overflow-hidden opacity-80 hover:opacity-100 transition">
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
                <button onClick={() => setShowMenu(false)} className="[font-family:Quintessential] overflow-hidden md:text-2xl mb-6 mt-10 md:mt-0 uppercase flex justify-center">
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
            <motion.div
                variants={background}
                animate={showMenu ? "animate" : "initial"}
                exit="exit" 
                className="absolute w-screen top-0 left-0 bg-[#4A2A14] z-40"
            ></motion.div>
    </>
  )
}

export default Menu