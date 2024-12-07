"use client"

import Image from "next/image"

import { testimonialsArr } from "./constants"
import { useState } from "react"

const Testimonials = () => {
    const [currIndex, setCurrIndex] = useState(3);
    const currTestimonial = testimonialsArr.find((testimonial) => testimonial.id === currIndex);

  return (
    <div className="h-screen bg-stone-100 sticky top-0">
        <div className="flex flex-col justify-center items-center h-full max-w-[60rem] mx-auto px-4">

        <div className="flex">
            {
                testimonialsArr.map(({id, image, name}) => {

                    return (
                        <div 
                            onClick={() => setCurrIndex(id)} 
                            key={id} 
                            className={`
                                relative shrink-0 w-14 md:w-40 aspect-square rounded-2xl md:rounded-3xl overflow-hidden transition duration-500
                                ${id === currIndex ? "scale-100": "scale-[.7] grayscale"}
                            `}>
                                <Image
                                    src={image}
                                    alt={name}
                                    fill
                                    className="object-cover"                                    
                                />
                                <p className="absolute bottom-10 right-5 text-xl text-white z-20">{id}</p>
                        </div> 
                    )
                })
            }
        </div>
        <div className="">
            <p className="text-center md:w-[70%] mx-auto mt-10">{currTestimonial?.testimony}</p>
            <h2 className="font-semibold text-xl text-center my-3">{currTestimonial?.name}, {currTestimonial?.role}</h2>
            <h3 className="opacity-60 text-center text-sm uppercase">{currTestimonial?.org}</h3>
        </div>
        </div>
    </div>
  )
}

export default Testimonials