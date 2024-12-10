import { BiChevronRight } from "react-icons/bi"
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { IconType } from "react-icons";

import { useState } from "react";
import SidebarTeamDropdown from "./SidebarTeamDropdown";

type TSidebarTeamLink = {
    icon: IconType;
    label: string;
    subLinks: {
        id: number;
        icon: IconType | null;
        label: string;
        subLinks: {
            label: string;
            href: string;
            }[]
        }[]
}

const SidebarTeamLink = ({icon: Icon, label, subLinks}: TSidebarTeamLink) => {
    const [openSubLinks, setOpenSubLinks] = useState(false);
    const [openTeamDropdown, setOpenTeamDropdown] = useState(false);

  return (
    <>
        <div
            className='relative cursor-pointer flex items-center justify-between w-full gap-2 last-of-type:mb-0 hover:bg-stone-200/50 px-2 py-1.5 transition rounded-md group'
        >
            <div className="flex items-center gap-2">
                {subLinks.length && (
                    <button
                        onClick={() =>  setOpenSubLinks(prev => !prev)} 
                        className={`hidden group-hover:grid transition size-6 hover:bg-stone-200 place-items-center rounded-md ${openSubLinks && "rotate-[90deg]"}`}
                    >
                        <BiChevronRight className="size-6 text-stone-400" />
                    </button>
                )}
                <span className="group-hover:hidden transition size-6 bg-rose-100 grid place-items-center rounded-md">
                    <Icon className="text-rose-500" />
                </span>
                <h2 className="text-stone-800">{label}</h2>
            </div>
            <div className=" flex items-center gap-2">
                <button
                    onClick={() => setOpenTeamDropdown(true)} 
                    className="hidden group-hover:grid transition size-6 hover:bg-stone-200 place-items-center rounded-md">
                    <HiEllipsisHorizontal className="size-4 cursor-pointer" />
                </button>
                <button className="hidden group-hover:block">
                    <GoPlus className="size-4 cursor-pointer" />
                </button>
            </div>
                {
                    openTeamDropdown && <SidebarTeamDropdown setOpenTeamDropdown={setOpenTeamDropdown} />
                }
        </div>
        {openSubLinks && (
            <div className="ml-3">
                {
                    subLinks.length && subLinks.map(({id, icon: Icon, label}) => (
                        <button
                            className='flex items-center w-full gap-2 last-of-type:mb-0 hover:bg-stone-200/50 px-2 py-1.5 transition rounded-md' 
                            key={id} 
                        >
                            {Icon ? <div className="size-5 rounded-md grid place-items-center">
                                <Icon />
                            </div> : <div className="size-5 bg-white rounded-md" />}
                            <span>{label}</span>
                        </button>
                    ))
                }
            </div>
        )}
    </>
  )
}

export default SidebarTeamLink