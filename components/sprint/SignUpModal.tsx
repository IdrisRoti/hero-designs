"use client"

import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import SignUpForm from "./SignUpForm";

const SignUpModal = () => {
  return (
    <div className="font-[Inter] w-[95vw] md:w-[28rem] max-h-[90vh] sprint-scroll-bar overflow-auto pt-5 px-3 bg-gradient-to-b from-[#49FF6D]/15 to-transparents to-40% rounded-lg border">
        <h2 className="text-[#1e1e1e] font-semibold text-xl text-center">Create a profile</h2>
        <h3 className="text-center text-sm">Create a free profile in less than 5 minutes</h3>
        <div className="flex flex-col gap-3 mt-4">
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#1e1e1e]/15 hover:bg-[#49FF6D]/20 transition p-2">
                <FcGoogle className="size-6" />
                <span className="text-sm font-semibold">Sign up with Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#1e1e1e]/15 hover:bg-[#49FF6D]/20 transition p-2">
                <MdOutlineFacebook className="size-6 text-blue-600" />
                <span className="text-sm font-semibold">Sign up with Facebook</span>
            </button>
        </div>
        <div className="flex items-center gap-3 mt-4 text-sm">
            <div className="w-full bg-gray-300 h-[.6px]" />
            <p>OR</p>
            <div className="w-full bg-gray-300 h-[.6px]" />
        </div>
        <SignUpForm />
    </div>
  )
}

export default SignUpModal