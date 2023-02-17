import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import {getAuth, updateProfile} from 'firebase/auth'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
// import { collection, doc, query, updateDoc, where } from 'firebase/firestore';
import {db} from "../firebase"
import { FcHome } from 'react-icons/fc';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import ListingItem from '../Component/ListingItem';

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate()
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

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

  //getting the listing from the database
  useEffect(() => {
    async function fetchUserListings() {
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setLoading(false);
    }
    fetchUserListings();
  }, [auth.currentUser.uid]);
  
  async function onDelete(listingID){
    if(window.confirm("Are you sure you wanna delete this listing")) {
      await deleteDoc(doc(db, "listings", listingID));
      const updateListings = listings.filter(
        (listing) => listing.id !== listingID
      );
      setListings(updateListings)
      toast.success("successfully deleted")
    }
  }

  function onEdit(){

  }

  return (
    <>
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
              <p onClick={logout} className='text-blue-600 hover:text-blue-800  transition cursor-pointer ease-in-out duration-200'>
                Sign Out
              </p>
            </div>
          </form>
          <button type='submit' className='w-full bg-blue-700 hover:bg-blue-900 transition delay-200 ease-in-out py-3
            text-white font-medium text-sm hover:shadow-lg active:bg-blue-800 rounded'>
              <Link to="/create-list">
                {/* <FcHome/> */}
                List a House for sell
              </Link>
            
          </button>
        </div>
      </div>

      <div className="max-w-6xl px-3 mt-6 mx-auto">
        {!loading && listings.length > 0 && (
          <>
            <h2 className='text-2xl mb-6 text-center font-semibold'>
              My Listings
            </h2>

            <ul className="sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data} 
                  onDelete={()=>onDelete(listing.id)}
                  onEdit = {() => onEdit(listing.id)}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </>

  )
}