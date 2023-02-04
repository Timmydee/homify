import React from 'react'
import { useState } from 'react'
import {getAuth} from 'firebase/auth'
import { useNavigate } from 'react-router';

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate()
  const[formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const {name, email} = formData;

  const logout = () => {
    auth.signOut()
    navigate("/")
  }

  return (
    <div className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
      <h2 className="text-3xl text-center font-bold mt-6" >My Profile</h2>

      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form>
          <input 
            type="text" 
            id='name'
            value={name}
            // disabled
            className="w-full border border-gray-300 rounded mt-6 px-4 py-2 transition ease-in-out"
          />

          <input 
            type="email" 
            id='email'
            value={email}
            // disabled
            className="w-full border border-gray-300 rounded mt-6 px-4 py-2 transition ease-in-out"
          />
        </form>

        <div className='flex justify-between mt-4 whitespace-nowrap text-sm sm:text-lg mb-6'>
          <p className='flex items-center'>
            Do you want to make changes? 
            <span 
              className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
            > 
              Edit
            </span>
          </p>
          <p onClick={logout} className='text-blue-600 hover:text-blue-800 transition cursor-pointer ease-in-out duration-200'>
            Sign Out
          </p>
        </div>
      </div>
    </div>
  )
}
