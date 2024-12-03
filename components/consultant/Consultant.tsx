"use client"

import {BsTelephoneFill } from "react-icons/bs";
import { TfiLayoutColumn2Alt } from "react-icons/tfi";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import UnderlinedButton from "./UnderlinedButton";

const navlinks = ["About", "Works", "Team", "Contact"];

const gradientsArr = [
    {
        id: 1,
        delay: .5,
        gradient: "from-white via-yellow-100 to-white to-55%",
    },
    {
        id: 2,
        delay: .3,
        gradient: "from-yellow-300 via-orange-400 to-white to-55%",
    },
    {
        id: 3,
        delay: .6,
        gradient: "from-yellow-400 via-orange-500 to-white to-60%",
    },
    {
        id: 4,
        delay: .9,
        gradient: "from-yellow-500 via-orange-600/90 to-white to-70%",
    },
    {
        id: 5,
        delay: .4,
        gradient: "from-yellow-500 via-orange-600 to-white to-70%",
    },
    {
        id: 6,
        delay: .3,
        gradient: "from-yellow-500 via-orange-600/90 to-white to-70%",
    },
    {
        id: 7,
        delay: .5,
        gradient: "from-yellow-400 via-orange-500 to-white to-60%",
    },
    {
        id: 8,
        delay: .7,
        gradient: "from-yellow-300 via-orange-400 to-white to-55%",
    },
]

const Consultant = () => {
  return (
    <div className="h-screen px-4">
        <div className="absolute w-[85%] md:w-[75%] lg:w-1/2 h-full top-0 right-0 flex items-start justify-end">
            {
                gradientsArr.map(({id, gradient,delay}) => (
                    <motion.div initial={{opacity: .6}} animate={{opacity: 1}} transition={{duration: 2, ease: "easeInOut", delay: delay, repeat: Infinity, repeatType: "reverse"}} key={id} className={`w-full bg-gradient-to-b h-full ${gradient}`} />
                ))
            }
        </div>
        <div className="relative max-w-[75rem] h-full mx-auto">
            <motion.nav initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: .5, delay: 1.5}} className="absolute top-6 left-0 w-full">
                <div className="flex justify-between max-w-[75rem] mx-auto shadow-[0_25px_50px_-12px_rgb(0_0_0/0.15)] py-2 px-4 rounded-full bg-white/30 backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                        <span className="bg-[#1e1e1e] w-6 aspect-square rounded-full grid place-items-center">
                            <TfiLayoutColumn2Alt className="text-white size-3" />
                        </span>
                        <div className="hidden md:flex items-center gap-6 lg:gap-10">
                            {
                                navlinks.map((link) => (
                                    <UnderlinedButton key={link} >{link}</UnderlinedButton>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <UnderlinedButton className="hidden md:block">location</UnderlinedButton>
                        <button className="flex items-center gap-2 bg-[#1e1e1e] hover:bg-[#1e1e1e]/80 p-3 rounded-full text-white group">
                            <span className="uppercase text-sm font-extralight opacity-90">Free consultaton</span>
                            <span className="bg-white rounded-full grid place-items-center w-5 aspect-square group-hover:rotate-180 transition duration-500">
                                <BsTelephoneFill className="text-[#1e1e1e] size-3" />
                            </span>
                        </button>
                    </div>
                </div>
            </motion.nav>  
            <div className="absolute w-full bottom-0 left-0 flex flex-col gap-4 md:gap-0 text-[#1e1e1e]">
                <div className="w-full">
                    <motion.h1 initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: .8}} className="text-[#1e1e1e]/80 capitalize md:text-xl tracking-wider">Award winning business consultant</motion.h1>
                    <motion.h1 initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: .5, delay: .7}} className="text-3xl md:text-5xl w-[90%] lg:w-[65%] mt-4 mb-12">Our experts will build you a next level strategy to accelerate your e-commerce & grow your business.</motion.h1>
                    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: .5, delay: 1.5}} className="flex items-center gap-4">
                        <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 transition p-3 rounded-full text-white group">
                            <span className="uppercase text-sm font-extralight opacity-90">get started now</span>
                            <span className="bg-white rounded-full grid place-items-center w-7 aspect-square">
                                <FaArrowRight className="text-[#1e1e1e] size-4 group-hover:rotate-180 transition duration-500" />
                            </span>
                        </button>
                        <UnderlinedButton>learn more</UnderlinedButton>
                    </motion.div>
                </div>
                <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: .5, delay: 1.5}} className="relative w-44 h-32 border-4 border-orange-600 rounded-md aspect-square  ml-auto mb-8 after:absolute after:inset-0 after:bg-black/10">
                    <Image
                        src="/photography/photo1.png"
                        alt="A smiling woman"
                        fill
                        className="object-cover"
                    />
                    <p className="absolute bottom-3 text-white text-sm z-10 uppercase left-1/2 -translate-x-1/2">Need help?</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Consultant;