import React from 'react'
import { Link } from 'react-router-dom'
import HamburgerComponent from './HamburgerComponent'

export default function HeaderComponent() {
  return (
    <div className='mt-2 flex flex-col gap-8 px-[6%]'>
        <header className=''>
          <nav className='flex justify-between items-center'>
            <div className='flex items-center'>
              <Link to='/' className=''>
                <img className='w-28 min-w-28 h-auto sm:w-32' src="images/SPT-logo.png" alt="Go to homepage" />
              </Link>
              <div className='ml-4 hidden md:block'>
                <h1 className='text-2xl font-bold text-blue-700 xl:text-3xl'>Pocket Trading</h1>
                <h2 className='font-extralight text-gray-600 text-base'>No account needed</h2>
              </div>
            </div>
            <ul className='hidden flex-wrap items-center lg:flex'>
              <li><Link to='/' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline'>Home</Link></li>
              <li><Link to='/about' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">About</Link></li>
              <li><Link to='/contact' className='px-2 py-1 w-fit text-md font-bold bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:shadow-md hover:text-gray-200 shadow-sm shadow-neutral-600 rounded-lg' href="">Contact Us</Link></li>
            </ul>
            <HamburgerComponent />
          </nav>
        </header>
    </div>
  )
}
