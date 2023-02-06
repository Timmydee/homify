import React, { useState } from 'react'

const CreateList = () => {
  const [formData, setFormDta] = useState({
    buttonProp: "rent",
    name:"",
    bathrooms: 1,
    bedrooms: 1,
    parking: "true",
    furnished: "true",
    address: "",
    description:"",
    offer:"",
    regular:"",
    discount:"",
  })

  const {buttonProp,name,bathrooms,bedrooms, parking, furnished, address,description,offer,discount,regular} = formData;

  function onChange(){

  }

  return (
    <div className='max-w-md px-2 mx-auto'>
      <h1 className='text-center uppercase text-bold text-3xl mt-3'>Create Listing</h1>

      <form classNam='flex w-full justify-center items-center'>
        <p className="text-lg mt-6 font-semibold text-center">Sell /Rent</p>
          <div className='flex'>
          <button
            type='button'
            id="buttonProp"
            value="sell"
            className={` w-full font-medium text-sm uppercase shadow-sm rounded hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out py-3 px-9 border-2  ${buttonProp === 'rent' ? 'bg-white':'bg-slate-400'}`}
          >
            sell
          </button>

          <button
            type='button'
            id="buttonProp"
            value="rent"
            className={`w-full ml-3 font-medium text-sm uppercase shadow-sm rounded hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-2 px-9 py-2 ${buttonProp === 'sell' ? 'bg-white':'bg-slate-400'}`}
          >
            rent
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Name</p>
        <input 
          type="text"
          id='name'
          value={name}
          placeholder="name"
          className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'
        />

        <div className='flex space-x-6 justify-start mb-6'>
          <div>
            <p className="text-lg font-semibold">Bedroom</p>
            <input 
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min="1"
              max="50"
              required

              className='px-4 py-2 rounded text-sm font-medium transition ease-in-out duration-150 focus:text-gray-700 focus:bg-white focus:border-slate-600  '
            />
          </div>

          <div>
            <p className="text-lg font-semibold text-center">Bathroom</p>
            <input 
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min="1"
              max="50"
              required

              className='px-4 py-2 rounded text-sm font-medium transition ease-in-out duration-150 focus:text-gray-700 focus:bg-white focus:border-slate-600  '
            />
          </div>
        </div>

        <div >
       
          <p className='font-semibold text-lg '>Parking slot</p>
          <div className='flex w-full space-x-6'>
            <button
              type='button'
              id='parking'
              value={false}
              onChange={onChange}
              className={`w-full text-sm font-medium border-gray-300 py-3 border-2 shadow-sm hover:shadow-lg active:shadow-lg uppercase transition duration-150 ease-out 
                ${parking ? "bg-white":"bg-slate-600"}`}
            >
              Yes
            </button>
          
            <button
              type='button'
              id='parking'
              value={true}
              onChange={onChange}
              className={`w-full text-sm font-medium border-2 border-gray-300 py-3 shadow-sm hover:shadow-lg active:shadow-lg uppercase transition duration-150 ease-out
                ${!parking ? "bg-white":"bg-slate-600"}`}
            >
              No
            </button>            
          </div>
        </div>

        {/* Rent/sell */}
        <div >
       
          <p className='font-semibold text-lg mt-6'>Furnished</p>
          <div className='flex w-full space-x-6'>
            <button
              type='button'
              id='furnished'
              value={false}
              onChange={onChange}
              className={`w-full text-sm font-medium border-gray-300 py-3 border-2 shadow-sm hover:shadow-lg active:shadow-lg uppercase transition duration-150 ease-out
                ${!furnished ? "bg-white":"bg-slate-600"}`}
            >
              Yes
            </button>
          
            <button
              type='button'
              id='furnished'
              value={true}
              onChange={onChange}
              className={`w-full text-sm font-medium border-2 border-gray-300 py-3 shadow-sm hover:shadow-lg active:shadow-lg uppercase transition duration-150 ease-out
               ${furnished ? "bg-white":"bg-slate-600"}`}
            >
            No
            </button>            
          </div>
        </div>

        <p className="text-lg mt-6 font-semibold">Address</p>
        <input 
          type="text"
          id='address'
          value={address}
          placeholder="address"
          className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'
        />

        {/* Description */}
        <p className="text-lg  font-semibold">Description</p>
        <textarea 
          type="text"
          id='description'
          value={description}
          placeholder="Description"
          className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'
        />

        {/* offer */}
        <p className='font-semibold text-lg '>Offer</p>
        <div className='flex w-full space-x-6'>
          <button
            type='button'
            id='offer'
            value={false}
            onChange={onChange}
            className={`w-full text-sm font-medium border-gray-300 py-3 border-2 shadow-sm hover:shadow-lg active:shadow-lg uppercase transition duration-150 ease-out
              ${!offer ? "bg-white":"bg-slate-600"}`}
          >
            Yes
          </button>
        
          <button
            type='button'
            id='offer'
            value={true}
            onChange={onChange}
            className={`w-full text-sm font-medium border-2 border-gray-300 py-3 shadow-sm hover:shadow-lg active:shadow-lg uppercase transition duration-150 ease-out
              ${offer ? "bg-white":"bg-slate-600"}`}
          >
          No
          </button>            
        </div>

        {/* regular price */}
        <p className="text-lg font-semibold mt-6">Regular Price</p>
        <div className='flex space-x-3'>
          <input 
            type="number"
            id="regular"
            value={regular}
            onChange={onChange}
            min="1"
            max="50"
            required

            className='px-4 py-2 rounded text-sm font-medium transition ease-in-out duration-150 focus:text-gray-700 focus:bg-white focus:border-slate-600  '
          />
          {buttonProp == "rent" && 
            <div>
              <div className='flex h-full justify-center items-center'>
                <p>$/Month</p>
              </div>
            </div>
          }
        </div>

        {/* Discount */}
        <p className="text-lg font-semibold mt-6">Discount</p>
        <div className='flex space-x-3'>
          <input 
            type="number"
            id="discount"
            value={discount}
            onChange={onChange}
            min="1"
            max="50"
            required

            className='px-4 py-2 rounded text-sm font-medium transition ease-in-out duration-150 focus:text-gray-700 focus:bg-white focus:border-slate-600  '
          />
          {buttonProp == "sell" && 
            <div>
              <div className='flex h-full justify-center items-center'>
                <p>$/Month</p>
              </div>
            </div>
          }
        </div>

        {/* image */}
        <div className='mb-6 mt-6'>
          <p className='text-lg font-semibold'>Images</p>
          <p className='text-sm text-gray-500'>The first image will be the cover(max 6)</p>

          <input
            type='file'
            id='images'
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className='w-full px-3 py-1.5 focus:bg-white focus:border-slate-600 text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out'
          />
        </div>

        {/* button */}
        <button
          type='submit'
          className='w-full mb-6 py-3 px-7 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-sm hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out'
        >
          Create a listing
        </button>
      </form>

    </div>
  )
}

export default CreateList