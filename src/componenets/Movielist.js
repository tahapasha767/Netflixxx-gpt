import React from 'react'
import Moviecard from './Moviecard'

function Movielist({title,movies}) {
    if(!movies)
    {
        return;
    }
  return (
    <div className='w-screen'>
        <div className='text-white text-lg p-4 px-10'>{title}</div>
        <div className='flex gap-3 overflow-x-scroll scrollbar-hide mx-4'>
            {console.log(movies)}
        {movies?.results?.map((movie, index) => (
  <Moviecard key={index} moviename={movie?.poster_path} />
 
))}

      
        </div>
    </div>
  )
}

export default Movielist