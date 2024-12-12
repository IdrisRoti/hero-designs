"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BiMenu } from "react-icons/bi"

const Header = () => {
  return (
    <motion.header
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: .5, ease: "easeInOut", delay: 1}}   
      className="h-20 w-full absolute z-[99]">
        <nav className="max-w-[90rem] mx-auto px-4 h-full flex items-center justify-between">
            <Image
                src="/sprint/sprint.png"
                alt="A runner"
                width={80}
                height={20}
                className="hidden md:block object-cover"
            />
            <Image
                src="/sprint/sprint_white.png"
                alt="A runner"
                width={80}
                height={20}
                className="md:hidden object-cover"
            />
            <span className="size-10 grid place-items-center bg-[#49FF6D] rounded-md"><BiMenu className="size-6" /></span>
        </nav>
    </motion.header>
  )
}

export default Header