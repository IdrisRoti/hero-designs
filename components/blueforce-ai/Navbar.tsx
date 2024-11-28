"use client"

import Image from "next/image"

import { motion } from "framer-motion"
import MobileNav from "./MobileNav"

export const navLinks = ["About", "Product", "Works", "People", "Contact"]

const Navbar = () => (
    <nav className="max-w-[75rem] px-4">
        <div className="flex justify-between items-center">
            <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, ease: "easeInOut"}} >
                <Image
                    src="/blueforce.png"
                    alt="blueforce"
                    width={126}
                    height={29}
                    className="w-[126px] h-[29px] object-cover"
                />
            </motion.span>
            <div className="hidden md:flex items-center gap-5 md:gap-8">
                {
                    navLinks.map((link, i) => (
                        <motion.button key={link} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, ease: "easeInOut", delay: i*.2}} className="outline-none text-[#626262] hover:text-[#1e1e1e] transition uppercase tracking-widest">{link}</motion.button>
                    ))
                }
            </div>
            <MobileNav />
        </div>
    </nav>
)

export default Navbar