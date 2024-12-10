type TButton = {
    variant?: "solid" | "outline";
    children: React.ReactNode;
    className?: string;
}

const Button = ({variant = "solid", children, className}: TButton) => {
  return (
    <button className={`
        px-8 py-2.5 rounded-full hover:opacity-70 transition text-sm border font-semibold
        ${variant === "solid" ? "bg-[#1e1e1e] border-transparent text-white" : "bg-transparent border-[#1e1e1e] text-[#1e1e1e]"}
        ${className}
    `}>
        {children}
    </button>
  )
}

export default Button