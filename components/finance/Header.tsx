"use client"

import { motion } from "framer-motion";
import Image from "next/image";

import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { PiBehanceLogoLight } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";

const socials = [FaXTwitter, IoLogoInstagram, PiBehanceLogoLight, VscGithubAlt]

export const transition = {duration: 1, ease: [0.75, 0, 0.24, 1]}

const Header = () => {
  return (
    <header className="h-20 relative z-50">
        <nav className="px-4 h-full flex items-center justify-between gap-3">
            <Image
                src="/finance/Logo.png"
                alt="Blurforce Logo"
                width={100}
                height={25}
                className="object-cover"
            />
            <div className="flex items-center gap-3 overflow-hidden">
                        {
                            socials.map((icon, i) => {
                                const Icon = icon;

                            return  (
                                    <motion.button
                                        initial={{opacity: 0}} 
                                        animate={{opacity: 1}} 
                                        transition={{...transition, delay: i*.08}}                                    
                                        className='w-10 aspect-square border border-white/80 hover:bg-white/90 hover:text-[#1e1e1e] transition rounded-full grid place-items-center'
                                        key={i}>
                                        <Icon />
                                    </motion.button>
                            )
                                })
                        }
            </div>        
        </nav>
    </header>
  )
}

export default Header