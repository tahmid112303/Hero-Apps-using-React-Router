
import { LinkedinIcon, LucideFacebook, Twitter } from 'lucide-react';
import React from 'react';
import heroLogo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='h-45.75 w-full bg-[#001931] pt-10 mt-5'>
            <div className='flex justify-between mx-15'>
                <div className="flex gap-1.75 items-center">
                    <img className='h-10 w-10' src={heroLogo} alt="" />
                    <span className='font-bold text-white'>HERO.IO</span>
                </div>

                <div>
                    <span className='text-white'>Social Links</span>
                    <div className='flex gap-3'>
                        <Twitter style={{color: "white", cursor: "pointer"}}></Twitter>
                        <LinkedinIcon style={{color: "white", cursor: "pointer"}}></LinkedinIcon>
                        <LucideFacebook style={{color: "white", cursor: "pointer"}}></LucideFacebook>
                    </div>
                </div>
            </div>
            <p className='text-white mt-10 text-center'>Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;