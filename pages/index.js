import Head from 'next/head';
import { TfiClip } from "react-icons/tfi";
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div>
      <Head>
        <title>John McEwan || Developer Profile</title>
        <meta name="description" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <main>
      {/*Section is full screen with animated background*/}        
      <section className='h-screen min-h-screen overflow-hidden w-screen animated-background bg-gradient-to-r from-slate-800 via-sky-900 to-cyan-800'>
          
          {/*Navigation Bar*/}
          <nav className='p-2 mb-1 flex justify-between text-xl text-white font-outline-2 font-jost bg-emerald-800 border-4 border-solid border-emerald-900'>
            <ul className='flex items-center'>
              <li><TfiClip /></li>
              <li><a href='#'>Resume</a></li>
              <li></li>
            </ul>
          </nav>

          {/*Typewriter Hero*/}
          <div className='mt-40 p-4 text-center font-jetbrains text-7xl text-white font-outline-4 '>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('')
                .pauseFor(4000)
                .deleteAll()
                .start();
                
            }}
            options={{
              strings: ['Hello World!','I\'m John McEwan', 'UK based Web Developer'],
              delay: 50,
              deleteSpeed: 30,
              autoStart: true,
              loop: true,
            }}
          />
          </div>

        {/*Animated Blend --- Experiment with values to get a nice aesthetic */}        
        <div className='flex items-center justify-center'>
          
          <div className='absolute w-full max-w-7xl'>
            <div className='absolute -top-32 w-full h-40 bg-slate-300 rounded-full mix-blend-multiply border-4 border-black shadow-2xl'></div>

            {/* Experiment with values & add animation, transform, scale, keyframes etc for a nice effect 
            
            <div className='absolute top-10 -left-12 w-40 h-40 bg-red-300 rounded-lg mix-blend-multiply'></div>
            <div className='absolute top-10 -right-10 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-lg'></div>
            <div className='absolute top-10 left-48 w-80 h-80 bg-blue-300 rounded-3xl mix-blend-multiply '></div>
            
            */}

          </div>
        </div>
        </section>
        <section className='bg-yellow-100'>
        <hr></hr>
        <p className='font-jost'>
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
        </p>
        <p className='font-jetbrains'>
          <br/>
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.
          The quick brown fox jumped over the lazy dog.   
        </p>
        </section>
      </main>
    </div>
    
  );
}

