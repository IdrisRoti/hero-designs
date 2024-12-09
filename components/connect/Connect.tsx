"use client"

import Image from "next/image"
import Button from "./Button"
import Header from "./Header"
import { motion } from "framer-motion"

const TickerLogos = ["/connect/flavour.svg", "/connect/blurforce.svg", "/connect/unitect.png"]

const Connect = () => {
  return (
    <div className="bg-black h-screen relative overflow-hidden">
        <Header />
        {/* CONTENT */}
        <section className="relative z-30 h-[calc(100vh-80px)] flex flex-col items-center justify-center">
            <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="bg-gradient-to-r from-white/60 via-white to-white/60 text-3xl md:text-4xl font-semibold bg-clip-text text-transparent text-center">Connect with People around you</motion.h1>
            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: .5}} className="text-white/60 md:w-[60%] lg:w-[40%] text-center mt-4 mb-6 text-sm">Dive deep into interactive environments, unravel the science behind Mars' exploration, and feel the thrill of discovery as you navigate.</motion.p>
            <motion.div initial={{opacity: 0, y: "100%"}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 1}} className="flex items-center justify-center gap-4">
                <Button variant="outline">Learn More</Button>
                <Button>Sign Up</Button>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1.5}} className="relative w-[20rem] md:w-[40rem] lg:w-[50rem] h-[10rem] my-8">
                <Image
                    src="/connect/case.png"
                    alt="case"
                    fill
                    className="object-cover"
                />
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 2}} className="flex items-center gap-5 md:gap-10">
                {
                    TickerLogos.map((logo) => (
                        <Image
                            key={logo}
                            src={logo}
                            alt="Logo"
                            width={60}
                            height={17}
                            className="object-cover"
                        />
                    ))
                }
            </motion.div>
        </section>
        {/* CIRCULAR BG */}
        <div className="absolute -top-[5rem] left-1/2 -translate-x-1/2  w-[80rem] aspect-square bg-transparent rounded-full border border-white/20" />
        <div className="absolute top-[5rem] left-1/2 -translate-x-1/2  w-[60rem] aspect-square bg-transparent rounded-full border border-white/20" />
        <div className="absolute top-[15rem] left-1/2 -translate-x-1/2  w-[40rem] aspect-square bg-transparent rounded-full border border-white/20" />
    </div>
  )
}

export default Connect