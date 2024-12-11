"use client"

import { AnimatePresence } from "framer-motion"
import { useState } from "react";
import { MdMenu } from "react-icons/md"
import Menu from "./Menu";

export const navlinks = ["about us", "products", "services", "history", "our team", "contact form"]

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    
  return (
    <>
        <nav className="w-full h-20 z-[999] absolute left-0">
            <div className="h-full w-full max-w-[90rem] mx-auto px-4 flex items-center justify-between gap-4">
                <button onClick={() => setShowMenu(true)} className="lg:hidden bg-[#1e1e1e] rounded-full size-10 grid place-items-center text-white"><MdMenu className="size-6" /></button>
                {
                    navlinks.map((link) => (
                        <button 
                            key={link} 
                            className="hidden lg:block w-full bg-transparent border-[2px] border-[#1e1e1e] hover:bg-[#1e1e1e] hover:text-white transition font-semibold uppercase tracking-wide rounded-full p-3"
                        >
                            {link}
                        </button>
                    ))
                }
                        <button
                            className="lg:w-full text-white bg-[#1e1e1e] border-[2px] border-[#1e1e1e] hover:bg-transparent hover:text-[#1e1e1e] transition font-semibold uppercase tracking-wide rounded-full p-3"
                        >
                            shop online
                        </button>
            </div>
        </nav>
        {
            <AnimatePresence>
                {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu}/>}
            </AnimatePresence>
        } 
    </>
  )
}

export default Header