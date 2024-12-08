"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "./Header";
import { BsArrowRight } from "react-icons/bs";

const imagesArr = ["/sofa/sofa3.jpg", "/sofa/sofa2.jpg", "/sofa/sofa1.jpg", "/sofa/sofa4.jpg"]

const variants = {
    initial: { opacity: 0},
    animate: { opacity: 1},
    exit: { opacity: 0},
  };

const Sofa = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => prev === imagesArr.length - 1 ? 0 : prev + 1)
        }, 6000)

        return () => clearInterval(timer);
    }, [])

  return (
    <div className="relative w-screen h-screen text-white">
        {/* ANIMATED IMAGE BACKGROUND */}
            <motion.div
                className="absolute inset-0" 
            >
                {
                imagesArr.map((imgPath, i) => currentImageIndex === i ? (
                    <motion.div
                        key={imgPath}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={variants}
                        // transition={{ duration: .2 }}
                        className="absolute top-0 left-0 w-screen h-screen -z-10 after:absolute after:inset-0 after:bg-[#4A2A14]/50">
                            <Image
                                src={imgPath}
                                alt="Sofa Image"
                                fill
                                className="object-cover "
                            />
                    </motion.div> 
                ) : null)}
            </motion.div>
        <Header />
        <div className="relative max-w-[75rem] mx-auto px-4 py-10 flex flex-col justify-between h-[calc(100vh-64px)]">
            <div>
                <h1 className="text-5xl md:text-7xl w-full lg:w-[50%] font-light">Find the perfect balance of comfort and style.</h1>
                <button className="flex items-center justify-center gap-2 rounded-full bg-white/20 hover:bg-white/30 transition p-2 mt-6">
                    <span className="uppercase">get started now</span>
                    <span className="bg-white h-8 aspect-square rounded-full grid place-items-center"><BsArrowRight className="text-[#1e1e1e]" /></span>
                </button>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 py-2">
                    {
                        Array.from({length: 4}).map((_, i) => (
                            <span key={i} className={`w-3 aspect-square rounded-full ${currentImageIndex === i ? "bg-white" : "bg-white/20"}`} />
                        ))
                    }
                </div>
                <motion.span
                    initial={{y: 20}}
                    animate={{y: 0}}
                    transition={{duration: 1, repeat: Infinity, repeatType: "reverse"}}
                    className="">
                    <Image
                        src="/sofa/mouse.png"
                        alt="mouse"
                        width={50}
                        height={25}
                        className="h-10  w-7 object-cover"
                    />
                </motion.span>
            </div>
        </div>
    </div>
  )
}

export default Sofa;