import { motion } from 'framer-motion'
import Image from 'next/image'

const TickerLogos = ["/agency/blurforce.png", "/connect/unitect.png", "/akira/logo.png"]

const LogoTicker = () => {
  return (
        <>
            <h3 className='text-xs opacity-70 font-light mb-4 md:text-center lg:text-left'>Trusted by</h3>
            <div className="flex items-center md:w-1/2 md:mx-auto lg:mx-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div 
                    initial={{x: "-100%"}}
                    animate={{x: "0%"}}
                    transition={{duration: 10, ease: "linear", repeat: Infinity}}
                    className="flex items-center w-full shrink-0">
                    {
                        TickerLogos.map((logo, i) => (
                        <div 
                            key={i}
                            className="mr-5 md:mr-10 shrink-0"
                        >
                            <Image
                                src={logo}
                                alt="Logo"
                                width={60}
                                height={17}
                                className="object-cover"
                            />
                        </div>
                        ))
                    }                          
                </motion.div> 
                <motion.div 
                    initial={{x: "-100%"}}
                    animate={{x: "0%"}}
                    transition={{duration: 10, ease: "linear", repeat: Infinity}}
                    className="flex items-center w-full shrink-0">
                    {
                        TickerLogos.map((logo, i) => (
                        <div 
                            key={i}
                            className="mr-5 md:mr-10 shrink-0"
                        >
                            <Image
                                src={logo}
                                alt="Logo"
                                width={60}
                                height={17}
                                className="object-cover"
                            />
                        </div>
                        ))
                    }                          
                </motion.div> 
            </div>
        </>                        
  )
}

export default LogoTicker