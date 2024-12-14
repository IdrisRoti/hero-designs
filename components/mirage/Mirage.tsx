"use client"

import Image from "next/image"
import Header from "./Header"
import { motion } from "framer-motion"

const Mirage = () => {
  return (
    <div className="relative w-screen h-screen text-white font-[Inter]">
        {/* BACKGROUND IMAGE */}
        <div className="absolute top-0 left-0 w-screen h-screen -z-10 after:absolute after:inset-0 after:bg-gradient-to-b after:from-[#4A2A14]/85">
            <Image
                src="/mirage/hotel.png"
                alt="Sofa Image"
                fill
                className="object-cover "
            />
        </div> 
        <Header />
        <div className="relative pt-10 pb-6 h-[calc(100vh-64px)] flex flex-col justify-between">
            <div className="">
                <h1 className="text-3xl md:text-5xl font-light text-center  w-[90vw] lg:w-[50%] mx-auto [font-family:Quintessential]">
                    {"Stylish & Avant-Grande hotel in Morocco".split("").map((char, i) => (
                        <motion.span 
                            key={i}
                            initial={{opacity: "40%"}}
                            animate={{opacity: "100%"}}
                            transition={{delay: i*.08}}
                        >
                                {char}
                        </motion.span>
                    ))}
                </h1>
            </div>
            <div className="bg-[#F1CEA8] py-6 w-[90vw] md:w-[50vw] mx-auto lg:w-full max-lg:shadow-lg">
                <div className="h-full max-w-[60rem] px-6 mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 text-[#4A2A14]">
                    <div className="flex flex-col gap-2 border-b-2 border-[#4A2A14] pb-1 w-full">
                        <label htmlFor="checkIn" className="uppercase text-[10px] tracking-widest font-bold">check-in</label>
                        <input type="date" className="bg-transparent outline-none text-[#4A2A14] font-semibold text-xs uppercase tracking-widest" />
                    </div>
                    <div className="flex flex-col gap-2 w-full border-b-2 border-[#4A2A14] pb-1">
                        <label htmlFor="checkIn" className="uppercase text-[10px] tracking-widest font-bold">check-out</label>
                        <input type="date" className="bg-transparent outline-none text-[#4A2A14] font-semibold text-xs uppercase tracking-widest" />
                    </div>
                    <div className="flex flex-col gap-2 w-full border-b-2 border-[#4A2A14] pb-1">
                        <label htmlFor="checkIn" className="text-[10px] tracking-widest font-bold">No OF GUEST</label>
                        <input type="number" defaultValue={0} className="bg-transparent outline-none text-[#4A2A14] font-semibold text-xs uppercase tracking-widest" />
                    </div>
                    <button className="bg-[#4A2A14] w-full hover:opacity-80 transition px-8 py-3 text-white text-xs tracking-wider uppercase font-semibold">check availability</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mirage