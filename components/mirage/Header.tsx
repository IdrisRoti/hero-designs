"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";

export const navlinks = ["Home", "Category", "About us"];

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

  return (
    <>
        <nav className="relative max-w-[75rem] px-4 mx-auto h-16 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
                <span onClick={() => setShowMenu(true)} className="bg-[#4A2A14] hover:bg-[#4A2A14]/60 transition cursor-pointer px-4 py-1.5 rounded-full">
                    <MdMenu className="size-6 md:size-8" />
                </span>
                <div className="lg:flex items-center gap-2 hidden">
                    {
                        navlinks.map((link) => (
                            <Link key={link} className="bg-white/10 hover:bg-white/30 transition px-4 py-1.5 rounded-full" href="#">{link}</Link>
                        ))
                    }
                </div>
            </div>
            <h1 className="text-5xl hidden md:block [font-family:Henny_Penny] font-bold">Mirage</h1>
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center h-8 md:h-10 rounded-full bg-white/10 px-3">
                    <input type="search" placeholder="Search" className="bg-transparent h-full w-full border-none focus:outline-none placeholder:text-white placeholder:text-sm" />
                    <BiSearch />
                </div>
                <Image
                    src="/mirage/profile.png"
                    alt="profile image"
                    width={100}
                    height={100}
                    className="w-10 aspect-square rounded-full"
                />
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