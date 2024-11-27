"use client"

import { motion } from "framer-motion";
import Link from "next/link";

import { HiMoon } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";

const navLinks = ["About", "Products", "Works", "Contacts"];

const Navbar = () => {
  return (
    <motion.nav
        initial={{y: -30, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{ duration: .5, ease: "easeIn"}}
        className="">
        <div className='flex items-center justify-between'>
            <div className="flex items-center gap-1">
                <HiMoon className="size-5" />
                <span className="nd:text-lg tracking-widest font-thin">USPACE</span>
            </div>
            <ul className="hidden md:flex items-center gap-6">
                {
                    navLinks.map((link) => (
                        <li key={link} className="text-white/70 text-sm font-medium hover:text-white">
                            <Link className="text-inherit" href="/">{link}</Link>
                        </li>
                    ))
                }
            </ul>
            <div className="flex items-center">
                <button className="px-3 py-1.5 rounded-full font-semibold text-black bg-white text-sm">Get Started</button>
                <RiMenu3Fill className="ml-3 size-6 md:hidden" />
            </div>
        </div>
    </motion.nav>
  )
}

export default Navbar