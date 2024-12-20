"use client"

import { templates } from "@/constants"
import TemplateCard from "./TemplateCard"
import Header from "./Header"
import { useState } from "react"
import Image from "next/image"

export type TemplatesType = {
  id: number;
  thumbnail: string;
  video: string;
  tags: string[];
  link: string;
}[]

const LandingPage = () => {
  const [filteredTemplates, setFilteredTemplates] = useState<TemplatesType>(templates);

  const handleSetFileredTemplates = (filtered: TemplatesType) => {
    setFilteredTemplates(filtered)
  }

  return (
    <div className="relative max-w-[90rem] mx-auto px-4 text-[#1e1e1e] bg-white py-16">
        <Header handleSetFileredTemplates={handleSetFileredTemplates} />
        <h1 className="mt-10 text-3xl font-medium text-center bg-gradient-to-r from-transparent via-[#1e1e1e] to-transparent text-transparent bg-clip-text uppercase">Hero sections for your inspiration</h1>
        <p className="text-center opacity-70">Hero section designs built with NextJs, Tailwind CSS and Framer motion.</p>
        {filteredTemplates.length  ? (
          <main className="relative z-10 mt-5 grid grid-cols-2 gap-4">
            {
              filteredTemplates.map(({id, thumbnail, video, tags, link}) => {
                return (
                  <TemplateCard key={id} thumbnail={thumbnail} link={link} video={video} tags={tags} />
                )
              })
            }
          </main>
        ) : (
          <div className="">
            <Image
              src="/not-found.png"
              alt="Not found image"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="flex flex-col items-center">
              <p className="text-3xl">Nothing to see here :(</p>
              <button className="underline" onClick={() => handleSetFileredTemplates(templates)}>See all templates</button>
            </div>
          </div>
        )}
    </div>
  )
}

export default LandingPage;

{/* <Image
                src="/not-found.png"
                alt="Not found image"
                width={1000}
                height={1000}
                className="mx-auto bg-red-200"
              /> */}