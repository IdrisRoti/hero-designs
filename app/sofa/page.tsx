import Sofa from "@/components/sofa/Sofa"
import { Lato } from "next/font/google"

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700"]})

const SofaPage = () => {
  return (
    <div className={`${lato.className}`}>
        <Sofa />
    </div>
  )
}

export default SofaPage