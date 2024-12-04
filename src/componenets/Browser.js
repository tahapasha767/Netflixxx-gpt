import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { options } from '../utilies/constants';
import  {useDispatch} from  "react-redux"
import { addNowPlayingMovies } from '../utilies/movieSlice';
import Header from './Header';
import MainContainer from './MainContainer';
import Secondarycontainer from './Secondarycontainer';

function Login() {
  
  const dispatch=useDispatch();
  async function make_api_call(){
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US", options)
    const res= await data.json();
    console.log(res.results);
    dispatch(addNowPlayingMovies(res));

  }
  useEffect(()=>{
    make_api_call();



  },[])
  const navigate=useNavigate();

  
  return (
    <div>
    <Header/>
    <MainContainer/>
    <Secondarycontainer/>
    </div>
  )
}

export default Login