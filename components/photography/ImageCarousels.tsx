"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import InfiniteCarousel from "./InfiniteCarousel"

const imagePaths = [
    "/photography/photo1.png",
    "/photography/photo2.png",
    "/photography/photo3.png",
    "/photography/photo4.jpg",
    "/photography/photo5.png",
    "/photography/photo6.png",
    "/photography/photo7.png",
    "/photography/photo8.png",
]

const ImageCarousels = () => {
  return (
    <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .5, delay: 1}}
        className="mt-8 w-screen overflow-hidden"
    >
        <InfiniteCarousel>
                {
                     imagePaths.map((path, i) => (
                        <div key={i} className="flex-shrink-0 mr-3 md:mr-5 w-[20rem] h-[10rem] md:h-[12rem] relative overflow-hidden">
                            <Image
                                src={path}
                                alt="Display Photo"
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))
                }
        </InfiniteCarousel>
        <InfiniteCarousel direction="right">
                {
                    imagePaths.map((path, i) => (
                        <div key={i} className="flex-shrink-0 mr-3 md:mr-5 w-[20rem] h-[10rem] md:h-[12rem] relative overflow-hidden">
                            <Image
                                src={path}
                                alt="Display Photo"
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))
                }
        </InfiniteCarousel>
    </motion.section>
  )
}

export default ImageCarousels