"use client"

import { motion } from 'framer-motion'
import Header from './Header'
import Button from './Button'
import Image from 'next/image'

const TickerLogos = ["/notion/flavour.svg", "/notion/blurforce.svg", "/notion/unitect.svg"]

const Notion = () => {
  return (
    <div className='text-[#1e1e1e]'>
        <Header />
       <div className="flex flex-col lg:flex-row items-center max-w-[75rem] mx-auto px-4 gap-6 lg:gap-0 mt-10 lg:mt-0">
          <div className='w-full text-center lg:text-left'>
              <motion.h1 
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{ duration: .5, ease: "easeIn"}} className="text-5xl md:text-7xl font-semibold">Build, Together Product</motion.h1>
              <motion.p 
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{ duration: .5, ease: "easeIn", delay: .3}} className="md:w-[70%] max-lg:mx-auto text-sm font-semibold mt-4 mb-6">Dive deep into interactive environments, unravel the science behind of product design.</motion.p>
                      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 1}} className="flex items-center max-lg:justify-center gap-4">
                          <Button variant="outline">Learn More</Button>
                          <Button>Sign Up</Button>
                      </motion.div>
                      <motion.div className='mt-10' initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 1.3}}>
                        <h3 className='text-xs font-light mb-4'>Trusted by</h3>
                        <div className="flex items-center max-lg:justify-center gap-5 md:gap-10">
                            {
                                TickerLogos.map((logo) => (
                                    <Image
                                        key={logo}
                                        src={logo}
                                        alt="Logo"
                                        width={60}
                                        height={17}
                                        className="object-cover"
                                    />
                                ))
                            }
                        </div>
                      </motion.div>
          </div>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1.3}} className='w-full h-[40vh] md:h-[50vh] lg:h-[calc(100vh-80px)] relative self-start'>
              <Image
                src="/notion/hero_image.png"
                alt="hand drawn image of a man and a woman sitting at a table with 2 laptops"
                fill
                className='object-cover'
              />
          </motion.div>
       </div>
    </div>
  )
}

export default Notion