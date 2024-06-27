import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {addUser} from "../redux/UserInfo/userSlice.js"
import { useState } from 'react';
function Form() {
  const navigate = useNavigate();
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [pincode,setPincode]=useState('');
  const [email,setEmail]=useState('');
  const dispatch = useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
      if(firstName!=''&& lastName!='' && pincode!=""&&email!=''){
        dispatch(addUser({firstName,lastName,pincode,email}));
        navigate('/userdata');
      }

  }
  return (
   <div className='h-screen'>
       <div className="w-full  font-roboto">
  <form className=" px-8 pt-4 pb-8">
    <div className="pb-2">
      <label  className="block text-[#545454] text-md  font-bold ">
        First Name
      </label>
      <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="shadow appearance-none border rounded  w-full py-4 px-3  text-black opacity-30 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name"/>
    </div>
    <div className="pb-2">
      <label className="block text-[#545454] text-md font-bold mb-2 font-roboto" >
        Last Name
      </label>
      <input value={lastName} onChange={(e)=>setLastName(e.target.value)} className="shadow appearance-none border rounded w-full py-4 font-roboto px-3 text-black opacity-30 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name"/>
    </div>
    <div className="pb-2">
      <label className="block text-[#545454] text-md font-roboto  font-bold mb-2" >
        Pincode
      </label>
      <input value={pincode} onChange={(e)=>setPincode(e.target.value)} className="shadow appearance-none border rounded w-full py-4 px-3 text-black opacity-30 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="pincode" type="text" placeholder="Pincode"/>
    </div>
    <div className="pb-2">
      <label className="block text-[#545454] text-md font-roboto  font-bold mb-2" >
        Email
      </label>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-4 px-3 text-black opacity-30 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="pincode" type="email" placeholder="mapsense@gmail.com"/>
    </div>
    <div className="pb-2">
      <button onClick={handleSubmit} className=" w-full text-lg bg-[#332272] text-white font-bold p-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Show Statstics
      </button>
    </div>
    <div className=" mb-2">
      <button onClick={()=>{
         setFirstName('');
         setLastName('');
         setPincode('');
      }} className=" w-full text-lg  bg-[#FF3838] text-white font-bold p-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Reset Form
      </button>
    </div>
  </form>
  
</div>

   </div>

  )
}

export default Form