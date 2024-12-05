import Motion from "@/components/motion/Motion"
import { Sofia_Sans, Montserrat, Rajdhani } from "next/font/google"

const sofiaSans = Sofia_Sans({ subsets: ["latin"], weight: ["100", "300", "400", "500"]})
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "700"]})
const rajdhani = Rajdhani({ subsets: ["latin"], weight: [ "300", "400", "700"]})

const MotionPage = () => {
  return (
    <div className={`${sofiaSans.className} ${montserrat.className} ${rajdhani.className}`}>
        <Motion />
    </div>
  )
}

export default MotionPage