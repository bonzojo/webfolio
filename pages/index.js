import Head from 'next/head';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

{/*Import Components */}
import Footer from '@/components/Footer';
import Techstack from '@/components/Techstack';
import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar';

{/* Import Images */}
import john from '../public/images/john.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>John McEwan || Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/sherb.ico" />
      </Head>
    
      <main className="overflow-hidden">

        <Navbar/>

        {/* Background */}
        <div id='introHero'>
          <section className='m-0 p-0 bg-gradient-to-r animated-background from-slate-800 via-sky-900 to-cyan-800 h-screen relative'>
            
            {/* Portrait */}
            <Image src={john} className='absolute mt-20 left-8 w-48 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 border-white border-solid border-2'/>

            {/* Typewriter Hero */}
            <div className='absolute mt-20 p-4 font-jetbrains text-white text-base sm:text-4xl sm:font-outline-4 md:text-5xl lg:text-7xl right-16'>
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
                    'I\'m John',
                    'Web Developer',
                    'Designer',
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
            <p className='absolute font-jetbrains p-24 mt-48 py-16 -left-16 text-white text-base sm:py-24 sm:text-1xl md:py-36 md:mt-48 md:text-2xl lg:mt-56 lg:py-48 lg:text-3xl xl:py-48 xl:text-3xl xl:mt-72 xl:top-24'>
              This is a little bit of blurb introducing myself in a summary that manages to cover a
              few lines, making up a paragraph. Talk about the key points of your skills and your interests.
            </p>
          </section>
        </div>

        <Projects/>

        <Techstack/>
        
        <Footer/>

      </main>
    </div>
  );
}
