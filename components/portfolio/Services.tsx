"use client"

import { motion } from "framer-motion"
import About from "./About"
import Experience from "./Experience"

const Services = () => {
  return (
    <motion.div className="relative">
        <About />
        <Experience />
    </motion.div>
  )
}

export default Services