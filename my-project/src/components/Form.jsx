import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Form() {
  const navigate = useNavigate();
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [pincode,setPincode]=useState('');
console.log(firstName,lastName,pincode);
  return (
   <div>
       <div className="w-full font-roboto">
  <form className=" px-8 pt-12 pb-8 mb-4">
    <div className="mb-4">
      <label  className="block text-[#545454] text-md  font-bold mb-2">
        First Name
      </label>
      <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="shadow appearance-none border rounded  w-full py-4 px-3  text-black opacity-30 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-[#545454] text-md font-bold mb-2 font-roboto" >
        Last Name
      </label>
      <input value={lastName} onChange={(e)=>setLastName(e.target.value)} className="shadow appearance-none border rounded w-full py-4 font-roboto px-3 text-black opacity-30 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-[#545454] text-md font-roboto  font-bold mb-2" >
        Pincode
      </label>
      <input value={pincode} onChange={(e)=>setPincode(e.target.value)} className="shadow appearance-none border rounded w-full py-4 px-3 text-black opacity-30 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="pincode" type="text" placeholder="Pincode"/>
    </div>
    <div className="mb-4">
      <button onClick={()=>navigate('/userdata')} className=" w-full text-lg bg-[#332272] text-white font-bold p-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Show Statstics
      </button>
    </div>
    <div className="mb-6">
      <button onClick={()=>{
         setFirstName('');
         setLastName('');
         setPincode('');
      }} className=" w-full text-lg  bg-[#FF3838] text-white font-bold p-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Reset Form
      </button>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
.
  </p>
</div>

   </div>

  )
}

export default Form