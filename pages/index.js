import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>John McEwan || Developer Profile</title>
        <meta name="description" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main>
        
        <section className='h-screen overflow-hidden w-screen animated-background bg-gradient-to-r from-slate-800 via-sky-900 to-cyan-800'>
          
            <p className='font-jetbrains text-7xl text-white font-outline-4'>
            Hello World! Why does Javascript want to make me cry? All I want is a pretty background.
            </p>

        </section>
      </main>
    </div>
    
  );
}

