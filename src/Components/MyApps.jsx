import React from 'react';
import { useLoaderData } from 'react-router';
import MyApp from './MyApp';

const MyApps = () => {
    const appData=useLoaderData()
    
    return (
        <div>
            <div className='mt-10 mb-12 flex flex-col items-center justify-center gap-5'>
                <p className='font-bold text-5xl text-[#001931]'>Our All Applications</p>
                <p className='text-[#627382] text-[20px] font-bold'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='grid grid-cols-4 gap-8 mx-auto w-fit'>
                {appData.map(data=><MyApp data={data} 
                key={data.id}></MyApp>)}
            </div>
            
        </div>
    );
};

export default MyApps;