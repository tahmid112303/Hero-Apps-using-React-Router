import React from 'react';

const TrendApp = ({data}) => {
    return (
        <div className='w-70 p-6 bg-white rounded-xl'>
            <div className='flex justify-center items-center'>
                 <div className='h-62.5 w-62.5 bg-cover bg-center rounded-xl' style={{backgroundImage: `url(${data.photo})`}}></div>
            </div>

            <div className='text-[#001931] text-[20px] text-center'>{data.name}</div>

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

export default TrendApp;