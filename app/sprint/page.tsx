import Sprint from "@/components/sprint/Sprint"
import { Bebas_Neue, Space_Grotesk } from "next/font/google"

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: [ "400"]})
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: [ "400", "500", "700"]})

const SprintPage = () => {
  return (
    <div className={`${bebasNeue.className} ${spaceGrotesk.className}`}>
        <Sprint />
    </div>
  )
}

export default SprintPage