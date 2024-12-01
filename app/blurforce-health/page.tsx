import BlurForceHealth from "@/components/blurforce-health/BlurForceHealth"
import { Lato } from "next/font/google"

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700"]})

const BlurforceHealthPage = () => {
  return (
    <div className={`max-w-[75rem] mx-auto px-4 ${lato.className}`}>
        <BlurForceHealth />
    </div>
  )
}

export default BlurforceHealthPage