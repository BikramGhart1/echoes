import React from 'react'
import HamburgerMenu from '../components/partials/HamburgerMenu'
import PostCard from '../components/partials/PostCard'
import CommentCard from '../components/partials/CommentCard'

export default function ViewPost() {
    const data={
            post_id:3,
            title:"Absolute Cinema! Peak fiction",
            media_url:"/lotm grayfog.png",
            content:"really",
            likes:32,
            comments:3,
            isLiked:false,
            isSaved:false,
            username:"ChhapluBaba_Taplu3"
        }
    const commentData=[{
      comment_id:1,
      content:'Nephew I heard you saying I ain\'t tuff?🥀 ',
      post_id:3,
      user_id:1,
      parent_id:1,
      created_at:Date.now(),
    }]
  return (
    <div className='bg-gray-200 relative flex flex-col items-center gap-y-3 text-sm overflow-y-scroll max-h-screen [scrollbar-width:none]'>
      <div className='flex flex-row justify-start space-x-28 items-center w-full bg-gray-200/70 px-2 md:py-6 font-bold sticky top-0 z-10'>
              <HamburgerMenu/>
              <div className='flex flex-row items-center space-x-4'>
                  <div className='flex flex-row items-center justify-start space-x-2'>
                    <i className="fas fa-arrow-left"></i>
                    <p>Go back</p>
                  </div>
                  <img src="/echoes_transparent.png" className='w-14 md:hidden' alt="logo" /> 
              </div>
       </div>
       {/* <div className='viewPostContainer'>
         <p className='font-semibold text-center w-full'>Absolute Cinema! Peak fiction</p>
       </div> */}
       <div className='flex flex-row items-center justify-around w-[90%] md:w-2/3'>
        <p>URL:</p>
        <p className='bg-gray-300 px-4 py-1 rounded-xl line-clamp-2 w-3/4'>https://www.instagram.com/p/DJml3K1IkjE/</p>
        <button className='bg-gray-300 px-4 py-1 rounded-xl'>Copy</button>
       </div>
       <div className='viewPostContainer flex flex-col gap-y-5 items-start '>
         <PostCard data={data}/>
         <div className='w-full bg-gray-300 flex flex-col gap-y-2 rounded-xl'>
           <p className='text-center font-semibold pt-6'>Comments</p>
           <CommentCard/>
           <CommentCard/>
           <CommentCard/>
           <CommentCard/>

         </div>
         <div className='bg-gray-500 sticky bottom-4 py-4 px-4 rounded-2xl w-full flex flex-row justify-between'>
           <input type="text" placeholder='write a comment...' className='bg-transparent placeholder:text-white w-11/12 border-none outline-none text-white'/>
           <input type="submit" value="Submit" className='text-white font-semibold'/>
         </div>
       </div>
    </div>
  )
}
