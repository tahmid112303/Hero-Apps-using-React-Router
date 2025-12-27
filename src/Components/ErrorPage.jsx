import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate=useNavigate()
    return (
        <>
        <div className='flex justify-center items-center'>
            <img className='max-w-full ' src="/../assets/error-404.png" 
            alt="Error Page" />
        </div>

        <h1 className='text-center font-bold text-5xl mt-8 mb-6'>Page Not Found</h1>

        <div className='flex justify-center'>
          <button onClick={()=>navigate(-1)} class="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-50 h-12.5 font-bold text-[20px] text-white">Go Back</button>
        </div>
        </>
    );
};

export default ErrorPage;