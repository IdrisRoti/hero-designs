"use client"

import { motion } from 'framer-motion';
import Header from './Header'

import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { PiBehanceLogoLight } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";

const socials = [FaXTwitter, IoLogoInstagram, PiBehanceLogoLight, VscGithubAlt]

export const transition = {duration: 1, ease: [0.75, 0, 0.24, 1]}

const Helen = () => {
  return (
    <div className='relative bg-[#1e1e1e] text-white h-screen overflow-hidden'>
        <section className="max-w-[75rem] mx-auto px-4 h-full">
            <Header />
            <div className="absolute bottom-10">
                <div className="flex flex-col mt-10">
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
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-10">
                    <div className="overflow-hidden w-full ">
                        <motion.h1
                            initial={{y: "100%", opacity: 0}} 
                            animate={{y: 0, opacity: 1}} 
                            transition={transition}
                            className=' w-full text-[13vw] leading-[4rem] md:leading-[6rem] lg:leading-[8rem] uppercase opacity-90'>Helen</motion.h1>
                    </div>
                    <div className="max-md:-order-1">
                        <motion.p
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            transition={{duration: .6, delay: 1}} 
                            className='w-[90%] lg:w-[60%] opacity-80 font-light'>Hey there, welcome to my world. I&apos;m a passionate software developer with 8 years of experience turning ideas into reality through innovative, high-quality products.</motion.p>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{y: "100%", opacity: 0}} 
                        animate={{y: 0, opacity: 1}} 
                        transition={{...transition, delay: .02}}                    
                        className='w-full text-[13vw] leading-[4rem] md:leading-[6rem] lg:leading-[8rem] uppercase md:mt-6 opacity-90'>bellingham</motion.h1>
                </div>
            </div>
        </section>      
    </div>
  )
}

export default Helen