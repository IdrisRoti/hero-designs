"use client"

import { motion, useAnimate, useDragControls, useMotionValue } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { BiX } from "react-icons/bi";

type TDrawer = {
    position: "left" | "bottom";
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    className?: boolean; 
}

const Drawer = ({position, children, isOpen, setIsOpen, className}: TDrawer) => {
const [scope, animate] = useAnimate()

    const controls = useDragControls()
    const y = useMotionValue(0);

    const yStart = typeof y.get() === "number" ? y.get() : 0

    const closeDrawer = async () => {
        if(position === "bottom"){
            animate(scope.current, {opacity: [1, 0]});
            await animate("#drawer", {y: [yStart, 200]}, {duration: 1});
        }
        
        if(position === "left"){
            animate(scope.current, {opacity: [1, 0]});
            await animate("#drawer", {x: ["0%", "-100%"]});
        }

        setIsOpen(false)
    }

  switch (position) {
    case "bottom":
        return (
            isOpen && <motion.div
                ref={scope}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                onClick={closeDrawer} 
                className="bg-black/20 backdrop-blur-sm fixed inset-0 z-50"
            >
                <motion.div
                    id="drawer"
                    drag="y"
                    dragControls={controls}
                    dragListener={false}
                    dragConstraints={{
                        top: 0,
                        bottom: 0
                    }}
                    dragElastic={{
                        top: 0,
                        bottom: 0.5
                    }}
                    style={{y}}
                    initial={{y: "100%"}}
                    animate={{y: "0%"}}
                    transition={{ease: "easeInOut"}}
                    onDragEnd={() => y.get() > 100 && setIsOpen(false)}
                    onClick={(e) => e.stopPropagation()} 
                    className={`absolute bottom-0 h-[70vh] w-full bg-black rounded-t-2xl overflow-hidden p-4 ${className}`}
                >
                    <div className="w-full grid place-items-center">
                        <button
                            onPointerDown={(e) => controls.start(e)} 
                            className="w-[30%] h-2 rounded-md bg-white/30 active:bg-white/50 cursor-grab active:cursor-grabbing touch-none" />
                    </div>
                    <div className="h-full mt-6 overflow-y-scroll">
                        {children}
                    </div>
                </motion.div>
            </motion.div>
        )

    case "left":
        return (
            isOpen && <motion.div
                ref={scope}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                onClick={closeDrawer} 
                className="bg-black/20 backdrop-blur-sm fixed inset-0 z-50"
            >
                <motion.div
                    id= "drawer"
                    initial={{ x: "-100%"}}
                    animate={{ x: "0%"}}
                    transition={{ ease: "easeInOut"}}
                    onClick={(e) => e.stopPropagation()} 
                    className="absolute left-0 w-[70vw] lg:w-[50vw] bg-black text-white h-full shadow-2xl"
                >
                        <div className="w-full flex items-center justify-end pr-10">
                            <button
                                onClick={closeDrawer} 
                                className=""><BiX className="size-6" /></button>
                        </div>
                        <div className="h-full mt-6 overflow-y-scroll motion-scroll-bar p-4">
                            {children}
                        </div>
                </motion.div>
            </motion.div>
        )
  
    default:
        break;
  }
}

export default Drawer