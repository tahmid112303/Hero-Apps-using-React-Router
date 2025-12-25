import React from 'react';
import { useNavigate } from 'react-router';


const TrendApp = ({data}) => {
    const navigate=useNavigate()
    return (
        <div className='w-70 p-6 bg-white rounded-xl cursor-pointer hover:bg-pink-200 hover:font-bold' onClick={()=>navigate(`/home/${data.id}`)}>
            <div className='flex justify-center items-center'>
                 <div className='h-62.5 w-62.5 bg-cover bg-center rounded-xl' style={{backgroundImage: `url(${data.photo})`}}></div>
            </div>

            <div className='text-[#001931] text-[20px] text-center mt-4'>{data.name}</div>

            <div className='flex justify-between'>
                <div className='flex gap-2 items-center text-[#00D390]'>
                    <span><img className='w-4 h-4' src="/../assets/icon-downloads.png" alt="" /></span>
                    <span>{data.downloads}</span>
                </div>

                <div className='flex gap-2 items-center text-[#FF8111]'>
                   <span><img className='w-4 h-4' src="/../assets/icon-ratings.png" alt="" /></span>
                   <span>{data.rating}</span>
                </div>
                
            </div>
        </div>
    );
};

export default TrendApp;