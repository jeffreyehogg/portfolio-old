import React from 'react';
import Head from 'next/head';
import MyResume from '../components/Resume';

const Resume = () => {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MyResume />
      </main>
    </div>
  );
};

export default Resume;
