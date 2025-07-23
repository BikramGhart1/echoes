import React from 'react'
import Header from '../components/partials/Header'

export default function CreatePost() {
  return (
    <div className='mainContainer'>
        <Header/>
      <p className='py-1 px-3 text-center w-11/12 rounded-lg font-bold text-lg tracking-wider'>Create Post</p>
      <form className='w-11/12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg'>
        <div className='w-full py-4 px-4 flex flex-col items-center gap-y-3'>
            <p className='font-semibold tracking-wide'>Title</p>
            <input type="text" name="title" id="" placeholder='' className='outline-none bg-gray-0 md:w-3/4 w-full px-4 py-2 rounded-lg'/>
            <p className=''>0/250</p>
        </div>
        <div className='w-full py-4 px-4 flex flex-col items-center gap-y-3'>
            <p className='font-semibold tracking-wide'>Description . <em className='not-italic opacity-75 text-gray-900 font-normal'>Optional</em></p>
            <textarea type="text" name="title" id="" placeholder='' className='outline-none bg-gray-0 md:w-3/4 w-full px-4 py-2 rounded-lg min-h-24 max-h-32'></textarea>
        </div>
       <div className="w-full py-6 px-4 flex flex-col items-center gap-y-4">
        <p className="text-center font-semibold tracking-wide text-gray-800">
            Upload an image{" "}
            <em className="not-italic opacity-85 text-gray-600 font-normal">(Optional)</em>
        </p>
  <label htmlFor="upload" className="cursor-pointer px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition duration-200">
    Choose File
  </label>
  <input type="file" name="image" id="upload" className="hidden" onChange={(e) => console.log(e.target.files[0])}/>
  <p className="text-sm text-gray-800">Only image files allowed. Max size 5MB.</p>
</div>

        <div className='flex flex-row justify-center space-x-20 w-full py-10'>
                <input type="reset" value="Cancel" className='bg-gray-600 text-white px-4 py-2 font-bold rounded-lg cursor-pointer tracking-wider'/>
                <input type="submit" value="Post" className='bg-primaryColor text-white px-4 py-2 font-bold rounded-lg cursor-pointer tracking-wider'/>
        </div>
      </form>
    </div>
  )
}
