import React from "react";

const Projects = () => {
    return(
        <div id='projects'>
        <section className='bg-slate-700 h-screen'>
          <h3 className='py-16 text-center font-jetbrains text-6xl text-white'>Projects</h3>
          <div className='p-24 inline-block items-center lg:flex justify-between'>
            <div className='mt-8 h-72 w-72 bg-black'></div>
            <div className='mt-8 h-72 w-72 bg-black'></div>
            <div className='mt-8 h-72 w-72 bg-black'></div>
          </div>
        </section>
      </div>
    );
};

export default Projects