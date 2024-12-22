"use client"

import { PiX } from "react-icons/pi";
import LearnMoreSwiper from "./LearnMoreSwiper";
import { motion } from "framer-motion";

type TLearnMoreModal = {
    closeModal: () => void;
}

const LearnMoreModal = ({closeModal}: TLearnMoreModal) => {
  return (
    <motion.div
        initial={{opacity: 0}} 
        animate={{opacity:1}} 
        exit={{opacity: 0}} 
        transition={{duration: .3}}
        onClick={() => closeModal()} 
        className="w-screen h-screen fixed inset-0 bg-white/20 backdrop-blur-[3px] grid place-items-center z-[100]">
        <motion.div
            initial={{y: 20, opacity: 0}} 
            animate={{y: 0, opacity:1}} 
            exit={{y: 20, opacity: 0}} 
            transition={{duration: .3}}
            onClick={e => e.stopPropagation()} className="relative w-[95vw] md:w-[50vw] lg:w-[30vw] max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden overflow-y-hidden bg-slate-100">
            <LearnMoreSwiper />
            <button onClick={() => closeModal()} className="absolute right-5 top-5 z-[90] hover:opacity-70 transition"><PiX className="size-4" /></button>
        </motion.div>
    </motion.div>
  )
}

export default LearnMoreModal