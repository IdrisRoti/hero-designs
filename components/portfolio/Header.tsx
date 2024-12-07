"use client"

import Link from "next/link"
import { navlinks } from "./constants"
import { motion } from "framer-motion"
import { useState } from "react"

const Header = () => {
    const [activeLinkId, setActiveLinkId] = useState(1)
  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-[999]">
        <div className="flex items-center justify-between gap-0 md:gap-10 h-full max-w-[75rem] mx-auto px-4">
            {
                navlinks.map(({id, href, label, subLabel }) => {

                    return (
                        <Link 
                        onClick={() => setActiveLinkId(id)}
                            key={id} 
                            href={href} 
                            className="relative w-full">
                            <h3 className="uppercase font-semibold text-xs">{label}</h3>
                            <p className="uppercase opacity-60 text-[10px] md:text-xs">{subLabel}</p>
                            {id === activeLinkId && <motion.div layoutId="activeLink" className="w-full h-[1.5px] mt-2 bg-[#1e1e1e]" />}
                        </Link>
                    )
                })
            }
        </div>
    </nav>
  )
}

export default Header