import React, {useState} from 'react'
import Oauth from '../Component/Oauth';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function SignUp() {
  const [showpasswd, setShowPasswd] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const {name, email, password} = formData;
  const navigate = useNavigate();

  function onChang(e) {
    console.log(e.target.value)
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value, 
    }))
  }

  async function onSubmit(e){
    e.preventDefault()

    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      //to include the name 
      updateProfile(auth.currentUser, {
        displayName: name
      })
      //adding details to firestore
      const user = userCredential.user;
      const formDataCopy = {...formData}
      delete formDataCopy.password;
      formDataCopy.timeStamp = serverTimestamp(); //time from firebase

      console.log(user)

      // await setDoc(doc(db, "users", user.uid), formDataCopy)
      await setDoc(doc(db, "users", user.uid), formDataCopy); //adding user to the database

      navigate("/") //navigate to home page
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong TRY AGAIN")
    }
  }

  function passwordEye() {
    setShowPasswd(prevState => !prevState)
  }

  return (
    <section className='font-display'>
      <h1 className='text-4xl text-center mt-6 font-bold'>Sign Up</h1>
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
              type="text" 
              id='name' 
              value={name}
              onChange={onChang}
              placeholder="Full Name"
            />

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
              <p>Have an account? 
                <Link to="/sign-in" className='text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1'>Sign in</Link>
              </p>

              <Link to="/forgot-pass" className='text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out'>Forgot password</Link>
            </div>

            <button type='submit' className='w-full text-sm font-medium uppercase rounded shadow-md bg-blue-600 hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 py-3 px-7 text-white mt-6'>Sign Up</button>
            
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
