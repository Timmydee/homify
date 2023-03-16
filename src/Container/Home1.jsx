import React from 'react'
import home1 from '../assets/Bestcrib.webp'

const Home1 = () => {
  return (
    <div className='bg-white h-[100%] max-w-1xl m-auto'>
      {/* <div className='md:flex-col p-5 items-center flex-col'> */}
      <div className='sm:grid sm:grid-cols-1 md:grid-cols-2 items-center p-5'>
        <div className='pt-12 pb-12'>
          <h1 className='font-bold font-serif text-2xl text-center md:text-start md:text-4xl text-black'>Homeownership, simplified</h1>
          <p className='text-1xl md:text-1.5xl font-serif md:w-[60%] text-black font-sm mt-5 text-center md:text-start'>BestCrib is the complete rental solution for landlords and tenants - list a home, rent a space, help tenants through out the process till they are settled in</p>
          <div className='flex justify-center md:justify-start space-x-4'>
            <button className='bg-red-600 py-3 px-4 text-white mt-7 rounded'>Rent an Apartment</button>
            {/* <button className='bg-red-600 py-3 px-4 text-white mt-7 rounded '>Rent an Apartment</button> */}
          </div>
        </div>
        <div>
          <img src={home1} className='w-full' />
        </div>
      </div>
    </div>
    // <div className='bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-[60vh]' >
    //   <div className=''>
    //     <div className='p-24 md:p-30'>
    //         <h1 className='font-bold text-2xl text-center md:text-5xl text-white'>Homeownership, simplified</h1>
    //         <p className='text-2xl md:text-2xl w-[60%] text-white font-sm m-auto mt-5 text-center'>Spleet is the complete rental solution for landlords and tenants - list a home, rent a space, take a rental loan, verify tenants and automatically collect rent with our rental management tools</p>
    //     </div>
    //   </div>  
    // </div>
    
    // <div>
    //     <div className='h-[100vh]'>
    //         <img src={home1} className='w-full' alt='d' /> 
    //     </div>
    //     <div className='absolute '>
    //         <h1>The most affordable places to live in Lagos</h1>
    //     </div>
    // </div>
  )
}

export default Home1