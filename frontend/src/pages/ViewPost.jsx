import React from 'react'
import HamburgerMenu from '../components/partials/HamburgerMenu'

export default function ViewPost() {
  return (
    <div>
      <div className='flex flex-row justify-around bg-gray-200/70 pt-6 pb-4 font-bold w-full sticky top-0 z-10'>
              <HamburgerMenu/>
              <button className='hover:opacity-75 cursor-pointer'>Discover</button>
              <button className='opacity-55 hover:opacity-75 cursor-pointer'>Following</button>
            </div>
    </div>
  )
}
