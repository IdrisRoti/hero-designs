"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaBehance } from "react-icons/fa6";

const navbarSocials = [FaInstagram, FaBehance, FaTwitter]

const Header = () => {
  return (
    <motion.header
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: .5}}
        className="w-full max-w-[90rem] mx-auto h-10 px-4 fixed left-0 right-0 top-5 z-50">
        <div className="flex items-center justify-between w-full h-full">
            <Image
                src="/vr/USPACE.png"
                alt="VR logo"
                width={100}
                height={40}
                className="object-cover"
            />
            <ul className="flex items-center gap-3">
                {
                    navbarSocials.map((SocialIcon, i) => (
                        <li className="size-8 border-[#1e1e1e] border-[1.5px] rounded-full grid place-items-center cursor-pointer hover:bg-[#1e1e1e] hover:text-white transition" key={i}>
                            <SocialIcon className="size-3" />
                        </li>
                    ))
                }
            </ul>
        </div>
    </motion.header>
  )
}

export default Header