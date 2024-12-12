import { z } from "zod"
import PasswordChecker from "./PasswordChecker"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RiErrorWarningLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const formSchema = z.object({
    firstname: z.string().min(2, "Minimum of 2 characters"),
    lastname: z.string().min(2, "Minimum of 2 characters"),
    email: z.string().email("Please input a valid email"),
    password: z.string().min(8, "Minimum of 8 characters")
})

const SignUpForm = () => { 
    const [strengthScore, setStrengthScore] =useState(0)

    type signUpFormType = z.infer<typeof formSchema>;

     const {
        register,
        handleSubmit,
        formState: { errors },
        watch
     } = useForm<signUpFormType>({
        resolver: zodResolver(formSchema)
     })

     const onSubmit = (data: signUpFormType) => {
        console.log(data)
     }

     const password = watch("password");

    //  FUNCTION TO CHECK PASSWORD STRENGTH
     const checkPasswordStrength = (password: string) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);
        const hasDigit = /[0-9]+/.test(password);

        let score = 0;

        if(hasUppercase) score++
        if(hasLowercase) score++
        if(hasSpecialChar) score++
        if(hasDigit) score++

        setStrengthScore(score);
     }

     useEffect(() => {
        checkPasswordStrength(password)
     }, [password])


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-4 mt-5">
            <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium" htmlFor="firstname">First name<span className="text-red-600">*</span></label>
                <input {...register("firstname")} type="text" className="bg-transparent outline-none border-2 border-[#1e1e1e]/15 focus:border-[#49FF6D] px-2 py-1.5 rounded-lg placeholder:text-sm placeholder:font-semibold focus:placeholder:opacity-0 placeholder:transition placeholder:duration-500 w-full" placeholder="Your first name" />
                {
                    errors.firstname && 
                        <div className="flex items-center gap-1">
                            <RiErrorWarningLine className="text-red-500 size-3" />
                            <small className="text-red-500 text-xs">{errors.firstname.message}</small>
                        </div>
                }
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium" htmlFor="firstname">Last name<span className="text-red-600">*</span></label>
                <input {...register("lastname")} type="text" className="bg-transparent outline-none border-2 border-[#1e1e1e]/15 focus:border-[#49FF6D] px-2 py-1.5 rounded-lg placeholder:text-sm placeholder:font-semibold focus:placeholder:opacity-0 placeholder:transition placeholder:duration-500 w-full" placeholder="Your last name" />
                {
                    errors.lastname && 
                        <div className="flex items-center gap-1">
                            <RiErrorWarningLine className="text-red-500 size-3" />
                            <small className="text-red-500 text-xs">{errors.lastname.message}</small>
                        </div>
                }
            </div>
        </div>
        <div className="flex flex-col gap-2 w-full mt-4">
            <label className="text-sm font-medium" htmlFor="firstname">Email<span className="text-red-600">*</span></label>
            <input {...register("email")} type="email" className="bg-transparent outline-none border-2 border-[#1e1e1e]/15 focus:border-[#49FF6D] px-2 py-1.5 rounded-lg placeholder:text-sm placeholder:font-semibold focus:placeholder:opacity-0 placeholder:transition placeholder:duration-500 w-full" placeholder="Your last name" />
            {
                    errors.email && 
                        <div className="flex items-center gap-1">
                            <RiErrorWarningLine className="text-red-500 size-3" />
                            <small className="text-red-500 text-xs">{errors.email.message}</small>
                        </div>
                }
        </div>
        <div className="flex flex-col gap-2 w-full mt-4">
            <label className="text-sm font-medium" htmlFor="firstname">Password<span className="text-red-600">*</span></label>
            <input {...register("password")} type="text" className="bg-transparent outline-none border-2 border-[#1e1e1e]/15 focus:border-[#49FF6D] px-2 py-1.5 rounded-lg placeholder:text-sm placeholder:font-semibold focus:placeholder:opacity-0 placeholder:transition placeholder:duration-500 w-full" placeholder="Input a very strong password" />           
            <PasswordChecker strengthScore={strengthScore} />
            {
                    errors.password && 
                        <div className="flex items-center gap-1">
                            <RiErrorWarningLine className="text-red-500 size-3" />
                            <small className="text-red-500 text-xs">{errors.password.message}</small>
                        </div>
                }
        </div>
        <div className="w-full flex border-t mt-6 p-3">
            <button className="bg-[#49FF6D] hover:bg-[#49FF6D]/60 transition px-3 py-2 rounded-lg font-semibold ml-auto text-sm">Create Profile</button>
        </div>
    </form>
  )
}

export default SignUpForm;