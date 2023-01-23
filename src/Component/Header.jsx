import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function  Header() {

  const location = useLocation();
  const navigate = useNavigate();
  //console.log(location.pathname);

  function pathMatch(route){
    if(route === location.pathname){
        return true
    }
  }


  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center py-3 px-3 max-w-6xl mx-auto '>
            <div>
                <img className='h-5 cursor-pointer' 
                onClick={() => navigate("/")}
                src ='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='logo-img'/>
            </div>

            <div>
                <ul className='flex space-x-10'>
                    <li 
                        className={`py-3 text-sm font-semibold cursor-pointer text-gray-400 border-b-[3px] border-b-transparent
                        ${pathMatch("/") && "text-black border-b-red-500"}`}
                        onClick={() => navigate("/")}
                     >
                        Home
                    </li>

                    <li 
                        className={`py-3 text-sm font-semibold cursor-pointer text-gray-400 border-b-[3px] border-b-transparent
                        ${pathMatch("/offers") && "text-black border-b-red-500"}`}
                        onClick={() => navigate("/offers")}
                     >
                        offers
                    </li>

                    <li
                        className={`py-3 text-sm font-semibold cursor-pointer text-gray-400 border-b-[3px] border-b-transparent 
                        ${pathMatch("/sign-in") && "text-black border-b-red-500"}`}
                        onClick={() => navigate("/sign-in")}
                    >
                        Sign In
                    </li>
                </ul>
            </div>
        </header>
    </div>

  )
}