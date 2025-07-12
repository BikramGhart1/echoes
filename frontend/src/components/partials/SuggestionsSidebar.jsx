import React from 'react'

export default function SuggestionsSidebar() {
  return (
    <div className='hidden md:block bg-gray-200 min-w-0 overflow-hidden pt-5 px-4'>
      <div>
        <p className='pb-4'>Suggested People</p>
        <div className='flex flex-row overflow-auto [scrollbar-width:none] scroll-smooth pl-2 justify-between items-center space-x-3 '>
            <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-4xl bg-gray-300'></div>
                <p className='text-sm'>ramu_yadav124</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-4xl bg-gray-300'></div>
                <p className='text-sm'>ramu_yadav124</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-4xl bg-gray-300'></div>
                <p className='text-sm'>ramu_yadav124</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-4xl bg-gray-300'></div>
                <p className='text-sm'>ramu_yadav124</p>
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
    </div>
  )
}
