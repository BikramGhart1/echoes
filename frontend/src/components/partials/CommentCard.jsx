import React from 'react'

export default function CommentCard() {
  return (
    
    <div className='text-sm bg-gray-0 p-4 flex flex-row justify-baseline gap-x-6 w-full rounded-2xl relative'>
           <div className='w-8 h-8 md:w-10 md:h-10 bg-gray-400/75 rounded-3xl flex-shrink-0'></div>
            <div className='max-w-10/12 flex flex-col gap-y-1'>
              <div className='flex flex-row justify-baseline space-x-2.5'>
                <p className='font-bold'>taajaaaja</p>
                <p className='opacity-55'>9m</p>
            </div>
               <p>Nephew I heard you saying I ain\'t tuff?🥀 </p>
            <div className='flex flex-row space-x-2 opacity-75'>
                <p>0 likes</p>
                <p>1 replies</p>
            </div>
            <p className='pt-2 opacity-75'>* View replies</p>
           </div>
           <div className='absolute right-10 font-bold flex flex-row justify-start items-end space-x-4'>
                <i className="far fa-heart cursor-pointer"></i>
                <p className=' cursor-pointer text-lg'>...</p>
           </div>
    </div>
  
  )
}
