import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Spinner from '../Component/Spinner';

const CreateItem = () => {
    const [loading, setLoading] = useState(false)
    const [geolocationEnabled, setGeolocationEnabled] = useState(true)
    const [formData, setFormData] = useState({
        type: "furniture",
        name: '',
        description: "",
        condition: true,
        offer: true,
        regularPrice:"",
        discountPrice:"",
        address:"",
        brandName: ""
    })

    const {
        type,
        name,
        description,
        condition,
        offer,
        regularPrice,
        discountPrice,
        brandName,
        address
    } = formData;

    function onChange(e){
        let boolean = null;
        if (e.target.value === 'true') {
            boolean = true;
        }
        if(e.target.value === 'false') {
            boolean = false;
        }

        //files
        if(e.target.files){
            setFormData((prevState) => ({
                ...prevState,
                images: e.target.files
            }))
        }
        
        if(!e.target.files){
            setFormData((prevState) => ({
                ...prevState,
                [e.target.id]:boolean ?? e.target.value
            }))
        }

    }

    async function onSubmit(e){
        e.preventDefault();
        console.log(formData)
        setLoading(true)

    //     if(discountPrice > regularPrice){
    //         setLoading(false)
    //         toast.error("Discounted price cant be greater than Regular Price")
    //         return
    //     }

    //     if(images.length > 4) {
    //         setLoading(false)
    //         toast.error("Maximum of 4 images")
    //         return;
    //     }
    //     let geolocation = {};
    //     let location;
    //     if(geolocationEnabled){
    //         const response = await fetch(
    //             `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${import.meta.env.VITE_GEOCODE_API_KEY}`
    //         );
    //     }
    //     const data = await response.json()
    //     geolocation.lat = data.results[0]?.geometry.location.lat ?? 0;  
    //     geolocation.lng = data.results[0]?.geometry.location.lng ?? 0;

    //     if (location === undefined) {
    //         setLoading(false);
    //         toast.error("please enter a correct address");
    //         return;
    //     }
    //     else {
    //         geolocation.lat = latitude;
    //         geolocation.lng = longitude;
    //     }
    // }

    // async function storeImage(image) {
    //     return new Promise((resolve, reject) => {
    //       const storage = getStorage();
    //       const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
    //       const storageRef = ref(storage, filename);
    //       const uploadTask = uploadBytesResumable(storageRef, image);
    //       uploadTask.on(
    //         "state_changed",
    //         (snapshot) => {
    //           // Observe state change events such as progress, pause, and resume
    //           // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //           const progress =
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //           console.log("Upload is " + progress + "% done");
    //           switch (snapshot.state) {
    //             case "paused":
    //               console.log("Upload is paused");
    //               break;
    //             case "running":
    //               console.log("Upload is running");
    //               break;
    //           }
    //         },
    //         (error) => {
    //           // Handle unsuccessful uploads
    //           reject(error);
    //         },
    //         () => {
    //           // Handle successful uploads on complete
    //           // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //             resolve(downloadURL);
    //           });
    //         }
    //       );
    //     });
    //   }
  
    //   const imgUrls = await Promise.all(
    //     [...images].map((image) => storeImage(image))
    //   ).catch((error) => {
    //     setLoading(false);
    //     toast.error("Images not uploaded");
    //     return;
    //   });
  
    //   const formDataCopy = {
    //     ...formData,
    //     imgUrls,
    //     geolocation,
    //     timestamp: serverTimestamp(),
    //     userRef: auth.currentUser.uid,
    //   };
    //   delete formDataCopy.images;
    //   !formDataCopy.offer && delete formDataCopy.discountPrice;
    //   delete formDataCopy.latitude;
    //   delete formDataCopy.longitude;
    //   const docRef = await addDoc(collection(db, "listItems"), formDataCopy);
    //   setLoading(false);
    //   toast.success("ListItem created");
    //   navigate(`/category/${formDataCopy.type}/${docRef.id}`);
    }

    if (loading){
        <Spinner />
    }

  return (
    <main className='max-w-md px-2 mx-auto'>
        <h1 className="text-3xl text-center mt-6 font-bold">Create an Item</h1>
        <form onSubmit={onSubmit}>
            <p className="text-lg mt-6 font-semibold">Select your item Category</p>
            <div className="flex">
                <button
                    type="button"
                    id="type"
                    value="appliances"
                    onClick={onChange}
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        type === "appliances" ? "bg-slate-600 text-white" : "bg-white text-black"
                    }`}
                >
                    Appliances
                </button>
                <button
                    type="button"
                    id="type"
                    value="furniture"
                    onClick={onChange}
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        type === "furniture" ? "bg-slate-600 text-white" : "bg-white text-black"
                    }`}
                >
                    Furniture
                </button>
                <button
                    type="button"
                    id="type"
                    value="utility"
                    onClick={onChange}
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        type === "utility" ? "bg-slate-600 text-white" : "bg-white text-black"
                    }`}
                >
                    Utilities
                </button>
            </div>
            
            <p className="text-lg mt-6 font-semibold">Name</p>
            <input
            type="text"
            id="name"
            value={name}
            onChange={onChange}
            placeholder="Name"
            maxLength="32"
            minLength="10"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />

            <p className="text-lg font-semibold">Description</p>
            <textarea
            type="text"
            id="description"
            value={description}
            onChange={onChange}
            placeholder="Description"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />

            <p className="text-lg font-semibold">Brand Name</p>
            <input
            type="text"
            id="brandName"
            value={brandName}
            onChange={onChange}
            placeholder="Name"
            maxLength="32"
            minLength="10"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />

            <p className="text-lg font-semibold">Condition</p>
            <div className='flex'>
                <button
                    type='button'
                    id='condition'
                    value={true}
                    onClick={onChange}
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        condition ? "bg-slate-600 text-white" : "bg-white text-black"
                    }`}
                >
                    New
                </button>
                <button
                    type='button'
                    id='condition'
                    value={false}
                    onClick={onChange}
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        !condition ?"bg-slate-600 text-white" : "bg-white text-black"
                    }`}
                >
                    Used
                </button>
            </div>
            <p className="text-lg mt-6 font-semibold">Offer</p>
            <div className='flex'>
                <button
                    type='button'
                    id='offer'
                    value={true}
                    onClick={onChange}
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        offer ? "bg-slate-600 text-white" : "bg-white text-black"
                    }`}
                >
                    Yes
                </button>
                <button
                    type='button'
                    id='offer'
                    value={false}
                    onClick={onChange}
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        !offer ?"bg-slate-600 text-white" : "bg-white text-black"
                    }`}
                >
                    No
                </button>
            </div>

            <div className="flex items-center mb-6 mt-6">
                <div className="">
                    <p className="text-lg font-semibold">Regular price</p>
                    <div className="flex w-full justify-center items-center space-x-6">
                        <input
                            type="number"
                            id="regularPrice"
                            value={regularPrice}
                            onChange={onChange}
                            min="50"
                            max="400000000"
                            required
                            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                        />
                        <div className="">
                            <p className="text-md w-full whitespace-nowrap">$</p>
                        </div>
                     </div>
                </div>           
            </div>
            {offer && (
                <div className="flex items-center mb-6 mt-6">
                    <div className="">
                        <p className="text-lg font-semibold">Discounted price</p>
                        <div className="flex w-full justify-center items-center space-x-6">
                            <input
                                type="number"
                                id="regularPrice"
                                value={discountPrice}
                                onChange={onChange}
                                min="50"
                                max="400000000"
                                required
                                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                            />
                            <div className="">
                                <p className="text-md w-full whitespace-nowrap">$</p>
                            </div>
                        </div>
                    </div>           
                </div>
            )}

            <p className="text-lg mt-6 font-semibold">Address</p>
            <textarea
            type="text"
            id="address"
            value={address}
            onChange={onChange}
            placeholder="Address"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />

            <div className="mb-6">
                <p className='text-lg font-semibold'>Images</p>
                <p className="text-gray-600">
                    The first image will be the display Image (max 6)
                </p>
                <input
                    type='file'
                    id='images'
                    onChange={onChange}
                    accept=".jpg, .png, .jpeg"
                    multiple
                    required
                    className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
                />
            </div>

            <button
                type="submit"
                className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                Sell Item
            </button>
        </form>
    </main>
  )
}

export default CreateItem