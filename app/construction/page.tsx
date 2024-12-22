import Construction from '@/components/construction/Construction';
import { Lato } from "next/font/google"

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700"]})

const ConstructionPage = () => {
  return (
    <div className={`${lato.className}`}>
        <Construction />
    </div>
  )
}

export default ConstructionPage