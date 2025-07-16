import React from 'react'

export default function PostCard({data}) {
  return (
    <div className='text-sm bg-gray-300 p-4 flex flex-row justify-baseline gap-x-6 w-full rounded-2xl relative'>
           <div className='w-12 h-12 bg-gray-400/75 rounded-3xl'></div>
            <div className='max-w-10/12 flex flex-col gap-y-3'>
              <div className='flex flex-row justify-baseline space-x-2.5'>
                <p>{data.username}</p>
                <p className='opacity-55'>11m</p>
            </div>
            <div className='flex flex-col gap-y-1'>
               <p className='font-semibold tracking-wide'>{data.title}</p>
               <p>{data.content}</p>
               <img src={data.media_url} className='w-fit' alt="post content" />
            </div>
            <div className='flex flex-row justify-baseline space-x-6'>
              <div>
                {
                  data.isLiked?(
                    <i className="far fa-heart "></i>
                  ):(
                    <i className="fas fa-heart "></i>
                  )
                }
                <p>{data.likes}</p>
              </div>
              <div>
                <i className="far fa-comment "></i>
                <p>{data.comments}</p>
              </div>
              <div>
                <i className="far fa-bookmark "></i>
              </div>
            </div>
           </div>
           <p className='absolute right-10 font-bold cursor-pointer text-lg'>...</p>
    </div>
  )
}
