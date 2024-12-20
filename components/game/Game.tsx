"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const navlinks = ["about", "products", "works", "people", "contact"];
const authLinks = ["my account", "favourite", "sign up"];

const Game = () => {
  return (
    <div className='bg-amber-500 h-screen max-h-[60rem] overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-tl after:from-black/30 after:from-20%'>
        <main className='relative z-10 flex flex-col lg:flex-row lg:justify-between gap-10 md:gap-2 h-full max-w-[75rem] mx-auto px-4 mt-6 md:pt-8'>
            <div className="lg:w-[60%]">
                <h1
                    className='text-6xl md:text-[7rem] overflow-hidden leading-[.9] font-bold uppercase flex flex-col'>
                        {
                            ["play", "word", "connect"].map((word, i) => (
                                <motion.span
                                    initial={{y: "100%", opacity: 0}} 
                                    animate={{y: "0%", opacity: 1}}  
                                    transition={{delay: i*.05, duration: .6, ease: [0.3, 0, 0.5, 1]}}
                                    className="overflow-y-hidden"
                                    key={word}
                                >
                                    {word}
                                </motion.span>
                            ))
                        }
                </h1>
                <motion.button initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1, ease: "easeInOut"}} className='uppercase tracking-widest border-2 border-black bg-black hover:bg-transparent hover:text-black transition px-10 py-3 rounded-full text-white font-semibold mt-6'>sign up</motion.button>
            </div>
            <nav className="flex max-lg:justify-end gap-10 md:gap-20 max-lg:-order-1">
                <ul className="flex flex-col">
                    {
                        navlinks.map((link, i) => (
                        <motion.li initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: i*.05}} key={link}><button className="text-xs tracking-widest font-medium uppercase">{link}</button></motion.li>
                        ))
                    }
                </ul>
                <ul className="flex flex-col">
                        {
                            authLinks.map((link, i) => (
                                <motion.li initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: i*.05}} key={link}><button className="text-xs tracking-widest font-medium uppercase">{link}</button></motion.li>
                            ))
                        }
                </ul>
            </nav>
            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1, ease: "easeInOut"}}
                className="absolute right-0 -bottom-10">
                <Image
                    src="/game/xbox.png"
                    alt="An Xbox gamepad"
                    width={500}
                    height={500}
                    className="object-cover"
                />
            </motion.div>
        </main>
    </div>
  )
}

export default Game