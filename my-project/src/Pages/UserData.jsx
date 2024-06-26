import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
const UserData = (props) => {
    const [data, setData] = useState([]);
    const[update,setUpdate]=useState(false)
     const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [update]);
  return (
    <div className='md:px-8'>
       <div className='flex justify-between font-roboto '>
    <div>
        <div className='flex items-center pt-4 pl-4 text-[#545454]'>
        <h2 className='font-[500] font-roboto md:text-2xl '>
  <span style={{ fontSize: '1.5em' }}>R</span>ohit Sharma</h2>
            <h1 className='text-xl'>,</h1>
            <p className='md:pt-2 pt-1  md:text-sm text-xs'>110059</p>
        </div>
        <div className='pl-4 text-[#7E7E7E] opacity-70 text-xs md:text-sm'>Sharma.rohit408@gmail.com</div>
    </div>
    <div className=' items-end justify-end'>
        <img src="final_logo_logo_1 1.png" alt="Logo" className='md:mb-4 md:mr-4   h-auto'/>
    </div>
</div>
      <div className="relative overflow-x-auto p-4">
      <table className="w-full text-sm text-left  rtl:text-right ">
  <thead className="text-xs text-white bg-gray-50  "> 
    <tr className="bg-[#332272] p-2 md:text-lg text-xs font-roboto text-center">
      <th scope="col" className="px-6 py-3 rounded-s-md">
        Pincode
      </th>
      <th scope="col" className="px-6 py-3">
        District Name
      </th>
      <th scope="col" className="px-6 py-3">
        Name
      </th>
      <th scope="col" className="px-6 py-3">
        Fee Type
      </th>
      <th scope="col" className="px-6 py-3">
        State Name
      </th>
      <th scope="col" className="px-6 py-3">
        Vaccine
      </th>
      <th scope="col" className="px-6 py-3">
        Age Limit
      </th>
      <th scope="col" className="px-6 py-3 rounded-e-md ">
        Slots
      </th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => (
      <tr
        key={index}
        className={`${index % 2 === 0 ? "bg-[#ECECEC]" : "bg-[#F9F9F9]"} text-black border-b rounded-lg  text-center  font-roboto`}
      >
        <td className="w-4 p-4 rounded-s-md">{item.pincode}</td>
        <td className="px-6 py-4">{item.districtName}</td>
        <td className="px-6 py-4">{item.name}</td>
        <td className="px-6 py-4">{item.feeType}</td>
        <td className="px-6 py-4">{item.stateName}</td>
        <td className="px-6 py-4">{item.vaccine}</td>
        <td className="px-6 py-4">{item.ageLimit}</td>
        <td className="px-6 py-4 rounded-e-md">{item.slots}</td>
      </tr>
    ))}
  </tbody>
</table>

       </div>
      <div className='flex justify-center p-4 text-white font-bold md:gap-8 gap-4'>
        <button onClick={()=>navigate('/')} className=' bg-[#FF3838] p-4 md:px-[34px]  md:text-[24px] rounded-md font-roboto'>Go Back</button>
        <button onClick={()=>{update?setUpdate(false):setUpdate(true)}} className='bg-[#332272] p-4  md:px-[43px] md:text-[24px] rounded-md font-roboto'>Update Data</button>
      </div>
    </div>
  )
}

export default UserData;
