import Mirage from "@/components/mirage/Mirage"
import { Quintessential, Henny_Penny } from "next/font/google"

const quintessential = Quintessential({ subsets: ["latin"], weight: ["400"]})
const hennyPenny = Henny_Penny({ subsets: ["latin"], weight: ["400"]})


const MiragePage = () => {
  return (
    <div className={`${hennyPenny.className} ${quintessential.className}`}>
        <Mirage />
    </div>
  )
}

export default MiragePage