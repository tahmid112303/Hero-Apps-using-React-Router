import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

const Installation = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const navigate=useNavigate();
    const [visible,setVisible]=useState(true)

    const handleVisible=()=>{
        toast("Uninstalled!")
        setVisible(false)
    }

    if(!id){
        return <>
            <h1 className='mt-40 text-center text-7xl'>Installation Page</h1>

            <div className='flex justify-center'>
            <button onClick={()=>navigate(-1)} className="btn
            bg-linear-to-r from-[#632EE3] to-[#9F62F2]
             text-white font-bold mt-25 mb-20 w-50 h-12 text-[20px]">Go Back</button>
            </div>
            
        </>
      }
    
    return (
        <div>
            <div className='mt-20 flex flex-col gap-4'>
                <h1 className='text-5xl font-bold text-center'>Your Installed Apps</h1>
                <h2 className='text-[#627382] text-center font-extrabold'>Explore All Trending Apps on the Market developed by us</h2>

 <div style={{display: visible ? "" : "none"}} class="flex items-center justify-between bg-base-100 rounded-xl shadow-md px-5 py-4 hover:shadow-lg transition">

  
  <div className="w-14 h-14 rounded-xl bg-gray-300"><img className='w-fit h-fit' src={data.photo} alt="" /></div>

  <div className="flex-1 ml-4">
    <h3 className="font-semibold text-base">
      {data.name}
    </h3>

    <p className="text-sm text-gray-500 mt-1">
      {data.downloads}  ⭐ {data.rating}
    </p>
  </div>

  <button onClick={handleVisible} className="btn btn-success btn-sm">
    Uninstall
  </button>

</div>
    </div>
    </div>
    );
};

export default Installation;