import React from "react";
import { TfiClip, TfiLinkedin, TfiGithub } from "react-icons/tfi";

const Navbar = () => {
    return(
        <nav className='fixed w-full top-0 left-0 z-50 bg-stone-800 border-2 border-solid border-stone-900'>
        <div id="navText" className='p-2 flex justify-between text-xl text-white font-outline-2 font-jost'>
          <div className='flex-1'></div>
          <ul className='flex items-center space-x-12 pr-24'>
            <li className='flex items-center space-x-2'>
              <TfiClip />
              <a href='#' className='hover:underline'>Resume</a>
            </li>
            <li className='flex items-center space-x-2'>
              <TfiLinkedin />
              <a href='#' className='hover:underline'>Linkedin</a>
            </li>
            <li className='flex items-center space-x-2'>
              <TfiGithub />
              <a href='https://github.com/bonzojo/' target="_blank" className='hover:underline'>Github</a>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar