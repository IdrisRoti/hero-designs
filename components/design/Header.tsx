"use client"

import Image from "next/image"

import { motion } from "framer-motion"
import MobileNav from "./MobileNav"

export const navLinks = ["About", "Product", "Works", "People", "Contact"]

const Header = () => (
    <header className="h-20">
        <div className="h-full flex justify-between items-center">
            <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, ease: "easeInOut"}} >
                <Image
                    src="/blueforce.png"
                    alt="blueforce"
                    width={126}
                    height={29}
                    className="w-[126px] h-[25px] object-cover"
                />
            </motion.span>
            <nav className="hidden md:flex items-center gap-5 md:gap-8">
                {
                    navLinks.map((link, i) => (
                        <motion.button key={link} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, ease: "easeInOut", delay: i*.2}} className="outline-none text-[#626262] hover:text-[#1e1e1e] transition uppercase tracking-widest text-sm">{link}</motion.button>
                    ))
                }
            </nav>
            <MobileNav />
        </div>
    </header>
)

export default Header