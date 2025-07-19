import React from 'react'
import HamburgerMenu from '../components/partials/HamburgerMenu'
import PostCard from '../components/partials/PostCard'
import CommentCard from '../components/partials/CommentCard'
import CommentBar from '../components/partials/CommentBar'
import Header from '../components/partials/Header'

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
    <div className='mainContainer'>
       <Header/>
       {/* <div className='viewPostContainer'>
         <p className='font-semibold text-center w-full'>Absolute Cinema! Peak fiction</p>
       </div> */}
       <div className='flex flex-row items-center justify-around w-[90%] md:w-2/3'>
        <p>URL:</p>
        <p className='bg-gray-300 px-4 py-1 rounded-xl line-clamp-2 w-3/4'>https://www.instagram.com/p/DJml3K1IkjE/</p>
        <button className='bg-gray-300 px-4 py-1 rounded-xl'>Copy</button>
       </div>
       <div className='viewPostSubContainer flex flex-col gap-y-5 items-start '>
         <PostCard data={data}/>
         <div className='w-full bg-gray-300 flex flex-col gap-y-2 rounded-xl'>
           <p className='text-center font-semibold pt-6'>Comments</p>
           <CommentCard/>
           <CommentCard/>
           <CommentCard/>
           <CommentCard/>
         </div>
         <CommentBar/>         
       </div>
    </div>
  )
}
