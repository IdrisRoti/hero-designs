import Button from './Button'

const Contact = () => {
  return (
    <div className='h-screen flex flex-col justify-center relative bg-white'>
        <h3 className='text-center font-semibold'>Have a project in mind ?</h3>
        <h2 className='text-4xl font-semibold text-center'>Let&apos;s get in touch</h2>
        <div className="w-full flex justify-center mt-8">
            <Button className='mx-auto'>Send me a message</Button>  
        </div>
    </div>
  )
}

export default Contact