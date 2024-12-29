"use client"

import { motion } from "framer-motion";
import Header from "./Header";
import LogoTicker from "./LogoTicker";

const Design = () => {
  return (
    <div className="max-w-[75rem] mx-auto px-4">
        <Header />
        <main className="mb-10 flex flex-col lg:flex-row py-5 md:py-10 gap-8 md:gap-14 lg:gap-2 md:text-center lg:text-left">
            <div className="w-full lg:w-[60%]">
                {
                    ["Design", "innovate", "construct"].map((word, i) => (
                        <div
                            className="overflow-hidden"
                            key={word}
                        >
                            <motion.p
                                initial={{y: "100%"}}
                                animate={{y: 0}}
                                transition={{ delay: .05*i, ease: "easeInOut", duration: .8 }}
                                className={`uppercase text-7xl md:text-9xl font-medium leading-[.9] ${i === 1 && "text-blue-700"}`}
                            >
                                    {word}
                            </motion.p>
                        </div>
                    ))
                }
            </div>
            <div className="w-full lg:w-[40%] flex flex-col justify-center items-start md:items-center lg:items-start gap-3">
                <div className="">
                    {
                            ["Design thinking", "unique", "production"].map((word, i) => (
                                <div
                                    className="overflow-hidden"
                                    key={word}
                                >
                                <motion.p
                                    initial={{y: "100%"}}
                                    animate={{y: 0}}
                                    transition={{ delay: .05*i, ease: "easeInOut", duration: .8 }}
                                    className={`uppercase text-3xl font-medium leading-[.98] ${i === 0 ? "text-[#1e1e1e]" : "text-blue-700"}`}
                                >
                                        {word}
                                </motion.p>
                            </div>
                        ))
                    }
                </div>
                <motion.p 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ delay: 1,ease: "easeInOut" }}
                    className="text-gray-500 font-[Inter] md:w-[65%] lg:w-[90%] font-medium">
                    Whether you&apos;re a casual jogger or a dedicated marathon runner, the act of lacing up your shoes and hitting the pavement or trail can have more transformative effects.
                </motion.p>
                <motion.button
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ delay: 1.5,ease: "easeInOut" }}
                    className='bg-blue-700 hover:bg-blue-500 transition px-6 py-2 rounded-lg text-white border-none outline-none'>
                        Learn More
                </motion.button>
            </div>
        </main>
        <LogoTicker />
    </div>
  )
}

export default Design;