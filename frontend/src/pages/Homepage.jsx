import React from 'react'
import PostCard from '../components/partials/PostCard'

export default function Homepage() {
  const posts=[
        {
            post_id:1,
            title:"Just finished the sopranos season 4, shii was depressing",
            media_url:"/image 2.png",
            content:"",
            likes:32,
            comments:4,
            isLiked:false,
            isSaved:false,
            username:"ChhapluBaba_Taplu3"
        },{
            post_id:2,
            title:"Not just once, not just twice",
            media_url:"/image 3.png",
            content:"",
            likes:24,
            comments:2,
            isLiked:true,
            isSaved:false,
            username:"thugking"
        },{
            post_id:3,
            title:"Absolute Cinema! Peak fiction",
            media_url:"/lotm grayfog.png",
            content:"really",
            likes:32,
            comments:3,
            isLiked:false,
            isSaved:false,
            username:"ChhapluBaba_Taplu3"
        },{
            post_id:4,
            title:"Just finished the sopranos season 4, shii was depressing",
            media_url:"/image 2.png",
            content:"",
            likes:32,
            comments:4,
            isLiked:false,
            isSaved:false,
            username:"ChhapluBaba_Taplu3"
        },
    ]
  return (
    <div className='relative h-screen bg-gray-200 text-sm flex flex-col items-center gap-y-4 overflow-y-scroll overflow-x-hidden [scrollbar-width:none] scroll-smooth '>
      <div className='flex flex-row justify-around bg-gray-200/70 pt-6 pb-4 font-bold w-full sticky top-0'>
        <button className='absolute left-10 md:hidden'>=</button>
        <button className=''>Discover</button>
        <button className='opacity-55'>Following</button>
      </div>
      <div className='flex flex-row justify-around items-center w-11/12'>
        <p>Feel like posting something?</p>
        <div className='w-2/5 h-1 bg-gray-400 rounded-2xl'></div>
        <button className='bg-primary-color font-bold text-white text-[12px] p-2 rounded-2xl'>Create post</button>
      </div>
      <div className='w-[90%] flex flex-col gap-y-4 pb-4'>
        {
          posts.map((post)=>{
            return <PostCard key={post.post_id} data={post}/>
          })
        }
      </div>
    </div>
  )
}
