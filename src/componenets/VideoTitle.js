import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='pt-48 pl-10 absolute z-20 text-white bg-gradient-to-r from-black w-screen h-[100vh]'>
        <h1 className='text-6xl font-bold  '>{title}</h1>
        <p className='mt-7 w-1/3'>{overview}</p>
      <div className='flex gap-5 mt-14'>
        <button className='w-24 bg-white p-2 rounded-md text-black hover:opacity-80'>▶ Play</button>
        <button className='w-24 bg-slate-500 bg-opacity-60 p-2 text-white rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle