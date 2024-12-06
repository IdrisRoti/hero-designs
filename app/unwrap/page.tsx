import Unwrap from '@/components/unwrap/Unwrap'
import { Nunito } from "next/font/google"

const nunito = Nunito({ subsets: ["latin"], weight: ["300", "400", "500", "700"]})

const UnwrapPage = () => {
  return (
    <div className={`${nunito.className}`}>
        <Unwrap />
    </div>
  )
}

export default UnwrapPage