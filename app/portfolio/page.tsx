import Portfolio from "@/components/portfolio/Portfolio"
import { Nunito } from "next/font/google"

const nunito = Nunito({ subsets: ["latin"], weight: ["200", "300", "400", "700"]})

const PortfolioPage = () => {
  return (
    <div className={`${nunito.className} text-[#1e1e1e]`}>
        <Portfolio />
    </div>
  )
}

export default PortfolioPage