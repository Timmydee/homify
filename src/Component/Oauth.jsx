import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react'
import {FcGoogle} from "react-icons/fc";
import {toast} from "react-toastify";
import { useNavigate } from 'react-router';

const Oauth = () => {
  const navigate = useNavigate()
  async function onGoogleClick() {
    try{
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      console.log(user)

      //check if user exist 
      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()){
        await setDoc(docRef, {
          name:user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/")

    } catch(error) {
      toast.error("Could not authorize with Google");
      console.log(error)
    }
  }

  return (
    <button 
      type="button"
      onClick={onGoogleClick}
      className='w-full flex items-center justify-center text-sm font-medium uppercase rounded shadow-md bg-red-600 hover:bg-red-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 py-3 px-7 text-white'
    >
      <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
      Continue with Google
    </button>
  )
}

export default Oauth