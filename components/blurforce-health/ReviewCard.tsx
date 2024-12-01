import Image from 'next/image'
import { BsStarFill } from 'react-icons/bs'

type TReviewCard = {
    image: string;
    name: string;
    review: string;
    className?: string;
}

const ReviewCard = ({name, image, review, className}: TReviewCard) => {
  return (
    <article className={`bg-white flex items-center gap-4 p-4 rounded-lg ${className}`}>
        <Image
            src={image}
            alt="blueforce"
            width={40}
            height={40}
            className="w-10 aspect-square rounded-full object-cover"
        />    
        <div className=''>
            <div className='flex items-center gap-3'>
                <h2 className='font-semibold text-lg'>{name}</h2>
                <div className="flex item-center">
                    <BsStarFill className='text-orange-400 size-3' />
                    <BsStarFill className='text-orange-400 size-3' />
                    <BsStarFill className='text-orange-400 size-3' />
                    <BsStarFill className='text-orange-400 size-3' />
                    <BsStarFill className='text-orange-400 size-3' />
                </div>
            </div>
            <p className='text-sm leading-relaxed'>{review}</p>
        </div>
    </article>
  )
}

export default ReviewCard