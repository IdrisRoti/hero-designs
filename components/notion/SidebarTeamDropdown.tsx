import { Dispatch, SetStateAction } from "react";
import { BsPersonAdd } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { PiArrowBendUpRightLight } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import { BiLink } from "react-icons/bi";

type TSidebarTeamDropdown = {
    setOpenTeamDropdown: Dispatch<SetStateAction<boolean>>
}

const SidebarTeamDropdown = ({setOpenTeamDropdown}: TSidebarTeamDropdown ) => {
  return (
    <div
        onClick={() => setOpenTeamDropdown(false)} 
        className="w-screen h-screen absolute top-0 left-0 text-stone-500 text-xs">
        <div
            onClick={(e) => e.stopPropagation()} 
            className="absolute top-12 lg:top-8 left-4 w-[90vw] md:w-[55vw] lg:w-[20vw] overflow-hidden bg-white shadow-xl rounded-xl z-[120]">
                <div className="p-1.5 border-b border-stone-200">
                    <button className="flex gap-2 items-center justify-start px-3 py-1.5 hover:bg-stone-100 rounded-md w-full">
                        <span><BsPersonAdd className="size-4" /></span>
                        <span>Add members</span>
                    </button>
                </div>
                <div className="p-1.5 border-b border-stone-200">
                    <button className="flex gap-2 items-center justify-start px-3 py-1.5 hover:bg-stone-100 rounded-md w-full">
                        <span><CiSettings className="size-4" /></span>
                        <span>Team space settings</span>
                    </button>
                </div>
                <div className="p-1.5 border-b border-stone-200">
                    <button className="flex gap-2 items-center justify-start px-3 py-1.5 hover:bg-stone-100 rounded-md w-full">
                        <span><PiArrowBendUpRightLight className="size-4" /></span>
                        <span>Rename</span>
                    </button>
                    <button className="flex gap-2 items-center justify-start px-3 py-1.5 hover:bg-stone-100 rounded-md w-full">
                        <span><BiLink className="size-4" /></span>
                        <span>Copy link</span>
                    </button>
                    <button className=" flex gap-2 items-center justify-start px-3 py-1.5 hover:bg-stone-100 rounded-md w-full">
                        <span><GoTrash className="size-4 text-rose-600 transition" /></span>
                        <span className="text-rose-600 transition">Move to trash</span>
                    </button>
                </div>
            </div>
    </div>
  )
}

export default SidebarTeamDropdown