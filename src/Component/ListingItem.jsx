import React from 'react'
import { Link } from 'react-router-dom';
// import Moment from 'react-moment';
import { MdLocationPin, MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";




function ListingItem ({listing, id, onDelete, onEdit}) {
  return (
    <li className='relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]'>
      <Link className='contents' to={`category/${listing.type}/${id}`}>
        <img
          className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
          loading="lazy"
          src={listing.imgUrls[0]}
        />
        
        {/* <Moment>
          {listing.timestamp?.toDate()}
        </Moment>  */}
        <div className='w-full p-[10px]'>
          <div className='flex items-center space-x-1'>
            <MdLocationPin className='h-4 w-4 text-green-600' />
            <p>{listing.address}</p>
          </div>
          <p className='font font-semibold m-0 truncate'>
            {listing.name}
          </p>
          <p className="text-[#457b9d] mt-2 font-semibold">
            $
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} Baths`
                  : "1 Bath"}
              </p>
            </div>
          </div>
        </div>
      </Link>
      
      {onDelete && 
        <BsTrash 
          className='absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-500'
          onClick={()=>onDelete(listing.id)}
        />
      }

      {onEdit && 
        <MdEdit 
          className='absolute bottom-2 right-7 h-[14px] cursor-pointer text-black-500'
          onClick={()=>onDelete(listing.id)}
        />
      }
    </li>
  )
}

export default ListingItem