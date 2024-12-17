import Finance from '@/components/finance/Finance'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "700"]})

const FinancePage = () => {
  return (
    <div className={`${roboto.className}`}><Finance /></div>
  )
}

export default FinancePage