"use client"

import Image from "next/image"
import Header from "./Header"
import { motion } from "framer-motion"
import { transition } from "./Menu"

const Treats = () => {
  return (
    <div className="relative w-screen h-screen  bg-[#FFA3FA] text-[#1e1e1e] overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-4">
            <Header />
            <motion.h1 
                initial={{scale: .7, y: 20, opacity: 0}}
                animate={{scale: 1, y: 0, opacity: 1}}
                transition={{...transition, duration: .1, type: "spring", mass: 2}}
                className="uppercase absolute top-[5rem] lg:-top-6 text-[20vw] lg:text-[23vw] 2xl:text-[21vw] tracking-[1rem] md:tracking-[2rem] text-white font-[modak] [text-shadow:0px_5px_20px_rgba(0,0,0,.3)] z-10 bg-transparent"
            >
                Treats
            </motion.h1>
            {/* IMAGES */}
            <div
                className="w-[100vw] lg:w-[60vw] mx-auto h-[100vh] lg:h-[90vh] absolute bottom-0 left-1/2 -translate-x-1/2 z-[100]">
                <Image
                    src="/treats/girl.png"
                    alt="happy girl"
                    fill
                    className="object-cover "
                />
            </div>
            <motion.div
                initial={{rotate: 0}}
                animate={{rotate: "360deg"}}
                transition={{ease: "linear", duration: 5, repeat: Infinity}}
                className="w-[150px] h-[100px] absolute bottom-0 right-0 md:right-[10%] z-[100]">
                <Image
                    src="/treats/blueSweet.png"
                    alt="blue candy"
                    fill
                    className="object-cover"
                />
            </motion.div>
            <motion.div
                initial={{rotate: 0,}}
                animate={{rotate: "-360deg"}}
                transition={{ease: "linear", duration: 10, repeat: Infinity}}
                className="w-[250px] h-[200px] absolute -bottom-14 -left-10 md:left-[10%] z-[100]">
                <Image
                    src="/treats/candy.png"
                    alt="candy"
                    fill
                    className="object-cover"
                />
            </motion.div>
            <motion.div
                initial={{rotate: 0}}
                animate={{rotate: "360deg"}}
                transition={{ease: "linear", duration: 5, repeat: Infinity}}
                className="w-[100px] h-[70px] absolute bottom-1/3 left-[20%] z-[100]">
                <Image
                    src="/treats/yellowSweet.png"
                    alt="yellow candy"
                    fill
                    className="object-cover"
                />
            </motion.div>
            <motion.div 
                initial={{rotate: 0}}
                animate={{rotate: "-360deg"}}
                transition={{ease: "linear", duration: 5, repeat: Infinity}}
                className="w-[100px] h-[70px] absolute top-[43%] right-[10%] z-[5]">
                <Image
                    src="/treats/redSweet.png"
                    alt="red candy"
                    fill
                    className="object-cover"
                />
            </motion.div>
        </div>
    </div>
  )
}

export default Treats