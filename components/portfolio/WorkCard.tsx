import Image from "next/image";
import Button from "./Button";

type TWorkCard = {
    name: string;
    type: string;
    date: string;
    description: string;
    imagePath: string
}

const WorkCard = ({name, type, date, description, imagePath}: TWorkCard) => {
  return (
    <article className="bg-white rounded-md overflow-hidden">
        <div className="relative h-[20rem] transition w-full overflow-hidden">
            <Image
                src={imagePath}
                alt={name}
                fill
                className="object-cover"
            />
        </div>
        <div className="p-6">
            <h2 className="font-semibold text-xl md:text-2xl uppercase">{name}</h2>
            <p className="mt-2 font-semibold">{type}</p>
            <span className="uppercase text-sm tracking-wider">{date}</span>
            <p className="mt-2 mb-4 opacity-60">{description}</p>
            <Button>View Case Study</Button>
        </div>
    </article>
  )
}

export default WorkCard