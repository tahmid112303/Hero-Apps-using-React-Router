import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const AppDetail = () => {
    const [install,setInstall]=useState(false)

    function notify(){
        toast("Successfully Installed!")
    }

    const handleInstall=()=>{
        setInstall(true)
        notify()
    }

    const navigate=useNavigate()

    const appDetail = useLoaderData(); 
    const {photo,name,downloads,rating,totalReviews,developedBy,description}=appDetail
    return (
<div className='my-21 mx-20'>
           <div className='flex gap-10'>
                <div className='w-75 h-75'>
                    <img className='w-75 h-75 rounded-2xl' src={photo} alt="" />
                </div>

                <div className='flex flex-col '>
                    <div className='flex flex-col'>
                       <span className='text-[32px] font-bold'>{name}</span>
                       <span className='text-[20px]'>Developed by <span className='text-[#632EE3]'>{developedBy}</span></span>
                    </div>

                    <div className='flex gap-6 mt-10'>
                        <div className='w-37.5 h-30 flex flex-col gap-2 justify-center'>
                        <img className='h-10 w-10' src="/assets/icon-downloads.png" alt="" />
                            <h1>Downloads</h1>
                            <h1 className='text-[#001931] font-extrabold
                             text-[40px]'>{downloads}</h1>
                        </div>

                        <div className='w-37.5 h-30 flex flex-col gap-2 justify-center'>
                        <img className='h-10 w-10' src="/assets/icon-ratings.png" alt="" />
                            <h1>Average Ratings</h1>
                            <h1 className='text-[#001931] font-extrabold
                             text-[40px]'>{rating}</h1>
                        </div>

                        <div className='w-37.5 h-30 flex flex-col gap-2 justify-center'>
                        <img className='h-10 w-10' src="/assets/icon-review.png" alt="" />
                            <h1>Total Reviews</h1>
                            <h1 className='text-[#001931] font-extrabold
                             text-[40px]'>{totalReviews}</h1>
                        </div>
                    </div>
                    <button onClick={handleInstall} class="btn w-60 h-12.5 text-white bg-[#00D390] rounded-xl font-semibold text-[20px] mt-4">{install ? "Installed" : "Install Now"}</button>
                </div>
           </div>

           <h1 className='font-semibold text-2xl mb-6 mt-6'>Description</h1>
           <p className='mb-6 text-[#627382 text-[20px]]'>{description}</p>

           <div className='flex justify-center items-center'><button onClick={()=>navigate(-1)} class="btn btn-primary w-50 h-12.5 font-bold text-[20px]">Go Back</button></div>

        </div>
    );
};

export default AppDetail;
