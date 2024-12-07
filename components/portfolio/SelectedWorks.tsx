import { selectedWorksArr } from "./constants"
import WorkCard from "./WorkCard"

const SelectedWorks = () => {
  return (
    <div className="max-w-[70rem] mx-auto px-4">
        <h2 className="uppercase text-2xl md:text-3xl text-center tracking-wider font-semibold">selected works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          {
            selectedWorksArr.map((work) =>{
              return (
                <WorkCard key={work.id} {...work} />
              )
            })
          }
        </div> 
    </div>
  )
}

export default SelectedWorks