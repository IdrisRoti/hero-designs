"use client"

import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

import SidebarHeader from "./SidebarHeader";
import SidebarNavLinks from "./SidebarNavLinks";
import SidebarTeamLinks from "./SidebarTeamLinks";

type TSidebar = {
    showSidebar: boolean;
    setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({showSidebar, setShowSidebar}: TSidebar) => {
  return (
    <aside
        onClick={() => setShowSidebar(false)} 
        className="fixed top-0 left-0 w-screen h-screen bg-white/30 backdrop-blur-[2px] z-50 text-stone-600 font-medium text-sm">
        <motion.div
            initial={{x: "-100%"}}
            animate={{x: 0}}
            exit={{x: "-100%"}}
            transition={{ duration: .3, ease: "easeInOut"}}
            onClick={e => e.stopPropagation()}         
            className="fixed top-0 left-0 h-screen w-[80vw] md:w-[50vw] lg:w-[22vw] p-2 bg-[rgb(247,247,245)] z-[100] shadow"
        >
            <SidebarHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <SidebarNavLinks />
            <SidebarTeamLinks />
        </motion.div>
    </aside>
  )
}

export default Sidebar