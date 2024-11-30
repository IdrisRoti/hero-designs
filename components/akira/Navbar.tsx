import { MdOutlineShoppingCart } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav animate={{opacity: [0, 1], y: [-20, 0]}} transition={{delay: 3.5, duration: .8}} className="py-6">
        <div className="max-w-[75rem] mx-auto px-4 flex items-center justify-between">
            <div>
                <Image
                    src="/akira/logo.png"
                    alt="Akira logo"
                    width={182}
                    height={44}
                />
            </div>
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center justify-between w-[25.5rem] h-12 rounded-full border-[1.5px] border-[#37392E] px-4">
                    <input className="bg-transparent w-full h-full border-none outline-none placeholder:text-[#37392E] focus:placeholder:opacity-0 placeholder:transition-opacity placeholder:duration-500" placeholder="Search"  />
                    <CiSearch className="size-6 text-[#37392E]" />
                </div>
                <span className="md:hidden">
                    <CiSearch className="size-6 text-[#37392E]" />
                </span>
                <span>
                    <RiUser3Line className="size-6 text-[#37392E]" />
                </span>
                <span>
                    <MdOutlineShoppingCart className="size-6 text-[#37392E]" />
                </span>
            </div>
        </div>
    </motion.nav>
  )
}

export default Navbar