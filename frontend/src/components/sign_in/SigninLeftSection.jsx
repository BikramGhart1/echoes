import React from 'react'

export default function SigninLeftSection() {
  return (
    <div className='flex flex-col items-center pt-8 w-full md:w-1/3'>
        <div className='flex flex-row items-center justify-center space-x-4 w-full '>
            <h2 className='font-bold text-2xl'>Echoes</h2>
            <img src="/final logo.png" className='w-14 md:hidden' alt="logo" />
        </div>
        <p>Where every voice echoes.</p>
        <img src="/final logo.png" className='w-40 hidden md:block' alt="logo" />

      </div>
  )
}
