type TCustomButton = {
    children: React.ReactNode;
    className?: string;
}

const CustomButton = ({children, className}: TCustomButton) => {
  return (
    <button className={`rounded-full border-[1.5px] border-[#08163B] px-3 py-2 text-sm font-semibold inline-block [box-shadow:0_2px_0_rgba(0,0,0,.9)] hover:shadow-none transition ${className}`}>{children}</button>
  )
}

export default CustomButton