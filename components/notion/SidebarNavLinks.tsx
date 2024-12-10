import { navlinks } from './Header'
import Link from 'next/link'

const SidebarNavLinks = () => {
  return (
    <div className='py-2'>
      {
        navlinks.map(({id, icon: Icon,label}) => (
          <Link
            className='flex items-center gap-3 last-of-type:mb-0 hover:bg-stone-200/50 px-2 py-1.5 transition rounded-md' 
            key={id} 
            href="/">
            {/* <div className='size-2 bg-stone-500 rounded-full' /> */}
            <Icon className='text-stone-400 size-5' />
            <span>{label}</span>
          </Link>
        ))
      }
    </div>
  )
}

export default SidebarNavLinks