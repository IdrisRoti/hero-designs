import Unitect from "@/components/unitect/Unitect"
import { Lato } from "next/font/google"

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700"]})

const UnitectPage = () => {
  return (
    <div className={`${lato.className}`}>
        <Unitect />
        <div className="h-[200vh]"></div>
    </div>
  )
}

export default UnitectPage