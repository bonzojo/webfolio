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
          <nav className='p-2 mb-1 flex justify-between text-xl text-white font-outline-2 bg-slate-700 border border-solid border-slate-500'>
            <ul className='flex items-center'>
              <li><TfiClip /></li>
              <li><a href='#'>Resume</a></li>
              <li></li>
            </ul>
          </nav>

          {/*Typewriter Hero*/}
          <div className='mt-40 p-4 text-center font-jetbrains text-7xl text-white font-outline-4'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('')
                .pauseFor(4000)
                .deleteAll()
                .start();
                
            }}
            options={{
              strings: ['Hello World!','I am John McEwan', 'A Web Developer from the UK'],
              delay: 50,
              deleteSpeed: 30,
              autoStart: true,
              loop: true,
            }}
          />
          </div>

        </section>
      </main>
    </div>
    
  );
}

