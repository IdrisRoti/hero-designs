"use client"

import { motion } from "framer-motion"

const content = ["research", "graphic design", "logo design", "advertising", "marketing", "social media"]

const Ticker = () => {
  return (
    <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{ duration: 1, delay: 2.3 }}
        className="flex items-center h-10 md:h-16 bg-[#36F85C]">
        <motion.div
                initial={{ x: "0%"}}
                animate={{ x: "-100%"}}
                transition={{ duration: 15, repeat: Infinity, ease: "linear"}}
            className="flex-shrink-0 flex items-center">
            {
                content.map((text) => (
                    <article key={text} className=" flex-shrink-0 flex items-center gap-4 mr-6 h-full text-xl md:text-3xl uppercase">
                        <span>{text}</span>
                        <span className="size-2.5 md:size-4 bg-[#1e1e1e] rounded-full"/>
                    </article>
                ))
            }
        </motion.div>
        <motion.div
                initial={{ x: "0%"}}
                animate={{ x: "-100%"}}
                transition={{ duration: 15, repeat: Infinity, ease: "linear"}}
            className="flex-shrink-0 flex items-center">
            {
                content.map((text) => (
                    <article key={text} className=" flex-shrink-0 flex items-center gap-4 mr-6 h-full text-xl md:text-3xl uppercase">
                        <span>{text}</span>
                        <span className="size-2.5 md:size-4 bg-[#1e1e1e] rounded-full"/>
                    </article>
                ))
            }
        </motion.div>
    </motion.div>
  )
}

export default Ticker