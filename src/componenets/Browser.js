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
import { useSelector } from 'react-redux';
import Gptcompo from './Gptcompo';

function Login() {
  
  const dispatch=useDispatch();
  const flag_for_gpt=useSelector((store)=>store.gpt?.flag_for_gpt)
  console.log(flag_for_gpt)
  async function make_api_call(){
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US", options)
    const res= await data.json();
   // console.log(res.results);
    dispatch(addNowPlayingMovies(res));

  }
  useEffect(()=>{
    make_api_call();



  },[])
  const navigate=useNavigate();

  
  return (
    <div className='bg-black'>
    <Header/>
    
    {flag_for_gpt?
    <Gptcompo/>:
    <>
    <MainContainer/>
    <Secondarycontainer/>
    </>
    
    }
    </div>
  )
}

export default Login