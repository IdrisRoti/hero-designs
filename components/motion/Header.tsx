import { BiUser } from "react-icons/bi"

const navlinks = ["about", "products", "works", "people", "contacts"];

const Header = ({textPrimaryColor, bgPrimaryColor}: { textPrimaryColor: string, bgPrimaryColor: string}) => {
  return (
    <div className="remove-scrollbar bg-black">
        <div className="flex items-center justify-center h-10 relative"> 
            <h1 className={`uppercase text-xl ${textPrimaryColor}`}>Motion</h1>
            <div className={`absolute right-0 h-full aspect-square grid place-items-center self-end ${bgPrimaryColor}`}><BiUser className="text-black size-6" /></div>
        </div>
        <nav className=" h-10">
            <div className="h-full max-w-[90rem] mx-auto flex items-center justify-center gap-5 md:gap-10">
                {navlinks.map((link, i) => (
                    <button key={i} className="uppercase text-xs md:text-sm tracking-widest text-white/60 hover:text-white transition">{link}</button>
                ))}
            </div>
        </nav>
    </div>
  )
}

export default Header