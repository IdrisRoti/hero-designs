"use client"

import { motion } from 'framer-motion';
import Header from './Header';
import { useState } from 'react';
import Image from 'next/image';

const Finance = () => {
    const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative w-screen h-screen text-white after:absolute after:inset-0 after:w-full after:h-full after:bg-[#2E2A33]"
    >
        <Image
            src="/finance/wave.png"
            alt='wave background'
            width={1500}
            height={600}
            className='w-screen min-h-[50vh] absolute bottom-0 z-[40] object-cover'
        />
        <Header />
        <section className='absolute left-1/2 -translate-x-1/2 z-50 w-full max-w-[50rem] px-4 h-[calc(100vh-80px)] pt-10'>
            <motion.h1 
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                transition={{duration: .5}}
                className="text-5xl md:text-7xl text-transparent font-bold bg-gradient-to-b from-white to-white/40 bg-clip-text md:text-center lg:text-left">The financial economy on chain.</motion.h1>
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
                <button className="text-white tracking-widest font-semibold bg-[#2B819E] rounded-2xl py-3 md:py-4 px-6 md:px-8 hover:opacity-70 transition capitalize">Join the team</button>
                <motion.button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <span className='tracking-widest font-semibold'>Learn more</span>
                    <motion.div initial={{width: "0%"}} animate={isHovered ? {width: "100%"} : {width: "0%"}} transition={{duration: .5}} className="h-[1px] bg-white" />
                </motion.button>   
            </motion.div>
        </section>
    </div>
  )
}

export default Finance