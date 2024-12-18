import Talent from "@/components/talent/Talent";
import { Lato } from "next/font/google"

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700"]})

const TalentPage = () => {
  return (
    <div className={`${lato.className} bg-black`}>
        <Talent />
    </div>
  )
}

export default TalentPage;