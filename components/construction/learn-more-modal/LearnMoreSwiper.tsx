"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { LearnMoreSlidesContent } from '../constants'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { BsSend } from 'react-icons/bs'

const LearnMoreSwiper = () => {
    const [swipeIndex, setSwipeIndex] =  useState(0);

    const handleNextSlide = (type: "Next" | "Back") => {
        if(type === "Next") {
            setSwipeIndex((prev) => (
                prev < LearnMoreSlidesContent.length - 1 ? prev+ 1 : LearnMoreSlidesContent.length -1
            ))
        }
        
        if(type === "Back") {
            setSwipeIndex((prev) => (
                prev > 0 ? prev- 1 : 0
            ))
        }
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if(e.key === "ArrowLeft") handleNextSlide("Back")
            if(e.key === "ArrowRight") handleNextSlide("Next")
        }

        if(typeof window !== undefined) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [])

  return (
    <div className='w-full h-full overflow-hidden flex flex-col gap-4'>
        <motion.div
            animate={{ translateX: `-${swipeIndex * 100}%`}} 
            transition={{duration: .5}}
            className="w-full h-full flex items-center">
            {
                LearnMoreSlidesContent.map(({id, title, content, image}) => (
                    <article key={id} className='w-full flex-shrink-0 text-center'>
                        <Image
                            src={image}
                            alt={title}
                            width={400}
                            height={400}
                            className='w-[50%] aspect-square mx-auto'
                        />
                        <h1 className="font-semibold text-lg max-w-[90%] mx-auto">{title}</h1>
                        <p className='text-sm opacity-80 mt-3 max-w-[90%] mx-auto'>{content}</p>
                    </article>
                ))
            }
        </motion.div>
        <div className='flex items-center justify-center gap-1.5 p-5'>
            {
                LearnMoreSlidesContent.map((_, i) => (
                    <div key={i} className={`size-2 rounded-full ${swipeIndex === i ? "bg-blue-600" : "bg-slate-300 "}`} />
                ))
            }
        </div>
        <div className="flex items-center justify-between p-5">
            <button
                disabled={swipeIndex === 0}
                onClick={() => handleNextSlide("Back")}
                className='flex items-center gap-1 px-3 py-1.5 border-[1.5px] rounded-lg border-slate-300 text-sm hover:bg-blue-600 hover:text-white transition disabled:opacity-50 disabled:pointer-events-none'>
                <BiChevronLeft className='size-5' />
                <span>Back</span>
            </button>
            {
                swipeIndex === LearnMoreSlidesContent.length -1 ? (
                    <button
                        className='flex items-center gap-2 px-3 py-1.5 border-[1.5px] rounded-lg border-slate-300 text-sm hover:bg-blue-600 hover:text-white transition'>
                        <span>Contact Us</span>
                        <BsSend className='size-3' />
                    </button>
                ) : (
                    <button
                        onClick={() => handleNextSlide("Next")} 
                        className='flex items-center gap-1 px-3 py-1.5 border-[1.5px] rounded-lg border-slate-300 text-sm hover:bg-blue-600 hover:text-white transition'>
                        <span>Next</span>
                        <BiChevronRight className='size-5' />
                    </button>
                )
            }
        </div>
    </div>
  )
}

export default LearnMoreSwiper