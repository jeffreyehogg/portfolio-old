import React from 'react';
import Head from 'next/head';
import Profile from '../components/Profile';

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Profile />
      </main>
    </div>
  );
};

export default About;
