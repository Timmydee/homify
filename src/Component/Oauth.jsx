import React from 'react'
import {FcGoogle} from "react-icons/fc";

const Oauth = () => {
  return (
    <button 
        type='submit' 
        className='w-full flex items-center justify-center text-sm font-medium uppercase rounded shadow-md bg-red-600 hover:bg-red-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 py-3 px-7 text-white'
    >
        <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
        Continue with Google
    </button>
  )
}

export default Oauth