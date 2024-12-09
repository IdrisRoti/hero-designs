type TButton = {
    variant?: "solid" | "outline";
    children: React.ReactNode;
    className?: string;
}

const Button = ({variant = "solid", children, className}: TButton) => {
  return (
    <button className={`
        px-12 py-2.5 rounded-full text-white hover:opacity-70 transition text-sm border
        ${variant === "solid" ? "bg-[#1044FF] border-transparent" : "bg-transparent border-white/30"}
        ${className}
    `}>
        {children}
    </button>
  )
}

export default Button