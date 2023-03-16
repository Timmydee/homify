import { collection, getDocs, limit, query, getDoc, where, orderBy } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import Slider from "../Component/Slider"
import { db } from "../firebase"
import { Link } from 'react-router-dom'
import ListingItem from "../Component/ListingItem"
import Home1 from "./Home1"


export default function Home() {
  //offers
  const [offerListing, setOffer] = useState(null)

  useEffect(()=> {
      async function fetchListings(){
        try{
          //get reference
          const listingsRef = collection(db, "listings");
          //create query
          const q = query(listingsRef, where("offer", "==", true), orderBy
          ("timestamp", "desc"), limit(4));

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

  //place for rent
  const [rentListing, setRent] = useState(null)

  useEffect(()=> {
      async function fetchListings(){
        try{
          //get reference
          const listingsRef = collection(db, "listings");
          //create query
          const q = query(listingsRef, where("type", "==", "rent"), orderBy
          ("timestamp", "desc"), limit(4));

          //execute query
          const querySnap = await getDocs(q)
          const listings = []
          querySnap.forEach((doc) => {
            return listings.push({
              id: doc.id,
              data: doc.data(),
            })
          })
          setRent(listings)
          console.log(listings)
        } catch(error) {
            console.log(error)
        }
      }
    fetchListings()
  }, [])
  //place for rent
  const [saleListing, setSale] = useState(null)

  useEffect(()=> {
      async function fetchListings(){
        try{
          //get reference
          const listingsRef = collection(db, "listings");
          //create query
          const q = query(listingsRef, where("type", "==", "sale"), orderBy
          ("timestamp", "desc"), limit(4));

          //execute query
          const querySnap = await getDocs(q)
          const listings = []
          querySnap.forEach((doc) => {
            return listings.push({
              id: doc.id,
              data: doc.data(),
            })
          })
          setSale(listings)
          console.log(listings)
        } catch(error) {
            console.log(error)
        }
      }
    fetchListings()
  }, [])

  return (
    <div>
      {/* <Slider /> */}
      <Home1 />
      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {offerListing && offerListing.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Recent Offers</h2>
            <Link to = '/offers'>
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">Show more offers</p>
            </Link>
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
      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {rentListing && rentListing.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Places for Rent</h2>
            <Link to = '/category/rent'>
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">Show more places for rent</p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-4" >
              {rentListing.map(listing => (
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
      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {saleListing && rentListing.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Places for Sale</h2>
            <Link to = '/category/sale'>
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">Show more places for sale</p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-4" >
              {saleListing.map(listing => (
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
    </div>
  )
}
