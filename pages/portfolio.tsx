import React from 'react';
import Head from 'next/head';
import Projects from '../components/Projects';

const Portfolio = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Projects />
      </main>
    </div>
  );
};

export default Portfolio;
