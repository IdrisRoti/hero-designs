"use client"

import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion"

import { MdPeopleOutline } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";
import { PiDotsSixVertical } from "react-icons/pi";

type TSidebarHeaderDropdown = {
    setOpenDropDown: Dispatch<SetStateAction<boolean>>; 
}

const SidebarHeaderDropdown = ({setOpenDropDown}: TSidebarHeaderDropdown) => {
        return (
                <div
                    onClick={() => setOpenDropDown(false)} 
                    className="w-screen h-screen absolute top-0 left-0 text-stone-500 text-xs"
                >
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 20}}
                        transition={{ duration: .3, ease: "easeInOut" }}
                        onClick={(e) => e.stopPropagation()} 
                        className="absolute top-12 lg:top-11 left-4 w-[90vw] md:w-[55vw] lg:w-[25vw] overflow-hidden bg-white shadow-xl rounded-xl z-[120]"
                    >
                        <header className="p-3 border-b border-stone-300">
                            <div className="flex gap-3 items-center">
                                <span className="size-8 text-lg font-semibold text-stone-500 bg-stone-200 grid place-items-center rounded-md">R</span>
                                <div>
                                    <h2>Roti</h2>
                                    <p className="text-stone-400 font-normal"><span>Free Plan</span><span>1 member</span></p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center mt-3">
                                <button className="py-1 px-3 border border-stone-200 hover:bg-stone-100 transition flex items-center gap-2 rounded-lg">
                                    <CiSettings className="size-4" />
                                    <span className="text-stone-400 text-xs">Settings</span>
                                </button>
                                <button className="py-1 px-3 border border-stone-200 hover:bg-stone-100 transition flex items-center gap-2 rounded-lg">
                                    <MdPeopleOutline className="size-4" />
                                    <span className="text-stone-400 text-xs">Invite members</span>
                                </button>
                            </div>
                        </header>
                        <div className="bg-stone-50 hover:bg-stone-100 py-1.5 transition group border-b border-stone-300 p-3">
                            <h3 className="my-2">idrisRoti@gmail.com</h3>
                            <div className="flex justify-between items-center pr-2">
                                <div className="flex items-center gap-2">
                                    <span className="hidden group-hover:grid transition size-6 bg-stone-200 place-items-center rounded-md">
                                        <PiDotsSixVertical className="size-4" />
                                    </span>
                                    <span className="size-6 text-sm font-semibold text-stone-500 bg-stone-200 grid place-items-center rounded-md group-hover:hidden transition">R</span>
                                    <h2 className="">Roti</h2>
                                </div>
                                <GiCheckMark className="size-3" />
                            </div>
                        </div>
                        <div className="bg-stone-50 border-b border-stone-300 p-3 flex flex-col gap-3 items-start">
                            <button className="hover:text-black transition">Add another account</button>
                            <button className="hover:text-black transition">Log out</button>
                        </div>
                        <button className="bg-stone-50  transition hover:bg-stone-100 p-3 w-full text-left">Get Windows app</button>
                    </motion.div>
                </div>
            )
         }

export default SidebarHeaderDropdown