"use client"

import { useEffect, useState } from "react";

import { BiX } from "react-icons/bi"
import { RiMenu3Fill } from "react-icons/ri";

import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "./Navbar";

const MobileNav = () => {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        if(showNav){
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [showNav])

  return (
    <div className="md:hidden">
        <button onClick={() =>setShowNav(true)} className="md:hidden">
                <span className="sr-only">Open Navigation menu</span>
                <RiMenu3Fill className="text-[#1e1e1e] size-6" />
        </button>
            {showNav && <AnimatePresence>
                            <motion.ul 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: .5, ease: "easeInOut"}}
                            className="z-[100] md:hidden flex flex-col items-start gap-8 absolute top-0 inset-0 h-screen px-10 py-20 bg-white">
                            {
                                navLinks.map((link, i) => {
                                return (
                                    <motion.li
                                        key={link}
                                        initial={{y: 20, opacity: 0}}
                                        animate={{y: 0, opacity: 1}}
                                        transition={{duration: .5, ease: "easeInOut", delay: i * 0.2}}
                                    >
                                        <button 
                                            className={`font-medium text-4xl hover:text-[#1e1e1e] transition text-[#626262] uppercase tracking-widest`} 
                                        >
                                            {link}
                                        </button>
                                    </motion.li>
                                )
                                })
                            }
                            <button 
                                onClick={() => setShowNav(false)}
                                className="absolute right-3 top-10">
                                    <BiX className="size-10 text-black/70 hover:text-[#1e1e1e] transition"/>
                            </button>
                        </motion.ul>
                </AnimatePresence>}
    </div>
  )
}

export default MobileNav