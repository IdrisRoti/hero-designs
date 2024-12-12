"use client"

import { motion } from 'framer-motion'

type TModal = {
    className?: string;
    children: React.ReactNode;
    closeModal: () => void;
}

const Modal = ({className, children, closeModal}: TModal) => {
  return (
    <motion.div
        initial={{
            opacity: 0
        }} 
        animate={{
            opacity: 1
        }} 
        exit={{
            opacity: 0
        }} 
        transition={{
            duration: .3, ease: "easeInOut"
        }}
        onClick={closeModal} 
        className='fixed top-0 left-0 w-screen h-screen bg-white/20 backdrop-blur-[5px] z-[100] grid place-items-center'
    >
        <motion.div
            initial={{
                y: 20, opacity: 0
            }} 
            animate={{
                y: 0, opacity: 1
            }} 
            exit={{
                y: 20, opacity: 0
            }} 
            transition={{
                duration: .3, ease: "easeInOut"
            }}
            onClick={(e) => e.stopPropagation()}
            className={
                `p-1 rounded-xl shadow-lg border 
                    ${className}
                `
            }
        >
            {children}
        </motion.div>
    </motion.div>
  )
}

export default Modal