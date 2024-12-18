import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { profileCardInfoArr } from "./constants";

const HeroImage = () => {
    const [showProfile, setShowProfile] = useState(false)
  return (
    <AnimatePresence>
        <div className="col-span-full lg:col-span-5 h-[60vh] lg:h-full relative overflow-hidden">
            <Image
                src="/talent/bg.jpg"
                alt="Blurforce Logo"
                width={960}
                height={700}
                className="object-cover"
            />
                <div 
                    onMouseEnter={() => setShowProfile(true)}
                    onMouseLeave={() => setShowProfile(false)}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <AnimatePresence>
                    {showProfile && <motion.div
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        exit={{opacity: 0}}
                        transition={{duration: .3}}
                        className="p-3 w-[20rem] mb-3 bg-white/60 backdrop-blur-[8px] rounded-lg shadow-2xl overflow-hidden"
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 shrink-0">
                                <Image
                                    src="/talent/bg.jpg"
                                    alt="Blurforce Logo"
                                    width={70}
                                    height={70}
                                    className="object-cover size-8 rounded-full"
                                />
                                <div className="pr-8">
                                    <h3 className="font-semibold text-sm">Johnson Amorah</h3>
                                    <p className="text-[10px] font-semibold text-slate-500">New York</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-gray-700 flex flex-col items-center">
                                    <span className="font-semibold">97</span>
                                    <span className="text-[10px]">posts</span>
                                </div>
                                <div className="text-gray-700 flex flex-col items-center">
                                    <span className="font-semibold">20k</span>
                                    <span className="text-[10px]">followers</span>
                                </div>
                                <div className="text-gray-700 flex flex-col items-center">
                                    <span className="font-semibold">1,235</span>
                                    <span className="text-[10px]">following</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-[1.5px] bg-black/5 my-5" />
                        <div className="grid grid-cols-2 gap-2">
                            {
                                profileCardInfoArr.map(({id, icon: Icon, label}) => (
                                    <button key={id} className="bg-white/50 hover:bg-white/70 transition col-span-1 rounded-lg p-2 text-left">
                                        <Icon className="size-3" />
                                        <h3 className="mt-2 text-xs font-semibold opacity-60 hover:opacity-100 transition">{label}</h3>
                                    </button>
                                ))
                            }
                        </div>
                    </motion.div>}
                </AnimatePresence>
                
                    <div 
                        className="flex items-center gap-3 p-2 bg-white rounded-full shadow-2xl w-[20rem]">
                        <Image
                            src="/talent/bg.jpg"
                            alt="Blurforce Logo"
                            width={70}
                            height={70}
                            className="object-cover size-12 rounded-full"
                        />
                        <div className="">
                            <h3 className="font-semibold text-sm mb-1">Johnson Amorah</h3>
                            <div className="flex items-center gap-2">
                                <p className="px-2 py-1 rounded-md bg-blue-200 text-[10px] font-semibold">Web Design</p>
                                <p className="text-[10px] font-semibold text-slate-500">New York</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </AnimatePresence>
  )
}

export default HeroImage