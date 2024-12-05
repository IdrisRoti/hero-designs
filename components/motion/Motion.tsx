"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

import Header from "./Header"
import Drawer from "./Drawer"
import DriveRequest from "./DriveRequest"

export const carsArr = [
    {
        id: 1,
        name: "Alpine",
        imgPath: "/motion/motion1.jpg",
        textColor: "text-red-600",
        bgColor: "bg-red-500"
    },
    {
        id: 2,
        name: "Alpine",
        imgPath: "/motion/motion2.jpg",
        textColor: "text-cyan-600",
        bgColor: "bg-cyan-600"
    },
    {
        id: 3,
        name: "Alpine",
        imgPath: "/motion/motion3.jpg",
        textColor: "text-red-500",
        bgColor: "bg-red-500"
    },
    {
        id: 4,
        name: "Alpine",
        imgPath: "/motion/motion4.jpg",
        textColor: "text-red-500",
        bgColor: "bg-red-500"
    },
    {
        id: 5,
        name: "Alpine",
        imgPath: "/motion/motion5.jpg",
        textColor: "text-yellow-600",
        bgColor: "bg-yellow-600"
    },
    {
        id: 6,
        name: "Alpine",
        imgPath: "/motion/motion6.jpg",
        textColor: "text-cyan-600",
        bgColor: "bg-cyan-600"
    },
    {
        id: 7,
        name: "Alpine",
        imgPath: "/motion/motion7.jpg",
        textColor: "text-yellow-600",
        bgColor: "bg-yellow-600"
    },
    {
        id: 8,
        name: "Alpine",
        imgPath: "/motion/motion8.jpg",
        textColor: "text-cyan-600",
        bgColor: "bg-cyan-600"
    },
]

const variants = {
    initial: { opacity: 0},
    animate: { opacity: 1},
    exit: { opacity: 0},
  };

const Motion = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => prev === carsArr.length ? 1 : prev + 1)
        }, 6000)

        return () => clearInterval(timer);
    }, [])

    const currentImage = carsArr.find((car) => car.id === currentImageIndex)
    const textPrimaryColor =  currentImage?.textColor || "text-yellow-600"
    const bgPrimaryColor =  currentImage?.bgColor || "bg-yellow-600"

  return (
   <div className="h-screen overflow-y-hidden">
     <div className="[font-family:Sofia_sans] text-white h-screen">
        <Header textPrimaryColor={textPrimaryColor} bgPrimaryColor={bgPrimaryColor} />
        {/* ******* ANIMATED IMAGE BACKGROUND ******** */}
        <AnimatePresence>
            {
                carsArr.map(({id, imgPath,name}) => currentImageIndex === id ? (
                    <motion.div
                        key={id}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0 w-screen h-screen -z-10 bg-slate-600">
                            <Image
                                src={imgPath}
                                alt={name}
                                fill
                                className="object-cover"
                            />
                    </motion.div> 
                ) : null)}
        </AnimatePresence>
        {/* ******* CONTENT ******* */}
        <div
            className="relative h-[calc(100vh-80px)] pt-10 md:pt-0 flex flex-col justify-start md:justify-center gap-16 after:absolute after:inset-0 after:bg-gradient-to-r after:from-black/60 before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/60"
        >
            <div className="flex flex-col items-start w-full max-w-[75rem] mx-auto px-4 relative z-50">
                <h1 className="[font-family:Montserrat] uppercase tracking-widest text-xl md:text-3xl">Motion</h1>
                <h2 className="font-light uppercase tracking-widest text-5xl md:text-7xl">Quest 2.0</h2>
                <p className="text-white/80 md:w-[50%] lg:w-[30%] text-sm my-4">Innovation and next level driver engagement with its progressive technolog, material reduction and sustainability at this core.</p>
                <div className="flex items-center w-full md:w-[50%] lg:w-[30%]">
                    <button onClick={() => setIsOpen(true)} className={`w-full uppercase text-black transition-colors hover:opacity-60 py-2 font-medium text-sm ${bgPrimaryColor}`}>book a test drive</button>
                    <button className={`w-full uppercase bg-black py-2 font-medium text-sm transition-colors hover:opacity-60 ${textPrimaryColor}`}>customise</button>
                </div>
            </div>
            <div className="[font-family:Rajdhani] w-full absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center gap-10 md:gap-24">
                <div className="flex flex-col items-center">
                    <h3 className="text-white/80 text-xl">584 KM</h3>
                    <p className="text-white/80 text-sm uppercase tracking-widest">Nedc range</p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-white/80 text-xl">X-DRIVE</h3>
                    <p className="text-white/80 text-sm uppercase tracking-widest">Nedc range</p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-white/80 text-xl">3.1</h3>
                    <p className="text-white/80 text-sm uppercase tracking-widest">vcontrol</p>
                </div>
            </div>
        </div>
        {/* ****** DRAWERS ******** */}
        <div className="hidden md:block">
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} position="left">
                <DriveRequest />
            </Drawer>
        </div>
        <div className="md:hidden">
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} position="bottom">
                <DriveRequest />
            </Drawer>
        </div>
    </div>
   </div>
  )
}

export default Motion