import React, { useState } from 'react'

export default function CommentBar() {
    const [isHidden,setIsHidden]=useState(false);
    const toggleTranslation=()=>{
        console.log('clicked toggle transalation');
        console.log(isHidden);
        setIsHidden((prev)=>!prev);
        console.log(isHidden);
    }
  return (
    <div className={`${isHidden?'translate-x-[1000px]':'translate-x-0'} transition-all duration-500 ease-in-out bg-gray-500 sticky bottom-4 py-2 px-4 rounded-2xl w-full flex flex-row justify-between`}>
           {/* <input type="text" placeholder='write a comment...' className='bg-transparent placeholder:text-white w-11/12 border-none outline-none text-white'/> */}
           <textarea name="comment" id="comment" className='bg-transparent [scrollbar-width:none] pt-4 max-h-60 px-4 min-h-10 placeholder:text-white w-11/12 border-none outline-none text-white' placeholder='Write a comment'></textarea>
           <input type="submit" value="Submit" className='text-white font-semibold'/>
           <button className='font-bold text-lg sticky right-2' onClick={()=>{toggleTranslation()}}>&gt;</button>
         </div>
  )
}
