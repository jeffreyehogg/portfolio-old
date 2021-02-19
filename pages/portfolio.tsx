import React from 'react';
import Head from 'next/head';
import Projects from '../components/Projects';
import styles from '../styles/Projects.module.css';

const Portfolio = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Portfolio</h1>

        <p className={styles.description}>Projects</p>
        <Projects />
      </main>
    </div>
  );
};

export default Portfolio;
