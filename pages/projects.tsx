import React from 'react';
import Head from 'next/head';
import ProjectList from '../components/ProjectList';

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Projects />
      </main>
    </div>
  );
};

export default ProjectList;
