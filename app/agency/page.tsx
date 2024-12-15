import Agency from "@/components/agency/Agency"
import { Manrope } from "next/font/google"

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500"]})

const AgencyPage = () => {
  return (
    <div className={`${manrope.className} max-w-[90rem] mx-auto text-[#1e1e1e]`}>
        <Agency />
    </div>
  )
}

export default AgencyPage