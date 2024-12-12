"use client"

import Image from "next/image"
import Header from "./Header"
import { BsArrowRight } from "react-icons/bs"
import Modal from "./Modal"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import SignUpModal from "./SignUpModal"

const Sprint = () => {
    const [openSignUpModal, setOpenSignUpModal] = useState(false);

    const closeSignUpModal = () => setOpenSignUpModal(false);

  return (
    <>
        <div className="w-screen h-screen overflow-hidden text-white md:text-[#1e1e1e] max-md:after:absolute after:inset-0 after:bg-black/30">
            <Header />
            <section className="w-full max-w-[90rem] mx-auto px-4 h-[calc(100vh-80px)] flex items-center absolute bottom-0 z-[98]">
                <div className="">
                    <motion.h1 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: .5, ease: "easeInOut"}}
                        className="text-[5rem] md:text-[8rem] lg:text-[11rem] leading-[.8] [font-family:Bebas_Neue]"
                    >
                            SURPASS <br />YOUR LIMITS
                    </motion.h1>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: .5, ease: "easeInOut", delay: .5}}                         
                        className="flex flex-col lg:flex-row items-start mt-4 md:w-[45vw] gap-3">
                        <p className="">
                            Whether you&apos;re a casual jogger or a dedicated marathon runner, the act of lacing up your shoes and hitting the pavement or trail can have more transformative effects.
                        </p>
                        <button 
                            onClick={() => setOpenSignUpModal(true)}
                            className="flex-shrink-0 p-4 rounded-2xl flex items-center gap-5 border-2 border-white md:border-[#1e1e1e] hover:bg-white hover:text-[#1e1e1e] md:hover:bg-[#1e1e1e] md:hover:text-white transition group">
                            <span className="font-medium uppercase text-lg">click here to start</span>
                            <BsArrowRight className="size-6" />
                        </button>
                    </motion.div>
                </div>
            </section>
            <div className="w-[100vw] md:w-[50vw] h-screen absolute right-0 top-0">
                <Image
                    src="/sprint/runner.png"
                    alt="A runner"
                    fill
                    className="object-cover"
                />
            </div>
                <Image
                    src="/sprint/brush_stroke.png"
                    alt="A runner"
                    width={450}
                    height={100}
                    className="object-cover absolute w-[200px] md:w-[350px] lg:w-[450px] h-[50px] md:h-[80px] lg:h-[100px] top-[45%] lg:top-1/2 left-1/4"
                />
        </div>
        <AnimatePresence>
            {
                openSignUpModal && 
                <Modal className="bg-white rounded-2xl" closeModal={closeSignUpModal}>
                    <SignUpModal />
                </Modal>
            }
        </AnimatePresence>
    </>
  )
}

export default Sprint