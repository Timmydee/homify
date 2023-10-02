import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import homifys from '../assets/bestcriblogo.webp'
import {FaBars, FaTimes} from 'react-icons/fa'


export default function  Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  const[toggle, setToggle] = useState(false)
  const [page, setPage] = useState("SignIn")
  //console.log(location.pathname);

  function handleClick() {
    setToggle(!toggle)
  }

  function pathMatch(route){
    if(route === location.pathname){
        return true
    }
  }

  useEffect( () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setPage("Profile")
        } else {
            setPage("SignIn")
        }
    })
  },[auth])


  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center lg:py-4 py-6 md:py-4 px-2 lg:mx-[5rem] mx-6 '>
            <div>
                <img className='h-17 cursor-pointer lg:w-[180px] w-[100px] ' 
                onClick={() => navigate("/")}
                src={homifys} alt="logo"
                />
            </div>

            <div className='hidden sm:flex'>
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
                        ${(pathMatch("/sign-in") || pathMatch("/profile")) && "text-black border-b-red-500"}`}
                        onClick={() => navigate("/profile")}
                    >
                        {page}
                    </li>
                </ul>
            </div>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <div onClick={handleClick} className="relative" >
                    {!toggle ? <FaBars/> : <FaTimes/>}
                </div>

                {toggle &&
                    <div className='absolute bg-white top-16 w-[30%] p-10'>
                        <ul className='flex-col'>
                            <li 
                                className={`py-3 text-sm font-semibold cursor-pointer text-gray-400 border-b-[3px] border-b-transparent
                                ${pathMatch("/") && "text-black border-b-red-500"}`}
                                onClick = { () => {
                                    navigate("/")
                                    setToggle(false)
                                }}
                            >
                                Home
                            </li>

                            <li 
                                className={`py-3 text-sm font-semibold cursor-pointer text-gray-400 border-b-[3px] border-b-transparent
                                ${pathMatch("/offers") && "text-black border-b-red-500"}`}
                                onClick={() => { navigate("/offers"); setToggle(false); } } 
                                
                            >
                                offers
                            </li>

                            <li
                                className={`py-3 text-sm font-semibold cursor-pointer text-gray-400 border-b-[3px] border-b-transparent 
                                ${(pathMatch("/sign-in") || pathMatch("/profile")) && "text-black border-b-red-500"}`}
                                onClick={() => { navigate("/profile"); setToggle(false);}}
                            >
                                {page}
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </header>
    </div>

  )
}
