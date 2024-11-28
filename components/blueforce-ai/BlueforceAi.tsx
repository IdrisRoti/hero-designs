"use client"

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

import Navbar from './Navbar'
import TabCarousel from './TabCarousel'

export const heroContent = [
  {
    id: 1,
    label: "Inference Services",
    content: "Dive deep into interactive environments, unravel the science behind Mars' exploration, and feel the thrill of discovery as you navigate this extraordinary extraterrestrial world. The future of space exploration is at your fingertips!"
  },
  {
    id: 2,
    label: "Machine Learning",
    content: "Dive deep into interactive environments, unravel the science behind Mars' exploration, and feel the thrill of discovery as you navigate this extraordinary extraterrestrial world. The future of space exploration is at your fingertips!"
  },
  {
    id: 3,
    label: "Data Security",
    content: "Dive deep into interactive environments, unravel the science behind Mars' exploration, and feel the thrill of discovery as you navigate this extraordinary extraterrestrial world. The future of space exploration is at your fingertips!"
  },
  {
    id: 4,
    label: "VFX & Rendering",
    content: "Dive deep into interactive environments, unravel the science behind Mars' exploration, and feel the thrill of discovery as you navigate this extraordinary extraterrestrial world. The future of space exploration is at your fingertips!"
  },
]

const BlueforceAi = () => {
  const [currentTabId, setCurrentTabId] = useState(2);
  const currentTab = heroContent.find((content) => content.id === currentTabId)

  const backgroundImage = "url('/gradient-bg.jpg')"

  return (
    <div className={`relative w-screen h-screen text-white`}>
      <div className="max-w-[75rem] mx-auto pt-4">
        <Navbar />
        <div
          className='relative mt-12 px-8 md:px-4 w-full h-[calc(100vh-95px)] md:h-[calc(100vh-94px)] after:absolute after:inset-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/30 md:after:from-10%'
          style={{                 
            background: backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
         }}
        >
          <div className='absolute z-50 flex items-start md:items-center justify-center h-full pt-14 md:pt-0 gap-8'>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, ease: "easeInOut", delay: 1}} className='bg-[#FCFCFC] w-[1px] h-[300px] md:h-[390px]' />
            <div className='px-2 md:w-[70%] lg:w-[50%]'>
              <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, ease: "easeInOut"}} className='text-3xl md:text-6xl'>{currentTab?.label},<br />
              Machine Intelligent</motion.h1>
              <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, ease: "easeInOut", delay: .3}} className='pt-5 md:pt-8 pb-3 md:pb-6 w-full md:w-[80%] md:text-base text-sm'>{currentTab?.content}</motion.p>
              <motion.button initial={{ y: 10, opacity: 0,}} animate={{ y: 0, opacity: 1,}} transition={{duration: .5, ease: "easeIn", delay: .5}} className='relative border border-white w-[181px] h-[45px] font-semibold hover:bg-white/20 transition'>
                <span>Get Started</span>
                <div className='absolute right-1 bottom-1'>
                  <Image
                    src="/triangle.png"
                    width={50}
                    height={50}
                    alt="button triangle"
                    className="size-4"
                  />
                </div>
              </motion.button>
            </div>
          </div>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, ease: "easeInOut", delay: 1}} className='hidden absolute bottom-0 left-0 z-50 md:flex items-center bg-white/20 h-16 w-full backdrop-blur-md'>
            {
              heroContent.map(({id, label}) => {
                const isActive = currentTabId === id;
                return (
                  <div className='relative w-full h-full' onClick={() => setCurrentTabId(id)} key={id}>
                    <button className={`w-full h-full  hover:bg-white/10 transition`}>{label}</button>
                    {isActive && <motion.div layoutId='activeTab' className='-z-10 absolute inset-0 bg-white/20 border-t-2 border-white' />}
                  </div>
                )
              })
            }
          </motion.div>
          <div className='md:hidden absolute bottom-0 left-0 z-50'>
            <TabCarousel currentTabId={currentTabId} setCurrentTabId={setCurrentTabId} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlueforceAi;