import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Jeff Hogg' }: Props) => (
  <div className={styles.bgContainer}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="A Portfolio Website for displaying applications I have built"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jeffehogg.com/" />
      <meta
        property="og:image"
        content="https://jeffehogg.com/images/portfolio-ss.png"
      />
    </Head>
    <Navbar />
    {children}
  </div>
);

export default Layout;
