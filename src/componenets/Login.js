import React, { useEffect } from 'react'
import { useState,useRef } from 'react'
import { checkvalidation } from '../utilies/validate';
//import { app } from '../utilies/firebase';
import { auth } from '../utilies/firebase';
import { signup } from '../utilies/signup';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
//import { auth } from '../utilies/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { adduser,removeUser} from '../utilies/userSlice'
//import { useNavigate } from 'react-router-dom'
import Header from './Header';



function Browser() {
   // const navigate=useNavigate();

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [flag_for_log,set_flag]=useState(true);
    const email=useRef();
    const password=useRef();
    const username=useRef();
    const [valid_data,setvalid_data]=useState();
    const auth=getAuth();
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const { uid, email } = user;
          dispatch(adduser({ uid, email }));
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
        }
      });
    
      // Cleanup function to unsubscribe the listener
      return () => unsubscribe();
    }, []);
    
  
    const getuserinfo=()=>{
        if(!set_flag)
        {
            console.log(username.current?.value);
        }
        console.log(email.current?.value)
        console.log(password.current?.value);
        const res=checkvalidation(email.current.value,password.current.value)
        setvalid_data(res)
        if(res!=null)
        {
          return;
        }
        console.log(auth)
        if (!flag_for_log) {
          signup(auth, email.current?.value, password.current?.value).catch((error) => {
            setvalid_data(error.message);
           // 
          });
        } else {
          signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
            .then((userCredential) => {
              navigate("/browse")
              console.log("Signed in successfully:", userCredential.user);
            })
            .catch((error) => {
              setvalid_data(error.message);
            });
        }
        
          
        
       

    }
  return (
    <div className="relative ">
         <Header/>
  <img
    className="concord-img vlv-creative h-[100vh] w-full"
    src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_small.jpg"
    srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg 1800w"
    alt=""
  />
  <div className="w-[400px] h-[520px] bg-black bg-opacity-75 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg mt-14">

  <div className='text-white mx-14 my-8 text-3xl font-bold '>
   {flag_for_log? "Sign In":"Sign Up"}
  </div>
  <div>
    <form  className='flex flex-col gap-5 mx-6 p-7' onSubmit={(event)=>{
             event.preventDefault();
    
             getuserinfo();
        }}>
   {!flag_for_log&&<input ref={username} type='text' className=' p-2 rounded-sm py-4 bg-gray-700 bg-opacity-40 text-white  border border-white' placeholder='User Name'></input>}
        <input type='text' ref={email} className=' p-2 rounded-sm py-4 bg-gray-700 bg-opacity-40  border border-white' placeholder='Email Address'></input>
        <input type='password' ref={password} className='p-2 rounded-sm py-4 bg-gray-700 bg-opacity-40 mb-8'  placeholder='Password'></input>
        <p className='text-red-500'>{valid_data}</p>
        <button className='p-3 w-72 text-white bg-red-600 rounded-md' type='submit' >{flag_for_log?"Sign In":"Sign Up"}</button>
        <p onClick={()=>{set_flag(!flag_for_log)}} className='text-white text-sm'>New to Netflix, Sign Up Now</p>
    </form>
  </div>
  </div>
</div>

        
 
  )
}

export default Browser
