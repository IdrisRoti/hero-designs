import Image from "next/image"
import { carsArr } from "./Motion"

const DriveRequest = () => {
  return (
    <div>
        <h2 className="uppercase [font-family:Rajdhani] text-2xl md:text-4xl text-yellow-400 text-center">Request a test drive</h2>
        <p className="text-center opacity-70 lg:w-[80%] mx-auto">There is no better way to experience a Motion&apos;s perfect blend of luxury and performance than to get behind the wheel.</p>
        <div className="mt-5 md:mt-10">
            <h2 className="uppercase text-lg md:text-2xl text-center opacity-80">Please choose the model you would like to test drive.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
                {
                    carsArr.map(({id, imgPath}) => (
                        <div key={id} className="relative h-[12rem] opacity-70 hover:opacity-100 transition cursor-pointer">
                            <Image
                                src={imgPath}
                                alt="Motion car"
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default DriveRequest