import React, { useState,useEffect } from 'react'
import { signOut,getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { adduser } from '../utilies/userSlice';
import { removeUser } from '../utilies/userSlice';
import { auth } from '../utilies/firebase';
import { change_the_flag } from '../utilies/gptSlice';
import Dropdown from './Dropdown';
import { useSelector } from 'react-redux';

function Header() {
    const flagger=useSelector(store=>store.gpt.flag_for_gpt);
    const[flag,set_flag]=useState(false);
    const dispatch=useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            const { uid, email } = user;
            dispatch(adduser({ uid, email }));
            navigate("/browse");
            set_flag(true)
          } else {
            // User is signed out
            dispatch(removeUser());
            set_flag(false);
          }
        });
      
        // Cleanup function to unsubscribe the listener
        return () => unsubscribe();
      }, []);
    const navigate=useNavigate();
    const handlelogout=()=>{


   

        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          navigate("/")
        
        }).catch((error) => {
          // An error happened.
        });
          }

  return (
    <div className='absolute w-full z-50'> <div className='flex justify-between '>
    <svg
viewBox="0 0 111 30"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
aria-hidden="true"
role="img"
className="default-ltr-cache-1d568uk ev1dnif2 w-24 m-7 z-50"
>
<g>
  <path
    d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
    fill="red"
  ></path>
</g>
</svg>


{flag&&<div className='flex'>
    <button onClick={()=>{
        dispatch(change_the_flag());
    }} className='text-white hover:scale-110 bg-purple-700 h-6 mt-7 px-4 rounded-md '>
{flagger?"Home":"Gpt-search"}
</button>
<Dropdown/>
<span className='mt-7 mx-3 cursor-pointer text-white ' onClick={()=>{
handlelogout();
}}>Log Out</span>

<img className ="w-14 h-12 mt-5 mr-7 rounded-md" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAb1BMVEUNfoD///8AenwAd3kAcnT5/Pzz+PgAbG5ln6EAb3Lh7OzP5ueOvr/Y5ubt9vYvi42819hPlpdaoaO20dLG3d47kJJmqqsbg4VRn6Cky8tFlZeGvb6VxMR7sbHN39+uzc6KtrY5hoh0paeav7+z19j+PG4vAAADuklEQVR4nO3a63qiMBAG4DABkWjkIJBCBTzd/zUubKurktZDsqH77Pf+N+MwIQQyjAEAAAAAAAAAAAAAAAAAAAAAAADYxKOIKIy4+8jEQ59R6FsLzemtkkKILiNOtgZ9CHFW5n1kWdXcSjrkvwvv02qpXFaHx5vgFHpRWohMLPcutLW72lAmL0N3ZBqa11cDep7MnGXTrK5DJ8osNMWtd8NVbWgubkN3htlUwe2IxkM+KE5GkYOtyX3Ds9HV6VeBuZNkmvFl9GRsEJofNCN6G3v/+GtqXBjPmxmUhrQjeovd3y8N7XSX0Vu/HplSqRvRSx0k86aN3L4+z/h+pR3SwepMpTayfP068u1ssmTerSez1yxm/2plKF1oh3Rxz9TayAb3zISrGdtpZ7jBajblc4YdNZFNnjP6tdnRDqDUlMZglg0249JUytb//ZbqxoVpjHLR3DV54WjXPF59KsMtLi/y6wEdvs/cvgOYvs8Mb5rV1YBms/a50PVlbYKNjQ8QvDyPKRrm8osGqffzfirP7Hx94L5qEinbTWzvi89jiPtxJaVMGmUvNPlRGIa+2+9Mp9B95MjxJy4AAAAAAAAAAAAAOCOf+CQfiO2jUB2SdWOnufHZ2GTctnc9XNH9Po9cOGxEPMVmRZYVto5y+suSVqfT2tzhYddH9HgpgmBWpTbSIYrn1Z8WnqBxPNH45xG+WBaG5yrEqWiSq26kg9vK8HN3VZBvTSYbkcqW+U07gONk/MvT9vyQspfK0xelbtbjngrXlbn6B4FcN/GznerEmSo7qel2E3O390x0ezlXotvHvv/o7/tHY9F0Qtu3t2r+5j/X8Md9b8FMrksW+fcK1D/jI7845GKm7dD0ZOkmhQtc23IXBIvNvlB9RrqUiPPIZ8W8v+H1eQxTrJzg0JnqUZv6yUy2VVkrv8/oWvzWdK3uJrlIhT08U23i9P7d3+qtFsdjtRxsjsej0HdPXl6EtqQptmUf6RTd3T/4sEAkJZssFTY88NJO6Htvn7SS3YuPKos4pdvFndl2n0iaYpJ9/63+Gb7vxJeL012BWB/myuq7hAniKtsmr5VHJNu50i7jk+mva5w2x2fzkdU+jdmPKcof/Uun2pVV+2BCs3a9fdspu6+qNg1v0arOlncrlBz2tWI/N5GzYccS8rg5JPlCitUpr2A2E1LmSdUUFN7fvv0ow16y3+DHdTH/kBZ1rIhH/2y33zDt6HNXRpa/5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwH/vFyPNKzle3IL1AAAAAElFTkSuQmCC'></img>
</div>}

    </div></div>
  )
}

export default Header