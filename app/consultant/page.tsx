import Consultant from "@/components/consultant/Consultant"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "700"]})

const ConsultantPage = () => {
  return (
    <div className={`${poppins.className}`}>
        <Consultant />
    </div>
  )
}

export default ConsultantPage