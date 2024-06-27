import React from 'react'
import Form from '../components/Form'
function Home() {
  return (
     <div className='flex'>
    <div className='lg:flex h-screen  font-roboto w-full'>
      <div 
        className='lg:w-7/12 h-3/6 lg:h-screen  md:h-3/5 bg-center max-h-screen' 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.38)), url('Covid Background.png')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'cover',
          backgroundRepeat: 'no-repeat'

        }}
      >
        <div className='flex justify-end md:pl-8 md:py-0 py-8  items-center md:pt-8'>
        <div className=' flex justify-end items-center lg:hidden absolute '>
          <img src="final_logo_logo_1 1.png" alt="Logo" className='md:mb-4 md:mr-4' />
        </div>
        </div>
        <h1 className=' md:text-[38px] text-[24px] font-roboto text-white px-4  lg:px-12 md:px-12 font-bold'>Vaccine Tracker</h1>
        <p className=' md:text-xl text-sm font-roboto  md:pl-14 px-4 text-white'>
          Find all the important information and <br />
          all the things related to Covid Virus<br />
          and Vaccine here
        </p>
      </div>
      <div className='lg:w-5/12 flex flex-col '>
        <div className='lg:flex justify-end items-end hidden '>
          <img src="final_logo_logo_1 1.png" alt="Logo" className='mb-4 mr-4' />
        </div>
        <Form className="w-full h-screen" />
      </div>
    </div>
    </div>
  )
}

export default Home