import React from 'react'

export default function SuggestionsSidebar() {
  return (
    <div className='hidden md:flex flex-col gap-y-8 bg-gray-200 min-w-0 overflow-hidden pt-5 px-4'>
      <div className='flex flex-col justify-baseline gap-y-4'>
        <p className='font-semibold tracking-wide'>Suggested People</p>
        <div className='flex flex-row overflow-auto [scrollbar-width:none] scroll-smooth pl-2 justify-between items-center space-x-3 '>
            <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-2xl bg-gray-300'></div>
                <p className='text-sm'>ram_yadav124</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-2xl bg-gray-300'></div>
                <p className='text-sm'>ram_yadav124</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-2xl bg-gray-300'></div>
                <p className='text-sm'>ram_yadav124</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-2xl bg-gray-300'></div>
                <p className='text-sm'>ram_yadav124</p>
            </div>
            {/* <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-4xl bg-gray-600'></div>
                <p className='text-sm'>ramu_yadav124</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-4xl bg-gray-600'></div>
                <p className='text-sm'>ramu_yadav124</p>
            </div> */}
        </div>
      </div>
      <div className='flex flex-col'>
        <p className='pb-4 font-semibold tracking-wide'>Suggested Posts</p>
        <div className='text-sm flex flex-col gap-y-3'>
          <div className='relative bg-gray-300 px-3 py-2 rounded-lg flex flex-row justify-between space-x-4 items-center'>
            <div className='flex flex-row justify-baseline items-center space-x-4'>
               <div>
             <div className='w-8 h-8 bg-gray-400 rounded-2xl'></div>
            </div>
             <div className='flex flex-col'>
              <div className='flex flex-row justify-baseline space-x-4'>
                <p className=''>Alexa_limbu</p>
                <p className='opacity-55'>2h</p>
              </div>
              <p className='line-clamp-2'>Life is really strange.</p>
             </div>
             </div>
             <div className=' font-bold text-lg'>...</div>
          </div>
          <div className='relative bg-gray-300 px-3 py-2 rounded-lg flex flex-row justify-between space-x-4 items-center'>
            <div className='flex flex-row justify-baseline items-center space-x-4'>
               <div>
             <div className='w-8 h-8 bg-gray-400 rounded-2xl'></div>
            </div>
             <div className='flex flex-col'>
              <div className='flex flex-row justify-baseline space-x-4'>
                <p className=''>little_sun</p>
                <p className='opacity-55'>4h</p>
              </div>
              <p className='line-clamp-2'>I'm in foresaken land of gods</p>
             </div>
             </div>
             <div className=' font-bold text-lg'>...</div>
          </div>
          
          <div className='relative bg-gray-300 px-3 py-2 rounded-lg flex flex-row justify-between space-x-4 items-center'>
            <div className='flex flex-row justify-baseline items-center space-x-4'>
               <div>
             <div className='w-8 h-8 bg-gray-400 rounded-2xl'></div>
            </div>
             <div className='flex flex-col'>
              <div className='flex flex-row justify-baseline space-x-4'>
                <p className=''>Vanisssa</p>
                <p className='opacity-55'>1h</p>
              </div>
              <p className='line-clamp-2'>Bro where am? they say it is city of silver😭</p>
             </div>
             </div>
             <div className=' font-bold text-lg'>...</div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className='w-1/3 h-1 bg-gray-400'></div>
        <p className='text-gray-800'>o</p>
        <div className='w-1/3 h-1 bg-gray-400'></div>
      </div>
    </div>
  )
}
