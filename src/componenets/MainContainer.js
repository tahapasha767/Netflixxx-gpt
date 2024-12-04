import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import Videobackground from './Videobackground'
function MainContainer() {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies )
    if(movies==null)
        {
            return;
        }

    
   
    console.log(movies?.results[0])
    const {original_title,overview,id}=movies?.results[0]
  return (
    <div className='relative'>
       <VideoTitle title={original_title} overview={overview}/>
       <Videobackground movie_id={id}/> 

    </div>
  )
}

export default MainContainer