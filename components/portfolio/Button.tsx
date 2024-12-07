
type TButton = {
    children: React.ReactNode;
    variant?: "outlined" | "solid";
    className?: string;
}

const Button = ({children, variant = "solid", className}: TButton) => {
  return (
    <button
        className={`
            px-4 py-2 rounded-md font-semibold border
            ${variant === "outlined" && "bg-transparent"}
            ${variant === "solid" && "bg-[#1e1e1e] text-white"}
            ${className}
        `}
    >
        {children}
    </button>
  )
}

export default Button