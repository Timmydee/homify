import { getDoc, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Component/Spinner';
// import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Listing = () => {
    const params = useParams();
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        async function fetchListing(){
            const docRef = doc(db, "listings", params.listingId)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()){
                setListing(docSnap.data())
                setLoading(false)
            }
        }
        fetchListing()
    },[params.listingId])
    if (loading) {
        return <Spinner />
    }

    return (
        <div>
            {listing.name}
        </div>
    )
}

export default Listing