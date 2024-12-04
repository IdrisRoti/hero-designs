import Studios from "@/components/studios/Studios"
import { Bebas_Neue } from "next/font/google"

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: [ "400"]})

const StudiosPage = () => {
  return (
    <div className={`${bebasNeue.className} bg-[#1e1e1e]`}>
        <Studios />
    </div>
  )
}

export default StudiosPage