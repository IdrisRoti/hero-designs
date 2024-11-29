"use client"

import { useRef } from "react";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { HiArrowLongDown } from "react-icons/hi2";

import ImageSlider from "./ImageSlider";

const images = [
    "/furniture/furniture1.jpg", "/furniture/furniture2.jpg", "/furniture/furniture3.jpg", "/furniture/furniture4.jpg", "/furniture/furniture5.jpg", "/furniture/furniture6.jpg", "/furniture/furniture6.jpg"
]

const slidingText = ["u", "n", "i", "t", "e", "c", "t","u", "n", "i", "t", "e", "c", "t"]

const Unitect = () => {
    const containerRef = useRef(null)

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const widthValue = useTransform(scrollYProgress, [0, 1], [28, 90]);
    const heightValue = useTransform(scrollYProgress, [0, 1], [32, 95]);
    const topValue = useTransform(scrollYProgress, [0, .8, 1], [112, 112, 20]);
    const opacity = useTransform(scrollYProgress, [0, .2, 1], [1, 0, 0]);

    const width = useMotionTemplate`${widthValue}vw`;
    const height = useMotionTemplate`${heightValue}vh`;
    const top = useMotionTemplate`${topValue}px`;

  return (
    <div className="text-[#1e1e1e]">
        <div className="h-[90vh] w-screen overflow-hidden fixed md:-bottom-[15vh] lg:top-[5vh] -z-50">
            <motion.p
                initial={{ translateX: "0%" }} 
                animate={{ translateX: "-230%" }}
                transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                className="uppercase text-[40rem] lg:text-[44rem] lg:-mt-[18rem] text-cyan-400 opacity-40 flex items-center -mr-[21.5px]">
                    {
                        slidingText.map((letter, i) => (
                            <span key={i}>{letter}</span>
                        ))
                    }
            </motion.p>
        </div>
        <section className="">
            {/* HEADER */}
            <nav className="max-w-[75rem] mx-auto px-4 flex justify-between fixed right-0 left-0 top-6 w-full z-50 bg-transparent">
                <h2 className="text-2xl text-[#1e1e1e] mix-blend-difference">Unitect</h2>
                <button className="uppercase p-3 tracking-widest border border-[#1e1e1e] rounded-full bg-transparent hover:bg-[#1e1e1e] hover:text-white transition mix-blend-difference">Let&apos;s talk</button>
            </nav>
            <div ref={containerRef} className="relative max-w-[75rem] mx-auto px-4 h-[calc((100vh-112px)*2)]">
                <motion.div className="lg:hidden w-[90vw] max-lg:mx-auto aspect-video bg-slate-900 rounded-md sticky top-28 mt-28">
                    <ImageSlider images={images} />
                </motion.div>
                <motion.div 
                    style={{
                        top,
                    }}
                    className="sticky hidden lg:block">
                    <ImageSlider images={images} width={width} height={height} />
                </motion.div>
                <motion.div 
                    style={{
                       opacity
                    }}
                    className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-center items-center lg:justify-between lg:items-end absolute bottom-[50%] md:bottom-[55%] lg:bottom-[41%]">
                    <p
                        className="lg:w-[60%] text-4xl md:text-6xl font-light">Our curated collection of furniture combines timeless Scandinavian with contemporary innovations.</p>
                    <motion.span 
                        animate={{y: [-20, 0]}}
                        transition={{duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}
                        className="span">
                        <HiArrowLongDown className="size-8 opacity-70" />
                    </motion.span>
                </motion.div>
            </div>
        </section>
    </div>
  )
}

export default Unitect