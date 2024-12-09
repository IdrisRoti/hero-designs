import Connect from "@/components/connect/Connect"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "700"]})

const ConnectPage = () => {
  return (
    <div className={`${poppins.className}`}>
        <Connect />
    </div>
  )
}

export default ConnectPage