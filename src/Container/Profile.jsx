import React from 'react'
import { useState } from 'react'
import {getAuth, updateProfile} from 'firebase/auth'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { updateDoc } from 'firebase/firestore';

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate()

  const [currentChange, setCurrentChange] = useState(false);
  const[formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const {name, email} = formData;

  const logout = () => {
    auth.signOut()
    navigate("/")
  }

  //switch between edit and apply changes
  const Change = () => {
    onSubmit() && setCurrentChange((prevState) => !prevState)
  }

  //Edit name of user
  const edits = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update name in the firestore

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("Profile details updated");
    } catch (error) {
      toast.error("Could not update the profile details");
    }
  }

  // async function onSubmit() {
    
  //   try{
  //     if(auth.currentUser.displayName !== name){
  //       //update display name in fbase auth
  //       await updateProfile(auth.currentUser, {
  //         displayName: name,
  //       });

  //       //update in fstore
  //       const docRef = doc(db, "users" , auth.currentUser.uid);
  //       await updateDoc(docRef, {
  //         name,
  //       })     
  //     }
  //     toast.success("changed sucessfully")
  //   } catch(error) {
  //     toast.error("Cant change name now try again later")
  //   }
  // }
  

  return (
    <div className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
      <h2 className="text-3xl text-center font-bold mt-6" >My Profile</h2>

      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form>
          <input 
            onChange={edits}
            type="text" 
            id='name'
            value={name}
            disabled = {!currentChange}
            className={`w-full border border-gray-300 rounded mt-6 px-4 py-2 transition ease-in-out ${currentChange && "bg-red-300 focus:bg-red-100"}`}
          />

          <input 
            // onChange={edits}
            type="email" 
            id='email'
            value={email}
            disabled = {!currentChange}
            className="w-full border border-gray-300 rounded mt-6 px-4 py-2 transition ease-in-out"
          />
        </form>

        <div className='flex justify-between mt-4 whitespace-nowrap text-sm sm:text-lg mb-6'>
          <p className='flex items-center'>
            Do you want to make changes? 
            <span 
              onClick={Change}
              
              className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
            > 
              {currentChange ? "Apply Change" : "Edit"}
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