import React from 'react';
import { useNavigate } from 'react-router';

const MyApp = ({data}) => {
    const navigate=useNavigate()
    return (
        <div className='w-72 p-6 bg-white rounded-xl cursor-pointer hover:bg-pink-200 hover:font-bold' onClick={()=>navigate(`/apps/${data.id}`)}>
            <div className='flex justify-center items-center'>
                <img className='w-62.5 h-62.5 rounded-2xl' src={data.photo} alt="" />
            </div>

            <div className='text-[#001931] text-[20px] text-center mt-4'>{data.name}</div>

            <div className='flex justify-between'>
                <div className='flex gap-2 items-center text-[#00D390]'>
                    <span><img className='w-4 h-4' src="/../assets/icon-downloads.png" alt="" /></span>
                    <span>{data.downloads}</span>
                </div>

                <div className='flex gap-2 items-center text-[#FF8811]'>
                   <span><img className='w-4 h-4' src="/../assets/icon-ratings.png" alt="" /></span>
                   <span>{data.rating}</span>
                </div>
                
            </div>
        </div>
    );
};

export default MyApp;