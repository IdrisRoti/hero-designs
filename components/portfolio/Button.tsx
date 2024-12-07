
type TButton = {
    children: React.ReactNode;
    variant?: "outlined" | "solid";
    className?: string;
}

const Button = ({children, variant = "solid", className}: TButton) => {
  return (
    <button
        className={`
            px-4 py-2 rounded-md font-semibold border transition
            ${variant === "outlined" && "bg-transparent hover:bg-[#1e1e1e]/10"}
            ${variant === "solid" && "bg-[#1e1e1e] text-white hover:bg-[#1e1e1e]/70"}
            ${className}
        `}
    >
        {children}
    </button>
  )
}

export default Button