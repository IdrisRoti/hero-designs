import Micra from '@/components/micra/Micra'
import { Inter_Tight } from "next/font/google"

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["100", "300", "400", "500", "600", "700"]})

const MicraPage = () => {
  return (
    <div className={`${interTight.className} bg-[#FEFBEA]`}>
        <Micra />
    </div>
  )
}

export default MicraPage