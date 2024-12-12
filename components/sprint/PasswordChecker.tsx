const PasswordChecker = ({strengthScore}: {strengthScore: number}) => {
const backgroundColor = 
            strengthScore === 4 
                ? "#22c55e" 
            : strengthScore === 3
                ? "blue"
            : strengthScore === 2
                ? "orange"
            : "red"

  return (
    <div className="flex items-center gap-3">
        {
            Array.from({length: 4}).map((_, index) => {
                return (
                    <div key={index} className="w-full bg-[#1e1e1e]/15 h-1 rounded-full overflow-hidden">
                        <div
                            style={index < strengthScore ? { backgroundColor, width: "100%"} : { width: "0px"}} 
                            className="h-full transition" 
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default PasswordChecker