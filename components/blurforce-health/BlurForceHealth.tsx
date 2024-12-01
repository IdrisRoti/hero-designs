"use client"

import Image from "next/image"
import ReviewCard from "./ReviewCard"
import { motion } from "framer-motion"

const reviews = [
    {
        id: 1,
        image: "/akira/face1.png",
        name: "Anthony Marshall",
        review: "This health product has significantly improved my overall well-beign - It's to use and I've noticed a positive difference in my energy level and vitality!"
    },
    {
        id: 2,
        image: "/akira/face2.png",
        name: "Stacey Kazeem",
        review: "This health product has significantly improved my overall well-beign - It's to use and I've noticed a positive difference in my energy level and vitality!"
    },
    {
        id: 3,
        image: "/akira/face3.png",
        name: "Jessy Jones",
        review: "This health product has significantly improved my overall well-beign - It's to use and I've noticed a positive difference in my energy level and vitality!"
    },
]

const BlurForceHealth = () => {
  return (
    <div className="text-[#1e1e1e] relative pb-20">
        <div className="bg-orange-400 w-20 md:w-56 lg:w-96 h-20 md:h-36 bg-opacity-70 md:bg-opacity-60 absolute bottom-0 md:-bottom-16 -z-10 blur-[60px] md:blur-[100px]" />
        <div className="bg-purple-500 w-20 md:w-56 lg:w-96 h-20 md:h-36 bg-opacity-70 md:bg-opacity-60 absolute bottom-0 md:-bottom-16 left-1/2 -translate-x-1/2 -z-10 blur-[60px] md:blur-[100px]" />
        <div className="bg-blue-400 w-20 md:w-56 lg:w-96 h-20 md:h-36 bg-opacity-70 md:bg-opacity-60 absolute bottom-0 md:-bottom-16 right-0 -z-10 blur-[60px] md:blur-[100px]" />
        <motion.nav initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: .5, delay: 2}} className="flex items-center justify-between py-6">
            <Image
                src="/blueforce.png"
                alt="blueforce"
                width={126}
                height={29}
                className="w-[126px] h-[29px] object-cover"
            />
            <button className="uppercase px-4 py-2 rounded-xl bg-gradient-to-r from-purple-100 to-red-50 text-sm font-semibold">contact</button>
        </motion.nav>
        <section className="mt-10 flex flex-col items-center">
            <motion.p initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: .5, delay: .7}} className="bg-gradient-to-r from-purple-100 via-red-100 to-yellow-100 px-4 py-2 rounded-full font-semibold">
                <span className="bg-gradient-to-r from-purple-600 to-red-300 text-transparent inline-block bg-clip-text">Release New December 2025</span>
            </motion.p>
            <motion.h1 initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: .5}} className="text-5xl md:text-7xl font-light text-center mt-3">Life changing<br />Health support</motion.h1>
            <motion.p initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: .5, delay: 1.5}} className="w-[90%] md:w-[75%] lg:w-[40%] text-center mt-6">Discover the power of clean beauty, where purity meets performance. Feel good about what you put on your skin—because you deserve products that are as kind to you as they are to the planet.</motion.p>
            <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: .5, delay: 1.5}} className="shadow-2xl bg-gradient-to-r from-purple-600 via-orange-300 to bg-purple-600 from-30% via-70% flex items-center mt-5 h-12 w-full md:w-[60vw] lg:w-[30vw] rounded-lg p-[2px] overflow-hidden">
                <input placeholder="Enter email to join the waitlist" className="bg-transparent outline-none border-none h-full bg-white rounded-l-md w-[75%] px-2 placeholder:text-[#1e1e1e] placeholder:text-sm placeholder:font-semibold focus:placeholder:opacity-0 placeholder:transition-opacity placeholder:duration-500" />
                <button className="h-full w-[25%] uppercase text-white text-sm">Sign up</button>
            </motion.div>
        </section>
        <motion.section initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: .5, delay: 2}} className="flex items-center mt-16 overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div 
                initial={{ x: "0%" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex items-center">
               {reviews.map(({id, name, image, review}) => (
                    <ReviewCard className="shrink-0 w-[25rem] mr-3" key={id} name={name} image={image} review={review} />
               ))}
            </motion.div>
            <motion.div 
                initial={{ x: "0%" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex items-center">
               {reviews.map(({id, name, image, review}) => (
                    <ReviewCard className="shrink-0 w-[25rem] mr-3" key={id} name={name} image={image} review={review} />
               ))}
            </motion.div>
        </motion.section>
    </div>
  )
}

export default BlurForceHealth