import Image from "next/image"
import CustomButton from "./CustomButton";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const navlinks = ["About", "Projects", "Services", "People", "Get In Touch"];

const Header = () => {
  return (
    <header className="h-20">
        <nav className="h-full flex items-center justify-between">
            <Image
                src="/micra/MICRA.png"
                alt="MICRA"
                width={160}
                height={40}
                className="w-28"
            />
            <div className="hidden md:flex items-center gap-3">
                {
                    navlinks.map((link) => (
                        <CustomButton key={link}>{link}</CustomButton>
                    ))
                }
            </div>
            <button className="md:hidden">
                <HiOutlineMenuAlt3 className="size-6" />
            </button>
        </nav>
    </header>
  )
}

export default Header
// shadow-[5px,5px,5px,rgba(0,0,0,.9)