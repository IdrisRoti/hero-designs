"use client"

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion';

import Header from './Header'
import LearnMoreModal from './learn-more-modal/LearnMoreModal';

const Construction = () => {
    const [openModal, setOpenModal] = useState(false);
    const closeModal = () => setOpenModal(false);

    const backgroundImage = "url('/construction/heroImage.jpg')"
  return (
    <>
        <div 
            style={{                 
                background: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
            }}
            className='w-screen max-w-[100rem] mx-auto h-screen max-h-[60rem]'
        >
            <div className="max-w-[90rem] mx-auto px-4">
                <Header />
                <main className='h-[calc(100vh-80px)] absolute w-full left-0 z-10 flex flex-col gap-3 items-center'>
                    <h1 className="text-4xl md:text-6xl text-center capitalize md:w-[80%] lg:w-1/2">Your experts for building construction</h1>
                    <p className='w-[90%] md:w-[50%] lg:w-1/3 text-center'>Shop high-quality cables designed to keep you connected. From fast charging to crystal clear audio, we&apos;ve got the perfect cable for every need</p>
                    <button onClick={() => setOpenModal(true)} className='text-white bg-orange-700 px-5 py-2 rounded-full hover:bg-orange-900 transition'>Learn more</button>
                </main>
            </div>
        </div>
        <AnimatePresence>
            {openModal && <LearnMoreModal closeModal={closeModal} />}
        </AnimatePresence>
    </>
  )
}

export default Construction