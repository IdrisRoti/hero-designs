"use client"

import { motion } from "framer-motion"
import { transition } from "./Helen"

const navlinks = ["About", "past projects", "services", "people", "get in touch"]

const Header = () => {
  return (
    <header className="w-full py-4">
        <div className="w-full flex items-start justify-between">
            <span className="bg-white w-7 aspect-square rounded-full"></span>
            <nav className="flex flex-col items-end gap-2">
                {
                    navlinks.map((link, i) => (
                        <button   
                            className="text-sm tracking-widest uppercase opacity-80 hover:opacity-100 transition overflow-hidden inline-block"
                            key={link}
                        >
                            <motion.span
                                initial={{y: "-100%", opacity: 0}}
                                animate={{y: 0, opacity: 1}} 
                                transition={{...transition, delay: .1*i}}
                                className="h-full">
                                {link}
                            </motion.span>
                        </button>
                    ))
                }
            </nav>
        </div>
    </header>
  )
}

export default Header;