const navLinks = ["About", "Download", "Team", "Contact"];

const Header = () => {
  return (
    <header className='w-full h-16 bg-black absolute z-10'>
        <nav className="h-full max-w-[75rem] mx-auto px-4 flex justify-between">
            <div className="h-full flex items-center gap-6">
                <div className='size-8 bg-white rounded-full' />
                <ul className='flex items-center gap-5 md:gap-10 max-md:absolute top-[76px]'>
                    {
                        navLinks.map((link) => (
                            <li key={link}><button className="font-light uppercase text-sm">{link}</button></li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex items-center justify-between gap-6">
                <button className="font-light uppercase text-sm">devices</button>
                <button className='bg-white text-[#1e1e1e] px-4 py-1.5 rounded-full uppercase text-sm font-medium'>Join beta test</button>
            </div>
        </nav>
    </header>
  )
}

export default Header