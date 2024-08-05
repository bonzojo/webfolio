import React from "react";
import Image from "next/image";

{/*Import Icons */}
import htmlIcon from '../public/icons/html96.svg';
import cssIcon from '../public/icons/css96.svg';
import jsIcon from '../public/icons/js96.svg';
import reactIcon from '../public/icons/react80.svg';
import tailwindIcon from '../public/icons/tailwind100.svg';
import phpIcon from '../public/icons/php128.svg';
import mysqlIcon from '../public/icons/mysql96.svg';
import postgresIcon from '../public/icons/postgres96.svg';
import pythonIcon from '../public/icons/python96.svg';

const Techstack = () => {
    return(
        <div id='techStack'>
        <section className='bg-slate-900 h-screen'>

          <div className='text-white font-jetbrains p-24'>
            <p>The quick brown fox jumped over the lazy dog.</p>
            <p>The quick brown fox jumped over the lazy dog.</p>
            <p>The quick brown fox jumped over the lazy dog.</p>
            <p>The quick brown fox jumped over the lazy dog.</p>
          </div>
        
          <div className='text-white p-24'>
            <ul className='flex p-0 justify-between'>
              <a href="https://html.spec.whatwg.org/" target="_blank"><li><Image src={htmlIcon}/></li></a>
              <a href="https://devdocs.io/css/" target="_blank"><li><Image src={cssIcon}/></li></a>
              <a href="https://devdocs.io/javascript/" target="_blank"><li><Image src={jsIcon}/></li></a>
              <a href="https://react.dev/" target="_blank"><li><Image src={reactIcon}/></li></a>
              <a href="https://tailwindcss.com/docs/installation" target="_blank"><li><Image src={tailwindIcon}/></li></a>
              <a href="https://www.php.net/manual/en/" target="_blank"><li><Image src={phpIcon}/></li></a>
              <a href="https://dev.mysql.com/doc/refman/8.4/en/" target="_blank"><li><Image src={mysqlIcon}/></li></a>
              <a href="https://www.postgresql.org/docs/current/" target="_blank"><li><Image src={postgresIcon}/></li></a>
              <a href="https://docs.python.org/3/" target="_blank"><li><Image src={pythonIcon}/></li></a>
            </ul>
          </div>

          <div className='text-white text-center text-sm'>
            <p>Focus is a matter of deciding what things you're not going to do <br/><em> - John Carmack -</em></p>
            <br/>
          </div>  
        </section>
      </div>
    );
};

export default Techstack