import React from 'react'

function Moviecard({moviename}) {
    const url="https://media.themoviedb.org/t/p/w220_and_h330_face/"+moviename
  return (
    <img src={url} className='w-40 h-40'></img>
  )
}

export default Moviecard