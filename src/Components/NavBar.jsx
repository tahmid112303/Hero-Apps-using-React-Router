import { Github } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
      const visitGitHub=()=>{
        window.open("https://github.com/tahmid112303","_blank")
      };

    return (
        <div className='w-full h-19.5 bg-white flex justify-center'>
            <div className="navbar flex justify-around">
                   <div className="flex gap-1.75 items-center ">
                      <img className='h-10 w-10' src="/../assets/logo.png" alt="" />
                      <span className='font-bold'>HERO.IO</span>
                   </div>

                   <div className='flex gap-8 font-semibold'>
                      <NavLink>Home</NavLink>
                      <NavLink>Apps</NavLink>
                      <NavLink>Installation</NavLink>
                   </div>

                   <div>
                   <button onClick={visitGitHub} className="btn btn-primary w-36.25 h-11.25">
                        <span><Github></Github></span>
                        <span className='font-bold'>Contribute</span>
                   </button>
                   </div>
            </div>
        </div>
    );
};

export default NavBar;