import React from 'react'
import { useSelector } from 'react-redux';
import { lang } from '../utilies/constantlanguages';

function Gptcompo() {
  const language=useSelector(store=>store.lang.what_is_the_lang)
  
  return (
    <div className='bg-black w-screen h-[100vh]'>
      <div className='text-white relative flex justify-center items-center top-64'>
        <form className='absolute'>
          <input type='text' className='text-black p-4 m-4 col-span-10 w-96' placeholder={lang[language]?.gptsearchbar}></input>
          <button className='col-span-2 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[language]?.search}</button>
        </form>
      </div>
    </div>
  )
}

export default Gptcompo
