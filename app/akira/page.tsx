import Akira from "@/components/akira/Akira"

import { Lato, DM_Serif_Display } from "next/font/google"

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700"]})
const dmserif = DM_Serif_Display({ subsets: ["latin"], weight: [ "400"]})

const AkiraPage = () => {
  return (
    <div className={`${lato.className}`}>
        <Akira dmserif={dmserif} />
    </div>
  )
}

export default AkiraPage