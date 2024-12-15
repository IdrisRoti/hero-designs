import Image from "next/image";
import { BiMenu } from "react-icons/bi";

const navlinks = ["about", "products", "works", "people", "contacts"];

const Header = () => {
  return (
    <header className="h-20">
        <nav className="px-4 h-full flex items-center justify-between gap-3">
            <Image
                src="/agency/blurforce.png"
                alt="Blurforce Logo"
                width={100}
                height={25}
                className="object-cover"
            />
            <div className="h-full md:flex items-center justify-center gap-5 md:gap-10 hidden">
                {navlinks.map((link, i) => (
                    <button key={i} className="uppercase text-xs md:text-sm tracking-widest hover:text-black transition">{link}</button>
                ))}
            </div>   
            <button className="md:hidden"><BiMenu className="size-5" /></button>         
        </nav>
    </header>
  )
}

export default Header