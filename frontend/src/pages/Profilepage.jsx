import React from 'react'
import Header from '../components/partials/Header'
import Homepage from '../pages/Homepage'
import PostCard from '../components/partials/PostCard'
import UserPostsList from '../components/partials/UserPostsList'


export default function Profilepage() {
  return (
    <div className='mainContainer pb-6'>
      <Header/>
      <div className='relative flex flex-col items-center gap-y-4 pt-14 md:pt-16 md:mt-5 mt-1 pb-8 w-11/12 bg-gray-300 rounded-xl'>
        <div className='md:w-6 md:h-6 w-4 h-4 bg-gray-500 rounded-xl right-1/4 md:right-1/3 absolute hover:bg-red-400 transition-all duration-300 ease-in-out'></div>
        <div className='md:w-20 md:h-20 w-16 h-16 bg-gray-500 rounded-full right-20 md:right-1/4 md:-top-8 -top-7 absolute text-center text-white font-bold tracking-wider flex flex-row items-center z-10 cursor-pointer hover:bg-red-400 transition-all duration-300 ease-in-out'>
        <p className='m-auto'>
        Edit
        </p>
        </div>
        <div className='relative h-48 w-48 md:h-56 md:w-56 overflow-hidden before:bg-red-400 hover:bg-red-300 transition-all duration-300 flex flex-col items-center rounded-full'>
          <img src="/catpfp.png" alt="" className='w-full h-full opacity-60 absolute inset-0 blur-sm z-0'/>
          {/* <img src="/catspider.jpg" alt="" className='w-full h-full opacity-60 absolute inset-0 blur-sm z-0'/> */}
          {/* <img src="/download.jpg" alt="" className='w-full h-full opacity-60 absolute inset-0 blur-sm z-0'/> */}
          <div className='w-44 h-44 md:w-52 md:h-52 hover:scale-125 transition-all duration-300 ease-in-out rounded-full overflow-hidden z-10'>
              {/* <img src="/download.jpg" alt="" className=''/> */}
              {/* <img src="/catspider.jpg" alt="" className='object-contain'/> */}
              <img src="/catpfp.png" alt="" className='w-full'/>
          </div>
        </div>
        <div className='flex flex-col items-center'>
            <p className='font-bold text-lg'>Bai Ning Bing</p>
            <p className='font-semibold'>@BaiNingBing11</p>
            <p className='pt-4'>I hate ChhapluBaba_Taplu3</p>
        </div>
        <div className='flex flex-row justify-start space-x-6 items-center font-bold'>
            <button>10 Followers</button>
            <button>24 Following</button>
        </div>

      </div>
      <div className='flex flex-col items-center gap-y-10 rounded-xl w-11/12 bg-gray-300 pt-4 pb-8'>
          <div className='flex flex-row justify-around sticky top-16 md:top-20 rounded-2xl w-11/12 md:w-7/12 hover:bg-red-200 bg-red-100 items-center py-2 px-6'>
            <button className='border-b-4 border-solid border-orange-400 font-semibold'>Posts</button>
            <button className=''>Saved</button>
            <button className=''>Comments</button>
          </div>
          <div className='w-11/12 flex flex-col gap-y-4 rounded-lg bg-transparent'>
            <UserPostsList/>
            <UserPostsList/>
            <UserPostsList/>
            <UserPostsList/>
            <UserPostsList/>
            <UserPostsList/>
            <UserPostsList/>
          </div>
      </div>
    </div>
  )
}
