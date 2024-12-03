import { motion } from "framer-motion"
import { useState } from "react"


const UnderlinedButton = ({children, className}: {children: React.ReactNode, className?: string}) => {
const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`uppercase text-sm ${className}`}>
      <span>{children}</span>
      <motion.div initial={{width: "0%"}} animate={isHovered ? {width: "80%"} : {width: "0%"}} transition={{duration: .5}} className="h-[1px] bg-[#1e1e1e]" />
    </motion.button>                                 
  )
}

export default UnderlinedButton