import Head from 'next/head';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { TfiClip } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { TfiGithub } from "react-icons/tfi";

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

{/* Import Images */}
import placeholder from '../public/images/placeholder-portrait.png';
import john from '../public/images/john.jpg';
import indian from '../public/images/indian.jpg';
import resume from '../public/images/resume.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>John McEwan || Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <main>
      {/* Navigation Bar */}
      <nav className='fixed w-full top-0 left-0 z-50 bg-stone-800 border-2 border-solid border-stone-900'>
        <div className='p-2 flex justify-between text-xl text-white font-outline-2 font-jost'>
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
              <a href='#' className='hover:underline'>Github</a>
            </li>
          </ul>
        </div>
      </nav>



      {/*Background*/}
      <section className='relative m-0 p-0 h-screen w-full min-h-screen bg-gradient-to-r animated-background from-slate-800 via-sky-900 to-cyan-800'>
          
      {/*Portrait */}
      <Image src={john} className='absolute mt-20 p-4 left-4 w-48 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3'/>

      {/* Typewriter Hero */}
        <div className='absolute mt-28 p-4 font-jetbrains text-white text-base sm:text-4xl sm:font-outline-4 md:text-5xl lg:text-7xl right-16'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('')
                .pauseFor(4000)
                .deleteAll()
                .start();
            }}
            options={{
              strings: [
                'Hello World!',
                'I\'m John McEwan',
                'Software Developer',
                'Web Designer',
                'Coffee Addict', 
                'Saxophonist', 
                'Dog Lover'
              ],
              delay: 30,
              deleteSpeed: 20,
              autoStart: true,
              loop: true,
            }}
          />
          </div>

        {/* Short Bio */}
        <p className='absolute font-jetbrains p-24 mt-48 py-16 -left-16 text-white text-base sm:py-24 sm:text-1xl md:py-36 md:mt-48 md:text-2xl lg:mt-56 lg:py-48 lg:text-3xl xl:py-48 xl:text-3xl xl:mt-72 xl:top-24'>This is a little bit of blurb introducing myself in a summary that manages to cover a
          few lines, making up a paragraph. Talk about the key points of your skills and your interests.
        </p>
      </section>

      {/* Main Content */}
      <section className='h-screen bg-slate-900'>

        <div className='text-white font-jetbrains p-24'>
          <p>The quick brown fox jumped over the lazy dog.</p>
          <p>The quick brown fox jumped over the lazy dog.</p>
          <p>The quick brown fox jumped over the lazy dog.</p>
          <p>The quick brown fox jumped over the lazy dog.</p>
        </div>

        <div className='text-white p-24'>
          <ul className='flex p-0 justify-between'>
            <li><Image src={htmlIcon}/></li>
            <li><Image src={cssIcon}/></li>
            <li><Image src={jsIcon}/></li>
            <li><Image src={reactIcon}/></li>
            <li><Image src={tailwindIcon}/></li>
            <li><Image src={phpIcon}/></li>
            <li><Image src={mysqlIcon}/></li>
            <li><Image src={postgresIcon}/></li>
            <li><Image src={pythonIcon}/></li>
          </ul>
        </div>

        <div className='text-white text-center text-sm'>
        <p>Focus is a matter of deciding what things you're not going to do <br/><em> - John Carmack -</em></p>
        <br/>
        </div>

      </section>
      <footer className='bg-black'>
      <p className='text-white text-sm p-8'><a target="_blank" href="https://icons8.com">Icons courtesy of Icons8</a></p>
      </footer>
    </main>
    </div>
  );
};

