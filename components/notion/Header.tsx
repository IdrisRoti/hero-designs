"use client"

import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

import { RxDoubleArrowRight } from "react-icons/rx";
import { CiSquareInfo } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";

import Sidebar from "./Sidebar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export const navlinks = [
    {
        id: 1,
        icon: CiSquareInfo,
        label: "About"
    },
    {
        id: 2,
        icon: AiOutlineProduct,
        label: "Products"
    },
    {
        id: 3,
        icon: MdOutlineWorkOutline,
        label: "Works"
    },
    {
        id: 4,
        icon: IoPeopleOutline,
        label: "People"
    },
    {
        id: 5,
        icon: MdOutlineContactPage,
        label: "Contacts"
    },
]

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
        <nav className="h-20 relative z-40">
            <div className="max-w-[75rem] h-full mx-auto px-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-4">
                    <span
                        onClick={() => setShowSidebar(true)} 
                        className="w-7 aspect-square hover:bg-stone-100 transition cursor-pointer rounded-md grid place-items-center"><RxDoubleArrowRight className="size-4" /></span>
                    <Image
                        src="/notion/logo.png"
                        alt="Logo"
                        width={204}
                        height={47}
                        className="w-24 h-4 object-cover"
                    />
                </div>
                    <div className="hidden md:flex items-center gap-5 lg:gap-8">
                        {
                            navlinks.map(({id, label}) => (
                                <Link key={id} className="text-xs font-semibold uppercase tracking-widest text-[#1e1e1e] hover:text-[#1e1e1e]/50 transition" href="#">
                                    {label}
                                </Link>
                            ))
                        }
                    </div>
                    <Button>Sign Up</Button>
            </div>
        </nav>
        <AnimatePresence>
            {showSidebar && <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}
        </AnimatePresence>  
    </>
  )
}

export default Header