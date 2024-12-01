import { motion } from 'framer-motion'

type TInfiniteCarousel = {
    children: React.ReactNode;
    direction?: "left" | "right";
    duration?: number
}

const InfiniteCarousel = ({children, direction = "left", duration = 30}: TInfiniteCarousel) => {
  return (
    <div className="flex items-center mb-5">
        <motion.div 
            initial={direction === "left" ? { x: "0%" } : { x: "-100%" }}
            animate={direction === "left" ? { x: "-100%" } : { x: "0%" }}
            transition={{ duration: duration, ease: "linear", repeat: Infinity }}
            className="flex items-center">
            {children}
        </motion.div>
        <motion.div 
            initial={direction === "left" ? { x: "0%" } : { x: "-100%" }}
            animate={direction === "left" ? { x: "-100%" } : { x: "0%" }}
            transition={{ duration: duration, ease: "linear", repeat: Infinity }}
            className="flex items-center">
            {children}
        </motion.div>
    </div>
  )
}

export default InfiniteCarousel