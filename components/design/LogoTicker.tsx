import { motion } from 'framer-motion'
import Image from 'next/image'

const TickerLogos = ["/design/arizona.png", "/design/blurforce.png", "/design/unitect.png", "/design/flavour.png", "/design/uspace.png",]

const LogoTicker = () => {
  return (
        <>
            <div className="my-8 flex items-center w-full md:w-1/2 mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div 
                    initial={{x: "-100%"}}
                    animate={{x: "0%"}}
                    transition={{duration: 10, ease: "linear", repeat: Infinity}}
                    className="flex items-center w-auto shrink-0">
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
                    className="flex items-center w-auto shrink-0">
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