import React, { useState } from 'react'
import { useHamMenu } from '../../contexts/HamMenuContextProvider';

const SearchBar=()=>{
    const [searchValue,setSearchValue]=useState(null);
    return(
        <div className='flex flex-row justify-between w-full items-center bg-gray-300 px-4 py-2 rounded-2xl'>
           <input type="text" className='border-none outline-none bg-transparent placeholder:text-sm w-11/12 px-2' name="search" id="search" placeholder='Searching for someone?'/>
           <div>
           {
               searchValue && <p>X</p>
            }
            <div className='bg-gray-600 w-4 h-4 rounded-2xl relative z-10 cursor-pointer hover:shadow-md shadow-orange-500 '>
               <div className='bg-gray-800 w-4 h-1 absolute rotate-45 z-0 bottom-0 left-1.5 rounded-l-2xl'></div>
            </div>
            </div>
        </div>
    )
}

export default function Navbar() {
  const {navbarIsOpen, toggleNavbar}=useHamMenu();
  navbarIsOpen?console.log('open'):console.log('closed');
  return (
    <>
      <div className={`bg-black opacity-80 fixed inset-0 md:hidden z-20`} onClick={toggleNavbar}></div>
      <nav className='navbarContainer'>
      <p className='absolute top-4 right-6 font-bold font-sans cursor-pointer rounded-2xl px-2 hover:bg-gray-400/70 md:hidden' onClick={toggleNavbar}>X</p>
      <div className='flex flex-col items-baseline w-11/12'>
        <div className='flex flex-row items-center w-full'>
            <h2 className='font-bold text-2xl'>Echoes</h2>
            <img src="/echoes_transparent.png" className='w-14 ' alt="logo" />
        </div>
        <SearchBar/>
        </div>
        
        <div className='navSection'>
          <h2 className='navSectionHeader'>General Navigation</h2>
          <div className='navSectionContainer'>
              <button className='navButton'>
                  <i className="fa-solid fa-house"></i>
                  <p>Home</p>
              </button>
              <button className='navButton'>
                  <i className="fa-solid fa-square-plus text-orange-600"></i>
                  <p>Create Post</p>
              </button>
              <button className='navButton'>
                  <i className="fa-solid fa-bell relative p-1">
                  <div className='absolute bg-red-400 w-2 h-2 rounded-2xl top-0 right-0'></div>
                  </i>
                  <p className=''>Notification</p>
              </button>
          </div>
        </div>

        <div className='navSection'>
          <h2 className='navSectionHeader'>Profile Navigation</h2>
          <div className='navSectionContainer'>
            <button className='navButton'>
              <div className="w-6 h-6 bg-gray-400 rounded-2xl"></div>
              <p>Profile</p>
            </button>
            <button className='navButton'>
              <i className="fas fa-bookmark w-4"></i>
              <p>Saved</p>
            </button>
            <button className='navButton'>
                 <i className="far fa-comment "></i>
              <p className=''>Comments</p>
            </button>
            <button className='navButton'>
              <i className="fa-solid fa-pen-to-square"></i>
              <p className=''>Edit Profile</p>
            </button>
          </div>
        </div>

        <div className='navSection'>
                  <h2 className='navSectionHeader'>Account Settings</h2>
                  <div className='navSectionContainer'>
                    <button className='navButton'>
                    <i className="fa-solid fa-right-from-bracket"></i>
                      <p>Logout</p>
                    </button>
                    <button className='navButton'>
                    <i className="fa-solid fa-key"></i>
                      <p>Change Password</p>
                    </button>
                  </div>
                </div>
        <div className='navSection'>
                  <h2 className='text-red-400 navSectionHeader'>Danger Zone</h2>
                  <div className='navSectionContainer'>
                    <button className='navButton'>
                      <i className="fa-solid fa-user-xmark text-red-500"></i>
                      <p>Delete Account</p>
                    </button>
                    
                  </div>
                </div>
                <div className='navSection'>
                      <h2 className='navSectionHeader'>Contact Me</h2>
                      <div className='flex flex-row justify-baseline space-x-4'>
                        <div className='w-8 h-8 rounded-2xl bg-gray-400'></div>
                        <div className='w-8 h-8 rounded-2xl bg-gray-400'></div>
                        <div className='w-8 h-8 rounded-2xl bg-gray-400'></div>
                        <div className='w-8 h-8 rounded-2xl bg-gray-400'></div>
                      </div>
        </div>
        <div className='navSection'>
              <h2 className='navSectionHeader'>Footer</h2>
              <div className='text-sm flex flex-col'>
              <div className='flex flex-row justify-baseline space-x-8'>
                <p className='cursor-pointer'>About</p>
                <p className='cursor-pointer'>Project Repository</p>
              </div>
              <p>
                @2025 ECHOES
              </p>
          </div>
        </div>
      </nav>
    </>
  )
}
