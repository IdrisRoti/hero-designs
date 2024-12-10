"use client"

import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { BiChevronDown } from "react-icons/bi"
import { RxDoubleArrowLeft } from "react-icons/rx";
import { IoCreateOutline } from "react-icons/io5";
import SidebarHeaderDropdown from "./SidebarHeaderDropdown";

type TSidebarHeader = {
    showSidebar: boolean;
    setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

const SidebarHeader = ({showSidebar, setShowSidebar}: TSidebarHeader) => {
const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <>
        <header
            onClick={() => setOpenDropDown(true)} 
            className="flex items-center justify-between cursor-pointer hover:bg-stone-200/50 px-2 py-1.5 transition rounded-md group">
            <div className="flex items-center gap-2">
                <span className="size-6 text-sm font-semibold text-stone-500 bg-stone-200 grid place-items-center rounded-md">R</span>
                <h2 className="text-stone-800">Roti</h2>
                <BiChevronDown className="size-6 text-stone-400" />
            </div>
            <div className="flex items-center gap-2">
                <span
                    onClick={(e) => {setShowSidebar(false); e.stopPropagation()}} 
                    className="w-6 aspect-square hover:bg-stone-200 transition cursor-pointer rounded-md hidden group-hover:grid place-items-center">
                    <RxDoubleArrowLeft className="size-5 text-stone-400 hover:text-inherit" />
                </span>
                <IoCreateOutline className="size-5 cursor-pointer" />
            </div>
        </header>
        {/* DROPDOWN */}
        <AnimatePresence>
            {openDropDown && showSidebar && (
                <SidebarHeaderDropdown setOpenDropDown={setOpenDropDown} />
            )}
        </AnimatePresence>
    </>
  )
}

export default SidebarHeader;