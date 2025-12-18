import React from 'react';

const Home = () => {
    const visitGooglePlay=()=>{
        window.open("https://play.google.com/store/games?hl=en","_blank")
    }

    const visitAppStore=()=>{
        window.open("https://www.apple.com/app-store/","_blank")
    }
    return (
        <div>
            <h1 className='text-7xl text-center font-bold mt-20'>We Build <br /> 
            <span className='text-[#632EE3]'>Productive</span> Apps</h1>

            <p className='mt-4 text-center text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='font-semibold flex justify-center items-center gap-5 mt-10'>
                <div onClick={visitGooglePlay} className='flex gap-3 items-center p-4 border
                 border-[#D2D2D2] w-50 h-14 cursor-pointer rounded-sm'>

                    <span><img className='h-8 w-8' src="/../assets/play.png" alt="" /></span>

                    <span>Google Play</span>
                </div>

                <div onClick={visitAppStore} className='flex gap-3 items-center p-4 border
                 border-[#D2D2D2] w-50 h-14 cursor-pointer rounded-sm'>

                <span><img className='h-8 w-8' src="/../assets/app-store.png" alt="" /></span>

                <span>App Store</span>
                </div>
            </div>

            <div className='mt-10 flex justify-center items-center'>
                <img className='w-120' src="/../assets/hero.png" alt="" />
            </div>

            <div className='w-full h-102.5 bg-linear-to-r from-[#632EE3] to-[#9F62F2] pt-20'>
                <span className='text-white font-bold text-5xl flex justify-center items-center'>
                   Trusted by Millions, Built for You
                </span>

                <div className='text-white mt-10 flex justify-center items-center gap-18'>
                    <div className='flex flex-col items-center'>
                        <span>Total Downloads</span>
                        <span className='font-extrabold text-[64px]'>29.6M</span>
                        <span>21% more than last month</span>
                    </div>

                    <div className='flex flex-col items-center'>
                       <span>Total Reviews</span>
                       <span className='font-extrabold text-[64px]'>906K</span>
                       <span>46% more than last month</span>
                    </div>

                    <div className='flex flex-col items-center'>
                        <span>Active Apps</span>
                        <span className='font-extrabold text-[64px]'>132+</span>
                        <span>31 more will Launch</span>
                    </div>
                </div>
            </div>

            <div className='mt-20 mb-10'>
                <h1 className='font-bold text-5xl text-center'>Trending Apps</h1><br />
                <p className='text-[#627382] text-center font-bold'>Explore All Trending Apps on the Market developed by us</p>
            </div>
        </div>
    );
};

export default Home;