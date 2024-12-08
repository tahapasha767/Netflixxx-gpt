import React from 'react'
import Moviecard from './Moviecard'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utilies/movieSlice'

function Secondarycontainer() {
  const movies=useSelector(store=>store.movies)
  return (
    <div className='bg-black relative'>
    <div  className='bg-black absolute top-[80vh]  text-white  w-screen h-[120vh] z-20'>
    <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <Movielist title={"Trending"} movies={movies.nowPlayingMovies}/>
    <Movielist title={"Horror"} movies={movies.nowPlayingMovies}/>
    </div>
    
    </div>
  )
}

export default Secondarycontainer