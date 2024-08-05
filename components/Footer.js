import React from "react";

const Footer = () => {
    return(
        <footer className='flex justify-between items-center bg-black'>
        <p className='text-white text-sm p-4'>&copy; John McEwan 2024</p>
        <ul className='flex space-x-4 text-white'>
          <a href="#introHero"><li className='w-4 h-4 border-2 border-solid border-white rounded flex items-center justify-center hover:bg-white'></li></a>
            <a href="#projects"><li className='w-4 h-4 border-2 border-solidborder-white rounded flex items-center justify-center hover:bg-white'></li></a>
            <a href="#techStack"><li className='w-4 h-4 border-2 border-solid border-white rounded flex items-center justify-center hover:bg-white'></li></a>
          </ul>
        <p className='text-white text-xs p-4'><a target="_blank" href="https://icons8.com">Icons courtesy of Icons8</a></p>
      </footer>
    );
};

/* 

Functions but would like it to fill the squares as white when on corresponding section. 
Possible fix is to use classes that set each state to active once clicked and the refresh once the user starts scrolling. 
Possibly change to icons, like hand wave for intro section, spanner for projects section etc.

*/

export default Footer;