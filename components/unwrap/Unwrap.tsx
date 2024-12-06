"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import UserPhotos from "./UserPhotos"

const Unwrap = () => {
  return (
    <div className="relative h-screen">
        <motion.nav
            initial={{ y: "-100%"}} 
            animate={{y: "0%"}}
            transition={{ duration: .5, delay: 4 }}
            className="h-16 flex items-center">
            <div className="flex items-center justify-between h-full w-full max-w-[90rem] mx-auto px-4">
                <Image
                    src="/unwrap/logo.svg"
                    alt="unwrap logo"
                    width={44}
                    height={40}
                />
                <Image
                    src="/photography/menu.png"
                    alt="unwrap logo"
                    width={60}
                    height={22}
                />
                 
            </div>
        </motion.nav>
        <section className="flex flex-col gap-4 h-[calc(100vh-64px)]">
            <div className="text-center">
                <motion.h2
                    initial={{ y: "100%", opacity: 0}} 
                    animate={{y: "0%", opacity: 1}}
                    transition={{ delay: .8, duration: .5 }}
                    className="text-[#00A000] uppercase font-semibold tracking-widest"
                >
                    {"Your Wrap for 2024 is here!!".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0}} 
                            animate={{ opacity: 1}}
                            transition={{ duration: .5, delay: .1*i }}                        
                        >{char}</motion.span>
                    ))}
                </motion.h2>
                <motion.h1
                    initial={{ scale: "70%", opacity: 0}} 
                    animate={{scale: "100%", opacity: 1}}
                    transition={{ delay: 3, duration: .6, ease: "easeInOut" }}
                    className="text-[#020101] font-bold text-4xl md:text-6xl lg:text-7xl w-full md:w-[80%] lg:w-[60%] mx-auto">Unwrap your year with your top artists and hits</motion.h1>
            </div>
            <motion.div
                initial={{ y: "30%", opacity: 0}} 
                animate={{y: "0%", opacity: 1}}
                transition={{ delay: 3.4, duration: 1 }} 
                className="relative flex items-end justify-center lg:justify-between md:w-full mx-auto h-full">
                <UserPhotos position="left" />
                <Image
                    src="/unwrap/iphone.png"
                    alt="iphone"
                    width={300}
                    height={900}
                    className="object-cover h-full w-auto"
                />
                <UserPhotos position="right" />
            </motion.div>
        </section>
    </div>
  )
}

export default Unwrap