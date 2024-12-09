"use client"

import Image from "next/image"
import Link from "next/link"
import { BiMenu } from "react-icons/bi"
import { motion } from "framer-motion"

const navlinks = ["About", "Products", "Works", "People", "Contacts"]

const Header = () => {
  return (
    <motion.nav initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 2}} className="h-20 relative z-40">
        <div className="max-w-[90rem] h-full mx-auto px-4 flex items-center justify-between gap-2">
            <Image
                src="/connect/logo.png"
                alt="Logo"
                width={204}
                height={47}
                className="w-24 h-4 object-cover"
            />
            <div className="hidden md:flex items-center gap-10">
                {
                    navlinks.map((link) => (
                        <Link key={link} className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition" href="#">
                            {link}
                        </Link>
                    ))
                }
            </div>
            <span className="block md:hidden"><BiMenu className="text-white size-7" /></span>
        </div>
    </motion.nav>
  )
}

export default Header