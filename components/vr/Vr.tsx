"use client"

import Image from 'next/image'
import { useState } from 'react';

import { motion } from 'framer-motion';
import Header from './Header'

const navlinks = ["Home", "About", "Products", "works", "People", "contacts"] as const;

const Vr = () => {
    const [hoverLink, setHoveredLink] = useState<string | null>(null)

  return (
    <div className='relative h-screen lg:max-h-[60rem] overflow-hidden'>
        <Header />
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: .5}}
            className="">
            <Image
                src="/vr/heroImage.png"
                alt="Woman putting on a VR glass"
                width={651}
                height={651}
                className='absolute h-full top-0 -right-[30%] md:right-0 object-cover'
            />
        </motion.div>
        <div className="flex flex-col justify-between z-10 absolute top-[60px] py-5 h-[calc(100%-60px)] w-full max-w-[90rem] mx-auto p-4">
            <nav className="flex flex-col items-start gap-2">
                {
                    navlinks.map((link, i) => (
                        <motion.button
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: i * .2}}
                            onMouseEnter={() => setHoveredLink(link)} 
                            onMouseLeave={() => setHoveredLink(null)}
                            className='text-sm uppercase font-medium' 
                            key={i}
                        >
                            <span>{link}</span>
                            <motion.div
                                initial={{width: "0%"}}
                                animate={hoverLink === link ? {width: "100%"} : {width: "0%"}} 
                                className='h-[1px] bg-[#1e1e1e]' />
                        </motion.button>
                    ))
                }
            </nav>
            <motion.h1
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className='text-6xl md:text-8xl lg:text-9xl font-light'>
                Product Leaders<br />and brand builder
            </motion.h1>
        </div>
    </div>
  )
}

export default Vr