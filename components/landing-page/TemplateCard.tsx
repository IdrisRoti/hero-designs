"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { BiLink } from "react-icons/bi";

interface TemplateCardType {
    thumbnail: string; 
    video: string; 
    tags: string[];
    link: string;
}

const TemplateCard = ({thumbnail, video, tags, link}: TemplateCardType) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const playVideo = () => {
        videoRef.current?.play();
        setIsPlaying(true);
    }

    const pauseVideo = () => {
        videoRef.current?.pause();
        setIsPlaying(false)
    }

  return (
    <div className="col-span-2 md:col-span-1">
        <div 
            onMouseEnter={playVideo}
            onMouseLeave={pauseVideo}
            className="aspect-video bg-[#1e1e1e]/10 backdrop-blur-md p-2 rounded-2xl" 
        >
            <div className="relative overflow-hidden w-full h-full bg-gradient-to-r from-white/15 from-20% via-white/30 to-white/15 to-80% rounded-xl backdrop-blur-3xl">
               {
                isPlaying ? (
                <video className="absolute inset-0" autoPlay muted ref={videoRef} src={video} />
               ) : (
                        <div className="absolute inset-0 ">
                            <Image
                                src={thumbnail}
                                fill
                                alt="website template image"
                                className="object-cover object-left"
                            />
                        </div>
                    )
                }
            </div>
        </div>
        <div className="mt-5 flex w-full justify-end gap-2">
            <div className="flex items-center gap-2">
                {
                    tags.map((tag) => (
                        <span key={tag} className="px-4 py-1.5 text-xs rounded-full border">{tag}</span>
                    ))
                }
                <Link href={link} className="size-8 rounded-full grid place-items-center border hover:bg-green-200 hover:text-[#1e1e1e] transition"><BiLink /></Link>
            </div>
        </div>
    </div>
  )
}

export default TemplateCard