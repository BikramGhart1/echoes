import React from 'react'
import HamburgerMenu from './HamburgerMenu'

export default function Header() {
  return (
     <div className='flex flex-row justify-start space-x-28 items-center w-full bg-gray-200/70 px-2 md:py-6 font-bold sticky top-0 z-10'>
              <HamburgerMenu/>
              <div className='flex flex-row items-center space-x-4'>
                  <div className='flex flex-row items-center justify-start space-x-2'>
                    <i className="fas fa-arrow-left"></i>
                    <p>Go back</p>
                  </div>
                  <img src="/echoes_transparent.png" className='w-14 md:hidden' alt="logo" /> 
              </div>
       </div>
  )
}
