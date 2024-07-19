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
        <h1 className="font-jost">
          Hi I am inconsolata. The quick brown fox jumped over the lazy dog!
        </h1>
        <h2 className="font-jetbrains">
          A happy developer is a good developer!
        </h2>
      </main>
    </div>
  );
}
