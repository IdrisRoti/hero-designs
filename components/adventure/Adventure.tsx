import Image from 'next/image'
import Header from './Header'

const Adventure = () => {
  return (
    <div className='relative h-screen lg:max-h-[60rem] overflow-hidden'>
        <Image
          src="/adventure/dungeon.jpg"
          alt="dungeon"
          width={1000}
          height={500}
          className='object-cover absolute inset-0 w-full h-full opacity-20'
        />      
        <Header />
        <section className='max-w-[75rem] mx-auto px-4 w-full h-[calc(100%-64px)] absolute inset-0 top-16 z-10'>
            <div className="h-full w-full">
                <div className="lg:pl-10 w-[90%] md:w-1/2 h-full flex flex-col justify-center items-start max-lg:absolute z-30">
                    <h1 className="text-5xl md:text-7xl font-bold capitalize">Embark on epic new adventures</h1>
                    <p className="mt-5 mb-4">Dive into uncharted worlds, conquer new challenges and level up your gameplay. The next adventure awaits, are you ready?</p>
                    <button className='bg-red-500 px-6 py-2 rounded-full'>Learn More</button>
                </div>
                <div className="h-full absolute bottom-0 -right-[70%] md:-right-[10%] lg:right-[10%]">
                    <Image
                      src="/adventure/adventure_girl.png"
                      alt="Adventure Boy"
                      width={500}
                      height={1000}
                      className='object-cover h-[100%]'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Adventure