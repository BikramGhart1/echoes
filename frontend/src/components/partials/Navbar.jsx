import React, { useState } from 'react'

const SearchBar=()=>{
    const [searchValue,setSearchValue]=useState(null);
    return(
        <div className='flex flex-row justify-between w-full items-center bg-gray-300 px-4 py-2 rounded-2xl'>
           <input type="text" className='border-none outline-none bg-transparent placeholder:text-sm' name="search" id="search" placeholder='Searching for someone?'/>
           <div>
           {
               searchValue && <p>X</p>
            }
            <div className='bg-gray-600 w-4 h-4 rounded-4xl relative z-10 cursor-pointer hover:shadow-md shadow-orange-500 '>
               <div className='bg-gray-800 w-4 h-1 absolute rotate-45 z-0 bottom-0 left-1.5 rounded-l-2xl'></div>
            </div>
            </div>
        </div>
    )
}

export default function Navbar() {
  return (
    <>
      <div className='bg-black opacity-80 fixed inset-0 md:hidden z-10'></div>
      <nav className='bg-gray-200 w-2/3 md:w-auto fixed top-0 left-0 min-h-screen md:relative flex flex-col items-center z-10'>
      <div className='flex flex-col items-baseline w-11/12'>
        <div className='flex flex-row items-center w-full'>
            <h2 className='font-bold text-2xl'>Echoes</h2>
            <img src="/echoes_transparent.png" className='w-14 ' alt="logo" />
        </div>
        <SearchBar/>
        </div>
      </nav>
    </>
  )
}
