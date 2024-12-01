import Photography from "@/components/photography/Photography"
import { Roboto } from "next/font/google"

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "700"]})

const PhotographyPage = () => {
  return (
    <div className={`${roboto.className} min-h-screen overflow-hidden bg-[#1e1e1e] text-white`}>
        <Photography />
    </div>
  )
}

export default PhotographyPage