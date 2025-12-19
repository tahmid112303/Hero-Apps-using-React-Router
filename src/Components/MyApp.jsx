import React from 'react';

const MyApp = ({data}) => {
    return (
        <div className='w-72 p-6 bg-white rounded-xl'>
            <div className='flex justify-center items-center'>
                 <div className='h-70 w-70 bg-cover bg-center rounded-xl' style={{backgroundImage: `url(${data.photo})`,height: "250px", width: "250px"}}></div>
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