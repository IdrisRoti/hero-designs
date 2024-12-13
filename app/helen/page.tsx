import Helen from '@/components/helen/Helen'

import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "700"]})

const HelenPage = () => {
  return (
    <div className={`${roboto.className}`}>
        <Helen />
    </div>
  )
}

export default HelenPage