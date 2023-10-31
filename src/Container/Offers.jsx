
import { collection, getDocs, limit, query, getDoc, where, orderBy } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import Slider from "../Component/Slider"
import { db } from "../firebase"
import { Link } from 'react-router-dom'
import ListingItem from "../Component/ListingItem"
import Footer from "../Component/Footer"


export default function Offers() {

    //offers
    const [offerListing, setOffer] = useState(null)

    useEffect(()=> {
        async function fetchListings(){
          try{
            //get reference
            const listingsRef = collection(db, "listings");
            //create query
            const q = query(listingsRef, where("offer", "==", true), orderBy
            ("timestamp", "desc"), limit(10));
  
            //execute query
            const querySnap = await getDocs(q)
            const listings = []
            querySnap.forEach((doc) => {
              return listings.push({
                id: doc.id,
                data: doc.data(),
              })
            })
            setOffer(listings)
            console.log(listings)
          } catch(error) {
              console.log(error)
          }
        }
      fetchListings()
    }, [])

  return (
    <div className='font-display'>
            <div className=" lg:mx-[6rem] mx-6 lg:pt-12 pt-6 space-y-6">
        {offerListing && offerListing.length > 0 && (
          <div className="m-2 mb-6">
            <h1 className="lg:text-4xl text-3xl mt-4 font-semibold text-red-700 text-center">Recent Offers</h1>
           
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-4" >
              {offerListing.map(listing => (
                <ListingItem 
                  key={listing.id}
                  listing={listing.data}
                  id = {listing.id}
                  
                />
              ))}
            </ul>
          </div>
      )}
      </div>

      <Footer />

      
    </div>
  )
}
