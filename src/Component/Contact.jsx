import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";

function Contact({ userRef, listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getLandlord() {
      const docRef = doc(db, "users", userRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
        console.log(landlord)
      } else {
        toast.error("Could not get landlord data");
      }
    }
    getLandlord();
  }, [userRef]);

  function onChange(e){
    setMessage(e.target.value)
  }

  return (
    <>
        {landlord !== null && (
            <div className="flex flex-col w-full">
                <p className="font-medium">
                    Contact {landlord.name} for the {listing.name.toLowerCase()}
                </p>
                <div className="mt-3 mb-6">
                  <textarea
                    name="message"
                    id="message"
                    rows="2"
                    value={message}
                    onChange={onChange}
                    className = "w-full py-2 px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
                  />
                </div>
                <a href={`mailto: ${landlord.email}?subject-${listing.name}&body=${message}`}>
                  <button type="button" className="bg-blue-600 w-full py-3 px-7 text-white font-normal rounded shadow-md uppercase hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg transition duration-150 ease-in-out">Send Message</button>
                </a>

            </div>
        )}
    </>
  )
}

export default Contact