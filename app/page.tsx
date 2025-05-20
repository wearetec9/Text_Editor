'use client'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-white gap-4'>

      <div className='min-h-[8vh] bg-amber-50 border-amber-400 border-2 flex rounded min-w-[20%]'>
        <div>

          <button className='border-2 border-black text-black'>Bold</button>


        </div>
        <div>
           <button className='border-2 border-black text-black'>Italic</button>
        </div>
        <div>
           <button className='border-2 border-black text-black'>Underline</button>
        </div>
      </div>

      <div
        contentEditable="true"
        className="text-black border  bg-amber-50 border-gray-400 min-h-[82vh] min-w-[75%] p-4  rounded-3xl  focus:outline-none focus:ring-4 focus:ring-blue-500"
      >
        Type your text here...
      </div>


    </div>
  )
}

export default page