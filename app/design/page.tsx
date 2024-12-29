import { Bebas_Neue } from 'next/font/google';

import Design from '@/components/design/Design';

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: [ "400"]})

const DesignPage = () => {
  return (
    <div className={`${bebasNeue.className}`}>
        <Design />
    </div>
  )
}

export default DesignPage;