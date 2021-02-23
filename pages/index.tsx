import Head from 'next/head';
import Landing from '../components/Landing';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jeff Hogg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing />
      </main>
    </div>
  );
}
