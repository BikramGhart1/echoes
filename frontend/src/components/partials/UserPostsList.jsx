import React from 'react'

export default function UserPostsList() {
  return (
    <div className='bg-gray-400 w-full py-4 px-4 rounded-lg flex flex-row items-start gap-x-8'>
        <div className='w-10 h-10 rounded-full bg-gray-300'></div>
        <div className='flex flex-col items-start flex-1 '>
            <p className='font-bold'>@BaiNingBing11</p>
            <p className='font-semibold'>I absolutely hate mosquitoes.</p>
            <p>We should drive them to extinctionnnnnnnnnnnnn</p>
        </div>
        <p className='font-bold'>...</p>
    </div>
  )
}
