import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router';
import logo from '../assets/git-logo.png'
import heroLogo from '../assets/logo.png'

const NavBar = () => {
      const visitGitHub=()=>{
        window.open("https://github.com/tahmid112303","_blank")
      };

    return (
        <div className='w-full h-19.5 bg-white flex justify-center'>
            <div className="navbar flex justify-around">
                   <div className="flex gap-1.75 items-center ">
                      <img className='h-10 w-10' src={heroLogo} alt="" />
                      <span className='font-bold'>HERO.IO</span>
                   </div>

                   <div id='nav' className='flex gap-8 font-semibold max-sm:flex-col'>
                      <NavLink to={"/"}>Home</NavLink>
                      <NavLink to={"apps"}>Apps</NavLink>
                   </div>

                   <div>
                   <button onClick={visitGitHub} className="btn btn-primary w-36.25 h-11.25">
                        <span><img className='h-5 w-5 bg-white rounded-[50%]' 
                        src={logo} alt="" /></span>
                        <span className='font-bold'>Contribute</span>
                   </button>
                   </div>
            </div>
        </div>
    );
};

export default NavBar;