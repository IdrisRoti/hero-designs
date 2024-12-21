import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const navlinks = ["about", "products", "works", "people", "contacts", "login", "register"];

const Emphasys = () => {
  return (
    <div className="max-w-[90rem] mx-auto overflow-hidden">
        <header className="h-16 w-full border-b-[3px] border-[#1e1e1e] px-4">
            <nav className="h-full md:flex items-center hidden">
                {
                    navlinks.map((link) => (
                        <button key={link} className="w-full h-full hover:bg-[#1e1e1e] hover:text-white transition font-semibold uppercase text-xs lg:text-sm tracking-widest first:border-l-2 border-r-2 border-[#1e1e1e]">{link}</button>
                    ))
                }
            </nav>
            <button className="md:hidden h-full ml-auto">
                <HiOutlineMenuAlt3 className="size-6" />
            </button>
        </header>
        <main className="px-4 w-full">
            <h1 className="text-[3.5rem] md:text-[8rem] lg:text-[13rem] 2xl:text-[15rem] leading-[1.4] md:leading-[1] text-center font-bold uppercase">Emphasys</h1>
            <div className="w-full aspect-video md:aspect-[16/8] lg:aspect-[16/5] 2xl:aspect-[16/6] relative">
                <Image
                    src="/emphasys/heroImage.jpg"
                    alt="interior image of sofas and tv"
                    fill
                    className="object-cover opacity-80"
                />
                <p className="text-[#1e1e1e] text-sm md:text-base absolute top-4 max-md:left-2 md:right-10 lg:right-20 md:top-10 lg:top-20 z-10 md:w-[50%] lg:w-[25%] font-semibold">Transformative effects. Whether you&apos;re a casual jogger or a dedicated marathon runner</p>
            </div>
        </main>
    </div>
  )
}

export default Emphasys