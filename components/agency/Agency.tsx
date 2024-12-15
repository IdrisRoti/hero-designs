"use client"

import Image from "next/image"
import Header from "./Header"
import { useRef } from "react"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const heroImages = ["/agency/image1.png", "/agency/image2.png", "/agency/image3.png", "/agency/image4.png", "/agency/image5.png", "/agency/image6.png", "/agency/image7.png", "/agency/image8.png", "/agency/image9.png", "/agency/image10.png", "/agency/image11.png", "/agency/image12.png", "/agency/image13.png", "/agency/image14.png", "/agency/image15.png", "/agency/image16.png",]

const Agency = () => {
const containerRef = useRef(null)
const tl = gsap.timeline()

    useGSAP(() => { 
        tl.to("#h1", {
            opacity: 1,
            duration: .8
        });
        
        tl.to("#p", {
            opacity: .8,
            duration: .8,
            // delay: .5
        });
        
        tl.to("#button", {
            opacity: 1,
            duration: .8,
            // delay: 1
        });

        tl.to("#grid", {
            duration: .8,
            scale: 1,
            y: 40,
            ease: "power1.inOut",
            repeat: -1,
            repeatDelay: 1,
            yoyo: true,
            stagger: {
              grid: [4,4],
              from: "center",
              each: .05,
            }
          });
    }, { scope: containerRef})

  return (
    <div className="h-screen">
        <Header />
        <div ref={containerRef} className="mt-2 md:mt-10 lg:mt-0 h-[calc(100vh-80px)] max-h-[700px] w-full grid grid-cols-1 lg:grid-cols-12 items-center justify-between px-4">
            <div className="col-span-7 flex flex-col justify-center lg:w-[80%]">
                <h1 id="h1" className="opacity-0 text-4xl md:text-5xl lg:text-6xl font-light md:text-center lg:text-left"> We design simple solution for complex business </h1>
                <p id="p" className="opacity-0 md:text-center lg:text-left mt-5 mb-3">Whether you&apos;re a casual jogger or a dedicated marathon runner, the act of lacing up your shoes and hitting the pavement or trail can have  more transformative effects.</p>
                <div id="button" className="opacity-0 flex md:justify-center lg:justify-start">
                    <button className="text-white tracking-widest font-semibold bg-[#01A9E0] rounded-2xl py-3 md:py-5 px-6 md:px-8 hover:opacity-70 transition">Learn More</button>
                </div>
            </div>
            <div className="col-span-5 relative w-full md:w-[70%] mx-auto lg:w-full h-full">               
                <div className="grid grid-cols-4 gap-2">
                    {
                        heroImages.map((url,i) => (
                            <div id="grid" key={i} className="relative col-span-1 aspect-square rounded-xl scale-50">
                                <Image
                                    src={url}
                                    alt="Hero section image"
                                    fill
                                    className="object-cover"
                                /> 
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Agency