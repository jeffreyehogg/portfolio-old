import React from 'react';
import Head from 'next/head';
import AboutMe from '../components/AboutMe';

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AboutMe />
      </main>
    </div>
  );
};

export default About;
