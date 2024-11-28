import { IBM_Plex_Sans } from "next/font/google"
import BlueforceAi from "@/components/blueforce-ai/BlueforceAi"

const ibm = IBM_Plex_Sans({ subsets: ["latin"], weight: ["100", "300", "400", "500", "600", "700"]})

const BlueForceAiPage = () => {
  return (
    <div className={`${ibm.className}`}>
      <BlueforceAi />
    </div>
  )
}

export default BlueForceAiPage;