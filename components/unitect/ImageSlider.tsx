import { AnimatePresence, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageSlider = ({images, interval = 500, width,height}: {images: string[], interval?: number, width?: MotionValue<string>, height?: MotionValue<string>}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, interval);
    
        return () => clearInterval(timer);
      }, [images.length, interval]);

      const variants = {
        initial: { opacity: 0,  },
        animate: { opacity: 1, },
        exit: { opacity: 0, },
      };

  return (
    <AnimatePresence>
        <motion.div 
            style={width && height ? {                 
                width,
                height,
            }: {}}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.8 }}
            className="rounded-lg max-lg:left-1/2 max-lg:-translate-x-1/2 absolute right-4 max-lg:w-full h-full bg-slate-900">
        {images.map((image, index) => currentImageIndex === index ? (
            (
                <Image
                    key={index}
                    src={image}
                    alt="selected furniture image"
                    fill
                    className="object-cover rounded-lg"
                />
            )
        ) : null)}
            <p className="absolute -bottom-8">Selected works 2024</p>
        </motion.div>
    </AnimatePresence>
  )
}

export default ImageSlider