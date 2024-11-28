"use client"

import { Dispatch, SetStateAction} from 'react'

import { motion, useMotionValue } from 'framer-motion'
import { heroContent } from './BlueforceAi'

const DRAG_BUFFER = 20;

type TabCarouselType = {
    currentTabId: number;
    setCurrentTabId: Dispatch<SetStateAction<number>>;
}

export default function TabCarousel({currentTabId, setCurrentTabId}: TabCarouselType) {
    const dragX = useMotionValue(0);

    const onDragEnd = () => {
        const x = dragX.get();

        if(x <= -DRAG_BUFFER && currentTabId < heroContent.length){
            setCurrentTabId(prev => prev + 1)
        } else if(x >= DRAG_BUFFER && currentTabId > 1){
            setCurrentTabId(prev => prev - 1)
        }
    }

  return ( 
    <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: .5 }}
        className='w-screen relative'>
        <div className="h-16 w-full overflow-hidden">
            <motion.div
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0
                }}
                animate={{
                    translateX: `-${(currentTabId -1) * 100}%`
                }}
                style={{
                    x: dragX
                }}
                transition={{
                    type: "spring",
                    mass: 3,
                    stiffness: 300,
                    damping: 50
                }}
                onDragEnd={onDragEnd}
                className='flex items-center h-16 w-full cursor-grab active:cursor-grabbing'
            > 
                    {
                        heroContent.map(({id, label})=>(
                            <button key={id} className={`shrink-0 w-full h-full border-t-2 bg-white/20 border-white/70 backdrop-blur-md hover:bg-white/10 transition hover:bg-red-200`}>{label}</button>
                        ))
                    }
            </motion.div>
        </div>
    </motion.div>


  )
}