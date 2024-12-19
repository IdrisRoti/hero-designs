import { BiChevronRight } from "react-icons/bi"
import CustomButton from "./CustomButton"
import Header from "./Header"
import Image from "next/image"

const Micra = () => {
  return (
    <div className="h-screen max-h-[60rem] max-w-[90rem] mx-auto px-4 overflow-hidden text-[#08163B]">
        <Header />
        <div className="relative h-[55vh] bg-[#E68FDE] rounded-lg flex flex-col overflow-hidden">
            <div className="w-full lg:w-[60%] h-full overflow-hidden p-6 md:p-14 py-10 md:py-0 flex flex-col md:justify-center items-start gap-3">
                <h1 className="text-4xl md:text-6xl font-bold">Bold Brands,<br /> Unforgettable<br /> 
                Stories.</h1>
                <p className="font-medium">Crafting unique identities that stand out and stick.</p>
                <CustomButton className="flex items-center gap-2 justify-center px-8">
                    <span className="font-semibold">Let&apos;s Talk</span>
                    <span><BiChevronRight /></span>
                </CustomButton>
            </div>
            <div className="w-[70%] md:w-[50%] lg:w-[40%] h-auto lg:h-full overflow-hidden absolute -right-[5rem] -bottom-[4rem]">
                <Image
                    src="/micra/gear.png"
                    alt="MICRA"
                    width={863}
                    height={842}
                    className=""
                />                
            </div>
        </div>
        <div className="relative overflow-hidden h-[30vh] w-full bg-[#E68FDE] rounded-lg mt-6">
            <Image
                src="/micra/heroImage.png"
                alt="MICRA"
                fill
                className="object-cover object-top"
            />
            <Image
                src="/micra/loveLeft.png"
                alt="MICRA"
                width={200}
                height={429}
                className="object-cover absolute -top-16 md:-top-10 -left-20 md:-left-14 z-10"
            />
            <Image
                src="/micra/loveRight.png"
                alt="MICRA"
                width={200}
                height={429}
                className="object-cover absolute -bottom-16 md:-bottom-10 -right-24 md:-right-16 z-10"
            />
        </div>
    </div>
  )
}

export default Micra;