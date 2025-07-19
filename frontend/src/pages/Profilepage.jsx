import React from 'react'
import Header from '../components/partials/Header'

export default function Profilepage() {
  return (
    <div className='mainContainer'>
      <Header/>
      <div className='flex flex-col items-center gap-y-4'>
        <div className='h-56 w-56 overflow-hidden relative before:bg-red-400 hover:bg-red-300 transition-all duration-300 flex flex-col items-center rounded-full'>
          <img src="/catpfp.png" alt="" className='w-full h-full opacity-60 absolute inset-0 blur-sm z-0'/>
          {/* <img src="/catspider.jpg" alt="" className='w-full h-full opacity-60 absolute inset-0 blur-sm z-0'/> */}
          {/* <img src="/download.jpg" alt="" className='w-full h-full opacity-60 absolute inset-0 blur-sm z-0'/> */}
          <div className='w-52 h-52 hover:scale-125 transition-all duration-300 ease-in-out rounded-full overflow-hidden z-10'>
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
      <div className='flex flex-row justify-around rounded-2xl w-7/12 hover:bg-red-200 bg-red-100 items-center py-3 px-6'>
        <button className='border-b-4 border-solid border-orange-400 font-semibold'>Posts</button>
        <button className=''>Saved</button>
        <button className=''>Comments</button>
      </div>
    </div>
  )
}
