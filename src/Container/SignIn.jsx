import React, {useState} from 'react'
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai";
import Oauth from '../Component/Oauth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';


export default function SignIn() {
  const [showpasswd, setShowPasswd] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const {email, password} = formData;
  const navigate = useNavigate();

  function onChang(e) {
    console.log(e.target.value)
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value, 
    }))
  }

  function passwordEye() {
    setShowPasswd(prevState => !prevState)
  }

  async function onSubmit(e){
    e.preventDefault();
    try{
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth,email,password)

      if(userCredential.user) {
        navigate("/profile")
      }
    } catch(error){
      toast.error("wrong login details")
    }
  }
  
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign in</h1>
      <div className='flex justify-center mt-6 flex-wrap items-center px-4'>
        <div className='md:w-[57%] lg:w-[40%] mb-12 md:mb-6'>
          <img 
            // src='https://images.unsplash.com/photo-1609770231080-e321deccc34c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' 
            src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
            alt='sign' 
            className='w-full rounded-2xl' 
          />
        </div>
        {/* max-w-xs */}
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            <input 
              className='w-full mb-6 px-4 py-2 text-xl text-gray-700 transition ease-in-out border-gray-300 rounded bg-white' 
              type="email" 
              id='email' 
              value={email}
              onChange={onChang}
              placeholder="Email Address"
            />
            
            <div className='relative mb-6'>
              <input
                className='w-full px-4 py-2 text-xl text-gray-700 transition ease-in-out border-gray-300 rounded bg-white' 
                type={showpasswd ? "text" : "password"} 
                id='password' 
                value={password}
                onChange={onChang}
                placeholder="Password"
              />
              {showpasswd ? 
                <AiFillEyeInvisible
                  className='absolute right-3 top-3 cursor-pointer'
                  onClick={passwordEye}
                /> :
                <AiFillEye 
                  className='absolute right-3 top-3 cursor-pointer'
                  onClick={passwordEye}
                />
              }
            </div>

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg '>
              <p>Don't have a account? 
                <Link to="/sign-up" className='text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1'> Register</Link>
              </p>

              <Link to="/forgot-pass" className='text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out'>Forgot password</Link>
            </div>

            <button type='submit' className='w-full text-sm font-medium uppercase rounded shadow-md bg-blue-600 hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 py-3 px-7 text-white mt-6'>Sign In</button>
            
            <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>

            <Oauth />
          </form>
        </div>
      </div>
    </section>
  )
}
