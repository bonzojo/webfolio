import Head from 'next/head';
import Image from 'next/image';
import placeholder from '../public/placeholder-portrait.png';
import Typewriter from 'typewriter-effect';
import { TfiClip } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { TfiGithub } from "react-icons/tfi";


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
        <nav className='fixed w-full top-0 left-0 z-50 bg-emerald-800 border-b-4 border-solid border-emerald-900'>
          <div className='p-2 flex justify-between text-xl text-white font-outline-2 font-jost'>
            <ul className='flex items-center space-x-4'>
              <li><TfiClip /></li>
              <li><a href='#' className='hover:underline'>Resume</a></li>
              <li><TfiLinkedin /></li>
              <li><a href='#' className='hover:underline'>Linkedin</a></li>
              <li><TfiGithub /></li>
              <li><a href='#' className='hover:underline'>Github</a></li>
            </ul>
          </div>
        </nav>

        {/*Background*/}
        <section className='relative m-0 p-0 h-screen w-full min-h-screen bg-gradient-to-r animated-background from-slate-800 via-sky-900 to-cyan-800'>
          
        {/*Portrait */}
        <Image src={placeholder} className='absolute mt-28 p-4 left-4 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3'/>

          {/* Typewriter Hero */}
          <div className='absolute mt-28 p-4 font-jetbrains text-white text-base sm:text-4xl sm:font-outline-4 md:text-5xl lg:text-6xl xl:text-7xl right-16'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('')
                  .pauseFor(4000)
                  .deleteAll()
                  .start();
              }}
              options={{
                strings: ['Hello World!', 'I\'m John McEwan', 'Web Developer', 'Saxophonist', 'Dog Lover'],
                delay: 50,
                deleteSpeed: 30,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </section>

        {/* Main Content */}
        <section>
          <div className='h-screen bg-slate-900 text-white font-jetbrains p-24'>
            <p>The quick brown fox jumped over the lazy dog.</p>
            <p>The quick brown fox jumped over the lazy dog.</p>
            <p>The quick brown fox jumped over the lazy dog.</p>
            <p>The quick brown fox jumped over the lazy dog.</p>
            <p>The quick brown fox jumped over the lazy dog.</p>
          </div>
        </section>
      </main>
    </div>
  );
};
