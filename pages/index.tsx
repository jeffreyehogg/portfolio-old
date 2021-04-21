import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jeff Hogg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  );
}
