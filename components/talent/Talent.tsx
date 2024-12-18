"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import LogoTicker from './LogoTicker'
import HeroImage from '../finance/HeroImage'

const Talent = () => {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="w-screen max-w-[90rem] mx-auto lg:h-screen lg:max-h-[60rem]">
        <section className='w-full h-full grid grid-cols-11'>
            <div className="lg:col-span-6 col-span-full h-full text-white py-6 px-10">
                <Image
                    src="/finance/Logo.png"
                    alt="Blurforce Logo"
                    width={100}
                    height={25}
                    className="object-cover"
                />      
                <div className="h-full flex flex-col justify-between py-16">
                    <div className="">
                        <motion.h1 
                            initial={{opacity:0}} 
                            animate={{opacity:1}} 
                            transition={{duration: .5}}
                            className="text-3xl md:text-6xl md:text-center lg:text-left font-light">Top design <br />talent on demand</motion.h1>
                        <motion.p
                            initial={{opacity:0}} 
                            animate={{opacity:1}} 
                            transition={{duration: .5, delay: .5}}
                            className='my-5 text-white/60 md:w-2/3 md:mx-auto lg:mx-0 md:text-center lg:text-left'>Whether you&apos;re a casual jogger or a dedicated marathon runner, the act of lacing up your shoes and hitting the pavement or trail can have more transformative effects.</motion.p>
                        <motion.div
                            initial={{opacity:0}} 
                            animate={{opacity:1}} 
                            transition={{duration: .5, delay: 1}} 
                            id="button" 
                            className="flex md:justify-center lg:justify-start gap-4">
                            <button className="text-white tracking-widest font-semibold bg-blue-700 rounded-2xl py-3 md:py-4 px-4 md:px-8 hover:opacity-70 transition capitalize">Join the team</button>
                            <motion.button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                <span className='tracking-widest font-semibold'>Learn more</span>
                                <motion.div initial={{width: "0%"}} animate={isHovered ? {width: "100%"} : {width: "0%"}} transition={{duration: .5}} className="h-[1px] bg-white" />
                            </motion.button>  
                        </motion.div>
                    </div>
                    <div className="">
                        <LogoTicker />                       
                    </div>
                </div>          
            </div>
            <HeroImage />
        </section>
    </div>
  )
}

export default Talent