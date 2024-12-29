"use client"

import { CgChevronRight } from "react-icons/cg"
import Header from "./Header"
import Image from "next/image"
import { motion } from "framer-motion"

const heroImages = [
    {   
        id: 1,
        url: "/experience/girl.png",
        alt: "A woman taking a selfie with lambs"
    },
    {   
        id: 2,
        url: "/experience/boy.png",
        alt: "A man on glasses taking a selfie in front of Effiel Tower"
    },
];

const Experience = () => {
  return (
    <div className="h-screen overflow-hidden ">
        <Header />
        <main className="h-full flex flex-col lg:flex-row items-center max-w-[75rem] mx-auto px-4 max-md:pt-28 max-lg:pt-20">
            <div className="w-full flex flex-col items-start gap-6">
                <h1 className="md:w-[80%] text-5xl md:text-7xl font-light tracking-tighter">Experience the world on your own terms</h1>
                <p className="md:w-[80%]">Whether you&apos;re a casual jogger or a dedicated marathon runner, the act of lacing up your shoes and hitting the pavement or trail can have more transformative effects.</p>
                <button className="flex items-center gap-2 bg-white rounded-full px-6 py-2 text-[#1e1e1e] font-bold uppercase">
                    <span>show now</span>
                    <CgChevronRight className="size-5" />
                </button>
            </div>
            <div className="relative w-full h-full flex">
                {
                    heroImages.map(({id, url, alt}, i) => (
                        <motion.div 
                            initial={{ scale: .5}}
                            animate={i === 0 ? {rotate: "-12deg", scale: 1} : { rotate: "12deg", scale: 1}}
                            transition={{duration: .3, delay: i*.1, type: "spring"}}
                            key={id} 
                            className="h-[100%] lg:h-[70%] w-[60%] bg-white p-1.5 shadow-xl absolute first:top-16 md:first:top-24 lg:first:top-16 last:bottom-0 last:right-0"
                        >
                            <div className="w-full h-[90%] relative">
                                <Image
                                    src={url}
                                    alt={alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </main>
    </div>
  )
}

export default Experience