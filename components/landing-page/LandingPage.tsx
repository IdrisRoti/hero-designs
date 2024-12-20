import { templates } from "@/constants"
import TemplateCard from "./TemplateCard"

const LandingPage = () => {
  return (
    <div className="relative w-screen  max-w-[90rem] mx-auto px-4 bg-[#1e1e1e] text-white py-10">
        <h1 className="text-3xl font-medium text-center bg-gradient-to-r from-transparent via-white to-transparent text-transparent bg-clip-text uppercase">Hero sections for your inspiration</h1>
        <p className="text-center opacity-70">Hero section designs built with NextJs, Tailwind CSS and Framer motion.</p>
        <main className="relative z-10 mt-5 grid grid-cols-2 gap-4">
          {
            templates.map(({id, thumbnail, video, tags, link}) => {
              return (
                <TemplateCard key={id} thumbnail={thumbnail} link={link} video={video} tags={tags} />
              )
            })
          }
        </main>
        {/* GRADIENTS */}
        <div className="w-[20rem] md:w-[40rem] lg:w-[60rem] h-[10rem] bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 bg-opacity-10 blur-[5rem]" />
    </div>
  )
}

export default LandingPage