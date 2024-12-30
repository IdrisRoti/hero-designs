"use client"

import { BiSearch } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { templates } from "@/constants";
import { TemplatesType } from "./LandingPage";

export const navlinks = ["Home", "Category", "About us"];

const Header = ({handleSetFileredTemplates}: {handleSetFileredTemplates: (filtered :TemplatesType) => void}) => {
    const formSchema = z.object({
        search: z.string().optional()
    })

    type formType = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        watch,
    } = useForm<formType>({
        resolver: zodResolver(formSchema)
    })

    const handleTemplatesFiltering = (data: formType) => {
        const { search } = data;
        if(search) {
            const filtered = templates.filter((template) => (
                template.tags.some((tag) => (
                    tag.toLowerCase().includes(search.toLowerCase())
                ))
            ))

            handleSetFileredTemplates(filtered)
        }
    }

    const searchWord = watch("search");

  return (
    <>
        <nav className="fixed w-full max-w-[90rem] mx-auto z-[100] px-4 left-0 right-0 top-0 h-20 flex items-center justify-between gap-3 bg-white">
            <div className="size-5 bg-[#1e1e1e] rounded-full" />
            <div className="hidden md:flex items-center gap-2">
                <h1 className="">Built by IdrisRoti</h1>
                <h2>Designs by Biyi</h2>
            </div>
            <div className="flex items-center justify-between gap-2">
                {
                    searchWord && (
                        <button className="text-xs md:text-base" onClick={() => handleSetFileredTemplates(templates)}>View all</button>
                    )
                }
                <form onSubmit={handleSubmit(handleTemplatesFiltering)} className="flex items-center h-10 rounded-full bg-[#1e1e1e]/10 px-3">
                    <input {...register("search")} type="search" placeholder="Search" className="bg-transparent h-full w-full border-none focus:outline-none placeholder:text-[#1e1e1e]/70 placeholder:text-sm" />
                    <BiSearch />
                </form>
            </div>
        </nav>
    </>
  )
}

export default Header