import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/UserInfo/userSlice";
const UserData = () => {
  const user = useSelector((state) => state.users);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [stateName, setStateName] = useState('');
  const [districtName, setDistrictName] = useState('');
  const [pincode, setPincode] = useState(user[0].pincode);
  const [currentPage,setcurrentPage]=useState(1);
  const recoredPerPage=10;
  const indexOfLastRecord=currentPage*recoredPerPage;
  const indexOfFirstRecord=indexOfLastRecord-recoredPerPage;
  const currentRecords=data.slice(indexOfFirstRecord,indexOfLastRecord);
  const npages=Math.ceil(data.length/recoredPerPage);
  const pages= Array.from({length:npages},(_,i)=>i+1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref=useRef();
  const prevPage=()=>{  
    if(currentPage===1){
      return;
    }
    setcurrentPage((prev)=>prev-1);
  }
  const nextPage=()=>{
    if(currentPage===npages){
      return;
    }
    setcurrentPage((prev)=>prev+1);
  }
  useEffect(() => { 
    const fetchData = async () => { 
      try {
        const response = await fetch(
          `https://api.data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd?api-key=579b464db66ec23bdd00000133a26684a014442840509a1415688dea&format=json&limit=60&filters[pincode]=${user[0].pincode}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.records);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [districtName=='' &&stateName=='' ]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
}, [currentPage]);

  const handleFilter = async () => {
    setStateName(stateName.toUpperCase());
    if (stateName === '' && districtName === '' && pincode === '') {
      toast.error('Please add some filters');
      return;
    }

    if (pincode !== '' && pincode.length !== 6) {
      toast.error('Please add correct pincode');
      return;
    }

    let url = `https://api.data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd?api-key=579b464db66ec23bdd00000133a26684a014442840509a1415688dea&format=json`;

    const filters = [];
    if (stateName !== '') {
      filters.push(`filters[statename]=${stateName}`);
    }
    if (districtName !== '') {
      filters.push(`filters[district]=${districtName}`);
    }
    if (pincode !== '') {
      filters.push(`filters[pincode]=${pincode}`);
    }

    if (filters.length > 0) {
      url += '&' + filters.join('&') +`&limit=60`;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData.records);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 const handleBackButton = () => {
    dispatch(removeUser(user[0].email));
    navigate('/');
  }
  
  return (
    <div className='md:px-8'>
      <div className='flex justify-between font-roboto '>
        <div>
          <div className='flex items-center pt-4 pl-4 text-[#545454]'>
          <h2 className="font-[500] font-roboto md:text-2xl">
  <span style={{ fontSize: '1.5em' }}>
    {user[0].firstName.charAt(0)}
  </span>
  {user[0].firstName.substring(1)}{" "} {user[0].lastName}
</h2>
            <h1 className='text-xl'>,</h1>
            <p className='md:pt-2 pt-1  md:text-sm text-xs'>{user[0].pincode}</p>
          </div>
          <div className='pl-4 text-[#7E7E7E] opacity-70 text-xs md:text-sm'>
           {user[0].email}
          </div>
        </div>
        <div className=' items-end justify-end'>
          <img src="final_logo_logo_1 1.png" alt="Logo" className='md:mb-4 md:mr-4 h-auto' />
        </div>
      </div>
      <div className='p-7 border-b border-gray-500'>
        
        <form className="w-full flex gap-4 flex-wrap">
          <div className="pb-2 w-full md:w-auto">
            <input
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-4 px-3 text-black opacity-30 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="State Name"
            />
          </div>
          <div className="pb-2 w-full md:w-auto">
            <input
              value={districtName}
              onChange={(e) => setDistrictName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-4 font-roboto px-3 text-black opacity-30 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="District Name"
            />
          </div>
          <div className="pb-2 w-full md:w-auto">
            <input
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="shadow appearance-none border rounded w-full py-4 px-3 text-black opacity-30 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="pincode"
              type="text"
              placeholder="Pincode"
            />
          </div>
          <div className="p-1">
            <button
              onClick={handleFilter}
              className="w-full text-lg bg-[#332272] text-white font-bold p-2.5 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Show Statistics
            </button>
          </div>
          <div className="p-1">
            <button
              onClick={() => {
                setStateName('');
                setDistrictName('');
                setPincode('');
              }}
              className="w-full text-lg bg-[#FF3838] text-white font-bold p-2.5 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
      <div className="relative overflow-x-auto p-4 flex gap-4">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-white bg-gray-50">
            <tr className="bg-[#332272] p-2 md:text-lg text-xs font-roboto text-center">
              <th scope="col" className="px-6 py-3 rounded-s-md">Office Name</th>
              <th scope="col" className="px-6 py-3">Pincode</th>
              <th scope="col" className="px-6 py-3">Office Type</th>
              <th scope="col" className="px-6 py-3">State Name</th>
              <th scope="col" className="px-6 py-3">District Name</th>
              <th scope="col" className="px-6 py-3">Longitude</th>
              <th scope="col" className="px-6 py-3 rounded-e-md">Latitude</th>
            </tr>
          </thead>
          <tbody>
            {  currentRecords.length>0 ? currentRecords.map((item, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-[#ECECEC]" : "bg-[#F9F9F9]"} text-black border-b rounded-lg text-center font-roboto`}
              >
                <td className="w-4 p-4 rounded-s-md">{item.officename}</td>
                <td className="px-6 py-4">{item.pincode}</td>
                <td className="px-6 py-4">{item.officetype}</td>
                <td className="px-6 py-4">{item.statename}</td>
                <td className="px-6 py-4">{item.district}</td>
                <td className="px-6 py-4">{item.longitude}</td>
                <td className="px-6 py-4 rounded-e-md">{item.latitude}</td>
              </tr>
            )):<tr><td colSpan="7" className="text-center text-2xl p-8">No Data Found</td></tr>}
          </tbody>
        </table>
      </div>
      <nav aria-label="Page navigation example " className=' text-center'>
  <ul class="inline-flex flex-wrap space-x-px text-sm pt-2  ">
    {pages.length>1 &&<li>
      <button  onClick={prevPage} class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">Previous</button>
    </li>}
    {pages.length>1 && pages.map((page)=>(        
    <li>
      <button  onClick={()=>setcurrentPage(page)}  className={`${currentPage==page?'active font-bold text-blue-400':''} flex items-center justify-center px-3 h-8 leading-tight  bg-white border border-gray-300 rounded-none hover:bg-gray-100 `}>{page}</button>
    </li>
    ))}
    {pages.length>1 && <li>
      <button  onClick={nextPage} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">Next</button>
    </li>}
  </ul>
</nav>
      <div className='flex justify-between p-4 text-white font-bold md:gap-8 gap-4'>
        <button
          onClick={handleBackButton}
          className='bg-[#FF3838] p-4 md:px-[24px] md:text-[16px] rounded-md font-roboto'
        >
          Go Back
        </button>
       
      </div>
    </div>
  );
}

export default UserData;
