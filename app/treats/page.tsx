import Treats from "@/components/treats/Treats"
import { Modak, Nunito } from "next/font/google"

const modak = Modak({ subsets: ["latin"], weight: ['400']})
const nunito = Nunito({ subsets: ["latin"], weight: ['400']})

const TreatsPage = () => {
  return (
    <div className={`${modak.className} ${nunito.className}`}>
        <Treats />
    </div>
  )
}

export default TreatsPage